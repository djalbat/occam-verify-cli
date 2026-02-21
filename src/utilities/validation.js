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

      const validatesForwards = validateForwards();

      if (validatesForwards) {
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

function validateStatementAsMetavariable(statement, stated, context) {
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
            termSubstitution = TermSubstitution.fromStatement(statement, context);

      let substitution;

      substitution = (termSubstitution || frameSubstitution);

      if (substitution !== null) {
        const generalContext = context, ///
              specificContext = context;  ///

        substitution = substitution.validate(generalContext, specificContext);

        if (substitution === null) {
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

function unifyStatementWithCombinators(statement, stated, context) {
  stated = true;  ///

  const combinators = context.getCombinators(),
        statementUnifiesWithCombinators = combinators.some((combinator) => {
          const unifiesWithCombinator = combinator.unifyStatement(statement, stated, context);

          if (unifiesWithCombinator) {
            return true;
          }
        });

  return statementUnifiesWithCombinators;
}

function unifyStatementWithBracketedCombinator(statement, stated, context) {
  stated = true;  ///

  const bracketedCombinator = bracketedCombinatorFromNothing(),
        statementUnifiesWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, stated, context);

  return statementUnifiesWithBracketedCombinator;
}

function validateStatementAsEquality(statement, stated, context) {
  let statementValidatesAsEquality = false;

  let equality;

  equality = equalityFromStatement(statement, context);

  if (equality !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as an equality...`);

    equality = equality.validate(stated, context);  ///

    if (equality !== null) {
      statementValidatesAsEquality = true;
    }

    if (statementValidatesAsEquality) {
      context.debug(`...validated the '${statementString}' statement as an equality.`);
    }
  }

  return statementValidatesAsEquality;
}

function validateStatementAsJudgement(statement, stated, context) {
  let validatesStatementAsJudgement = false;

  let judgement;

  judgement = judgementFromStatement(statement, context);

  if (judgement !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a judgement...`);

    judgement = judgement.validate(stated, context);  ///

    if (judgement !== null) {
      validatesStatementAsJudgement = true;
    }

    if (validatesStatementAsJudgement) {
      context.debug(`...validated the '${statementString}' statement as a judgement.`);
    }
  }

  return validatesStatementAsJudgement;
}

function validateStatementAsTypeAssertion(statement, stated, context) {
  let validatesStatementAsTypeAssertion = false;

  let typeAssertion;

  typeAssertion = typeAssertionFromStatement(statement, context);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a type assertion...`);

    typeAssertion = typeAssertion.validate(stated, context);  ///

    if (typeAssertion !== null) {
      validatesStatementAsTypeAssertion = true;
    }

    if (validatesStatementAsTypeAssertion) {
      context.debug(`...validated the '${statementString}' statement as a type assertion.`);
    }
  }

  return validatesStatementAsTypeAssertion;
}

function validateStatementAsDefinedAssertion(statement, stated, context) {
  let validatesStatementAsDefinedAssertion = false;

  let definedAssertion;

  definedAssertion = definedAssertionFromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a defined assertion...`);

    definedAssertion = definedAssertion.validate(stated, context);  ///

    if (definedAssertion !== null) {
      validatesStatementAsDefinedAssertion = true;
    }

    if (validatesStatementAsDefinedAssertion) {
      context.debug(`...validated the '${statementString}' statement as a defined assertion.`);
    }
  }

  return validatesStatementAsDefinedAssertion;
}

function validateStatementAsPropertyAssertion(statement, stated, context) {
  let statementValidatesAsPropertyAssertion = false;

  let propertyAssertion;

  propertyAssertion = propertyAssertionFromStatement(statement, context);

  if (propertyAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a property assertion...`);

    propertyAssertion = propertyAssertion.validate(stated, context);  ///

    if (propertyAssertion !== null) {
      statementValidatesAsPropertyAssertion = true;
    }

    if (statementValidatesAsPropertyAssertion) {
      context.debug(`...validated the '${statementString}' statement as a property assertion.`);
    }
  }

  return statementValidatesAsPropertyAssertion;
}

function validateStatementAsSubproofAssertion(statement, stated, context) {
  let statementValidatesAsSubproofAssertion = false;

  let subproofAssertion;

  subproofAssertion = subproofAssertionFromStatement(statement, context);

  if (subproofAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a subproof assertion...`);

    subproofAssertion = subproofAssertion.validate(stated, context);  ///

    if (subproofAssertion !== null) {
      statementValidatesAsSubproofAssertion = true;
    }

    if (statementValidatesAsSubproofAssertion) {
      context.debug(`...validated the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return statementValidatesAsSubproofAssertion;
}

function validateStatementAsContainedAssertion(statement, stated, context) {
  let validatesStatementAsContainedAssertion = false;

  let containedAssertion;

  containedAssertion = containedAssertionFromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a contained assertion...`);

    containedAssertion = containedAssertion.validate(stated, context);  ///

    if (containedAssertion !== null) {
      validatesStatementAsContainedAssertion = true;
    }

    if (validatesStatementAsContainedAssertion) {
      context.debug(`...validated the '${statementString}' statement as a contained assertion.`);
    }
  }

  return validatesStatementAsContainedAssertion;
}

function validateStatementAsSatisfiesAssertion(statement, stated, context) {
  let validatesAStatementsSatisfiesAssertion = false;

  let satisfiesAssertion;

  satisfiesAssertion = satisfiesAssertionFromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a satisfies assertion...`);

    satisfiesAssertion = satisfiesAssertion.validate(stated, context);  ///

    if (satisfiesAssertion !== null) {
      validatesAStatementsSatisfiesAssertion = true;
    }

    if (validatesAStatementsSatisfiesAssertion) {
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
