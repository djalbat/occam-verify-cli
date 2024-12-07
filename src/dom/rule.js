"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { stringFromLabels } from "./topLevelAssertion";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { labelsFromJSON,
         premisesFromJSON,
         conclusionFromJSON,
         labelsToLabelsJSON,
         premisesToPremisesJSON,
         conclusionToConclusionJSON } from "../utilities/json";

const { reverse, extract, backwardsEvery } = arrayUtilities;

const proofNodeQuery = nodeQuery("/rule/proof"),
      labelNodesQuery = nodesQuery("/rule/labels/label"),
      premiseNodesQuery = nodesQuery("/rule/premise"),
      conclusionNodeQuery = nodeQuery("/rule/conclusion");

export default domAssigned(class Rule {
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

  unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context) {
    let statementAndProofStepSubproofsUnified = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context; ///

    const substitutions = Substitutions.fromNothing(),
          statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);

    if (statementUnifiedWithConclusion) {
      const proofStepSubproofsUnifiedWithPremises = this.unifyProofStepSubproofsWithPremises(proofStepSubproofs, substitutions, generalContext, specificContext);

      if (proofStepSubproofsUnifiedWithPremises) {
        const substitutionsResolved = substitutions.areResolved();

        statementAndProofStepSubproofsUnified = substitutionsResolved; ///
      }
    }

    return statementAndProofStepSubproofsUnified;
  }

  unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext) {
    let statementUnifiedWithConclusion;

    const statementUnified = this.conclusion.unifyStatement(statement, substitutions, generalContext, specificContext);

    statementUnifiedWithConclusion = statementUnified; ///

    return statementUnifiedWithConclusion;
  }

  unifyProofStepSubproofsWithPremises(proofStepSubproofs, substitutions, generalContext, specificContext) {
    proofStepSubproofs = reverse(proofStepSubproofs); ///

    const proofStepSubproofsUnifiedWithPremises = backwardsEvery(this.premises, (premise) => {
      const proofStepUnifiedWithPremise = this.unifyProofStepSubproofsWithPremise(proofStepSubproofs, premise, substitutions, generalContext, specificContext);

      if (proofStepUnifiedWithPremise) {
        return true;
      }
    });

    return proofStepSubproofsUnifiedWithPremises;
  }

  unifyProofStepSubproofsWithPremise(proofStepSubproofs, premise, substitutions, generalContext, specificContext) {
    let proofStepSubproofsUnifiedWithPremise  =false;

    const premiseUnifiedIndependently = premise.unifyIndependently(substitutions, generalContext, specificContext);

    if (premiseUnifiedIndependently) {
      proofStepSubproofsUnifiedWithPremise = true;
    } else {
      const proofStep = extract(proofStepSubproofs, (proofStepSubproof) => {
        const proofStepSubproofUnified = premise.unifyProofStepSubproof(proofStepSubproof, substitutions, generalContext, specificContext);

        if (proofStepSubproofUnified) {
          return true;
        }
      }) || null;

      if (proofStep !== null) {
        proofStepSubproofsUnifiedWithPremise = true;
      }
    }

    return proofStepSubproofsUnifiedWithPremise;
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
            const substitutions = Substitutions.fromNothing();

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

  static name = "Rule";

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
    const labels = labelsFromRuleNode(ruleNode, fileContext),
          premises = premisesFromRuleNode(ruleNode, fileContext),
          conclusion = conclusionFromRuleNode(ruleNode, fileContext),
          proof = proofFromRuleNode(ruleNode, fileContext),
          string = stringFromLabels(labels),
          rule = new Rule(fileContext, string, labels, premises, conclusion, proof);

    return rule;
  }
});

function proofFromRuleNode(ruleNode, fileContext) {
  const { Proof } = dom,
        proofNode = proofNodeQuery(ruleNode),
        proof = Proof.fromProofNode(proofNode, fileContext);

  return proof;
}

function labelsFromRuleNode(ruleNode, fileContext) {
  const { Label } = dom,
        labelNodes = labelNodesQuery(ruleNode),
        labels = labelNodes.map((labelNode) => {
          const label = Label.fromLabelNode(labelNode, fileContext);

          return label;
        });

  return labels;
}

function premisesFromRuleNode(ruleNode, fileContext) {
  const { Premise } = dom,
        premiseNodes = premiseNodesQuery(ruleNode),
        premises = premiseNodes.map((premiseNode) => {
          const premise = Premise.fromPremiseNode(premiseNode, fileContext);

          return premise;
        });

  return premises;
}

function conclusionFromRuleNode(ruleNode, fileContext) {
  const { Conclusion } = dom,
        conclusionNode = conclusionNodeQuery(ruleNode),
        conclusion = Conclusion.fromConclusionNode(conclusionNode, fileContext);

  return conclusion;
}