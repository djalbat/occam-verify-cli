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
    const metastatementNode = (this.conclusion !== null) ?
                                 this.conclusion.getMetastatementNode() :
                                   this.metastatementNode;

    return metastatementNode;
  }

  getMetastatementNodes() {
    const metastatementNodes = (this.premise !== null) ?
                                  this.premise.getMetastatementNodes() :
                                    [];

    return metastatementNodes;
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

