"use strict";

import BracketedCombinator from "../../combinator/bracketed";
import statementWithCombinatorUnifier from "../../unifier/statementWithCombinator";

function unifyWithBracketedCombinator(statement, assignments, stated, localContext) {
  let unifiedWithBracketedCombinator;

  const statementNode = statement.getNode(),
        statementString = statement.getString(),
        bracketedCombinator = BracketedCombinator.fromNothing(),
        bracketedCombinatorStatementNode = bracketedCombinator.getStatementNode(),
        combinatorStatementNode = bracketedCombinatorStatementNode; ///

  localContext.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`);

  unifiedWithBracketedCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, localContext);

  if (unifiedWithBracketedCombinator) {
    localContext.debug(`...unified the '${statementString}' statement with the bracketed combinator.`);
  }

  return unifiedWithBracketedCombinator;
}

function unifyWithCombinators(statement, assignments, stated, localContext) {
  let unifiedWithCombinators;

  const combinators = localContext.getCombinators();

  stated = true;  ///

  assignments = null; ///

  unifiedWithCombinators = combinators.some((combinator) => {
    const unifiedWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, localContext);

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

function unifyStatementWithCombinator(statement, combinator, assignments, stated, localContext) {
  let unifiedWithCombinator;

  const statementNode = statement.getNode(),
        statementString = statement.getString(),
        combinatorString = combinator.getString(),
        combinatorStatementNode = combinator.getStatementNode();

  localContext.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

  unifiedWithCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, localContext);

  if (unifiedWithCombinator) {
    localContext.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
  }

  return unifiedWithCombinator;
}
