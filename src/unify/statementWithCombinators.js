"use strict";

import statementWithCombinatorUnifier from "../unifier/statementWithCombinator";

export default function unifyStatementWithCombinators(statementNode, assignments, stated, localContext) {
  let statementUnifiedWithCombinators;

  const combinators = localContext.getCombinators();

  assignments = null; ///

  statementUnifiedWithCombinators = combinators.some((combinator) => {
    const statementUnifiedWithCombinator = unifyStatementWithCombinator(statementNode, combinator, assignments, stated, localContext);

    if (statementUnifiedWithCombinator) {
      return true;
    }
  });

  return statementUnifiedWithCombinators;
}

function unifyStatementWithCombinator(statementNode, combinator, assignments, stated, localContext) {
  let statementUnifiedWithCombinator;

  const statementString = localContext.nodeAsString(statementNode),
        combinatorString = combinator.getString();

  localContext.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`, statementNode);

  const combinatorStatementNode = combinator.getStatementNode();

  statementUnifiedWithCombinator = statementWithCombinatorUnifier.unify(statementNode, combinatorStatementNode, assignments, stated, localContext);

  if (statementUnifiedWithCombinator) {
    localContext.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`, statementNode);
  }

  return statementUnifiedWithCombinator;
}
