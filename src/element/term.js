"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";

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

  isSingular() {
    const node = this.getNode(),
          singular = node.isSingular();

    return singular;
  }

  isProvisional() { return this.type.isProvisional(); }

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

  getVariableIdentifier() {
    const node = this.getNode(),
          variableIdentifier = node.getVariableIdentifier();

    return variableIdentifier;
  }

  compareVariable(variable) {
    let comparesToVaraible = false;

    const singular = this.isSingular();

    if (singular) {
      let variableIdentifier;

      variableIdentifier = this.getVariableIdentifier();

      const varialbeIdentifierA = variableIdentifier; ///

      variableIdentifier = variable.getIdentifier();

      const variableIdnetifierB = variableIdentifier; ///

      if (varialbeIdentifierA === variableIdnetifierB) {
        comparesToVaraible = true;
      }
    }

    return comparesToVaraible;
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

  validate(context, verifyAhead) {
    let validates;

    const termString = this.getString();  ///

    context.trace(`Validating the '${termString}' term...`);

    validates = validateTerms.some((validateTerm) => {  ///
      const term = this, ///
            termValidates = validateTerm(term, context, verifyAhead);

      if (termValidates) {
        return true;
      }
    });

    if (validates) {
      const term = this;  ///

      context.addTerm(term);

      context.debug(`...validated the '${termString}' term.`);
    }

    return validates;
  }

  validateGivenType(type, context) {
    let validatesGivenType = false;

    const typeString = type.getString(),
          termString = this.getString();  ///

    context.trace(`Validating the '${termString}' term given the '${typeString}' type...`);

    const validates = this.validate(context, () => {
            let verifiesAhead;

            const typeEqualToOrSubTypeOfGivenTypeType = this.type.isEqualToOrSubTypeOf(type);

            if (typeEqualToOrSubTypeOfGivenTypeType) {
              verifiesAhead = true;
            }

            return verifiesAhead;
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

