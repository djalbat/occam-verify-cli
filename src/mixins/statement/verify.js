"use strict";

import ontology from "../../ontology";

import { equalityFromStatement,
         judgementFromStatement,
         metavariableFromStatement,
         typeAssertionFromStatement,
         definedAssertionFromStatement,
         propertyAssertionFromStatement,
         subproofAssertionFromStatement,
         containedAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../../utilities/context";

function verifyAsMetavariableAndSubstitution(statement, assignments, stated, context) {
  let verifiesAsMetavariableAndSubstitution = false;

  const metavariable = metavariableFromStatement(statement, context);

  if (metavariable !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a metavariable and substitution...`);

    const metavariableVerifies = metavariable.verify(context);

    if (metavariableVerifies) {
      const { TermSubstitution, FrameSubstitution } = ontology,
            substitution = TermSubstitution.fromStatement(statement, context) || FrameSubstitution.fromStatement(statement, context);

      if (substitution !== null) {
        const substitutionVerifies = substitution.verify(context);

        if (substitutionVerifies) {
          verifiesAsMetavariableAndSubstitution = true;
        }
      } else {
        verifiesAsMetavariableAndSubstitution = true;
      }
    }

    if (verifiesAsMetavariableAndSubstitution) {
      context.debug(`...verified the '${statementString}' statement as a metavariable and substitution.`);
    }
  }

  return verifiesAsMetavariableAndSubstitution;
}

function unifyWithBracketedCombinator(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const { BracketedCombinator } = ontology,
        bracketedCombinator = BracketedCombinator.fromNothing(),
        unifiesWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, assignments, stated, context);

  return unifiesWithBracketedCombinator;
}

function unifyWithCombinators(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const combinators = context.getCombinators(),
        unifiesWithCombinators = combinators.some((combinator) => {
          const unifiesWithCombinator = combinator.unifyStatement(statement, assignments, stated, context);

          if (unifiesWithCombinator) {
            return true;
          }
        });

  return unifiesWithCombinators;
}

function verifyAsEquality(statement, assignments, stated, context) {
  let verifiesAsEquality = false;

  const equality = equalityFromStatement(statement, context);

  if (equality !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as an equality...`);

    const equalityVerifies = equality.verify(assignments, stated, context);

    verifiesAsEquality = equalityVerifies; ///

    if (verifiesAsEquality) {
      context.debug(`...verified the '${statementString}' statement as an equality.`);
    }
  }

  return verifiesAsEquality;
}

function verifyAsJudgement(statement, assignments, stated, context) {
  let verifiesAsJudgement = false;

  const judgement = judgementFromStatement(statement, context);

  if (judgement !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a judgement...`);

    const judgementVerifies = judgement.verify(assignments, stated, context);

    verifiesAsJudgement = judgementVerifies;  ///

    if (verifiesAsJudgement) {
      context.debug(`...verified the '${statementString}' statement as a judgement.`);
    }
  }

  return verifiesAsJudgement;
}

function verifyAsTypeAssertion(statement, assignments, stated, context) {
  let verifiesAsTypeAssertion = false;

  const typeAssertion = typeAssertionFromStatement(statement, context);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a type assertion...`);

    const typeAssertionVerifies = typeAssertion.verify(assignments, stated, context);

    verifiesAsTypeAssertion = typeAssertionVerifies; ///

    if (verifiesAsTypeAssertion) {
      const assertion = typeAssertion;  ///

      context.addAssertion(assertion);

      context.debug(`...verified the '${statementString}' statement as a type assertion.`);
    }
  }

  return verifiesAsTypeAssertion;
}

function verifyAsDefinedAssertion(statement, assignments, stated, context) {
  let verifiesAsDefinedAssertion = false;

  const definedAssertion = definedAssertionFromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a defined assertion...`);

    const definedAssertionVerifies = definedAssertion.verify(assignments, stated, context);

    verifiesAsDefinedAssertion = definedAssertionVerifies; ///

    if (verifiesAsDefinedAssertion) {
      const assertion = definedAssertion;  ///

      context.addAssertion(assertion);

      context.debug(`...verified the '${statementString}' statement as a defined assertion.`);
    }
  }

  return verifiesAsDefinedAssertion;
}

function verifyAsPropertyAssertion(statement, assignments, stated, context) {
  let verifiesAsPropertyAssertion = false;

  const propertyAssertion = propertyAssertionFromStatement(statement, context);

  if (propertyAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a property assertion...`);

    const propertyAssertionVerifies = propertyAssertion.verify(assignments, stated, context);

    verifiesAsPropertyAssertion = propertyAssertionVerifies; ///

    if (verifiesAsPropertyAssertion) {
      const assertion = propertyAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...verified the '${statementString}' statement as a property assertion.`);
    }
  }

  return verifiesAsPropertyAssertion;
}

function verifyAsSubproofAssertion(statement, assignments, stated, context) {
  let verifiesAsSubproofAssertion = false;

  const subproofAssertion = subproofAssertionFromStatement(statement, context);

  if (subproofAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a subproof assertion...`);

    const subproofAssertionVerifies = subproofAssertion.verify(assignments, stated, context);

    verifiesAsSubproofAssertion = subproofAssertionVerifies; ///

    if (verifiesAsSubproofAssertion) {
      const assertion = subproofAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...verified the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return verifiesAsSubproofAssertion;
}

function verifyAsContainedAssertion(statement, assignments, stated, context) {
  let verifiesAsContainedAssertion = false;

  const containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a contained assertion...`);

    const containedAssertionVerifies = containedAssertion.verify(assignments, stated, context);

    verifiesAsContainedAssertion = containedAssertionVerifies; ///

    if (verifiesAsContainedAssertion) {
      const assertion = containedAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...verified the '${statementString}' statement as a contained assertion.`);
    }
  }

  return verifiesAsContainedAssertion;
}

function verifyAsSatisfiesAssertion(statement, assignments, stated, context) {
  let verifiesAsSatisfiesAssertion = false;

  const satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a satisfies assertion...`);

    const satisfiesAssertionVerifies = satisfiesAssertion.verify(assignments, stated, context);

    verifiesAsSatisfiesAssertion = satisfiesAssertionVerifies; ///

    if (verifiesAsSatisfiesAssertion) {
      const assertion = satisfiesAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...verified the '${statementString}' statement as a satisfies assertion.`);
    }
  }

  return verifiesAsSatisfiesAssertion;
}

const verifyMixins = [
  verifyAsMetavariableAndSubstitution,
  unifyWithBracketedCombinator,
  unifyWithCombinators,
  verifyAsEquality,
  verifyAsJudgement,
  verifyAsTypeAssertion,
  verifyAsDefinedAssertion,
  verifyAsPropertyAssertion,
  verifyAsSubproofAssertion,
  verifyAsContainedAssertion,
  verifyAsSatisfiesAssertion
];

export default verifyMixins;
