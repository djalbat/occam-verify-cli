"use strict";

import BracketedCombinator from "../../combinator/bracketed";

import { unifyStatementWithCombinator } from "../../utilities/unification";

function unifyWithBracketedCombinator(statement, assignments, stated, context) {
  let unifiedWithBracketedCombinator;

  const statementString = statement.getString();

  context.trace(`Unifying the '${statementString}' statement with the bracketed combinator...`);

  const bracketedCombinator = BracketedCombinator.fromNothing(),
        combinator = bracketedCombinator, ///
        statementUnifiedWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, context);

  unifiedWithBracketedCombinator = statementUnifiedWithCombinator;

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
    const unifiedWithCombinator = unifyWithCombinator(statement, combinator, assignments, stated, context);

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

function unifyWithCombinator(statement, combinator, assignments, stated, context) {
  let unifiedWithCombinator;

  const statementString = statement.getString(),
        combinatorString = combinator.getString();

  context.trace(`Unifying the '${statementString}' statement with the '${combinatorString}' combinator...`);

  const statementUnifiedWithCombinator = unifyStatementWithCombinator(statement, combinator, assignments, stated, context);

  unifiedWithCombinator = statementUnifiedWithCombinator; ///

  if (unifiedWithCombinator) {
    context.debug(`...unified the '${statementString}' statement with the '${combinatorString}' combinator.`);
  }

  return unifiedWithCombinator;
}
