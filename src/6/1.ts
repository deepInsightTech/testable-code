import * as E from "@effect-ts/core/Either"

const ea = E.right('Hello World')
const ea1 = E.left('Error Message')

function errorHandler(value: string) {
    console.log(value)
    return 'Hello World'
}

function successHandler(value: string) {
  console.log(value)
  return 'Beautiful World'
}

const unboxer = E.fold(errorHandler, successHandler)


console.log(unboxer(ea))
console.log('-------')
console.log(unboxer(ea1))

// const runner = E.fold((e) => console.log(e), (a) => console.log(a))

// const runner1 = E.fold((e) => console.log(`We got error ${e}`), console.log)

// runner(ea)
// runner1(ea)

// 
// runner1(errorA)


// function leftRunner(e) {

// }


