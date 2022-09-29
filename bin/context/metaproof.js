"use strict";

class MetaproofContext {
  constructor(context, inAntecedent, metastatements) {
    this.context = context;
    this.inAntecedent = inAntecedent;
    this.metastatements = metastatements;
  }

  getContext() {
    return this.context;
  }

  isInAntecedent() {
    return this.inAntecedent;
  }

  getMetastatements() {
    return this.metastatements;
  }

  getRules() { return this.context.getRules(); }

  getTypes() { return this.context.getTypes(); }

  getAxioms() { return this.context.getAxioms(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findVariableByVariableName(variableName) { return this.context.findVariableByVariableName(variableName); }

  isLabelPresent(label) { return this.context.isLabelPresent(label); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isVariablePresentByVariableName(variableName) { return this.context.isVariablePresentByVariableName(variableName); }

  setInAntecedent(inAntecedent) {
    this.inAntecedent = inAntecedent;
  }

  addMetastatement(metastatement) {
    this.metastatements.push(metastatement);
  }

  static fromContext(context) {
    const inAntecedent = true,
          metastatements = [],
          metaproofContext = new MetaproofContext(context, metastatements, inAntecedent);

    return metaproofContext;
  }
}

module.exports = MetaproofContext;
