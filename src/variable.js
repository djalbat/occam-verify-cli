"use strict";

import { nodeAsString } from "./utilities/string";
import { typeFromJSONAndFileContext } from "./type";
import { variableNodeFromVariableString } from "./utilities/node";

export default class Variable {
  constructor(node, type) {
    this.node = node;
    this.type = type;
  }

  getNode() {
    return this.node;
  }

  getType() {
    return this.type;
  }

  match(variable) {
    const type = variable.getType(),
          node = variable.getNode(),
          typeMatches = this.matchType(type),
          nodeMatches = this.matchNode(node),
          matches = nodeMatches && typeMatches;

    return matches;
  }

  matchNode(node) {
    const nodeMatches = this.node.match(node);

    return nodeMatches;
  }

  matchType(type) {
    const typeMatches = this.type.match(type);

    return typeMatches;
  }

  matchNodeAndType(node, type) {
    const nodeMatches = this.matchNode(node),
          typeMatches = this.matchType(type),
          nodeAndTypeMatch = nodeMatches && typeMatches;

    return nodeAndTypeMatch;
  }

  asString(tokens) {
    const typeName = this.type.getName();

    let string = nodeAsString(this.node, tokens);

    string = `${string}:${typeName}`; ///

    return string;
  }

  toJSON(tokens) {
    const typeJSON = this.type.toJSON(tokens),
          string = nodeAsString(this.node, tokens),
          node = string,  //
          type = typeJSON,  ///
          json = {
            node,
            type
          };

    return json;
  }

  static fromJSONAndFileContext(json, fileContext) {
    let { node } = json;

    const lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          variableString = node,  ///
          variableNode = variableNodeFromVariableString(variableString, lexer, parser);

    node = variableNode;  ///

    let { type } = json;

    json = type;  ///

    type = typeFromJSONAndFileContext(json, fileContext);

    const variable = new Variable(node, type);

    return variable;
  }

  static fromVariableAndType(variable, type) {
    const node = variable.getNode();

    variable = new Variable(node, type);  ///

    return variable;
  }

  static fromVariableNodeAndType(variableNode, type) {
    const node = variableNode,  ///
          variable = new Variable(node, type);

    return variable;
  }
}
