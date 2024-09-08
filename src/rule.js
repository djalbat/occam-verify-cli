"use strict";

import Label from "./label";
import Premise from "./premise";
import Conclusion from "./conclusion";
import Substitutions from "./substitutions";

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

  unifyStatement(statementNode, localContext) {
    let statementUnified = false;

    const proofSteps = localContext.getProofSteps(),
          substitutions = Substitutions.fromNothing(),
          premisesUnified = unifyPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);

    if (premisesUnified) {
      const conclusionUnified = unifyConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);

      statementUnified = conclusionUnified;  ///
    }

    return statementUnified;
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
  let premiseUnified = false;

  const subproofNode = proofStep.getSubproofNode(),
        statementNode = proofStep.getStatementNode();

  substitutions.snapshot();

  if (subproofNode !== null) {
    const subproofUnified = premise.unifySubproof(subproofNode, substitutions, fileContext, localContext);

    premiseUnified = subproofUnified; ///
  }

  if (statementNode !== null) {
    const statementUnified = premise.unifyStatement(statementNode, substitutions, fileContext, localContext);

    premiseUnified = statementUnified;  ///
  }

  premiseUnified ?
    substitutions.continue() :
      substitutions.rollback();

  return premiseUnified;
}

function unifyPremises(premises, proofSteps, substitutions, fileContext, localContext) {
  premises = reverse(premises); ///

  proofSteps = reverse(proofSteps); ///

  const premisesUnified = correlate(premises, proofSteps, (premise, proofStep) => {
    const premiseUnified = matchPremise(premise, proofStep, substitutions, fileContext, localContext);

    if (premiseUnified) {
      return true;
    }
  });

  return premisesUnified;
}

function unifyConclusion(conclusion, statementNode, substitutions, fileContext, localContext) {
  let conclusionUnified;

  substitutions.snapshot();

  const statementUnified = conclusion.unifyStatement(statementNode, substitutions, fileContext, localContext);

  conclusionUnified = statementUnified; ///

  conclusionUnified ?
    substitutions.continue() :
      substitutions.rollback();

  return conclusionUnified;
}
