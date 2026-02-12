"use strict";

import Context from "../context";

export default class LiteralContext extends Context {
  constructor(context, tokens) {
    super(context);

    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  static fromNothing(context) {
    const tokens = null,
          literalContext = new LiteralContext(context, tokens);

    return literalContext;
  }
}
