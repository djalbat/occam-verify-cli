"use strict";

import LocalContext from "../context/local";

import { last, reverse } from "../utilities/array";

class LocalMetaContext extends LocalContext {
  constructor(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions) {
    super(context, variables, proofSteps, equivalences);

    this.metavariables = metavariables;
    this.metaproofSteps = metaproofSteps;
    this.frameAssertions = frameAssertions;
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
    let metaproofSteps = this.getMetaproofSteps();

    metaproofSteps = reverse(metaproofSteps); ///

    const metastatementMatches = metaproofSteps.some((metaproofStep) => {
      const proofStepMatchesMetastatement = metaproofStep.matchMetastatement(metastatementNode);

      if (proofStepMatchesMetastatement) {
        return true;
      }
    });

    return metastatementMatches;
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

  isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localMetaContext),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isFrameAssertionPresentByMetavariableNode(metavariableNode) {
    const frameAssertion = this.findFrameAssertionByMetavariableNode(metavariableNode),
          frameAssertionPresent = (frameAssertion !== null);

    return frameAssertionPresent;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          metavariables = [],
          metaproofSteps = [],
          frameAssertions = [],
          localMetaContext = new LocalMetaContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions);

    return localMetaContext;
  }

  static fromLocalMetaContext(localMetaContext) {
    const context = localMetaContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          metavariables = [],
          metaproofSteps = [],
          frameAssertions = [];

    localMetaContext = new LocalMetaContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions);  ///

    return localMetaContext;
  }
}

export default LocalMetaContext;