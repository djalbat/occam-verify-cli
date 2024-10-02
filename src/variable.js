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
          typeNatches = this.matchType(type),
          nodeAndTypeMatch = (nodeMatches && typeNatches);

    return nodeAndTypeMatch;
  }

  static fromVariableNodeAndType(variableNode, type) {
    const node = variableNode,  ///
          variable = new Variable(node, type);

    return variable;
  }
}
