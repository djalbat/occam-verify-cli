"use strict";

import bracketedCombinator from "../ocmbinator/bracketed";

import { first } from "../utilities/array";

export function addBracketedCombinator(combinators) {
  let bracketedCombinatorMissing;

  const combinatorsLength = combinators.length;

  if (combinatorsLength === 0) {
    bracketedCombinatorMissing = false;
  } else {
    const firstCombinator = first(combinators),
          firstCombinatorBracketedCombinator = (firstCombinator === bracketedCombinator);

    bracketedCombinatorMissing = !firstCombinatorBracketedCombinator;
  }

  if (bracketedCombinatorMissing) {
    const combinator = bracketedCombinator; ///

    combinators.unshift(combinator);
  }
}
