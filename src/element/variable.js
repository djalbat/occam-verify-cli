"use strict";

import { Element } from "occam-languages";

import elements from "../elements";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateVariable } from "../process/instantiate";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { variableFromTermNode, identifierFromVarialbeNode } from "../utilities/element";

export default define(class Variable extends Element {
  constructor(context, string, node, type, identifier) {
    super(context, string, node);

    this.type = type;
    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getVariableNode() {
    const node = this.getNode(),
          variableNode = node;  //

    return variableNode;
  }

  getTypeString() { return this.type.getString(); }

  isIdentifierEqualTo(identifier) {
    const identifierEqualTo = (this.identifier === identifier);

    return identifierEqualTo;
  }

  compare(variable) {
    const variableIdentifier = variable.getIdentifier(),
          comparesTo = (this.identifier === variableIdentifier);

    return comparesTo;
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
    let variable = null;

    const variableString = this.getString(); ///

    context.trace(`Validating the '${variableString}' variable...`);

    let validates = false;

    const variableIdentifier = this.identifier;

    variable = context.findVariableByVariableIdentifier(variableIdentifier);

    if (variable !== null) {
      const type = variable.getType(),
            typeString = type.getString(),
            variableString = this.getString();  ///

      context.trace(`Setting the '${variableString}' variable's type to the '${typeString}' type.`);

      this.type = type;

      validates = true;
    } else {
      context.debug(`The '${variableString}' variable is not present.`);
    }

    if (validates) {
      variable = this;  ///

      context.debug(`...validated the '${variableString}' variable.`);
    }

    return variable;
  }

  unifyTerm(term, generalContext, specificContext) {
    let termUnifies = false;

    const context = specificContext,  ///
          termString = term.getString(),
          variableString = this.getString(); ///

    context.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);

    let variable,
        substitution;

    variable = this; ///

    const variableIdentifier = variable.getIdentifier();

    substitution = context.findSubstitutionByVariableIdentifier(variableIdentifier);

    if (substitution !== null) {
      const substitutionComparesToTerm = substitution.compareTerm(term, context);

      if (substitutionComparesToTerm) {
        const termSubstitution = substitution,  ///
              termSubstitutionString = termSubstitution.getString();

        context.trace(`The '${termSubstitutionString}' term substitution is already present.`);

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
              termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, context);

        termSubstitution.validate(generalContext, specificContext);

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
          type = typeJSON,  ///
          string = this.getString(), ///
          json = {
            string,
            type
          };

    return json;
  }

  static name = "Variable";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string } = json,
            variableNode = instantiateVariable(string, context),
            node = variableNode,  ///
            type = typeFromJSON(json, context),
            identifier = identifierFromVarialbeNode(variableNode, context);

      context = null;

      const variable = new Variable(context, string, node, type, identifier);

      return variable;
    }, context);
  }

  static fromTerm(term, context) {
    const termNode = term.getNode(),
          variable = variableFromTermNode(termNode, context);

    return variable;
  }
});
