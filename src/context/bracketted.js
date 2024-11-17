"use strict";

export default class BracketedContext {
  constructor(string, node, tokens) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  nodeAsTokens() {
    return this.tokens;
  }

  nodeAsString() {
    return this.string;
  }

  tokensAsString() {
    return this.string;
  }

  static fromString(Class, string, context) {
    const node = context.getNode(),
          tokens = context.getTokens(),
          bracketedContext = new Class(string, node, tokens);

    return bracketedContext;
  }
}
