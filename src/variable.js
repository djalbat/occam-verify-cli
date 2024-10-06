"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { objectType } from "./type";
import { variableNameFromVariableNode} from "./utilities/name";
import { variableNodeFromVariableString } from "./utilities/node";

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

  toJSON() {
    const typeJSON = (this.type !== null) ?
                       this.type.toJSON() :
                         null,
          string = this.string,
          type = typeJSON,  ///
          json = {
            string,
            type
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { Type } = shim,
          { string } = json,
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          variableString = string,  ///
          variableNode = variableNodeFromVariableString(variableString, lexer, parser),
          node = variableNode;  ///

    let { type } = json;

    if (type !== null) {
      json = type;  ///

      type = Type.fromJSON(json, fileContext);
    }

    const variableName = variableNameFromVariableNode(variableNode),
          name = variableName,  ///
          variable = new Variable(string, node, name, type);

    return variable;
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
    const { Type } = shim,
          typeNode = typeNodeQuery(variableDeclarationNode),
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
