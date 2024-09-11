"use strict";

import { nodeAsString } from "./utilities/string";

export default class Label {
  constructor(metavariableNode) {
    this.metavariableNode = metavariableNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  matchMetavariableNode(metavariableNode) {
    const matches = this.metavariableNode.match(metavariableNode);

    return matches;
  }

  asString(tokens) {
    const string = nodeAsString(this.metavariableNode, tokens);

    return string;
  }

  static fromMetavariableNode(metavariableNode) {
    const label = new Label(metavariableNode);

    return label;
  }
}
