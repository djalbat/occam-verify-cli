"use strict";

const { labelsAsString } = require("./utilities/string");

class Axiom {
  constructor(labels, consequentStatementNode, antecedentStatementNodes) {
    this.labels = labels;
    this.consequentStatementNode = consequentStatementNode;
    this.antecedentStatementNodes = antecedentStatementNodes;
  }

  getLabels() {
    return this.labels;
  }

  getConsequentStatementNode() {
    return this.consequentStatementNode;
  }

  getAntecedentStatementNodes() {
    return this.antecedentStatementNodes;
  }

  asString() {
    const string = labelsAsString(this.labels);

    return string;
  }

  static fromConsequentStatementNodeAndLabels(consequentStatementNode, labels) {
    const antecedentStatementNodes = [],
          axiom = new Axiom(labels, consequentStatementNode, antecedentStatementNodes);

    return axiom;
  }

  static fromAntecedentStatementNodesConsequentStatementNodeAndLabels(antecedentStatementNodes, consequentStatementNode, labels) {
    const axiom = new Axiom(labels, consequentStatementNode, antecedentStatementNodes);

    return axiom;
  }
}

module.exports = Axiom;

