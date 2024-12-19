"use strict";

import BracketedCombinator from "../../combinator/bracketed";

import { equalityFromStatement,
         judgementFromStatement,
         metavariableFromStatement,
         typeAssertionFromStatement,
         definedAssertionFromStatement,
         containedAssertionFromStatement,
         subproofAssertionFromStatement } from "../../utilities/verification";

function verifyAsMetavariable(statement, assignments, stated, context) {
  let verifiedAsMetavariable = false;

  const metavariable = metavariableFromStatement(statement, context);

  if (metavariable !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a metavariable...`);

    const metavariableVerified = metavariable.verify(context);

    verifiedAsMetavariable = metavariableVerified; ///

    if (verifiedAsMetavariable) {
      context.debug(`...verified the '${statementString}' statement as a metavariable.`);
    }
  }

  return verifiedAsMetavariable;
}

function verifyAsEquality(statement, assignments, stated, context) {
  let verifiedAsEquality = false;

  const equality = equalityFromStatement(statement, context);

  if (equality !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as an equality...`);

    const equalityVerified = equality.verify(assignments, stated, context);

    verifiedAsEquality = equalityVerified; ///

    if (verifiedAsEquality) {
      context.debug(`...verified the '${statementString}' statement as an equality.`);
    }
  }

  return verifiedAsEquality;
}

function verifyAsJudgement(statement, assignments, stated, context) {
  let verifiedAsJudgement = false;

  const judgement = judgementFromStatement(statement, context);

  if (judgement !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a judgement...`);

    const judgementVerified = judgement.verify(assignments, stated, context);

    verifiedAsJudgement = judgementVerified;  ///

    if (verifiedAsJudgement) {
      context.debug(`...verified the '${statementString}' statement as a judgement.`);
    }
  }

  return verifiedAsJudgement;
}

function verifyAsTypeAssertion(statement, assignments, stated, context) {
  let verifiedAsTypeAssertion = false;

  const typeAssertion = typeAssertionFromStatement(statement, context);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a type assertion...`);

    const typeAssertionVerified = typeAssertion.verify(assignments, stated, context);

    verifiedAsTypeAssertion = typeAssertionVerified; ///

    if (verifiedAsTypeAssertion) {
      context.debug(`...verified the '${statementString}' statement as a type assertion.`);
    }
  }

  return verifiedAsTypeAssertion;
}

function verifyAsDefinedAssertion(statement, assignments, stated, context) {
  let verifiedAsDefinedAssertion = false;

  const definedAssertion = definedAssertionFromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a defined assertion...`);

    const definedAssertionVerified = definedAssertion.verify(assignments, stated, context);

    verifiedAsDefinedAssertion = definedAssertionVerified; ///

    if (verifiedAsDefinedAssertion) {
      context.debug(`...verified the '${statementString}' statement as a defined assertion.`);
    }
  }

  return verifiedAsDefinedAssertion;
}

function verifyAsContainedAssertion(statement, assignments, stated, context) {
  let verifiedAsContainedAssertion = false;

  const containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a contained assertion...`);

    const containedAssertionVerified = containedAssertion.verify(assignments, stated, context);

    verifiedAsContainedAssertion = containedAssertionVerified; ///

    if (verifiedAsContainedAssertion) {
      context.debug(`...verified the '${statementString}' statement as a defined assertion.`);
    }
  }

  return verifiedAsContainedAssertion;
}

function verifyAsSubproofAssertion(statement, assignments, stated, context) {
  let verifiedAsSubproofAssertion = false;

  const subproofAssertion = subproofAssertionFromStatement(statement, context);

  if (subproofAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a subproof assertion...`);

    const subproofAssertionVerified = subproofAssertion.verify(assignments, stated, context);

    verifiedAsSubproofAssertion = subproofAssertionVerified; ///

    if (verifiedAsSubproofAssertion) {
      context.debug(`...verified the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return verifiedAsSubproofAssertion;
}

function unifyWithBracketedCombinator(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const bracketedCombinator = BracketedCombinator.fromNothing(),
        unifiedWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, assignments, stated, context);

  return unifiedWithBracketedCombinator;
}

function unifyWithCombinators(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const combinators = context.getCombinators(),
        unifiedWithCombinators = combinators.some((combinator) => {
          const unifiedWithCombinator = combinator.unifyStatement(statement, assignments, stated, context);

          if (unifiedWithCombinator) {
            return true;
          }
        });

  return unifiedWithCombinators;
}

const verifyMixins = [
  verifyAsMetavariable,
  verifyAsEquality,
  verifyAsJudgement,
  verifyAsTypeAssertion,
  verifyAsDefinedAssertion,
  verifyAsContainedAssertion,
  verifyAsSubproofAssertion,
  unifyWithBracketedCombinator,
  unifyWithCombinators
];

export default verifyMixins;
