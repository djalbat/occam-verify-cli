"use strict";

import IntrinsicLevelLocalContext from "../../context/local/intrinsicLevel";

import { last, reverse } from "../../utilities/array";

class MetaLevelLocalContext extends IntrinsicLevelLocalContext {
  constructor(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps) {
    super(context, variables, proofSteps, equivalences);

    this.judgements = judgements;
    this.metavariables = metavariables;
    this.metaproofSteps = metaproofSteps;
  }

  getJudgements() {
    let judgements = this.context.getJudgements();

    judgements = [ ///
      ...this.judgements,
      ...judgements
    ]

    return judgements;
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

  addJudgement(judgement) {
    let judgementAdded = false;

    const metavariableNode = judgement.getMetavariableNode(),
          judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode);

    if (!judgementPresent) {
      this.judgements.push(judgement);

      judgementAdded = true;
    }

    return judgementAdded;
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

  findJudgementByMetavariableNode(metavariableNode) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMatchesMetavariableNode = judgement.matchMetavariableNode(metavariableNode);

            if (judgementMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return judgement;
  }

  isMetavariablePresentByMetavariableNode(metavariableNode, metaLevelLocalContext) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode, metaLevelLocalContext),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isJudgementPresentByMetavariableNode(metavariableNode) {
    const judgement = this.findJudgementByMetavariableNode(metavariableNode),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          judgements = [],
          metavariables = [],
          metaproofSteps = [],
          metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps);

    return metaLevelLocalContext;
  }

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          judgements = [],
          metavariables = [],
          metaproofSteps = [],
          metaLevelLocalContext = new MetaLevelLocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps);  ///

    return metaLevelLocalContext;
  }
}

export default MetaLevelLocalContext;