import puppeteer from 'puppeteer'
import { fromEvent, zip, race, throwError, timer } from 'rxjs'
import { filter, map, take, flatMap } from 'rxjs/operators'

console.log(puppeteer)

export async function fetchMeeshoLoginCredentials({
  credentials: { username = '', password = '' }
}: {
  credentials: { username: string; password: string }
}): Promise<{ result: { cookies: string; sellerId: number; marketplaceId: string } }> {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  return page
    .goto('https://supplier.meeshosupply.com/login')
    .then(() => page.waitForSelector('.login-input'))
    .then(() => page.$('.login-input'))
    .then(userInput => userInput ? userInput.type(username) : Promise.reject('User Input missing'))
    .then(() => page.$('.login-password'))
    .then(passwordInput => passwordInput ? passwordInput.type(password) : Promise.reject('Password input missing'))
    .then(() => page.click('.login-button'))
    .then(() => {
      const request$ = fromEvent(page, 'request').pipe(
        // @ts-ignore
        map((request: { postData: Function }) => request.postData()),
        filter(val => !!val),
        map((val: string) => {
          try {
            return JSON.parse(val)
          } catch (err) {
            return null
          }
        }),
        filter(val => !!val)
      )

      return race(
        timer(10000).pipe(flatMap(() => throwError('Could not fetch sellerId and marketplaceId'))),
        zip(
          request$.pipe(
            filter((val: { identifier: string }) => !!val.identifier),
            map(({ identifier }: { identifier: string }) => identifier),
            take(1)
          ),
          request$.pipe(
            filter((val: { supplier_id: number }) => !!val.supplier_id),
            map(({ supplier_id }: { supplier_id: number }) => supplier_id),
            take(1)
          )
        )
      ).toPromise()
    })
    // @ts-ignore
    .then(async (val: [string, number]) => {
      await page.goto(`https://supplier.meeshosupply.com/${val[1]}/orders`)
      const cookie = await page.cookies()
      await browser.close()

      return {
        result: {
          marketplaceId: val[0],
          sellerId: val[1],
          cookies: cookie.map(c => `${c.name}=${c.value}`).join('; ')
        }
      }
    })
}

fetchMeeshoLoginCredentials({ credentials: { username: '', password: '' }}).then(console.log)