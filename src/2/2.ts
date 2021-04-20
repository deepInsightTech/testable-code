import * as E from "@effect-ts/core/Either"

export function helloWorld(name: string) {
  return (): E.Either<never, void> => {
    console.log(`Hello World: ${name}`)  // concerete implementation
    return E.right(undefined)
  }
}

const program = helloWorld('Mahi')

console.log(program())
//> { _tag: 'Right', right: undefined }

