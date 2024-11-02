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

  matchStatementNode(statementNode) { return this.conclusion.matchStatementNode(statementNode); }

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = this.labels.some((label) => {
      const metavariableNameMatches = label.matchMetavariableName(metavariableName);

      if (metavariableNameMatches) {
        return true;
      }
    });

    return metavariableNameMatches;
  }

  unifyStatementAndProofSteps(statement, proofSteps, context) {
    let statementAndProofStepsUnified;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context; ///

    const { Substitutions } = shim,
          substitutions = Substitutions.fromNothing(),
          statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);

    if (statementUnifiedWithConclusion) {
      const proofStepsUnifiedWithPremises = this.unifyProofStepsWithPremises(proofSteps, substitutions, generalContext, specificContext);

      if (proofStepsUnifiedWithPremises) {
        const substitutionsResolved = substitutions.areResolved();

        statementAndProofStepsUnified = substitutionsResolved; ///
      }
    }

    return statementAndProofStepsUnified;
  }

  unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext) {
    let statementUnifiedWithConclusion;

    const statementUnified = this.conclusion.unifyStatement(statement, substitutions, generalContext, specificContext);

    statementUnifiedWithConclusion = statementUnified; ///

    return statementUnifiedWithConclusion;
  }

  unifyProofStepsWithPremises(proofSteps, substitutions, generalContext, specificContext) {
    proofSteps = reverse(proofSteps); ///

    const proofStepsUnifiedWithPremises = backwardsEvery(this.premises, (premise) => {
      const proofStepUnifiedWithPremise = this.unifyProofStepsWithPremise(proofSteps, premise, substitutions, generalContext, specificContext);

      if (proofStepUnifiedWithPremise) {
        return true;
      }
    });

    return proofStepsUnifiedWithPremises;
  }

  unifyProofStepsWithPremise(proofSteps, premise, substitutions, generalContext, specificContext) {
    let proofStepsUnifiedWithPremise  =false;

    const premiseUnifiedIndependently = premise.unifyIndependently(substitutions, generalContext, specificContext);

    if (premiseUnifiedIndependently) {
      proofStepsUnifiedWithPremise = true;
    } else {
      const proofStep = extract(proofSteps, (proofStep) => {
        const proofStepUnified = premise.unifyProofStep(proofStep, substitutions, generalContext, specificContext);

        if (proofStepUnified) {
          return true;
        }
      }) || null;

      if (proofStep !== null) {
        proofStepsUnifiedWithPremise = true;
      }
    }

    return proofStepsUnifiedWithPremise;
  }

  verify() {
    let verified = false;

    const ruleString = this.string; ///

    this.fileContext.trace(`Verifying the '${ruleString}' rule...`);

    const labelsVerified = this.verifyLabels();

    if (labelsVerified) {
      const context = LocalContext.fromFileContext(this.fileContext),
            premisesVerified = this.premises.every((premise) => {
              const premiseVerified = premise.verify(context);

              if (premiseVerified) {
                return true;
              }
            });

      if (premisesVerified) {
        const conclusionVerified = this.conclusion.verify(context);

        if (conclusionVerified) {
          let proofVerified = true; ///

          if (this.proof !== null) {
            const { Substitutions } = shim,
                  substitutions = Substitutions.fromNothing();

            proofVerified = this.proof.verify(substitutions, this.conclusion, context);
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

  verifyLabels() {
    const labelsVerified = this.labels.every((label) => {
      const nameOnly = true,
            labelVVerifiedWhenDeclared = label.verifyWhenDeclared(this.fileContext, nameOnly);

      if (labelVVerifiedWhenDeclared) {
        return true;
      }
    });

    return labelsVerified;
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
