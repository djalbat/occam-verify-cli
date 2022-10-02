"use strict";

class MetaproofContext {
  constructor(context, derived, metastatements) {
    this.context = context;
    this.derived = derived;
    this.metastatements = metastatements;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
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

  setDerived(derived) {
    this.derived = derived;
  }

  addRule(rule) { this.context.addRule(rule); }

  addMetastatement(metastatement) {
    this.metastatements.push(metastatement);
  }

  static fromContext(context) {
    const derived = false,
          metastatements = [],
          metaproofContext = new MetaproofContext(context, derived, metastatements);

    return metaproofContext;
  }
}

module.exports = MetaproofContext;
