"use strict";

import contextMixins from "../mixins/context";

import { last } from "../utilities/array";

class LocalMetaContext {
  constructor(context, judgements, metavariables, metaproofSteps) {
    this.context = context;
    this.judgements = judgements;
    this.metavariables = metavariables;
    this.metaproofSteps = metaproofSteps;
  }

  getContext() {
    return this.context;
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

  findJudgementByMetavariableNode(metavariableNode) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const metavariableMatches = judgement.matchMetavariableNode(metavariableNode);

            if (metavariableMatches) {
              return true;
            }
          }) || null;

    return judgement;
  }

  isVariablePresentByVariableNode(variableNode) {
    const variable = this.findVariableByVariableNode(variableNode),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isJudgementPresentByMetavariableNode(metavariableNode) {
    const judgement = this.findJudgementByMetavariableNode(metavariableNode),
          judgementPresent = (judgement !== null);

    return judgementPresent;
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
          judgements = [],
          metavariables = [],
          metaproofSteps = [],
          localMetaContext = new LocalMetaContext(context, judgements, metavariables, metaproofSteps);

    return localMetaContext;
  }

  static fromLocalMetaContext(localMetaContext) {
    const context = localMetaContext,  ///
          judgements = [],
          metavariables = [],
          metaproofSteps = [];

    localMetaContext = new LocalMetaContext(context, judgements, metavariables, metaproofSteps);  ///

    return localMetaContext;
  }
}

Object.assign(LocalMetaContext.prototype, contextMixins);

export default LocalMetaContext;