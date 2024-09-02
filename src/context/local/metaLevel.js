"use strict";

import IntrinsicLevelLocalContext from "../../context/local/intrinsicLevel";

import { last, reverse } from "../../utilities/array";

class MetaLevelLocalContext extends IntrinsicLevelLocalContext {
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

  isIntrinsicLevel() {
    const intrinsicLevel = false;

    return intrinsicLevel;
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
            const metavariableMatchesNode = metavariable.matchNode(node);

            if (metavariableMatchesNode) {
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

  matchMetastatementNode(metastatementNode) {
    let metaproofSteps = this.getMetaproofSteps();

    metaproofSteps = reverse(metaproofSteps); ///

    const matchesMetastatementNode = metaproofSteps.some((metaproofStep) => {
      const metaproofStepMatchesMetastatementNode = metaproofStep.matchMetastatementNode(metastatementNode);

      if (metaproofStepMatchesMetastatementNode) {
        return true;
      }
    });

    return matchesMetastatementNode;
  }

  findMetavariableByMetavariableNode(metavariableNode, metaLevelLocalContext) {
    const node = metavariableNode,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchNode(node, metaLevelLocalContext);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findFrameAssertionByMetavariableNode(metavariableNode) {
    const frameAssertions = this.getFrameAssertions(),
          frameAssertion = frameAssertions.find((frameAssertion) => {
            const frameAssertionMatchesMetavariableNode = frameAssertion.matchMetavariableNode(metavariableNode);

            if (frameAssertionMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return frameAssertion;
  }

  isMetavariablePresentByMetavariableNode(metavariableNode, metaLevelLocalContext) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode, metaLevelLocalContext),
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
          metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions);

    return metaLevelLocalContext;
  }

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          metavariables = [],
          metaproofSteps = [],
          frameAssertions = [],
          metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, metavariables, metaproofSteps, frameAssertions);  ///

    return metaLevelLocalContext;
  }
}

export default MetaLevelLocalContext;