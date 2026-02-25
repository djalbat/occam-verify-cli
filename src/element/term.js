"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { literally } from "../utilities/context";
import { validateTerms } from "../utilities/validation";
import { instantiateTerm } from "../process/instantiate";
import { variablesFromTerm } from "../utilities/equivalence";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

const { filter } = arrayUtilities;

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

  findValidTerm(context) {
    const termNode = this.getTermNode(),
          term = context.findTermByTermNode(termNode),
          validTerm = term; ///

    return validTerm;
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
    let term = null;

    const termString = this.getString();  ///

    context.trace(`Validating the '${termString}' term...`);

    const validTerm = this.findValidTerm(context),
          valid = (validTerm !== null);

    if (valid) {
      const validatesForward = validateForwards();

      if (validatesForward) {
        term = validTerm; ///

        context.debug(`...the '${termString}' term is already valid.`);
      }
    } else {
      const validates = validateTerms.some((validateTerm) => {  ///
        const term = this,  ///
              termValidates = validateTerm(term, context, validateForwards);

        if (termValidates) {
          return true;
        }
      });

      if (validates) {
        term = this;  ///

        context.addTerm(term);

        context.debug(`...validated the '${termString}' term.`);
      }
    }

    return term;
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
    const term = literally((context) => {
      const { string } = json,
            termNode = instantiateTerm(string, context),
            node = termNode,  ///
            type = typeFromJSON(json, context),
            term = new Term(context, string, node, type);

      return term;

    }, context);

    return term;
  }
});
