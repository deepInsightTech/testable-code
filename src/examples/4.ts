import { pipe } from "@effect-ts/core/Function"

import * as R from "@effect-ts/core/Dictionary"
import * as E from "@effect-ts/core/Either"
import * as X from "@effect-ts/core/XPure"

var a = pipe(
  { a: 0, b: 1, c: 2, d: 3 },
  R.separateF(X.Applicative)((n) => X.succeed(n < 2 ? E.left(n) : E.right(n))),
  X.runIO
)

console.log(a)