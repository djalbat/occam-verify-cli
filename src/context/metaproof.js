"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";
import callbacksMixins from "../mixins/callbacks";

import { last } from "../utilities/array";

class MetaproofContext {
  constructor(context, metaproofSteps) {
    this.context = context;
    this.metaproofSteps = metaproofSteps;
  }

  getContext() {
    return this.context;
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

  nodeAsString(node) { return this.context.nodeAsString(node); }

  nodesAsString(node) { return this.context.nodesAsString(node); }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          metaproofSteps = [],
          metaproofContext = new MetaproofContext(context, metaproofSteps);

    return metaproofContext;
  }

  static fromMetaproofContext(metaproofContext) {
    const context = metaproofContext,  ///
          metaproofSteps = [];

    metaproofContext = new MetaproofContext(context, metaproofSteps);  ///

    return metaproofContext;
  }
}

Object.assign(MetaproofContext.prototype, fileMixins);
Object.assign(MetaproofContext.prototype, loggingMixins);
Object.assign(MetaproofContext.prototype, callbacksMixins);

export default MetaproofContext;