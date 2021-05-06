import { pipe } from "@effect-ts/system/Function";
import * as R from "@effect-ts/core/Collections/Immutable/Dictionary"
import * as A from "@effect-ts/core/Collections/Immutable/Array"
import * as E from "@effect-ts/core/Either"


// Traverse Each Record with Applicative and when all success give result

const resultSuccessR = pipe(
  { a: 1, b: 2 },
  R.forEachF(E.Applicative)((n) => n ? E.right(n + 1) : E.left('No Value'))
)

console.log(resultSuccessR) // Right { right: { a: 2, b: 3 }, _tag: 'Right' }

const resultFailureR = pipe(
  { a: 1, b: 2 },
  R.forEachF(E.Applicative)((n) => n ? E.right(n + 1) : E.left('No Value'))
)

console.log(resultFailureR) // Left { left: 'No Value', _tag: 'Left' }


// Arrays Applying Applicative for Each value

const resultSuccessA = pipe(
  [1, 2 ],
 A.forEachF(E.Applicative)((n) => n ? E.right(n + 1) : E.left('No Value'))
)

console.log(resultSuccessA) // Right { right: [ 2, 3 ], _tag: 'Right' }

const resultFailureA = pipe(
 [0, 1],
 A.forEachF(E.Applicative)((n) => n ? E.right(n + 1) : E.left('No Value'))
)

console.log(resultFailureA) // Left { left: 'No Value', _tag: 'Left' }
