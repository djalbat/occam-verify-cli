"use strict";

import Label from "./label";

import { LEMMA_KIND } from "./kinds";
import { nodeAsString } from "./utilities/string";

import { statementNodeFromStatementJSON } from "./utilities/node";

export default class Lemma {
  constructor(labels, statementNode, suppositionStatementNodes, consequentStatementNode) {
    this.labels = labels;
    this.statementNode = statementNode;
    this.suppositionStatementNodes = suppositionStatementNodes;
    this.consequentStatementNode = consequentStatementNode;
  }

  getLabels() {
    return this.labels;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getSuppositionStatementNodes() {
    return this.suppositionStatementNodes;
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

  toJSON() {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON();

            return labelJSON;
          }),
          statementString = nodeAsString(this.statementNode),
          consequentStatementString = nodeAsString(this.consequentStatementNode),
          suppositionStatementStrings = this.suppositionStatementNodes.map((suppositionStatementNode) => {
            const suppositionStatementString = nodeAsString(suppositionStatementNode);

            return suppositionStatementString;
          }),
          kind = LEMMA_KIND,
          labels = labelsJSON,  ///
          statement = statementString,  ///
          consequent = consequentStatementString, ///
          suppositions = suppositionStatementStrings, ///
          json = {
            kind,
            labels,
            statement,
            consequent,
            suppositions
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, releaseContext);

      return label;
    });

    const { statement, suppositions, consequent } = json;

    let lemma;

    if (statement !== null) {
      const statementJSON = statement,  ///
            statementNode = statementNodeFromStatementJSON(statementJSON, releaseContext),
            suppositionStatementNodes = null,
            consequentStatementNode = null;

      lemma = new Lemma(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
    } else {
      const statementNode = null,
            suppositionStatementsJSON = suppositions,  ///
            suppositionStatementNodes = suppositionStatementsJSON.map((suppositionStatementJSON) => {
              const suppositionStatementNode = statementNodeFromStatementJSON(suppositionStatementJSON, releaseContext);

              return suppositionStatementNode;
            }),
            consequentStatementJSON = consequent, ///
            consequentStatementNode = statementNodeFromStatementJSON(consequentStatementJSON, releaseContext);

      lemma = new Lemma(labels, statementNode, suppositionStatementNodes, consequentStatementNode);
    }

    return lemma;
  }

  static fromLabelsAndStatementNode(labels, statementNode) {
    const suppositionStatementNodes = [],
          consequentStatementNode = null,
          lemma = new Lemma(labels, statementNode, suppositionStatementNodes, consequentStatementNode);

    return lemma;
  }

  static fromLabelsSuppositionStatementNodesAndConsequentStatementNode(labels, suppositionStatementNodes, consequentStatementNode) {
    const statementNode = null,
          lemma = new Lemma(labels, statementNode, suppositionStatementNodes, consequentStatementNode);

    return lemma;
  }
}