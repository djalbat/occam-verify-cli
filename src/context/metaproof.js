"use strict";

import loggingMixins from "../mixins/logging";
import metaproofContextMixins from "../mixins/context/metaproof";

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
    let metaAssertions = this.context.getMetaAssertions();

    metaAssertions = [
      ...metaAssertions,
      ...this.metaAssertions
    ];

    return metaAssertions;
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

  addMetaAssertion(metaAssertion) {
    this.metaAssertions.push(metaAssertion);
  }

  matchMetaAssertion(metaAssertion) {
    let metaAssertionMatches;

    const metaAssertionB = metaAssertion; ///

    metaAssertionMatches = this.metaAssertions.some((metaAssertion) => {
      const metaAssertionA = metaAssertion, ///
            matches = metaAssertionA.match(metaAssertionB);

      if (matches) {
        return true;
      }
    });

    if (!metaAssertionMatches) {
      metaAssertionMatches = this.context.matchMetaAssertion(metaAssertion);
    }

    return metaAssertionMatches;
  }

  halt(node) { this.context.halt(node); }

  begin(node) { this.context.begin(node); }

  complete(node) { this.context.complete(node); }

  static fromContext(context) {
    const derived = false,
          metaAssertions = [],
          metaproofContext = new MetaproofContext(context, derived, metaAssertions);

    return metaproofContext;
  }
}

Object.assign(MetaproofContext.prototype, loggingMixins);
Object.assign(MetaproofContext.prototype, metaproofContextMixins);

export default MetaproofContext;