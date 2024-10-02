"use strict";

import Label from "./label";
import Proof from "./proof";
import Premise from "./premise";
import Conclusion from "./conclusion";
import LocalContext from "./context/local";
import Substitutions from "./substitutions";

import { reverse, correlate } from "./utilities/array";
import { nodeQuery, nodesQuery } from "./utilities/query";

const proofNodeQuery = nodeQuery("/rule/proof"),
      labelNodesQuery = nodesQuery("/rule/label"),
      premiseNodesQuery = nodesQuery("/rule/premise"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion");

export default class Rule {
  constructor(fileContext, labels, premises, conclusion, proof) {
    this.fileContext = fileContext;
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
    this.proof = proof;
  }

  getFileContext() {
    return this.fileContext;
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

  getProof() {
    return this.proof;
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

  unifyStatement(statement, localContext) {
    let statementUnified = false;

    const proofSteps = localContext.getProofSteps(),
          substitutions = Substitutions.fromNothing(),
          proofStepsUnified = this.unifyProofSteps(proofSteps, substitutions, localContext);

    if (proofStepsUnified) {
      statementUnified = this.conclusion.unifyStatement(statement, substitutions, localContext);
    }

    return statementUnified;
  }

  unifyProofSteps(proofSteps, substitutions, localContext) {
    let proofStepsUnified;

    let premises = this.premises;

    premises = reverse(premises); ///

    proofSteps = reverse(proofSteps); ///

    proofStepsUnified = correlate(premises, proofSteps, (premise, proofStep) => {
      const proofStepUnified = premise.unifyProofStep(proofStep, substitutions, localContext);

      if (proofStepUnified) {
        return true;
      }
    });

    return proofStepsUnified;
  }

  verify(fileContext) {
    let verified = false;

    const labelsString = labelsStringFromLabels(this.labels);

    fileContext.trace(`Verifying the '${labelsString}' rule...`);

    const labelsVerified = this.labels.every((label) => {
      const labelVVerified = label.verify(fileContext);

      if (labelVVerified) {
        return true;
      }
    });

    if (labelsVerified) {
      const localContext = LocalContext.fromFileContext(fileContext),
            premisesVerified = this.premises.every((premise) => {
              const premiseVerified = premise.verify(localContext);

              if (premiseVerified) {
                return true;
              }
            });

      if (premisesVerified) {
        const conclusionVerified = this.conclusion.verify(localContext);

        if (conclusionVerified) {
          let proofVerified = true; ///

          if (this.proof !== null) {
            const substitutions = Substitutions.fromNothing();

            proofVerified = this.proof.verify(substitutions, this.conclusion, localContext);
          }

          if (proofVerified) {
            const rule = this;  ///

            fileContext.addRule(rule);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      fileContext.debug(`...verified the '${labelsString}' rule.`);
    }

    return verified;
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

    const proof = null;

    rule = new Rule(fileContext, labels, premises, conclusion, proof);

    return rule;
  }

  static fromRuleNode(ruleNode, fileContext) {
    const proofNode = proofNodeQuery(ruleNode),
          labelNodes = labelNodesQuery(ruleNode),
          premiseNodes = premiseNodesQuery(ruleNode),
          conclusionNode = conclusionNodeQuery(ruleNode),
          labels = labelNodes.map((labelNode) => {
            const label = Label.fromLabelNode(labelNode, fileContext);

            return label;
          }),
          premises = premiseNodes.map((premiseNode) => {
            const premise = Premise.fromPremiseNode(premiseNode, fileContext);

            return premise;
          }),
          conclusion = Conclusion.fromConclusionNode(conclusionNode, fileContext),
          proof = Proof.fromProofNode(proofNode, fileContext),
          rule = new Rule(fileContext, labels, premises, conclusion, proof);

    return rule;
  }
}

function labelsStringFromLabels(labels) {
  const labelsString = labels.map((label) => {
          const labelString = label.getString();

          return labelString;
        });

  return labelsString;
}