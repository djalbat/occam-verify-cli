"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import TermSubstitution from "../substitution/term";

import { domAssigned } from "../dom";
import { EMPTY_STRING } from "../constants";
import { typeFromTypeNode } from "../utilities/node";
import { typeFromJSON, typeToTypeJSON } from "../utilities/json";
import { variableNodeFromVariableString } from "../context/partial/variable";

export default domAssigned(class Variable {
  constructor(string, node, name, type, propertyRelations) {
    this.string = string;
    this.node = node;
    this.name = name;
    this.type = type;
    this.propertyRelations = propertyRelations;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
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

  matchName(name) {
    const nameMatches = (name === this.name);

    return nameMatches;
  }

  matchVariableName(variableName) {
    const variableNameMatches = (variableName === this.name);

    return variableNameMatches;
  }

  isEffectivelyEqualToTerm(term, generalContext, specificContext) {
    let effectivelyEqualToTerm = false;

    const generalContextFilePath = generalContext.getFilePath(),
          specificContextFilePath = specificContext.getFilePath();

    if (generalContextFilePath === specificContextFilePath) {
      const termString = term.getString();

      if (termString === this.string) {
        effectivelyEqualToTerm = true;
      }
    }

    return effectivelyEqualToTerm;
  }

  verify(context) {
    let verified;

    const variableString = this.string; ///

    context.trace(`Verifying the '${variableString}' variable...`);

    const variableName = this.name,
          variable = context.findVariableByVariableName(variableName);

    if (variable !== null) {
      const type = variable.getType();

      this.type = type;

      verified = true;
    } else {
      context.debug(`The '${variableString}' variable is not present.`);
    }

    if (verified) {
      context.debug(`...verified the '${variableString}' variable.`);
    }

    return verified;
  }

  verifyType(fileContext) {
    let typeVerified = false;

    const typeString = this.type.getString();

    fileContext.trace(`Verifying the '${typeString}' type...`);

    const type = fileContext.findTypeByTypeName(typeString);

    if (type === null) {
      fileContext.debug(`The '${typeString}' type is not present.`);
    } else {
      this.type = type; ///

      typeVerified = true;
    }

    if (typeVerified) {
      fileContext.debug(`...verified the '${typeString}' type.`);
    }

    return typeVerified;
  }

  unifyTerm(term, substitutions, generalContext, specificContext) {
    let termUnified = false;

    const termString = term.getString(),
          variableString = this.string; ///

    specificContext.trace(`Unifying the '${termString}' term with the '${variableString}' variable...`);

    const effectivelyEqualToTerm = this.isEffectivelyEqualToTerm(term, generalContext, specificContext);

    if (effectivelyEqualToTerm) {
      termUnified = true;
    } else {
      const variable = this, ///
            substitutionPresent = substitutions.isSubstitutionPresentByVariable(variable);

      if (substitutionPresent) {
        const substitution = substitutions.findSubstitutionByVariable(variable),
              substitutionTermEqualToTerm = substitution.isTermEqualTo(term);

        if (substitutionTermEqualToTerm) {
          termUnified = true;
        }
      } else {
        const context = specificContext,  ///
              variable = this,  ///
              termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context),
              substitution = termSubstitution;  ///

        substitutions.addSubstitution(substitution, specificContext);

        termUnified = true;
      }
    }

    if (termUnified) {
      specificContext.debug(`...unified the '${termString}' term with the '${variableString}' variable.`);
    }

    return termUnified;
  }

  toJSON() {
    const typeJSON = typeToTypeJSON(this.type),
          string = this.string,
          type = typeJSON,  ///
          json = {
            type,
            string
          };

    return json;
  }

  static name = "Variable";

  static fromJSON(json, fileContext) {
    const { string } = json,
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext, ///
          variableString = string,  ///
          variableNode = variableNodeFromVariableString(variableString, context),
          variableName = variableNode.getVariableName(),
          node = variableNode,
          name = variableName,  ///
          type = typeFromJSON(json, fileContext),
          propertyRelations = [],
          variable = new Variable(string, node, name, type, propertyRelations);

    return variable;
  }

  static fromTermNode(termNode, context) {
    let variable = null;

    const singularVariableNode = termNode.getSingularVariableNode();

    if (singularVariableNode !== null) {
      const variableNode = singularVariableNode,  ///
            type = null;

      variable = variableFromVariableNodeAndType(variableNode, type, context);
    }

    return variable;
  }

  static fromVariableNode(variableNode, context) {
    let variable = null;

    if (variableNode !== null) {
      const type = null;

      variable = variableFromVariableNodeAndType(variableNode, type, context);
    }

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type, context) {
    const variable = variableFromVariableNodeAndType(variableNode, type, context);

    return variable;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const { Variable } = dom,
          localContext = LocalContext.fromFileContext(fileContext),
          context = localContext,
          provisional = variableDeclarationNode.isProvisional(),
          typeNode = variableDeclarationNode.getTypeNode(),
          type = typeFromTypeNode(typeNode);

    type.setProvisional(provisional);

    const variableNode = variableDeclarationNode.getVariableNode(),
          variableName = variableDeclarationNode.getVariableName(),
          node = variableNode,  ///
          name = variableName,  ///
          string = context.nodeAsString(node),
          propertyRelations = [],
          variable = new Variable(string, node, name, type, propertyRelations);

    return variable;
  }

  static fromVariableAndPropertyRelation(variable, propertyRelation, context) {
    let propertyRelations;

    const node = variable.getNode(),
          name = variable.getName(),
          type = variable.getType();

    propertyRelations = variable.getPropertyRelations();

    propertyRelations = [
      ...propertyRelations,
      propertyRelation
    ];

    const string = stringFromNameAndPropertyRelations(name, propertyRelations);

    variable = new Variable(string, node, name, type, propertyRelations);

    return variable;
  }
});

function variableFromVariableNodeAndType(variableNode, type, context) {
  const { Variable } = dom,
        node = variableNode,  ///
        variableName = variableNode.getVariableName(),
        string = context.nodeAsString(node),
        name = variableName,  ///
        propertyRelations = [],
        variable = new Variable(string, node, name, type, propertyRelations);

  return variable;
}

function stringFromNameAndPropertyRelations(name, propertyRelations) {
  const propertyRelationsString = propertyRelations.reduce((propertyRelationsString, propertyRelation) => {
          const propertyRelationString = propertyRelation.getString();

          propertyRelationsString = `${propertyRelationsString}, ${propertyRelationString}`;

          return propertyRelationsString;
        }, EMPTY_STRING),
        string = `${name}${propertyRelationsString}`;

  return string;
}
