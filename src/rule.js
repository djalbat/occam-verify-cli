"use strict";

import Label from "./label";
import Premise from "./premise";
import Conclusion from "./conclusion";

import { reverse, correlate } from "./utilities/array";

export default class Rule {
  constructor(labels, premises, conclusion, fileContext) {
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
    this.fileContext = fileContext;
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

  getFileContext() {
    return this.fileContext;
  }

  matchStatement(statementNode, localContext) {
    let matchesStatement = false;

    const proofSteps = localContext.getProofSteps(),
          substitutions = [],
          premisesMatch = matchPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);

    if (premisesMatch) {
      const conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);

      matchesStatement = conclusionMatches;  ///
    }

    return matchesStatement;
  }

  matchMetavariableNode(metavariableNode) {
    const matchesMetavariableNode = this.labels.some((label) => {
      const labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);

      if (labelMatchesMetavariableNode) {
        return true;
      }
    });

    return matchesMetavariableNode;
  }

  toJSON(tokens) {
    const labelsJSON = this.labels.map((label) => {
            const labelJSON = label.toJSON(tokens);

            return labelJSON;
          }),
          premisesJSON = this.premises.map((premise) => {
            const premiseJSON = premise.toJSON(tokens);

            return premiseJSON;
          }),
          conclusionJSON = this.conclusion.toJSON(tokens),
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

  static fromJSONAndFileContext(json, fileContext) {
    let rule;

    let { labels } = json;

    const labelsJSON = labels;  ///

    labels = labelsJSON.map((labelJSON) => {
      const json = labelJSON, ///
            label = Label.fromJSONAndFileContext(json, fileContext);

      return label;
    });

    let { premises } = json;

    const premisesJSON = premises;  ///

    premises = premisesJSON.map((premiseJSON) => {
      const json = premiseJSON, ///
            premise = Premise.fromJSONAndFileContext(json, fileContext);

      return premise;
    });

    let { conclusion } = json;

    const conclusionJSON = conclusion;  ///

    json = conclusionJSON;  ///

    conclusion = Conclusion.fromJSONAndFileContext(json, fileContext);

    rule = new Rule(labels, premises, conclusion, fileContext);

    return rule;
  }

  static fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext) {
    const rule = new Rule(labels, premises, conclusion, fileContext);

    return rule;
  }
}

function matchPremise(premise, proofStep, substitutions, fileContext, localContext) {
  let premiseMatches = false;

  const subproofNode = proofStep.getSubproofNode(),
        statementNode = proofStep.getStatementNode();

  if (subproofNode !== null) {
    const premiseMatchesSubproofNode = premise.matchSubproofNode(subproofNode, substitutions, fileContext, localContext);

    premiseMatches = premiseMatchesSubproofNode; ///
  }

  if (statementNode !== null) {
    const premiseMatchesStatementNode = premise.matchStatementNode(statementNode, substitutions, fileContext, localContext);

    premiseMatches = premiseMatchesStatementNode;  ///
  }

  return premiseMatches;
}

function matchPremises(premises, proofSteps, substitutions, fileContext, localContext) {
  premises = reverse(premises); ///

  proofSteps = reverse(proofSteps); ///

  const premisesMatch = correlate(premises, proofSteps, (premise, proofStep) => {
    const premiseMatches = matchPremise(premise, proofStep, substitutions, fileContext, localContext);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function matchConclusion(conclusion, statementNode, substitutions, fileContext, localContext) {
  const conclusionMatchesStatementNode = conclusion.matchStatementNode(statementNode, substitutions, fileContext, localContext),
        conclusionMatches = conclusionMatchesStatementNode; ///

  return conclusionMatches;
}
