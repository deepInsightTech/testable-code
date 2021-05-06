import { pipe } from "@effect-ts/system/Function";
import * as A from "@effect-ts/core/Array"
import * as E from "@effect-ts/core/Either"
import { getCovariantComposition } from "@effect-ts/core/Prelude";


// Create a map function for Array<Either<value>>
const F = getCovariantComposition(A.Covariant, E.Covariant)

const result = pipe(
  [E.right(0), E.right(1), E.right(2)],
  F.map((n) => n + 1)
)

console.log(result) /*
[
  Right { right: 0, _tag: 'Right' },
  Right { right: 1, _tag: 'Right' },
  Right { right: 2, _tag: 'Right' }
]
*/

