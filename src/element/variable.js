"use strict";

import Element from "../element";
import elements from "../elements";

import { define } from "../elements";
import { instantiateVariable } from "../process/instantiate";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";

export default define(class Variable extends Element {
  constructor(context, string, node, type, identifier, propertyRelations) {
    super(context, string, node);

    this.type = type;
    this.identifier = identifier;
    this.propertyRelations = propertyRelations;
  }

  getIdentifier() {
    return this.identifier;
  }

  getType() {
    return this.type;
  }

  getPropertyRelations() {
    return this.propertyRelations;
  }

  setType(type) {
    this.type = type;
  }

  getTypeString() { return this.type.getString(); }

  matchParameter(parameter) {
    const parameterName = parameter.getName(),
          parameterNameMatchesIdentifier = (parameterName === this.identifier),
          parameterMatches = parameterNameMatchesIdentifier;  ///

    return parameterMatches;
  }

  matchVariableIdentifier(variableIdentifier) {
    const variableIdentifierMatches = (variableIdentifier === this.identifier);

    return variableIdentifierMatches;
  }

  verify(context) {
    let verifies;

    const variableString = this.string; ///

    context.trace(`Verifying the '${variableString}' variable...`);

    const variableIdentifier = this.identifier,
          variable = context.findVariableByVariableIdentifier(variableIdentifier);

    if (variable !== null) {
      const type = variable.getType();

      this.type = type;

      verifies = true;
    } else {
      context.debug(`The '${variableString}' variable is not present.`);
    }

    if (verifies) {
      context.debug(`...verified the '${variableString}' variable.`);
    }

    return verifies;
  }

  verifyType(context) {
    let typeVerifies = false;

    const typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' type...`);

    const prefixedTypeName = this.type.getPrefixedName(),
          type = context.findTypeByPrefixedTypeName(prefixedTypeName);

    if (type === null) {
      context.debug(`The '${typeString}' type is not present.`);
    } else {
      this.type = type; ///

      typeVerifies = true;
    }

    if (typeVerifies) {
      context.debug(`...verified the '${typeString}' type.`);
    }

    return typeVerifies;
  }

  unifyTerm(term, substitutions, generalContext, specificContext) {
    let termUnifies = false;

    const termString = term.getString(),
          variableString = this.string; ///

    specificContext.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);

    let context,
        variable;

    variable = this; ///

    const substitution = substitutions.findSubstitutionByVariable(variable);

    if (substitution !== null) {
      context = specificContext;  ///

      const substitutionTermEqualToTerm = substitution.isTermEqualToTerm(term, context);

      if (substitutionTermEqualToTerm) {
        termUnifies = true;
      }
    } else {
      context = generalContext;  ///

      const variableIdentifier = variable.getIdentifier();

      variable = context.findVariableByVariableIdentifier(variableIdentifier);

      context = specificContext;  ///

      const termNode = term.getNode();

      term = context.findTermByTermNode(termNode);

      const termType = term.getType(),
            variableType = variable.getType(),
            termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);

      if (termTypeEqualToOrSubTypeOfVariableType) {
        const { TermSubstitution } = elements,
              termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context),
              substitution = termSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

        termUnifies = true;
      }
    }

    if (termUnifies) {
      specificContext.debug(`...unified the '${termString}' term with the '${variableString}' variable.`);
    }

    return termUnifies;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          string = this.string, ///
          type = typeJSON,  ///
          json = {
            type,
            string
          };

    return json;
  }

  static name = "Variable";

  static fromJSON(json, context) {
    const { string } = json,
          variableNode = instantiateVariable(string, context),
          variableIdentifier = variableNode.getVariableIdentifier(),
          node = variableNode,
          identifier = variableIdentifier,  ///
          type = typeFromJSON(json, context),
          propertyRelations = [],
          variable = new Variable(context, string, node, type, identifier, propertyRelations);

    return variable;
  }
});
