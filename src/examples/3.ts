// Validation Applicatives

import { pipe } from "@effect-ts/core/Function"

import { makeAssociative } from "@effect-ts/core/Associative"
import * as R from "@effect-ts/core/Dictionary"
import * as E from "@effect-ts/core/Either"

const ValidationApplicative = E.getValidationApplicative(
  makeAssociative<string>((l, r) => `(${l})(${r})`)
)

const traverse = R.forEachF(ValidationApplicative)

const result = pipe(
  { a: 0, b: 1, c: 2 },
  traverse((n) => (n > 1 ? E.left("bad") : E.right("good")))
)

console.log(result)

const result1 = pipe(
  { a: 0, b: 1, c: 2 },
  traverse((n) => (n >= 2 ? E.left("bad") : E.right("good")))
)

console.log(result1)

const result2 = pipe(
  { a: 0, b: 1, c: 2 },
  traverse((n) => (n >= 1 ? E.left("bad") : E.right("good")))
)

console.log(result2)
