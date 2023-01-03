"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";
import callbacksMixins from "../mixins/callbacks";

import { last } from "../utilities/array";

class MetaproofContext {
  constructor(context, derived, metaproofSteps) {
    this.context = context;
    this.derived = derived;
    this.metaproofSteps = metaproofSteps;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
  }

  getMetaproofSteps() {
    let metaproofSteps = this.context.getMetaproofSteps();

    metaproofSteps = [  ///
      ...metaproofSteps,
      ...this.metaproofSteps
    ];

    return metaproofSteps;
  }

  getLastMetaproofStep() {
    let lastMetaproofStep = null;

    const metaproofStepsLength = this.metaproofSteps.length;

    if (metaproofStepsLength > 0) {
      lastMetaproofStep = last(this.metaproofSteps);
    }

    return lastMetaproofStep;
  }

  setDerived(derived = true) {
    this.derived = derived;
  }

  resetDerived() {
    this.derived = false;
  }

  addMetaproofStep(metaproofStep) {
    this.metaproofSteps.push(metaproofStep);
  }

  matchMetastatement(metastatementNode) {
    let metastatementMatches;

    metastatementMatches = this.metaproofSteps.some((metaproofStep) => {
      metastatementMatches = metaproofStep.matchMetastatement(metastatementNode);

      if (metastatementMatches) {
        return true;
      }
    });

    if (!metastatementMatches) {
      metastatementMatches = this.context.matchMetastatement(metastatementNode);
    }

    return metastatementMatches;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          derived = false,
          metaproofSteps = [],
          metaproofContext = new MetaproofContext(context, derived, metaproofSteps);

    return metaproofContext;
  }

  static fromMetaproofContext(metaproofContext) {
    const context = metaproofContext,  ///
          derived = false,
          metaproofSteps = [];

    metaproofContext = new MetaproofContext(context, derived, metaproofSteps);  ///

    return metaproofContext;
  }
}

Object.assign(MetaproofContext.prototype, fileMixins);
Object.assign(MetaproofContext.prototype, loggingMixins);
Object.assign(MetaproofContext.prototype, callbacksMixins);

export default MetaproofContext;