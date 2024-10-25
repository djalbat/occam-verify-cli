"use strict";

import BracketedCombinator from "../../combinator/bracketed";
import statementWithCombinatorUnifier from "../../unifier/statementWithCombinator";

function unifyWithBracketedCombinator(statement, assignments, stated, context) {
  let unifiedWithBracketedCombinator;

  const statementNode = statement.getNode(),
        statementString = statement.getString(),
        bracketedCombinator = BracketedCombinator.fromNothing(),
        bracketedCombinatorStatementNode = bracketedCombinator.getStatementNode(),
        combinatorStatementNode = bracketedCombinatorStatementNode; ///

  context.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`);

  unifiedWithBracketedCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, context);

  if (unifiedWithBracketedCombinator) {
    context.debug(`...unified the '${statementString}' statement with the bracketed combinator.`);
  }

  return unifiedWithBracketedCombinator;
}

function unifyWithCombinators(statement, assignments, stated, context) {
  let unifiedWithCombinators;

  const combinators = context.getCombinators();

  stated = true;  ///

  assignments = null; ///

  unifiedWithCombinators = combinators.some((combinator) => {
    const unifiedWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, context);

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

function unifyStatementWithCombinator(statement, combinator, assignments, stated, context) {
  let unifiedWithCombinator;

  const statementNode = statement.getNode(),
        statementString = statement.getString(),
        combinatorString = combinator.getString(),
        combinatorStatementNode = combinator.getStatementNode();

  context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

  unifiedWithCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, context);

  if (unifiedWithCombinator) {
    context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
  }

  return unifiedWithCombinator;
}
