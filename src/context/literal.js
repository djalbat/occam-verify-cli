"use strict";

import { nodeAsString } from "../utilities/node";
import { chainContext } from "../utilities/context";

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
