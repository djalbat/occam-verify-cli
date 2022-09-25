"use strict";

const { labelsAsString } = require("./utilities/string");

class Rule {
  constructor(labels, premiseMetastatementNodes, conclusionMetastatementNode) {
    this.labels = labels;
    this.premiseMetastatementNodes = premiseMetastatementNodes;
    this.conclusionMetastatementNode = conclusionMetastatementNode;
  }

  getLabels() {
    return this.labels;
  }

  getPremiseMetastatementNodes() {
    return this.premiseMetastatementNodes;
  }

  getConclusionMetastatementNode() {
    return this.conclusionMetastatementNode;
  }

  asString() {
    const string = labelsAsString(this.labels);

    return string;
  }

  static fromPremiseUnqualifiedMetastatementNodesConclusionUnqualifiedMetastatementNodeAndLabels(premiseMetastatementNodes, conclusionMetastatementNode, labels) {
    const rule = new Rule(labels, premiseMetastatementNodes, conclusionMetastatementNode);

    return rule;
  }
}

module.exports = Rule;
