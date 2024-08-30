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
    let statementNatches = false;

    const proofSteps = localContext.getProofSteps(),
          substitutions = [],
          premisesMatch = matchPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);

    if (premisesMatch) {
      const conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);

      statementNatches = conclusionMatches;  ///
    }

    return statementNatches;
  }

  matchMetastatement(metastatementNode, localMetaContext) {
    let metastatementNatches = false;

    const metaproofSteps = localMetaContext.getMetaproofSteps(),
          substitutions = [],
          premisesMatch = metaMatchPremises(this.premises, metaproofSteps, substitutions, this.fileContext, localMetaContext);

    if (premisesMatch) {
      const conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, localMetaContext);

      metastatementNatches = conclusionMatches;  ///
    }

    return metastatementNatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.labels.some((label) => {
      const labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);

      if (labelMatchesMetavariableNode) {
        return true;
      }
    });

    return metavariableNodeMatches;
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
    const subproofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, fileContext, localContext);

    premiseMatches = subproofNodeMatches; ///
  }

  if (statementNode !== null) {
    const statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, fileContext, localContext);

    premiseMatches = statementNodeMatches;  ///
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
  const statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, fileContext, localContext),
        conclusionMatches = statementNodeMatches; ///

  return conclusionMatches;
}

function metaMatchPremise(premise, metaproofStep, substitutions, fileContext, localMetaContext) {
  let premiseMatches = false;

  const ruleSubproofNode = metaproofStep.getRuleSubproofNode(),
        metaSubproofNode = metaproofStep.getMetaSubproofNode(),
        metastatementNode = metaproofStep.getMetastatementNode()

  if (ruleSubproofNode !== null) {
    const ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext);

    premiseMatches = ruleSubProofNodeMatches; ///
  }

  if (metaSubproofNode !== null) {
    const metaSubProofNodeMatches = premise.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);

    premiseMatches = metaSubProofNodeMatches; ///
  }

  if (metastatementNode !== null) {
    const metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);

    premiseMatches = metastatementNodeMatches;  ///
  }

  return premiseMatches;
}

function metaMatchPremises(premises, metaproofSteps, substitutions, fileContext, localMetaContext) {
  premises = reverse(premises); ///

  metaproofSteps = reverse(metaproofSteps); ///

  const premisesMatch = correlate(premises, metaproofSteps, (premise, metaproofStep) => {
    const premiseMatches = metaMatchPremise(premise, metaproofStep, substitutions, fileContext, localMetaContext);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatch;
}

function metaMatchConclusion(conclusion, metastatementNode, substitutions, fileContext, localMetaContext) {
  const metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext),
        conclusionMatches = metastatementNodeMatches; ///

  return conclusionMatches;
}
