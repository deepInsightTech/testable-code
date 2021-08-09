// progamming to a interface, not a concreate implementation

import * as T from "@effect-ts/core/Effect"
import { pipe } from "@effect-ts/core/Function"
import { tag } from "@effect-ts/core/Has"

interface ConsoleService {
  log: (message: string) => T.Effect<unknown, never, void>
}

const ConsoleService = tag<ConsoleService>()

const log = (message: string) => T.accessServiceM(ConsoleService)((_) => _.log(message))

export function helloWorld(name: string) {
  return log(`hello world: ${name}`)
}

const program = helloWorld('Mahi')

pipe(program, T.provideService(ConsoleService)({
  log: (message) =>
    T.succeedWith(() => {
      console.log(message)
    })
}), T.runPromise)
