"use strict";

class MetaproofContext {
  constructor(context, inPremise, metastatements) {
    this.context = context;
    this.inPremise = inPremise;
    this.metastatements = metastatements;
  }

  getContext() {
    return this.context;
  }

  isInPremise() {
    return this.inPremise;
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

  findRuleByReferenceName(referenceName) { return this.context.findRuleByReferenceName(referenceName); }

  findVariableByVariableName(variableName) { return this.context.findVariableByVariableName(variableName); }

  isLabelPresent(label) { return this.context.isLabelPresent(label); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isVariablePresentByVariableName(variableName) { return this.context.isVariablePresentByVariableName(variableName); }

  setInPremise(inPremise) {
    this.inPremise = inPremise;
  }

  addRule(rule) { this.context.addRule(rule); }

  addMetastatement(metastatement) {
    this.metastatements.push(metastatement);
  }

  static fromContext(context) {
    const inPremise = true,
          metastatements = [],
          metaproofContext = new MetaproofContext(context, inPremise, metastatements);

    return metaproofContext;
  }
}

module.exports = MetaproofContext;
