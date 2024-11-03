"use strict";

import BracketedCombinator from "../../combinator/bracketed";

function unifyWithBracketedCombinator(statement, assignments, stated, context) {
  let unifiedWithBracketedCombinator;

  const bracketedCombinator = BracketedCombinator.fromNothing();

  unifiedWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, assignments, stated, context);

  return unifiedWithBracketedCombinator;
}

function unifyWithCombinators(statement, assignments, stated, context) {
  let unifiedWithCombinators;

  const combinators = context.getCombinators();

  unifiedWithCombinators = combinators.some((combinator) => {
    const unifiedWithCombinator = combinator.unifyStatement(statement, assignments, stated, context);

    if (unifiedWithCombinator) {
      return true;
    }
  });

  return unifiedWithCombinators;
}


const unifyMixins = [
  unifyWithBracketedCombinator,
  unifyWithCombinators
];

export default unifyMixins;
