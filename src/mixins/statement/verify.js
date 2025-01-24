"use strict";

import dom from "../../dom";

import { equalityFromStatement,
         judgementFromStatement,
         metavariableFromStatement,
         typeAssertionFromStatement,
         definedAssertionFromStatement,
         propertyAssertionFromStatement,
         subproofAssertionFromStatement,
         containedAssertionFromStatement,
         satisfyingAssertionFromStatement } from "../../utilities/context";

function unifyWithBracketedCombinator(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const { BracketedCombinator } = dom,
        bracketedCombinator = BracketedCombinator.fromNothing(),
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

function verifyAsPropertyAssertion(statement, assignments, stated, context) {
  let verifiedAsPropertyAssertion = false;

  const propertyAssertion = propertyAssertionFromStatement(statement, context);

  if (propertyAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a property assertion...`);

    const propertyAssertionVerified = propertyAssertion.verify(assignments, stated, context);

    verifiedAsPropertyAssertion = propertyAssertionVerified; ///

    if (verifiedAsPropertyAssertion) {
      context.debug(`...verified the '${statementString}' statement as a property assertion.`);
    }
  }

  return verifiedAsPropertyAssertion;
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

function verifyAsContainedAssertion(statement, assignments, stated, context) {
  let verifiedAsContainedAssertion = false;

  const containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a contained assertion...`);

    const containedAssertionVerified = containedAssertion.verify(assignments, stated, context);

    verifiedAsContainedAssertion = containedAssertionVerified; ///

    if (verifiedAsContainedAssertion) {
      context.debug(`...verified the '${statementString}' statement as a contained assertion.`);
    }
  }

  return verifiedAsContainedAssertion;
}

function verifyAsSatisfyingAssertion(statement, assignments, stated, context) {
  let verifiedAsSatisfyingAssertion = false;

  const satisfyingAssertion = satisfyingAssertionFromStatement(statement, context);

  if (satisfyingAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a satisfying assertion...`);

    const satisfyingAssertionVerified = satisfyingAssertion.verify(assignments, stated, context);

    verifiedAsSatisfyingAssertion = satisfyingAssertionVerified; ///

    if (verifiedAsSatisfyingAssertion) {
      context.debug(`...verified the '${statementString}' statement as a defined assertion.`);
    }
  }

  return verifiedAsSatisfyingAssertion;
}

const verifyMixins = [
  unifyWithBracketedCombinator,
  unifyWithCombinators,
  verifyAsMetavariable,
  verifyAsEquality,
  verifyAsJudgement,
  verifyAsTypeAssertion,
  verifyAsDefinedAssertion,
  verifyAsPropertyAssertion,
  verifyAsSubproofAssertion,
  verifyAsContainedAssertion,
  verifyAsSatisfyingAssertion
];

export default verifyMixins;
