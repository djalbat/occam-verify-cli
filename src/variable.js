"use strict";

import Type, {objectType} from "./type";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { variableNameFromVariableNode } from "./utilities/name";

const typeNodeQuery = nodeQuery("/variableDeclaration/type"),
      variableNodeQuery = nodeQuery("/variableDeclaration/variable");

export default class Variable {
  constructor(string, node, name, type) {
    this.string = string;
    this.node = node;
    this.name = name;
    this.type = type;
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

  matchNode(node) {
    const nodeMatches = this.node.match(node);

    return nodeMatches;
  }

  matchName(name) {
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  verify(localContext) {
    let verified;

    const variableString = this.string; ///

    localContext.trace(`Verifying the '${variableString}' variable...`);

    const variableNode = this.node, ///
          variableName = variableNameFromVariableNode(variableNode),
          variable = localContext.findVariableByVariableName(variableName);

    if (variable === null) {
      localContext.debug(`The '${variableString}' variable is not present.`);
    } else {
      const type = variable.getType();

      this.type = type;

      verified = true;
    }

    if (verified) {
      localContext.debug(`...verified the '${variableString}' variable.`);
    }

    return verified;
  }

  verifyAtTopLevel(localContext) {
    let verifiedAtTopLevel;

    const variableString = this.string; ///

    localContext.trace(`Verifying the '${variableString}' variable at top level...`);

    const variableNode = this.node, ///
          variableName = variableNameFromVariableNode(variableNode),
          variablePresent = localContext.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      localContext.debug(`The '${variableString}' variable is already present.`);
    } else {
      const typeName = this.type.getName(),
            type = localContext.findTypeByTypeName(typeName);

      if (type === null) {
        const typeString = this.type.getString();

        localContext.debug(`The '${typeString}' type is not present.`);
      } else {
        this.type = type;

        const variable = this;  ///

        localContext.addVariable(variable);

        verifiedAtTopLevel = true;
      }
    }

    if (verifiedAtTopLevel) {
      localContext.debug(`...verified the '${variableString}' variable at top level.`);
    }

    return verifiedAtTopLevel;
  }

  static fromVariableNode(variableNode, localContext) {
    const node = variableNode,  ///
          variableName = variableNameFromVariableNode(variableNode),
          string = localContext.nodeAsString(node),
          name = variableName,  ///
          type = null,
          variable = new Variable(string, node, name, type);

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type, localContext) {
    const node = variableNode,  ///
          variableName = variableNameFromVariableNode(variableNode),
          string = localContext.nodeAsString(node),
          name = variableName,  ///
          variable = new Variable(string, node, name, type);

    return variable;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const typeNode = typeNodeQuery(variableDeclarationNode),
          variableNode = variableNodeQuery(variableDeclarationNode),
          variableName = variableNameFromVariableNode(variableNode),
          localContext = LocalContext.fromFileContext(fileContext),
          variableString = fileContext.nodeAsString(variableNode),
          string = variableString,  ///
          node = variableNode,  ///
          name = variableName,  ///
          type = (typeNode === null) ?
                   objectType :
                     Type.fromTypeNode(typeNode, localContext),
          variable = new Variable(string, node, name, type);

    return variable;
  }
}
