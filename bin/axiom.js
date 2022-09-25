"use strict";

const { labelsAsString } = require("./utilities/string");

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
    const string = labelsAsString(this.labels);

    return string;
  }

  static fromUnqualifiedStatementNodeAndLabels(unqualifiedStatementNode, labels) {
    const indicativeConditionalNode = null,
          axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);

    return axiom;
  }

  static fromIndicativeConditionalNodeAndLabels(indicativeConditionalNode, labels) {
    const unqualifiedStatementNode = null,
          axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);

    return axiom;
  }
}

module.exports = Axiom;

