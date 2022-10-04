"use strict";

const { nodeAsString } = require("../utilities/string");

class MetaproofContext {
  constructor(context, derived, metastatementNodes) {
    this.context = context;
    this.derived = derived;
    this.metastatementNodes = metastatementNodes;
  }

  getContext() {
    return this.context;
  }

  isDerived() {
    return this.derived;
  }

  getMetastatementNodes() {
    return this.metastatementNodes;
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

  isMetastatementNodePresent(metaStatementNode) {
    const metastatementNodeA = metaStatementNode; ///

    let metastatementNodePresent = this.metastatementNodes.some((metaStatementNode) => {
      const metastatementNodeB = metaStatementNode, ///
            metastatementNodeAString = nodeAsString(metastatementNodeA),
            metastatementNodeBString = nodeAsString(metastatementNodeB),
            matches = (metastatementNodeAString === metastatementNodeBString);

      if (matches) {
        return true;
      }
    });

    if (!metastatementNodePresent) {
      metastatementNodePresent = this.context.isMetastatementNodePresent(metaStatementNode);
    }

    return metastatementNodePresent;
  }

  isVariablePresentByVariableName(variableName) { return this.context.isVariablePresentByVariableName(variableName); }

  setDerived(derived) {
    if (derived) {
      this.metastatementNodes.pop();
    }

    this.derived = derived;
  }

  addRule(rule) { this.context.addRule(rule); }

  addMetastatementNode(metastatementNode) {
    this.metastatementNodes.push(metastatementNode);
  }

  static fromContext(context) {
    const derived = false,
          metastatementNodes = [],
          metaproofContext = new MetaproofContext(context, derived, metastatementNodes);

    return metaproofContext;
  }
}

module.exports = MetaproofContext;
