"use strict";

import { Element } from "occam-languages";

import elements from "../elements";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateVariable } from "../process/instantiate";
import { provisionallyStringFromProvisional } from "../utilities/string";
import { variableFromTermNode, identifierFromVariableNode } from "../utilities/element";
import { typeFromJSON, typeToTypeJSON, provisionalFromJSON, provisionalToProvisionalJSON } from "../utilities/json";

export default define(class Variable extends Element {
  constructor(context, string, node, lineIndex, type, identifier, provisional) {
    super(context, string, node, lineIndex);

    this.type = type;
    this.identifier = identifier;
    this.provisional = provisional;
  }

  getType() {
    return this.type;
  }

  getIdentifier() {
    return this.identifier;
  }

  isProvisional() {
    return this.provisional;
  }

  setType(type) {
    this.type = type;
  }

  setProvisional(provisional) {
    this.provisional = provisional;
  }

  getVariableNode() {
    const node = this.getNode(),
          variableNode = node;  //

    return variableNode;
  }

  getTypeString() { return this.type.getString(); }

  isEstablished() {
    const provisional = this.isProvisional(),
          established = !provisional;

    return established;
  }

  isIdentifierEqualTo(identifier) {
    const identifierEqualTo = (this.identifier === identifier);

    return identifierEqualTo;
  }

  compareVariable(variable) {
    const variableIdentifier = variable.getIdentifier(),
          comparesToVariable = (this.identifier === variableIdentifier);

    return comparesToVariable;
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

    const variableIdentifier = this.identifier, ///
          declaredVariable = context.findDeclaredVariableByVariableIdentifier(variableIdentifier);

    if (declaredVariable !== null) {
      const type = declaredVariable.getType(),
            typeString = type.getString(),
            provisional = declaredVariable.isProvisional(),
            variableString = this.getString(),  ///
            provisinallyString = provisionallyStringFromProvisional(provisional);

      context.trace(`Setting the '${variableString}' variable's type to the '${typeString}' type${provisinallyString}.`);

      this.type = type;

      this.provisional = provisional;

      variable = this;

      validates = true;
    } else {
      context.debug(`The '${variableString}' variable is not present.`);
    }

    if (validates) {
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
        derivedSubstitution;

    variable = this; ///

    const variableNode = variable.getNode();

    derivedSubstitution = context.findDerivedSubstitutionByVariableNode(variableNode);

    if (derivedSubstitution !== null) {
      const derivedSubstitutionComparesToTerm = derivedSubstitution.compareTerm(term, context);

      if (derivedSubstitutionComparesToTerm) {
        const derivedSubstitutionString = derivedSubstitution.getString();

        context.trace(`The '${derivedSubstitutionString}' derived substitution is already present.`);

        termUnifies = true;
      }
    } else {
      let context;

      context = generalContext;  ///

      const variableNode = variable.getNode();

      variable = context.findVariableByVariableNode(variableNode);

      context = specificContext;  ///

      const termNode = term.getNode();

      term = context.findTermByTermNode(termNode);

      const termType = term.getType(),
            variableType = variable.getType(),
            termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);

      if (termTypeEqualToOrSubTypeOfVariableType) {
        const { TermSubstitution } = elements;

        let termSubstitution;

        termSubstitution = TermSubstitution.fromTermAndVariable(term, variable, generalContext, specificContext);

        termSubstitution = termSubstitution.validate(context);  ///

        const derivedSubstitution = termSubstitution; ///

        context.addDerivedSubstitution(derivedSubstitution);

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
          provisionalJSON = provisionalToProvisionalJSON(this.provisional),
          string = this.getString(), ///
          lineIndex = this.getLineIndex(),
          type = typeJSON,  ///
          provisional = provisionalJSON,  ///
          json = {
            string,
            lineIndex,
            type,
            provisional
          };

    return json;
  }

  static name = "Variable";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string, lineIndex } = json,
            variableNode = instantiateVariable(string, context),
            node = variableNode,  ///
            type = typeFromJSON(json, context),
            identifier = identifierFromVariableNode(variableNode, context),
            provisional = provisionalFromJSON(json, context);

      context = null;

      const variable = new Variable(context, string, node, lineIndex, type, identifier, provisional);

      return variable;
    }, context);
  }

  static fromTerm(term, context) {
    const termNode = term.getNode(),
          variable = variableFromTermNode(termNode, context);

    return variable;
  }
});
