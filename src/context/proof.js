"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";
import callbacksMixins from "../mixins/callbacks";

class ProofContext {
  constructor(context, derived, assertions) {
    this.context = context;
    this.derived = derived;
    this.assertions = assertions;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
  }

  getAssertions() {
    let assertions = this.context.getAssertions();

    assertions = [
      ...assertions,
      ...this.assertions
    ];

    return assertions;
  }

  setDerived(derived) {
    if (derived) {
      this.statementNodes.pop();
    }

    this.derived = derived;
  }

  addAssertion(assertion) {
    this.assertions.push(assertion);
  }

  matchAssertion(assertion) {
    let assertionMatches;

    const assertionB = assertion; ///

    assertionMatches = this.assertions.some((assertion) => {
      const assertionA = assertion, ///
            matches = assertionA.match(assertionB);

      if (matches) {
        return true;
      }
    });

    if (!assertionMatches) {
      assertionMatches = this.context.matchAssertion(assertion);
    }

    return assertionMatches;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          derived = false,
          assertions = [],
          proofContext = new ProofContext(context, derived, assertions);

    return proofContext;
  }

  static fromProofContext(proofContext) {
    const context = proofContext,  ///
          derived = false,
          assertions = [];

    proofContext = new ProofContext(context, derived, assertions);  ///

    return proofContext;
  }
}

Object.assign(ProofContext.prototype, fileMixins);
Object.assign(ProofContext.prototype, loggingMixins);
Object.assign(ProofContext.prototype, callbacksMixins);

export default ProofContext;
