"use strict";

import { contextUtilities } from "occam-furtle";

const { chainContext } = contextUtilities;

export default class SyntheticContext {
  constructor(context, generalContext, specificContext) {
    this.context = context;
    this.generalContext = generalContext;
    this.specificContext = specificContext;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getGeneralContext() {
    return this.generalContext;
  }

  getSpecificContext() {
    return this.specificContext;
  }

  findTermByTermNode(termNode) { return this.specificContext.findTermByTermNode(termNode); }

  findFrameByFrameNode(frameNode) { return this.specificContext.findFrameByFrameNode(frameNode); }

  findTypeByNominalTypeName(nominalTypeName) { return this.specificContext.findTypeByNominalTypeName(nominalTypeName); }

  isTypePresentByNominalTypeName(nominalTypeName) { return this.specificContext.isTypePresentByNominalTypeName(nominalTypeName); }

  findVariableByVariableIdentifier(variableIdentifier) { return this.generalContext.findVariableByVariableIdentifier(variableIdentifier); }

  findMetavariableByMetavariableName(metavariableName) { return this.generalContext.findMetavariableByMetavariableName(metavariableName); }

  isVariablePresentByVariableIdentifier(variableIdentifier) { this.generalContext.isVariablePresentByVariableIdentifier(variableIdentifier); }

  isMetavariablePresentByMetavariableName(metavariableName) { this.generalContext.isMetavariablePresentByMetavariableName(metavariableName); }

  getFileContext() { return this.context.getFileContext(); }

  getDepth() {
    let depth = this.context.getDepth();

    depth++;

    return depth;
  }

  static fromNothing(generalContext, specificContext) {
    const context = specificContext,  ///
          syntheticContext = new SyntheticContext(context, generalContext, specificContext);

    return syntheticContext;
  }
}
