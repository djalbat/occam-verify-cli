"use strict";

export default class Assertion {
  constructor(string, node) {
    this.string = string;
    this.node = node;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  matchAssertionNode(assertionNode) { return this.node.match(assertionNode); }
}
