"use strict";

import elements from "../../elements";

import { equalityFromStatement,
         judgementFromStatement,
         metavariableFromStatement,
         typeAssertionFromStatement,
         definedAssertionFromStatement,
         propertyAssertionFromStatement,
         subproofAssertionFromStatement,
         containedAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../../utilities/statement";

function validateAsMetavariableAndSubstitution(statement, assignments, stated, context) {
  let validatesAsMetavariableAndSubstitution = false;

  const metavariable = metavariableFromStatement(statement, context);

  if (metavariable !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a metavariable and substitution...`);

    const metavariableValidates = metavariable.validate(context);

    if (metavariableValidates) {
      const { TermSubstitution, FrameSubstitution } = elements,
            frameSubstitution = FrameSubstitution.fromStatement(statement, context),
            termSubstitution = TermSubstitution.fromStatement(statement, context),
            substitution = (termSubstitution || frameSubstitution);

      if (substitution !== null) {
        const substitutionValidates = substitution.validate(context);

        if (substitutionValidates) {
          validatesAsMetavariableAndSubstitution = true;
        }
      } else {
        validatesAsMetavariableAndSubstitution = true;
      }
    }

    if (validatesAsMetavariableAndSubstitution) {
      context.debug(`...validated the '${statementString}' statement as a metavariable and substitution.`);
    }
  }

  return validatesAsMetavariableAndSubstitution;
}

function unifyWithBracketedCombinator(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const { BracketedCombinator } = elements,
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

function validateAsEquality(statement, assignments, stated, context) {
  let validatesAsEquality = false;

  const equality = equalityFromStatement(statement, context);

  if (equality !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as an equality...`);

    const equalityValidates = equality.validate(assignments, stated, context);

    validatesAsEquality = equalityValidates; ///

    if (validatesAsEquality) {
      context.debug(`...validated the '${statementString}' statement as an equality.`);
    }
  }

  return validatesAsEquality;
}

function validateAsJudgement(statement, assignments, stated, context) {
  let validatesAsJudgement = false;

  const judgement = judgementFromStatement(statement, context);

  if (judgement !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a judgement...`);

    const judgementValidates = judgement.validate(assignments, stated, context);

    validatesAsJudgement = judgementValidates;  ///

    if (validatesAsJudgement) {
      context.debug(`...validated the '${statementString}' statement as a judgement.`);
    }
  }

  return validatesAsJudgement;
}

function validateAsTypeAssertion(statement, assignments, stated, context) {
  let validatesAsTypeAssertion = false;

  const typeAssertion = typeAssertionFromStatement(statement, context);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a type assertion...`);

    const typeAssertionValidates = typeAssertion.validate(assignments, stated, context);

    validatesAsTypeAssertion = typeAssertionValidates; ///

    if (validatesAsTypeAssertion) {
      const assertion = typeAssertion;  ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a type assertion.`);
    }
  }

  return validatesAsTypeAssertion;
}

function validateAsDefinedAssertion(statement, assignments, stated, context) {
  let validatesAsDefinedAssertion = false;

  const definedAssertion = definedAssertionFromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a defined assertion...`);

    const definedAssertionValidates = definedAssertion.validate(assignments, stated, context);

    validatesAsDefinedAssertion = definedAssertionValidates; ///

    if (validatesAsDefinedAssertion) {
      const assertion = definedAssertion;  ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a defined assertion.`);
    }
  }

  return validatesAsDefinedAssertion;
}

function validateAsPropertyAssertion(statement, assignments, stated, context) {
  let validatesAsPropertyAssertion = false;

  const propertyAssertion = propertyAssertionFromStatement(statement, context);

  if (propertyAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a property assertion...`);

    const propertyAssertionValidates = propertyAssertion.validate(assignments, stated, context);

    validatesAsPropertyAssertion = propertyAssertionValidates; ///

    if (validatesAsPropertyAssertion) {
      const assertion = propertyAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a property assertion.`);
    }
  }

  return validatesAsPropertyAssertion;
}

function validateAsSubproofAssertion(statement, assignments, stated, context) {
  let validatesAsSubproofAssertion = false;

  const subproofAssertion = subproofAssertionFromStatement(statement, context);

  if (subproofAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a subproof assertion...`);

    const subproofAssertionValidates = subproofAssertion.validate(assignments, stated, context);

    validatesAsSubproofAssertion = subproofAssertionValidates; ///

    if (validatesAsSubproofAssertion) {
      const assertion = subproofAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return validatesAsSubproofAssertion;
}

function validateAsContainedAssertion(statement, assignments, stated, context) {
  let validatesAsContainedAssertion = false;

  const containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a contained assertion...`);

    const containedAssertionValidates = containedAssertion.validate(assignments, stated, context);

    validatesAsContainedAssertion = containedAssertionValidates; ///

    if (validatesAsContainedAssertion) {
      const assertion = containedAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a contained assertion.`);
    }
  }

  return validatesAsContainedAssertion;
}

function validateAsSatisfiesAssertion(statement, assignments, stated, context) {
  let validatesAsSatisfiesAssertion = false;

  const satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a satisfies assertion...`);

    const satisfiesAssertionValidates = satisfiesAssertion.validate(assignments, stated, context);

    validatesAsSatisfiesAssertion = satisfiesAssertionValidates; ///

    if (validatesAsSatisfiesAssertion) {
      const assertion = satisfiesAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a satisfies assertion.`);
    }
  }

  return validatesAsSatisfiesAssertion;
}

const validateMixins = [
  validateAsMetavariableAndSubstitution,
  unifyWithBracketedCombinator,
  unifyWithCombinators,
  validateAsEquality,
  validateAsJudgement,
  validateAsTypeAssertion,
  validateAsDefinedAssertion,
  validateAsPropertyAssertion,
  validateAsSubproofAssertion,
  validateAsContainedAssertion,
  validateAsSatisfiesAssertion
];

export default validateMixins;
