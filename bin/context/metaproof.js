"use strict";

class MetaproofContext {
  constructor(context, derived, metaAssertions) {
    this.context = context;
    this.derived = derived;
    this.metaAssertions = metaAssertions;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
  }

  getMetaAssertions() {
    return this.metaAssertions;
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

  isMetaAssertionPresent(metaAssertion) {
    const metaAssertionB = metaAssertion; ///

    let metaAssertionPresent = this.metaAssertions.some((metaAssertion) => {
      const metaAssertionA = metaAssertion, ///
            matches = metaAssertionA.match(metaAssertionB);

      if (matches) {
        return true;
      }
    });

    if (!metaAssertionPresent) {
      metaAssertionPresent = this.context.isMetaAssertionPresent(metaAssertion);
    }

    return metaAssertionPresent;
  }

  isVariablePresentByVariableName(variableName) { return this.context.isVariablePresentByVariableName(variableName); }

  setDerived(derived) {
    this.derived = derived;
  }

  addRule(rule) { this.context.addRule(rule); }

  addMetaAssertion(metaAssertion) {
    this.metaAssertions.push(metaAssertion);
  }

  static fromContext(context) {
    const derived = false,
          metaAssertions = [],
          metaproofContext = new MetaproofContext(context, derived, metaAssertions);

    return metaproofContext;
  }
}

module.exports = MetaproofContext;
