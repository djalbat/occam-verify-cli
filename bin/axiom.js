'use strict';

class Axiom {
  constructor(statementNode, labels) {
    this.statementNode = statementNode;
    this.labels = labels;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getLabels() {
    return this.labels;
  }

  asString() {
    const labelsString = labelsAsLabelsString(this.labels),
          string = `${labelsString}`;

    return string;
  }

  static fromStatementNodeAndLabels(statementNode, labels) {
    const axiom = new Axiom(statementNode, labels);

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
