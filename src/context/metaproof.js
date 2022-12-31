"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";
import callbacksMixins from "../mixins/callbacks";

import { last } from "../utilities/array";

class MetaproofContext {
  constructor(context, derived, metaAssertions) {
    this.context = context;
    this.derived = derived;
    this.metaAssertions = metaAssertions;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
  }

  getMetaAssertions() {
    let metaAssertions = this.context.getMetaAssertions();

    metaAssertions = [  ///
      ...metaAssertions,
      ...this.metaAssertions
    ];

    return metaAssertions;
  }

  getLastMetaAssertion() {
    let lastMetaAssertion = null;

    const metaAssertionsLength = this.metaAssertions.length;

    if (metaAssertionsLength > 0) {
      lastMetaAssertion = last(this.metaAssertions);
    }

    return lastMetaAssertion;
  }

  setDerived(derived) {
    this.derived = derived;
  }

  addMetaAssertion(metaAssertion) {
    this.metaAssertions.push(metaAssertion);
  }

  matchMetaAssertion(metaAssertion) {
    let metaAssertionMatches;

    const metaAssertionB = metaAssertion; ///

    metaAssertionMatches = this.metaAssertions.some((metaAssertion) => {
      const metaAssertionA = metaAssertion, ///
            matches = metaAssertionA.match(metaAssertionB);

      if (matches) {
        return true;
      }
    });

    if (!metaAssertionMatches) {
      metaAssertionMatches = this.context.matchMetaAssertion(metaAssertion);
    }

    return metaAssertionMatches;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          derived = false,
          metaAssertions = [],
          metaproofContext = new MetaproofContext(context, derived, metaAssertions);

    return metaproofContext;
  }

  static fromMetaproofContext(metaproofContext) {
    const context = metaproofContext,  ///
          derived = false,
          metaAssertions = [];

    metaproofContext = new MetaproofContext(context, derived, metaAssertions);  ///

    return metaproofContext;
  }
}

Object.assign(MetaproofContext.prototype, fileMixins);
Object.assign(MetaproofContext.prototype, loggingMixins);
Object.assign(MetaproofContext.prototype, callbacksMixins);

export default MetaproofContext;