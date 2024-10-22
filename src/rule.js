"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";
import LocalContext from "./context/local";

import { stringFromLabels } from "./topLevelAssertion";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { labelsFromJSON,
         premisesFromJSON,
         conclusionFromJSON,
         labelsToLabelsJSON,
         premisesToPremisesJSON,
         conclusionToConclusionJSON } from "./utilities/json";

const { extract, reverse, backwardsEvery } = arrayUtilities;

const proofNodeQuery = nodeQuery("/rule/proof"),
      labelNodesQuery = nodesQuery("/rule/label"),
      premiseNodesQuery = nodesQuery("/rule/premise"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion");

class Rule {
  constructor(fileContext, string, labels, premises, conclusion, proof) {
    this.fileContext = fileContext;
    this.string = string;
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
    this.proof = proof;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
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
    let statementUnified;

    const { Substitutions } = shim,
          substitutions = Substitutions.fromNothing(),
          conclusionUnified = this.unifyConclusion(statement, substitutions, localContext);

    if (conclusionUnified) {
      const premisesUnified = this.unifyPremises(substitutions, localContext);

      if (premisesUnified) {
        const substitutionsResolved = substitutions.areResolved();

        statementUnified = substitutionsResolved; ///
      }
    }

    return statementUnified;
  }

  unifyConclusion(statement, substitutions, localContext) {
    let conclusionUnified;

    const conclusionString = this.conclusion.getString();

    localContext.trace(`Unifying the '${conclusionString}' conclusion...`);

    const statementUnified = this.conclusion.unifyStatement(statement, substitutions, localContext);  ///

    conclusionUnified = statementUnified; ///

    if (conclusionUnified) {
      localContext.debug(`...unified the '${conclusionString}' conclusion`);
    }

    return conclusionUnified;
  }

  unifyPremises(substitutions, localContext) {
    let proofSteps = localContext.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    const premisesUnified = backwardsEvery(this.premises, (premise) => {
      const premiseUnified = this.unifyPremise(premise, proofSteps, substitutions, localContext);

      if (premiseUnified) {
        return true;
      }
    });

    return premisesUnified;
  }

  unifyPremise(premise, proofSteps, substitutions, localContext) {
    let premiseUnified  =false;

    const premiseString = premise.getString();

    localContext.trace(`Unifying the '${premiseString}' premise...`);

    const premiseResolvedIndependently = premise.resolveIndependently(substitutions, localContext);

    if (premiseResolvedIndependently) {
      premiseUnified = true;
    } else {
      const proofStep = extract(proofSteps, (proofStep) => {
        const proofStepUnified = premise.unifyProofStep(proofStep, substitutions, localContext);

        if (proofStepUnified) {
          return true;
        }
      });

      if (proofStep !== null) {
        premiseUnified = true;
      }
    }

    if (premiseUnified) {
      localContext.debug(`...unified the '${premiseString}' premise.`);
    }

    return premiseUnified;
  }

  verify() {
    let verified = false;

    const ruleString = this.string; ///

    this.fileContext.trace(`Verifying the '${ruleString}' rule...`);

    const labelsVerifiedWhenDeclared = this.labels.every((label) => {
      const labelVVerifiedWhenDeclared = label.verifyWhenDeclared(this.fileContext);

      if (labelVVerifiedWhenDeclared) {
        return true;
      }
    });

    if (labelsVerifiedWhenDeclared) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
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
            const { Substitutions } = shim,
                  substitutions = Substitutions.fromNothing();

            proofVerified = this.proof.verify(substitutions, this.conclusion, localContext);
          }

          if (proofVerified) {
            const rule = this;  ///

            this.fileContext.addRule(rule);

            verified = true;
          }
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${ruleString}' rule.`);
    }

    return verified;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          premisesJSON = premisesToPremisesJSON(this.premises),
          conclusionJSON = conclusionToConclusionJSON(this.conclusion),
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

    const proof = null,
          labels = labelsFromJSON(json, fileContext),
          premises = premisesFromJSON(json, fileContext),
          conclusion = conclusionFromJSON(json, fileContext),
          string = stringFromLabels(labels);

    rule = new Rule(fileContext, string, labels, premises, conclusion, proof);

    return rule;
  }

  static fromRuleNode(ruleNode, fileContext) {
    const { Label, Proof, Premise, Conclusion } = shim,
          proofNode = proofNodeQuery(ruleNode),
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
          string = stringFromLabels(labels),
          proof = Proof.fromProofNode(proofNode, fileContext),
          rule = new Rule(fileContext, string, labels, premises, conclusion, proof);

    return rule;
  }
}

Object.assign(shim, {
  Rule
});

export default Rule;
