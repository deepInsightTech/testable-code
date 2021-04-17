// Composing with generators

import * as T from "@effect-ts/core/Effect"
import { runMain } from "@effect-ts/node/Runtime"
import { pipe } from "@effect-ts/core/Function"
import { tag } from "@effect-ts/core/Has"

interface ConsoleService {
  log: (message: string) => T.Effect<unknown, never, void>
}

const ConsoleService = tag<ConsoleService>()

interface RandomService {
  rand: T.Effect<unknown, never, number>
}

const RandomService = tag<RandomService>()

const log = (message: string) => T.accessServiceM(ConsoleService)((_) => _.log(message))
const rand = T.accessServiceM(RandomService)((_) => _.rand)

export function helloWorld(name: string) {
  return log(`hello world: ${name}`)
}

class BadRandomValue {
  readonly _tag = 'BadRandomValue'
  constructor(readonly n:number) {}
}

const program = T.gen(function* (_) {
  const value = yield* _(rand)

  if (value > 0.5) {
    yield* _(T.fail(new BadRandomValue(value)))
  } else {
    yield *_(log(`got: ${value}`))
  }
})

pipe(
  program,
  T.provideService(ConsoleService)({
    log: (message) =>
      T.effectTotal(() => {
        console.log(message)
      })
  }),
  T.provideService(RandomService)({
    rand: T.effectTotal(() => {
      return Math.random()
    })
  }),
  runMain
)
