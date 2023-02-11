"use strict";

import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";

import { push, last, filter } from "../utilities/array";

class MetaproofContext {
  constructor(context, metavariables, metaproofSteps) {
    this.context = context;
    this.metavariables = metavariables;
    this.metaproofSteps = metaproofSteps;
  }

  getContext() {
    return this.context;
  }

  getVariables() { return this.context.getVariables(); }

  getMetavariables() {
    const metavariables = [];

    push(metavariables, this.metavariables);

    const contextMetavariables = this.context.getMetavariables();

    push(metavariables, contextMetavariables);

    return metavariables;
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

  addMetavariable(metavariable) {
    const metavariableName = metavariable.getName();

    filter(this.metavariables, (metavariable) => {
      const name = metavariable.getName(),
            nameMetavariableName = (name === metavariableName);

      if (!nameMetavariableName) {
        return true;
      }
    });

    this.metavariables.push(metavariable);
  }

  addMetaproofStep(metaproofStep) {
    this.metaproofSteps.push(metaproofStep);
  }

  matchMetastatement(metastatementNode) {
    let metastatementMatches = false;

    if (!metastatementMatches) {
      const proofStepMatchesMetastatement = this.metaproofSteps.some((metaproofStep) => {
        const proofStepMatchesMetastatement = metaproofStep.match(metastatementNode);

        if (proofStepMatchesMetastatement) {
          return true;
        }
      });

      metastatementMatches = proofStepMatchesMetastatement; ///
    }

    if (!metastatementMatches) {
      metastatementMatches = this.context.matchMetastatement(metastatementNode);
    }

    return metastatementMatches;
  }

  findMetavariableByMetavariableName(metavariableName) {
    const name = metavariableName,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchName(name);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  isMetavariablePresentByMetavariableName(metavariableName) {
    const metavariable = this.findMetavariableByMetavariableName(metavariableName),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          metavariables = [],
          metaproofSteps = [],
          metaproofContext = new MetaproofContext(context, metavariables, metaproofSteps);

    return metaproofContext;
  }

  static fromMetaproofContext(metaproofContext) {
    const context = metaproofContext,  ///
          metavariables = [],
          metaproofSteps = [];

    metaproofContext = new MetaproofContext(context, metavariables, metaproofSteps);  ///

    return metaproofContext;
  }
}

Object.assign(MetaproofContext.prototype, fileMixins);
Object.assign(MetaproofContext.prototype, loggingMixins);

export default MetaproofContext;