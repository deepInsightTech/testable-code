/* CAKE PATTERN */

import * as E from "@effect-ts/core/Either"

type IO<A> = () => A

interface ConsoleService {
  Console: {
    log: (message: string) => IO<E.Either<never, void>>
  }
}

export function helloWorld(name: string) {
  return ({ Console }: ConsoleService) => Console.log(`hello world: ${name}`)
}

const program = helloWorld('Mahi')

const runner = program({
  Console: {
    log: (message) => () => {
      console.log(message)
      return E.right(undefined)
    }
  }
})

console.log(runner())
//> { _tag: 'Right', right: undefined }

