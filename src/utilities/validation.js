"use strict";

import elements from "../elements";

import { bracketedConstructorFromNothing, bracketedCombinatorFromNothing } from "../utilities/instance";
import { equalityFromStatement,
         judgementFromStatement,
         typeAssertionFromStatement,
         definedAssertionFromStatement,
         propertyAssertionFromStatement,
         subproofAssertionFromStatement,
         containedAssertionFromStatement,
         satisfiesAssertionFromStatement } from "../utilities/statement";

function validateTermAsVariable(term, context, validateForwards) {
  let termValidatesAsVariable = false;

  const termNode = term.getNode(),
        variableNode = termNode.getVariableNode();

  if (variableNode !== null) {
    const termString = term.getString();

    context.trace(`Validating the '${termString}' term as a variable...`);

    const variableIdentifier = variableNode.getVariableIdentifier(),
          variable = context.findVariableByVariableIdentifier(variableIdentifier);

    if (variable !== null) {
      const type = variable.getType();

      term.setType(type);

      const verifiesForwards = validateForwards();

      if (verifiesForwards) {
        termValidatesAsVariable = true;
      }
    }

    if (termValidatesAsVariable) {
      context.debug(`...validated the '${termString}' term as a variable.`);
    }
  }

  return termValidatesAsVariable;
}

function unifyTermWithConstructors(term, context, validateForwards) {
  let termUnifiesWithConstructors;

  const constructors = context.getConstructors();

  termUnifiesWithConstructors = constructors.some((constructor) => {
    const unifiesWithConstructor = constructor.unifyTerm(term, context, validateForwards);

    if (unifiesWithConstructor) {
      return true;
    }
  });

  return termUnifiesWithConstructors;
}

function unifyTermWithBracketedConstructor(term, context, validateForwards) {
  let termUnifiesWithBracketedConstructor;

  const bracketedConstructor = bracketedConstructorFromNothing();

  termUnifiesWithBracketedConstructor = bracketedConstructor.unifyTerm(term, context, validateForwards);

  return termUnifiesWithBracketedConstructor;
}

function validateStatementAsMetavariable(statement, assignments, stated, context) {
  let statementValidatesAsMetavariableAndSubstitution = false;

  const statementNode = statement.getNode(),
        metavariableNode = statementNode.getMetavariableNode();

  if (metavariableNode !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a metavariable...`);

    const metavariableName = metavariableNode.getMetavariableName(),
          metavariable = context.findMetavariableByMetavariableName(metavariableName);

    if (metavariable !== null) {
      statementValidatesAsMetavariableAndSubstitution = true;

      const { TermSubstitution, FrameSubstitution } = elements,
            frameSubstitution = FrameSubstitution.fromStatement(statement, context),
            termSubstitution = TermSubstitution.fromStatement(statement, context),
            substitution = (termSubstitution || frameSubstitution);

      if (substitution !== null) {
        const substitutionValidates = substitution.validate(context);

        if (!substitutionValidates) {
          statementValidatesAsMetavariableAndSubstitution = false;
        }
      }
    }

    if (statementValidatesAsMetavariableAndSubstitution) {
      context.debug(`...validated the '${statementString}' statement as a metavariable.`);
    }
  }

  return statementValidatesAsMetavariableAndSubstitution;
}

function unifyStatementWithCombinators(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const combinators = context.getCombinators(),
    statementUnifiesWithCombinators = combinators.some((combinator) => {
      const unifiesWithCombinator = combinator.unifyStatement(statement, assignments, stated, context);

      if (unifiesWithCombinator) {
        return true;
      }
    });

  return statementUnifiesWithCombinators;
}

function unifyStatementWithBracketedCombinator(statement, assignments, stated, context) {
  stated = true;  ///

  assignments = null; ///

  const bracketedCombinator = bracketedCombinatorFromNothing(),
        statementUnifiesWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, assignments, stated, context);

  return statementUnifiesWithBracketedCombinator;
}

function validateStatementAsEquality(statement, assignments, stated, context) {
  let statementValidatesAsEquality = false;

  const equality = equalityFromStatement(statement, context);

  if (equality !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as an equality...`);

    const equalityValidates = equality.validate(assignments, stated, context);

    statementValidatesAsEquality = equalityValidates; ///

    if (statementValidatesAsEquality) {
      context.debug(`...validated the '${statementString}' statement as an equality.`);
    }
  }

  return statementValidatesAsEquality;
}

function validateStatementAsJudgement(statement, assignments, stated, context) {
  let validatesStatementAsJudgement = false;

  const judgement = judgementFromStatement(statement, context);

  if (judgement !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a judgement...`);

    const judgementValidates = judgement.validate(assignments, stated, context);

    validatesStatementAsJudgement = judgementValidates;  ///

    if (validatesStatementAsJudgement) {
      context.debug(`...validated the '${statementString}' statement as a judgement.`);
    }
  }

  return validatesStatementAsJudgement;
}

function validateStatementAsTypeAssertion(statement, assignments, stated, context) {
  let validatesStatementAsTypeAssertion = false;

  const typeAssertion = typeAssertionFromStatement(statement, context);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a type assertion...`);

    const typeAssertionValidates = typeAssertion.validate(assignments, stated, context);

    validatesStatementAsTypeAssertion = typeAssertionValidates; ///

    if (validatesStatementAsTypeAssertion) {
      const assertion = typeAssertion;  ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a type assertion.`);
    }
  }

  return validatesStatementAsTypeAssertion;
}

function validateStatementAsDefinedAssertion(statement, assignments, stated, context) {
  let validatesStatementAsDefinedAssertion = false;

  const definedAssertion = definedAssertionFromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a defined assertion...`);

    const definedAssertionValidates = definedAssertion.validate(assignments, stated, context);

    validatesStatementAsDefinedAssertion = definedAssertionValidates; ///

    if (validatesStatementAsDefinedAssertion) {
      const assertion = definedAssertion;  ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a defined assertion.`);
    }
  }

  return validatesStatementAsDefinedAssertion;
}

function validateStatementAsPropertyAssertion(statement, assignments, stated, context) {
  let statementValidatesAsPropertyAssertion = false;

  const propertyAssertion = propertyAssertionFromStatement(statement, context);

  if (propertyAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a property assertion...`);

    const propertyAssertionValidates = propertyAssertion.validate(assignments, stated, context);

    statementValidatesAsPropertyAssertion = propertyAssertionValidates; ///

    if (statementValidatesAsPropertyAssertion) {
      const assertion = propertyAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a property assertion.`);
    }
  }

  return statementValidatesAsPropertyAssertion;
}

function validateStatementAsSubproofAssertion(statement, assignments, stated, context) {
  let statementValidatesAsSubproofAssertion = false;

  const subproofAssertion = subproofAssertionFromStatement(statement, context);

  if (subproofAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a subproof assertion...`);

    const subproofAssertionValidates = subproofAssertion.validate(assignments, stated, context);

    statementValidatesAsSubproofAssertion = subproofAssertionValidates; ///

    if (statementValidatesAsSubproofAssertion) {
      const assertion = subproofAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return statementValidatesAsSubproofAssertion;
}

function validateStatementAsContainedAssertion(statement, assignments, stated, context) {
  let validatesStatementAsContainedAssertion = false;

  const containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a contained assertion...`);

    const containedAssertionValidates = containedAssertion.validate(assignments, stated, context);

    validatesStatementAsContainedAssertion = containedAssertionValidates; ///

    if (validatesStatementAsContainedAssertion) {
      const assertion = containedAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a contained assertion.`);
    }
  }

  return validatesStatementAsContainedAssertion;
}

function validateStatementAsSatisfiesAssertion(statement, assignments, stated, context) {
  let validatesAStatementsSatisfiesAssertion = false;

  const satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a satisfies assertion...`);

    const satisfiesAssertionValidates = satisfiesAssertion.validate(assignments, stated, context);

    validatesAStatementsSatisfiesAssertion = satisfiesAssertionValidates; ///

    if (validatesAStatementsSatisfiesAssertion) {
      const assertion = satisfiesAssertion; ///

      context.addAssertion(assertion);

      context.debug(`...validated the '${statementString}' statement as a satisfies assertion.`);
    }
  }

  return validatesAStatementsSatisfiesAssertion;
}

export const validateTerms = [
  validateTermAsVariable,
  unifyTermWithConstructors,
  unifyTermWithBracketedConstructor
];

export const validateStatements = [
  validateStatementAsMetavariable,
  unifyStatementWithCombinators,
  unifyStatementWithBracketedCombinator,
  validateStatementAsEquality,
  validateStatementAsJudgement,
  validateStatementAsTypeAssertion,
  validateStatementAsDefinedAssertion,
  validateStatementAsPropertyAssertion,
  validateStatementAsSubproofAssertion,
  validateStatementAsContainedAssertion,
  validateStatementAsSatisfiesAssertion
];
