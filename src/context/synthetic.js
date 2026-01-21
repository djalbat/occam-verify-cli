"use strict";

import { chainContext } from "../utilities/context";

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

  findTermByTermNode(termNode) { return this.specificContext.findTermByTermNode(termNode) || this.generalContext.findTermByTermNode(termNode); }

  findFrameByFrameNode(frameNode) { return this.specificContext.findFrameByFrameNode(frameNode) || this.generalContext.findFrameByFrameNode(frameNode); }

  findTypeByNominalTypeName(nominalTypeName) { return this.specificContext.findTypeByNominalTypeName(nominalTypeName) || this.generalContext.findTypeByNominalTypeName(nominalTypeName); }

  findVariableByVariableIdentifier(variableIdentifier) { return this.specificContext.findVariableByVariableIdentifier(variableIdentifier) || this.generalContext.findVariableByVariableIdentifier(variableIdentifier); }

  findMetavariableByMetavariableName(metavariableName) { return this.specificContext.findMetavariableByMetavariableName(metavariableName) || this.generalContext.findMetavariableByMetavariableName(metavariableName); }

  isTypePresentByNominalTypeName(nominalTypeName) { return this.specificContext.isTypePresentByNominalTypeName(nominalTypeName) || this.generalContext.isTypePresentByNominalTypeName(nominalTypeName); }

  isVariablePresentByVariableIdentifier(variableIdentifier) { return this.specificContext.isVariablePresentByVariableIdentifier(variableIdentifier) || this.generalContext.isVariablePresentByVariableIdentifier(variableIdentifier); }

  isMetavariablePresentByMetavariableName(metavariableName) { return this.specificContext.isMetavariablePresentByMetavariableName(metavariableName) || this.generalContext.isMetavariablePresentByMetavariableName(metavariableName); }

  static fromNothing(generalContext, specificContext) {
    const context = specificContext,  ///
          syntheticContext = new SyntheticContext(context, generalContext, specificContext);

    return syntheticContext;
  }
}
