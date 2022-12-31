"use strict";

import Label from "./label";

import { AXIOM_KIND } from "./kinds";
import { nodeAsString } from "./utilities/string";

import { unqualifiedStatementNodeFromUnqualifiedStatementString, indicativeConditionalNodeFromIndicativeConditionalString } from "./utilities/string";

export default class Axiom {
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
          unqualifiedStatementString = nodeAsString(this.unqalifiedStatementNode),
          indicativeConditionalString = nodeAsString(this.indicativeConditionalNode),
          kind = AXIOM_KIND,
          labels = labelsJSON,  ///
          unqualifiedStatement = unqualifiedStatementString,  ///
          indicativeConditional = indicativeConditionalString,  ///
          json = {
            kind,
            labels,
            unqualifiedStatement,
            indicativeConditional
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

    let { unqualifiedStatement, indicativeConditional } = json;

    let unqualifiedStatementNode = null,
        indicativeConditionalNode = null;

    if (unqualifiedStatement !== null) {
      const unqualifiedStatementString = unqualifiedStatement;  ///

      unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementString(unqualifiedStatementString, releaseContext);
    }

    if (indicativeConditional !== null) {
      const indicativeConditionalString = indicativeConditional;  ///

      indicativeConditionalNode = indicativeConditionalNodeFromIndicativeConditionalString(indicativeConditionalString, releaseContext);
    }

    const axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);

    return axiom;
  }

  static fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode(labels, unqualifiedStatementNode, indicativeConditionalNode) {
    const axiom = new Axiom(labels, unqualifiedStatementNode, indicativeConditionalNode);

    return axiom;
  }
}
