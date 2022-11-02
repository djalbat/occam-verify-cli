"use strict";

import {nodeAsString} from "./utilities/string";

export default class Axiom {
  constructor(labels, statementNode, suppositionStatementNode, consequentStatementNode) {
    this.labels = labels;
    this.statementNode = statementNode;
    this.suppositionStatementNode = suppositionStatementNode;
    this.consequentStatementNode = consequentStatementNode;
  }

  getLabels() {
    return this.labels;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getSuppositionStatementNode() {
    return this.suppositionStatementNode;
  }

  getConsequentStatementNode() {
    return this.consequentStatementNode;
  }

  matchLabelName(labelName) {
    const matchesLabelName = this.labels.some((label) => {
      const name = labelName, ///
            labelMatchesName = label.matchName(name);

      if (labelMatchesName) {
        return true;
      }
    });

    return matchesLabelName;
  }

  asJSON() {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.asJSON();

            return labelJSON;
          }),
          statementString = (this.statementNode === null) ?
                               null :
                                 nodeAsString(this.statementNode),
          consequentStatementString = (this.consequentStatementNode === null) ?
                                         null :
                                           nodeAsString(this.consequentStatementNode),
          suppositionStatementString = (this.suppositionStatementNode === null) ?
                                          null :
                                            nodeAsString(this.suppositionStatementNode),
          labels = labelsJSON,  ///
          statement = statementString,  ///
          consequent = consequentStatementString, ///
          supposition = suppositionStatementString, ///
          json = {
            labels,
            statement,
            consequent,
            supposition
          };

    return json;
  }

  static fromStatementNodeAndLabels(statementNode, labels) {
    const suppositionStatementNode = null,
          consequentStatementNode = null,
          axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);

    return axiom;
  }

  static fromSuppositionStatementNodeConsequentStatementNodeAndLabels(suppositionStatementNode, consequentStatementNode, labels) {
    const statementNode = null,
          axiom = new Axiom(labels, statementNode, suppositionStatementNode, consequentStatementNode);

    return axiom;
  }
}
