"use strict";

import { nodeUtilities, contextUtilities } from "occam-furtle";

const { nodeAsString } = nodeUtilities,
      { chainContext } = contextUtilities;

export default class LiteralContext {
  constructor(context, tokens) {
    this.context = context;
    this.tokens = tokens;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getTokens() {
    return this.tokens;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  static fromNothing(context) {
    const tokens = null,
          literalContext = new LiteralContext(context, tokens);

    return literalContext;
  }
}
