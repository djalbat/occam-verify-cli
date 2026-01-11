"use strict";

export default class Element {
  constructor(context, string, node) {
    this.context = context;
    this.string = string;
    this.node = node;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  setContext(context) {
    this.context = context;
  }

  setString(string) {
    this.string = string;
  }

  setNode(node) {
    this.node = node;
  }

  matchNode(node) { return this.node.match(node); }

  isEqualTo(element) {
    const elementNode = element.getNode(),
          matches = this.node.match(elementNode),
          equalTo = matches;  ///

    return equalTo;
  }
}
