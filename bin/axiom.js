"use strict";

const { labelsAsString } = require("./utilities/string");

class Axiom {
  constructor(labels, supposition, consequent, statementNode) {
    this.labels = labels;
    this.supposition = supposition;
    this.consequent = consequent;
    this.statementNode = statementNode;
  }

  getLabels() {
    return this.labels;
  }

  getSupposition() {
    return this.supposition;
  }

  getConsequent() {
    return this.consequent;
  }

  getStatementNode() {
    return this.statementNode;
  }

  asString() {
    const string = labelsAsString(this.labels);

    return string;
  }

  static fromStatementNodeAndLabels(statementNode, labels) {
    const supposition = null,
          consequent = null,
          axiom = new Axiom(labels, supposition, consequent, statementNode);

    return axiom;
  }

  static fromSuppositionConsequentAndLabels(supposition, consequent, labels) {
    const statementNode = null,
          axiom = new Axiom(labels, supposition, consequent, statementNode);

    return axiom;
  }
}

module.exports = Axiom;

