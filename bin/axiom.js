"use strict";

class Axiom {
  constructor(labels, unqualifiedStatementNode, indicativeConditionalNode) {
    this.labels = labels;
    this.unqualifiedStatementNode = unqualifiedStatementNode;
    this.indicativeConditionalNode = indicativeConditionalNode;
  }

  getLabels() {
    return this.labels;
  }

  getUnqualifiedStatementNode() {
    return this.unqualifiedStatementNode;
  }

  getIndicativeConditionalNode() {
    return this.indicativeConditionalNode;
  }

  asString() {
    const labelsString = labelsAsLabelsString(this.labels),
          string = `${labelsString}`;

    return string;
  }

  static fromUnqualifiedStatementNodeAndLabels(unqualifiedStatementNode, labels) {
    const indicativeConditionalNode = undefined,
          axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);

    return axiom;
  }

  static fromIndicativeConditionalNodeAndLabels(indicativeConditionalNode, labels) {
    const unqualifiedStatementNode = undefined,
          axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);

    return axiom;
  }
}

module.exports = Axiom;

function labelsAsLabelsString(labels) {
  const labelsString = labels.reduce((labelsString, label) => {
    labelsString = (labelsString === undefined) ?
                     `${label}` :
                       `${labelsString},${label}`;

    return labelsString;
  }, undefined);

  return labelsString;
}
