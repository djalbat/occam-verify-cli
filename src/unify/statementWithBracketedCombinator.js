"use strict";

import bracketedCombinator from "../ocmbinator/bracketed";
import statementWithCombinatorUnifier from "../unifier/statementWithCombinator";

export default function unifyStatementWithBracketedCombinator(statementNode, assignments, derived, localContext) {
  let statementUnifiedWithBracketedCombinator;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`, statementNode);

  const bracketedCombinatorStatementNode = bracketedCombinator.getStatementNode();

  statementUnifiedWithBracketedCombinator = statementWithCombinatorUnifier.unify(statementNode, bracketedCombinatorStatementNode, assignments, derived, localContext);

  if (statementUnifiedWithBracketedCombinator) {
    localContext.debug(`...unified the '${statementString}' statement with the bracketed combinator.`, statementNode);
  }

  return statementUnifiedWithBracketedCombinator;
}
