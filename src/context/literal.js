"use strict";

import {  nodeUtilities } from "occam-languages";

import Context from "../context";

const { nodeAsString, nodesAsString } = nodeUtilities;

export default class LiteralContext extends Context {
  constructor(context, tokens) {
    super(context);

    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  getLexer() {
    const context = this.getContext(),
          lexer = context.getLexer();

    return lexer;
  }

  getParser() {
    const context = this.getContext(),
          parser = context.getParser();

    return parser;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(nodes) {
    const string = nodesAsString(nodes, this.tokens);

    return string;
  }

  static fromNothing(context) {
    const tokens = null,
          literalContext = new LiteralContext(context, tokens);

    return literalContext;
  }
}
