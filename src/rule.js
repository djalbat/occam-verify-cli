"use strict";

import Substitutions from "./substitutions";
import resolveSubstitutions from "./resolve/substitutions";
import unifyPremisesWithProofSteps from "./unify/premisesWithProofSteps";
import unifyConclusionWithStatement from "./unify/conclusionWithStatement";

export default class Rule {
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

  unifyStatement(statementNode, localContext) {
    let statementUnified = false;

    const substitutions = Substitutions.fromNothing(),
          proofSteps = localContext.getProofSteps(),
          premisesA = this.premises,
          proofStepsB = proofSteps, ///
          fileContextA = this.fileContext,  ///
          localContextB = localContext, ///
          premisesUnified = unifyPremisesWithProofSteps(premisesA, proofStepsB, substitutions, fileContextA, localContextB);

    if (premisesUnified) {
      const conclusionA = this.conclusion,  ///
            conclusionUnified = unifyConclusionWithStatement(conclusionA, statementNode, substitutions, fileContextA, localContextB);

      if (conclusionUnified) {
        const substitutionsResolved = resolveSubstitutions(substitutions, fileContextA, localContextB);

        statementUnified = substitutionsResolved; ///
      }
    }

    return statementUnified;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.labels.some((label) => {
      const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return metavariableNodeMatches;
  }

  toJSON(fileContext) {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON(fileContext);

            return labelJSON;
          }),
          premisesJSON = this.premises.map((premise) => {
            const premiseJSON = premise.toJSON(fileContext);

            return premiseJSON;
          }),
          conclusionJSON = this.conclusion.toJSON(fileContext),
          labels = labelsJSON,  ///
          premises = premisesJSON,  ///
          conclusion = conclusionJSON,  ///
          json = {
            labels,
            premises,
            conclusion
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let rule;

    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSON(json, fileContext);

      return label;
    });

    let { premises } = json;

    const premisesJSON = premises;  ///

    premises = premisesJSON.map((premiseJSON) => {
      const json = premiseJSON, ///
            premise = Premise.fromJSON(json, fileContext);

      return premise;
    });

    let { conclusion } = json;

    const conclusionJSON = conclusion;  ///

    json = conclusionJSON;  ///

    conclusion = Conclusion.fromJSON(json, fileContext);

    rule = new Rule(labels, premises, conclusion);

    return rule;
  }

  static fromRuleNodeLabelsPremisesAndConclusion(ruleNode, labels, premises, conclusion) {
    const rule = new Rule(labels, premises, conclusion);

    return rule;
  }
}
