"use strict";

const { labelsAsString } = require("./utilities/string");

class Rule {
  constructor(labels, premises, conclusion) {
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
  }

  getLabels() {
    return this.labels;
  }

  getPremises() {
    return this.premises;
  }

  getConclusion() {
    return this.conclusion;
  }

  asString() {
    const string = labelsAsString(this.labels);

    return string;
  }

  static fromPremisesConclusionAndLabels(premises, conclusion, labels) {
    const rule = new Rule(labels, premises, conclusion);

    return rule;
  }
}

module.exports = Rule;

