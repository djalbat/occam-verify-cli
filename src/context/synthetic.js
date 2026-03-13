"use strict";

import Context from "../context";

export default class SyntheticContext extends Context {
  constructor(context, contexts) {
    super(context);

    this.contexts = contexts;
  }

  getContexts() {
    return this.contexts;
  }

  addSubstitutions(substitutions) {
    const context = this.getContext();

    context.addSubstitutions(substitutions);
  }

  findTermByTermNode(termNode) {
    let term = null;

    this.contexts.some((context) => {
      term = context.findTermByTermNode(termNode);

      if (term !== null) {
        return true;
      }
    });

    return term;
  }

  findFrameByFrameNode(frameNode) {
    let frame = null;

    this.contexts.some((context) => {
      frame = context.findFrameByFrameNode(frameNode);

      if (frame !== null) {
        return true;
      }
    });

    return frame;
  }

  static fromContexts(...contexts) {
    const context = contexts.pop(), ///
          syntheticContext = new SyntheticContext(context, contexts);

    return syntheticContext;
  }
}
