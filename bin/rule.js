"use strict";

const { labelsAsString } = require("./utilities/string");

class Rule {
  constructor(labels, premise, conclusion, metastatementNode) {
    this.labels = labels;
    this.premise = premise;
    this.conclusion = conclusion;
    this.metastatementNode = metastatementNode;
  }

  getLabels() {
    return this.labels;
  }

  getPremise() {
    return this.premise;
  }

  getConclusion() {
    return this.conclusion;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  asString() {
    const string = labelsAsString(this.labels);

    return string;
  }

  static fromMetastatementNodeAndLabels(metastatementNode, labels) {
    const premise = null,
          conclusion = null,
          rule = new Rule(labels, premise, conclusion, metastatementNode);

    return rule;
  }

  static fromPremiseConclusionAndLabels(premise, conclusion, labels) {
    const metastatementNode = null,
          rule = new Rule(labels, premise, conclusion, metastatementNode);

    return rule;
  }
}

module.exports = Rule;

