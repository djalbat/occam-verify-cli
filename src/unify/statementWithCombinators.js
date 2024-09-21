"use strict";

import unifyStatementWithCombinator from "../unify/statementWithCombinator";

export default function unifyStatementWithCombinators(statementNode, assignments, stated, localContext) {
  let statementUnifiedWithCombinators;

  const combinators = localContext.getCombinators();

  assignments = null; ///

  stated = true;  ///

  statementUnifiedWithCombinators = combinators.some((combinator) => {
    const statementUnifiedWithCombinator = unifyStatementWithCombinator(statementNode, combinator, assignments, stated, localContext);

    if (statementUnifiedWithCombinator) {
      return true;
    }
  });

  return statementUnifiedWithCombinators;
}
