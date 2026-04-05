"use strict";

import elements from "../elements";

import { choose, descend } from "./context";
import { bracketedConstructorFromNothing, bracketedCombinatorFromNothing } from "../utilities/instance";

function validateTermAsVariable(term, context, validateForwards) {
  let termValidatesAsVariable = false;

  const { Variable } = elements;

  let variable;

  variable = Variable.fromTerm(term, context);

  if (variable !== null) {
    const termString = term.getString();

    context.trace(`Validating the '${termString}' term as a variable...`);

    variable = variable.validate(context);

    if (variable !== null) {
      const type = variable.getType(),
            typeString = type.getString();

      context.trace(`Setting the '${termString}' term's type to the '${typeString}' type.`);

      term.setType(type);

      const validatesForwards = validateForwards(term);

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
  let termUnifiesWithConstructors = false;

  const constructors = context.getConstructors();

  constructors.some((constructor) => {
    let termUnifies;

    choose((context) => {
      termUnifies = constructor.unifyTerm(term, context, validateForwards);

      if (termUnifies) {
        context.commit();
      }
    }, context);

    if (termUnifies) {
      termUnifiesWithConstructors = true;

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

function validateStatementAsMetavariable(statement, context) {
  let statementValidatesAsMetavariable = false;

  const { Metavariable } = elements;

  let metavariable;

  metavariable = Metavariable.fromStatement(statement, context);

  if (metavariable !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a metavariable...`);

    const strict = true;  ///

    metavariable = metavariable.validate(strict, context);

    if (metavariable !== null) {

      const { TermSubstitution, FrameSubstitution } = elements;

      let substitution;

      const generalContext = context, ///
            specificContext = context,  ///
            termSubstitution = TermSubstitution.fromStatement(statement, generalContext, specificContext),
            frameSubstitution = FrameSubstitution.fromStatement(statement, generalContext, specificContext);

      substitution = (termSubstitution || frameSubstitution);

      if (substitution === null) {
        statementValidatesAsMetavariable = true;
      } else {
        substitution = substitution.validate(generalContext, specificContext);  ///

        if (substitution !== null) {
          statementValidatesAsMetavariable = true;
        }
      }
    }

    if (statementValidatesAsMetavariable) {
      context.debug(`...validated the '${statementString}' statement as a metavariable.`);
    }
  }

  return statementValidatesAsMetavariable;
}

function unifyStatementWithCombinators(statement, context) {
  let statementUnifiesWithCombinators = false;

  const combinators = context.getCombinators();

  combinators.some((combinator) => {
    let statementUnifies;

    descend((context) => {
      statementUnifies = combinator.unifyStatement(statement, context);
    }, context);

    if (statementUnifies) {
      statementUnifiesWithCombinators = true;

      return true;
    }
  });

  return statementUnifiesWithCombinators;
}

function unifyStatementWithBracketedCombinator(statement, context) {
  let statementUnifiesWithBracketedCombinator;

  const bracketedCombinator = bracketedCombinatorFromNothing();

  statementUnifiesWithBracketedCombinator = bracketedCombinator.unifyStatement(statement, context);

  return statementUnifiesWithBracketedCombinator;
}

function validateStatementAsEquality(statement, context) {
  let statementValidatesAsEquality = false;

  const { Equality } = elements;

  let equality;

  equality = Equality.fromStatement(statement, context);

  if (equality !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as an equality...`);

    equality = equality.validate(context);  ///

    if (equality !== null) {
      statementValidatesAsEquality = true;
    }

    if (statementValidatesAsEquality) {
      context.debug(`...validated the '${statementString}' statement as an equality.`);
    }
  }

  return statementValidatesAsEquality;
}

function validateStatementAsJudgement(statement, context) {
  let validatesStatementAsJudgement = false;

  let judgement;

  const { Judgement } = elements;

  judgement = Judgement.fromStatement(statement, context);

  if (judgement !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a judgement...`);

    judgement = judgement.validate(context);  ///

    if (judgement !== null) {
      validatesStatementAsJudgement = true;
    }

    if (validatesStatementAsJudgement) {
      context.debug(`...validated the '${statementString}' statement as a judgement.`);
    }
  }

  return validatesStatementAsJudgement;
}

function validateStatementAsTypeAssertion(statement, context) {
  let validatesStatementAsTypeAssertion = false;

  const { TypeAssertion } = elements;

  let typeAssertion;

  typeAssertion = TypeAssertion.fromStatement(statement, context);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a type assertion...`);

    typeAssertion = typeAssertion.validate(context);  ///

    if (typeAssertion !== null) {
      validatesStatementAsTypeAssertion = true;
    }

    if (validatesStatementAsTypeAssertion) {
      context.debug(`...validated the '${statementString}' statement as a type assertion.`);
    }
  }

  return validatesStatementAsTypeAssertion;
}

function validateStatementAsDefinedAssertion(statement, context) {
  let validatesStatementAsDefinedAssertion = false;

  const { DefinedAssertion } = elements;

  let definedAssertion;

  definedAssertion = DefinedAssertion.fromStatement(statement, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a defined assertion...`);

    definedAssertion = definedAssertion.validate(context);  ///

    if (definedAssertion !== null) {
      validatesStatementAsDefinedAssertion = true;
    }

    if (validatesStatementAsDefinedAssertion) {
      context.debug(`...validated the '${statementString}' statement as a defined assertion.`);
    }
  }

  return validatesStatementAsDefinedAssertion;
}

function validateStatementAsPropertyAssertion(statement, context) {
  let statementValidatesAsPropertyAssertion = false;

  const { PropertyAssertion } = elements;

  let propertyAssertion;

  propertyAssertion = PropertyAssertion.fromStatement(statement, context);

  if (propertyAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a property assertion...`);

    propertyAssertion = propertyAssertion.validate(context);  ///

    if (propertyAssertion !== null) {
      statementValidatesAsPropertyAssertion = true;
    }

    if (statementValidatesAsPropertyAssertion) {
      context.debug(`...validated the '${statementString}' statement as a property assertion.`);
    }
  }

  return statementValidatesAsPropertyAssertion;
}

function validateStatementAsSubproofAssertion(statement, context) {
  let statementValidatesAsSubproofAssertion = false;

  const { SubproofAssertion } = elements;

  let subproofAssertion;

  subproofAssertion = SubproofAssertion.fromStatement(statement, context);

  if (subproofAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a subproof assertion...`);

    subproofAssertion = subproofAssertion.validate(context);  ///

    if (subproofAssertion !== null) {
      statementValidatesAsSubproofAssertion = true;
    }

    if (statementValidatesAsSubproofAssertion) {
      context.debug(`...validated the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return statementValidatesAsSubproofAssertion;
}

function validateStatementAsContainedAssertion(statement, context) {
  let validatesStatementAsContainedAssertion = false;

  const { ContainedAssertion } = elements;

  let containedAssertion;

  containedAssertion = ContainedAssertion.fromStatement(statement, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a contained assertion...`);

    containedAssertion = containedAssertion.validate(context);  ///

    if (containedAssertion !== null) {
      validatesStatementAsContainedAssertion = true;
    }

    if (validatesStatementAsContainedAssertion) {
      context.debug(`...validated the '${statementString}' statement as a contained assertion.`);
    }
  }

  return validatesStatementAsContainedAssertion;
}

function validateStatementAsSatisfiesAssertion(statement, context) {
  let validatesAStatementsSatisfiesAssertion = false;

  const { SatisfiesAssertion } = elements;

  let satisfiesAssertion;

  satisfiesAssertion = SatisfiesAssertion.fromStatement(statement, context);

  if (satisfiesAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Validating the '${statementString}' statement as a satisfies assertion...`);

    satisfiesAssertion = satisfiesAssertion.validate(context);  ///

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
