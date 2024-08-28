"use strict";

import contextMixins from "../mixins/context";

import { last } from "../utilities/array";

class LocalMetaContext {
  constructor(context, metavariables, metaproofSteps, frameAssertions) {
    this.context = context;
    this.metavariables = metavariables;
    this.metaproofSteps = metaproofSteps;
    this.frameAssertions = frameAssertions;
  }

  getContext() {
    return this.context;
  }

  getMetavariables() {
    let metavariables = this.context.getMetavariables();

    metavariables = [ ///
      ...this.metavariables,
      ...metavariables
    ]

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

  getFrameAssertions() {
    let frameAssertions = this.context.getFrameAssertions();

    frameAssertions = [ ///
      ...this.frameAssertions,
      ...frameAssertions
    ]

    return frameAssertions;
  }

  getVariables() { return this.context.getVariables(); }

  getProofSteps() { return this.context.getProofSteps(); }

  getEquivalences() { return this.context.getEquivalences(); }

  getTermType(term) {
    const termType = term.getType();

    return termType;
  }

  getLastMetaproofStep() {
    let lastMetaproofStep = null;

    const metaproofStepsLength = this.metaproofSteps.length;

    if (metaproofStepsLength > 0) {
      lastMetaproofStep = last(this.metaproofSteps);
    }

    return lastMetaproofStep;
  }

  addFrameAssertion(frameAssertion) {
    let frameAssertionAdded = false;

    const metavariableNode = frameAssertion.getMetavariableNode(),
          frameAssertionPresent = this.isFrameAssertionPresentByMetavariableNode(metavariableNode);

    if (!frameAssertionPresent) {
      this.frameAssertions.push(frameAssertion);

      frameAssertionAdded = true;
    }

    return frameAssertionAdded;
  }

  addMetavariable(metavariable) {
    let metavariableAdded = false;

    const node = metavariable.getName(),
          metavariablePresent = this.metavariables.some((metavariable) => {
            const nodeMatches = metavariable.matchNode(node);

            if (nodeMatches) {
              return true;
            }
          });

    if (!metavariablePresent) {
      this.metavariables.push(metavariable);

      metavariableAdded = true;
    }

    return metavariableAdded;
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

  findVariableByVariableNode(variableNode) {
    const node = variableNode,  ///
          variables = this.getVariables(),
          variable = variables.find((variable) => {
            const matches = variable.matchNode(node);

            if (matches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findFrameAssertionByMetavariableNode(metavariableNode) {
    const frameAssertions = this.getFrameAssertions(),
          frameAssertion = frameAssertions.find((frameAssertion) => {
            const metavariableMatches = frameAssertion.matchMetavariableNode(metavariableNode);

            if (metavariableMatches) {
              return true;
            }
          }) || null;

    return frameAssertion;
  }

  isVariablePresentByVariableNode(variableNode) {
    const variable = this.findVariableByVariableNode(variableNode),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isFrameAssertionPresentByMetavariableNode(metavariableNode) {
    const frameAssertion = this.findFrameAssertionByMetavariableNode(metavariableNode),
          frameAssertionPresent = (frameAssertion !== null);

    return frameAssertionPresent;
  }

  findMetavariableByMetavariableNode(metavariableNode, localMetaContext) {
    const node = metavariableNode,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchNode(node, localMetaContext);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localMetaContext),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          metavariables = [],
          metaproofSteps = [],
          frameAssertions = [],
          localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps, frameAssertions);

    return localMetaContext;
  }

  static fromLocalMetaContext(localMetaContext) {
    const context = localMetaContext,  ///
          metavariables = [],
          metaproofSteps = [],
          frameAssertions = [];

    localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps, frameAssertions);  ///

    return localMetaContext;
  }
}

Object.assign(LocalMetaContext.prototype, contextMixins);

export default LocalMetaContext;