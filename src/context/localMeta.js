"use strict";

import contextMixins from "../mixins/context";

import { last } from "../utilities/array";

class LocalMetaContext {
  constructor(context, metavariables, metaproofSteps) {
    this.context = context;
    this.metavariables = metavariables;
    this.metaproofSteps = metaproofSteps;
  }

  getContext() {
    return this.context;
  }

  getTermType(term) {
    const termType = term.getType();

    return termType;
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

  getLastMetaproofStep() {
    let lastMetaproofStep = null;

    const metaproofStepsLength = this.metaproofSteps.length;

    if (metaproofStepsLength > 0) {
      lastMetaproofStep = last(this.metaproofSteps);
    }

    return lastMetaproofStep;
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

  isVariablePresentByVariableNode(variableNode) {
    const variable = this.findVariableByVariableNode(variableNode),
          variablePresent = (variable !== null);

    return variablePresent;
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
          localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps);

    return localMetaContext;
  }

  static fromLocalMetaContext(localMetaContext) {
    const context = localMetaContext,  ///
          metavariables = [],
          metaproofSteps = [];

    localMetaContext = new LocalMetaContext(context, metavariables, metaproofSteps);  ///

    return localMetaContext;
  }
}

Object.assign(LocalMetaContext.prototype, contextMixins);

export default LocalMetaContext;