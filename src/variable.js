"use strict";

import { nodeAsString } from "./utilities/string";

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
          matchesType = this.matchType(type),
          matchesNode = this.matchNode(node),
          matches = matchesNode && matchesType;

    return matches;
  }

  matchNode(node) {
    const matchesNode = this.node.match(node);

    return matchesNode;
  }

  matchType(type) {
    const matchesType = this.type.match(type);

    return matchesType;
  }

  matchNodeAndType(node, type) {
    const matchesNode = this.matchNode(node),
          matchesType = this.matchType(type),
          matchesNodeAndType = matchesNode && matchesType;

    return matchesNodeAndType;
  }

  asString(tokens) {
    const typeName = this.type.getName();

    let string = nodeAsString(this.node, tokens);

    string = `${string}:${typeName}`; ///

    return string;
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
