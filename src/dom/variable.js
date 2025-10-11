"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { EMPTY_STRING } from "../constants";
import { typeFromTypeNode } from "../utilities/node";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { variableNodeFromVariableString } from "../context/partial/variable";

export default domAssigned(class Variable {
  constructor(string, node, type, identifier, propertyRelations) {
    this.string = string;
    this.node = node;
    this.type = type;
    this.identifier = identifier;
    this.propertyRelations = propertyRelations;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
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

  isEqualTo(variable) {
    const variableString = variable.getString(),
          equalTo = (variableString === this.string);

    return equalTo;
  }

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

    const typeName = this.tyupe.getName(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' type...`);

    const type = context.findTypeByTypeName(typeName);

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

    const variable = this, ///
          substitutionPresent = substitutions.isSubstitutionPresentByVariable(variable);

    if (substitutionPresent) {
      const context = specificContext,  ///
            substitution = substitutions.findSubstitutionByVariable(variable),
            substitutionTermEqualToTerm = substitution.isTermEqualTo(term, context);

      if (substitutionTermEqualToTerm) {
        termUnifies = true;
      }
    } else {
      const { TermSubstitution } = dom,
            context = specificContext,  ///
            variable = this,  ///
            termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context),
            substitution = termSubstitution;  ///

      substitutions.addSubstitution(substitution, specificContext);

      termUnifies = true;
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
          variableString = string,  ///
          variableNode = variableNodeFromVariableString(variableString, context),
          variableIdentifier = variableNode.getVariableIdentifier(),
          node = variableNode,
          identifier = variableIdentifier,  ///
          type = typeFromJSON(json, context),
          propertyRelations = [],
          variable = new Variable(string, node, type, identifier, propertyRelations);

    return variable;
  }

  static fromTermNode(termNode, context) {
    let variable = null;

    const singularVariableNode = termNode.getSingularVariableNode();

    if (singularVariableNode !== null) {
      const variableNode = singularVariableNode,  ///
            type = null;

      variable = variableFromVariableNodeAndType(variableNode, type);
    }

    return variable;
  }

  static fromVariableNode(variableNode, context) {
    let variable = null;

    if (variableNode !== null) {
      const type = null;

      variable = variableFromVariableNodeAndType(variableNode, type);
    }

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type, context) {
    const variable = variableFromVariableNodeAndType(variableNode, type);

    return variable;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, context) {
    const { Variable } = dom,
          provisional = variableDeclarationNode.isProvisional(),
          typeNode = variableDeclarationNode.getTypeNode(),
          type = typeFromTypeNode(typeNode, context);

    type.setProvisional(provisional);

    const variableNode = variableDeclarationNode.getVariableNode(),
          variableIdentifier = variableDeclarationNode.getVariableIdentifier(),
          node = variableNode,  ///
          identifier = variableIdentifier,  ///
          string = identifier,  ///
          propertyRelations = [],
          variable = new Variable(string, node, type, identifier, propertyRelations);

    return variable;
  }

  static fromVariableAndPropertyRelation(variable, propertyRelation, context) {
    let propertyRelations;

    const node = variable.getNode(),
          type = variable.getType(),
          identifier = variable.getIdentifier();

    propertyRelations = variable.getPropertyRelations();

    propertyRelations = [
      ...propertyRelations,
      propertyRelation
    ];

    const string = stringFromNameAndPropertyRelations(identifier, propertyRelations);

    variable = new Variable(string, node, type, identifier, propertyRelations);

    return variable;
  }
});

function variableFromVariableNodeAndType(variableNode, type) {
  const { Variable } = dom,
        node = variableNode,  ///
        variableIdentifier = variableNode.getVariableIdentifier(),
        string = variableIdentifier,  ///,
        identifier = variableIdentifier,  ///
        propertyRelations = [],
        variable = new Variable(string, node, type, identifier, propertyRelations);

  return variable;
}

function stringFromNameAndPropertyRelations(identifier, propertyRelations) {
  const propertyRelationsString = propertyRelations.reduce((propertyRelationsString, propertyRelation) => {
          const propertyRelationString = propertyRelation.getString();

          propertyRelationsString = `${propertyRelationsString}, ${propertyRelationString}`;

          return propertyRelationsString;
        }, EMPTY_STRING),
        string = `${identifier}${propertyRelationsString}`;

  return string;
}
