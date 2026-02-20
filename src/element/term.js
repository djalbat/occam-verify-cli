"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { validateTerms } from "../utilities/validation";
import { typeToTypeJSON } from "../utilities/json";

const { filter, compress } = arrayUtilities;

export default define(class Term extends Element {
  constructor(context, string, node, type) {
    super(context, string, node);

    this.type = type;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getTermNode() {
    const node = this.getNode(),
          termNode = node;  ///

    return termNode;
  }

  getVariableIdentifier() {
    const termNode = this.getTermNode(),
          variableIdentifier = termNode.getVariableIdentifier();

    return variableIdentifier;
  }

  matchTermNode(termNode) {
    const termNodeA = termNode; ///

    termNode = this.getTermNode();

    const termNodeB = termNode, ///
          termNodeAAMatchesTermBNodeB = termNodeA.match(termNodeB),
          equalTo = termNodeAAMatchesTermBNodeB; ///

    return equalTo;
  }

  compareVariableIdentifier(variableIdentifier) {
    let comparesToVariableIdentifier = false;

    const singular = this.isSingular();

    if (singular) {
      const variableIdentifierA = variableIdentifier; ///

      variableIdentifier = this.getVariableIdentifier();

      const variableIdentifierB = variableIdentifier;

      comparesToVariableIdentifier = (variableIdentifierA === variableIdentifierB);
    }

    return comparesToVariableIdentifier;
  }

  isValid(context) {
    const termNode = this.getTermNode(),
          termPresent = context.isTermPresentByTermNode(termNode),
          valid = termPresent;  ///

    return valid;
  }

  isEqualTo(term) {
    const termNode = term.getNode(),
          termNodeMatches = this.matchTermNode(termNode),
          equalTo = termNodeMatches;  ///

    return equalTo;
  }

  isGrounded(definedVariables, context) {
    const term  = this, ///
          variables = variablesFromTerm(term, context);

    filter(variables, (variable) => {
      const definedVariablesIncludesVariable = definedVariables.includes(variable);

      if (!definedVariablesIncludesVariable) {
        return true;
      }
    });

    const undefinedVariables = variables, ///
          undefinedVariablesLength = undefinedVariables.length,
          grounded = (undefinedVariablesLength <= 1);

    return grounded;
  }

  isSingular() {
    const termNode = this.getTermNode(),
          singular = termNode.isSingular();

    return singular;
  }

  isProvisional() { return this.type.isProvisional(); }

  isInitiallyGrounded(context) {
    const term  = this, ///
          variables = variablesFromTerm(term, context),
          variablesLength = variables.length,
          initiallyGrounded = (variablesLength === 0);

    return initiallyGrounded;
  }

  isImplicitlyGrounded(definedVariables, context) {
    const grounded = this.isGrounded(definedVariables, context),
          implicitlyGrounded = grounded;  ///

    return implicitlyGrounded;
  }

  compareParameter(parameter) {
    let comparesToParamter = false;

    const singular = this.isSingular();

    if (singular) {
      const parameterIdentifier = parameter.getIdentifier();

      if (parameterIdentifier !== null) {
        const variableIdentifier = this.getVariableIdentifier();

        if (parameterIdentifier === variableIdentifier) {
          comparesToParamter = true;
        }
      }
    }

    return comparesToParamter;
  }

  validate(context, validateForwards) {
    let validates;

    const termString = this.getString();  ///

    context.trace(`Validating the '${termString}' term...`);

    const valid = this.isValid(context);

    if (valid) {
      validates = true;

      context.debug(`...the '${termString}' term is already valid.`);
    } else {
      const term = this;  ///

      validates = validateTerms.some((validateTerm) => {  ///
        const termValidates = validateTerm(term, context, validateForwards);

        if (termValidates) {
          return true;
        }
      });

      if (validates) {
        const term = this;  ///

        context.addTerm(term);

        context.debug(`...validated the '${termString}' term.`);
      }
    }

    return validates;
  }

  validateGivenType(type, context) {
    let validatesGivenType = false;

    const typeString = type.getString(),
          termString = this.getString();  ///

    context.trace(`Validating the '${termString}' term given the '${typeString}' type...`);

    const validates = this.validate(context, () => {
            let validatesForwards;

            const typeEqualToOrSubTypeOfGivenTypeType = this.type.isEqualToOrSubTypeOf(type);

            if (typeEqualToOrSubTypeOfGivenTypeType) {
              validatesForwards = true;
            }

            return validatesForwards;
          });

    if (validates) {
      validatesGivenType = true;
    }

    if (validatesGivenType) {
      context.debug(`...validated the '${termString}' term given the '${typeString}' type.`);
    }

    return validatesGivenType;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          string = this.getString(), ///
          type = typeJSON,  ///
          json = {
            type,
            string
          };

    return json;
  }

  static name = "Term";

  static fromJSON(json, context) {
    ///
  }
});

export function variablesFromTerm(term, context) {
  const termNode = term.getNode(),
        variableNodes = termNode.getVariableNodes(),
        variables = variableNodes.map((variableNode) => {
          const variableIdentifier = variableNode.getVariableIdentifier(),
                variable = context.findVariableByVariableIdentifier(variableIdentifier);

          return variable;
        });

  compress(variables, (variableA, variableB) => {
    const variableAEqualToVariableB = variableA.isEqualTo(variableB);

    if (!variableAEqualToVariableB) {
      return true;
    }
  });

  return variables;
}

