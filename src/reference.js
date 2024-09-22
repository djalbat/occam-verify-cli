"use strict";

import { nodeAsString } from "./utilities/string";

export default class Reference {
  constructor(metavariableNode) {
    this.metavariableNode = metavariableNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  asString(tokens) {
    const string = nodeAsString(this.metavariableNode, tokens);

    return string;
  }

  static fromMetavariableNode(metavariableNode) {
    const reference = new Reference(metavariableNode);

    return reference;
  }
}
