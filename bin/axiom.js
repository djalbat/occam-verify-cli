"use strict";

const { labelsAsString } = require("./utilities/string");

class Axiom {
  constructor(labels, antecedent, consequent, statementNode) {
    this.labels = labels;
    this.antecedent = antecedent;
    this.consequent = consequent;
    this.statementNode = statementNode;
  }

  getLabels() {
    return this.labels;
  }

  getAntecedent() {
    return this.antecedent;
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
    const antecedent = null,
          consequent = null,
          axiom = new Axiom(labels, antecedent, consequent, statementNode);

    return axiom;
  }

  static fromAntecedentConsequentAndLabels(antecedent, consequent, labels) {
    const statementNode = null,
          axiom = new Axiom(labels, antecedent, consequent, statementNode);

    return axiom;
  }
}

module.exports = Axiom;

