"use strict";

import { chainContext } from "../utilities/context";

export default class JointContext {
  constructor(context, specificContext, proofAssertionContext) {
    this.context = context;
    this.specificContext = specificContext;
    this.proofAssertionContext = proofAssertionContext;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getSpecificContext() {
    return this.specificContext;
  }

  getProofAssertionContext() {
    return this.proofAssertionContext;
  }

  addSubsittution(substitution) { this;this.specificContext.addSubsittution(substitution); }

  static fromNothing(specificContext, proofAssertionContext) {
    const context = specificContext,  ///
          jointContext = new JointContext(context, specificContext, proofAssertionContext);

    return jointContext;
  }
}
