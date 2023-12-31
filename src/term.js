"use strict";

export default class Term {
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

  match(term) {
    const node = term.getNode(),
          matches = this.node.match(node);

    return matches;
  }

  static fromTermNodeAndType(termNode, type) {
    const node = termNode,  ///
          term = new Term(node, type);

    return term;
  }
}
