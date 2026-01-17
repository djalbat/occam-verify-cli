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

  isIdentifierEqualTo(identifier) {
    const identifierEqualTo = (this.identifier === identifier);

    return identifierEqualTo;
  }

  compareParamter(parameter) {
    const identifier = parameter.getIdentifier(),
          identifierEqualTo = this.isIdentifierEqualTo(identifier),
          comparesToParamter = identifierEqualTo; ///

    return comparesToParamter;
  }

  compareVariableIdentifier(variableIdentifier) {
    const identifier = variableIdentifier, ///
          identifierEqualTo = this.isIdentifierEqualTo(identifier),
          comparesToVariableIdentifier = identifierEqualTo; ///

    return comparesToVariableIdentifier;
  }

  validate(context) {
    let validates;

    const variableString = this.getString(); ///

    context.trace(`Validating the '${variableString}' variable...`);

    const variableIdentifier = this.identifier,
          variable = context.findVariableByVariableIdentifier(variableIdentifier);

    if (variable !== null) {
      const type = variable.getType();

      this.type = type;

      validates = true;
    } else {
      context.debug(`The '${variableString}' variable is not present.`);
    }

    if (validates) {
      context.debug(`...validated the '${variableString}' variable.`);
    }

    return validates;
  }

  validateType(context) {
    let typeValidates = false;

    const typeString = this.type.getString();

    context.trace(`Validating the '${typeString}' type...`);

    const prefixedTypeName = this.type.getPrefixedName(),
          type = context.findTypeByPrefixedTypeName(prefixedTypeName);

    if (type === null) {
      context.debug(`The '${typeString}' type is not present.`);
    } else {
      this.type = type; ///

      typeValidates = true;
    }

    if (typeValidates) {
      context.debug(`...validated the '${typeString}' type.`);
    }

    return typeValidates;
  }

  unifyTerm(term, substitutions, generalContext, specificContext) {
    let termUnifies = false;

    const context = specificContext,  ///
          termString = term.getString(),
          variableString = this.getString(); ///

    context.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);

    let variable;

    variable = this; ///

    const substitution = substitutions.findSubstitutionByVariable(variable);

    if (substitution !== null) {
      const substitutionComparesToTerm = substitution.compareTerm(term, context);

      if (substitutionComparesToTerm) {
        termUnifies = true;
      }
    } else {
      let context;

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
              termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, context),
              substitution = termSubstitution;  ///

        substitutions.addSubstitution(substitution, context);

        termUnifies = true;
      }
    }

    if (termUnifies) {
      context.debug(`...unified the '${termString}' term with the '${variableString}' variable.`);
    }

    return termUnifies;
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
