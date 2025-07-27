"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { domAssigned } from "../dom";
import { labelsStringFromLabels } from "./topLevelAssertion";
import { labelsFromJSON,
         premisesFromJSON,
         conclusionFromJSON,
         labelsToLabelsJSON,
         premisesToPremisesJSON,
         conclusionToConclusionJSON } from "../utilities/json";

const { reverse, extract, backwardsEvery } = arrayUtilities;

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

  matchMetavariableName(metavariableName) {
    const metavariableNameMatches = this.labels.some((label) => {
      const metavariableNameMatches = label.matchMetavariableName(metavariableName);

      if (metavariableNameMatches) {
        return true;
      }
    });

    return metavariableNameMatches;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
    let statementAndStepsOrSubproofsUnified = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context; ///

    const substitutions = Substitutions.fromNothing(),
          statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);

    if (statementUnifiedWithConclusion) {
      const stepsOrSubproofsUnifiedWithPremises = this.unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, generalContext, specificContext);

      if (stepsOrSubproofsUnifiedWithPremises) {
        const substitutionsResolved = substitutions.areResolved();

        statementAndStepsOrSubproofsUnified = substitutionsResolved; ///
      }
    }

    return statementAndStepsOrSubproofsUnified;
  }

  unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext) {
    let statementUnifiedWithConclusion;

    const statementUnified = this.conclusion.unifyStatement(statement, substitutions, generalContext, specificContext);

    statementUnifiedWithConclusion = statementUnified; ///

    return statementUnifiedWithConclusion;
  }

  unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, generalContext, specificContext) {
    stepsOrSubproofs = reverse(stepsOrSubproofs); ///

    const stepsOrSubproofsUnifiedWithPremises = backwardsEvery(this.premises, (premise) => {
      const stepUnifiedWithPremise = this.unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, generalContext, specificContext);

      if (stepUnifiedWithPremise) {
        return true;
      }
    });

    return stepsOrSubproofsUnifiedWithPremises;
  }

  unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, generalContext, specificContext) {
    let stepsOrSubproofsUnifiedWithPremise  =false;

    const context = specificContext,  ///
          premiseUnifiedIndependently = premise.unifyIndependently(substitutions, context);

    if (premiseUnifiedIndependently) {
      stepsOrSubproofsUnifiedWithPremise = true;
    } else {
      const step = extract(stepsOrSubproofs, (stepOrSubproof) => {
        const stepOrSubproofUnified = premise.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);

        if (stepOrSubproofUnified) {
          return true;
        }
      }) || null;

      if (step !== null) {
        stepsOrSubproofsUnifiedWithPremise = true;
      }
    }

    return stepsOrSubproofsUnifiedWithPremise;
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
            labelVerified = label.verify(nameOnly);

      if (labelVerified) {
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
          string = stringFromLabelsAndConclusion(labels, conclusion);

    rule = new Rule(fileContext, string, labels, premises, conclusion, proof);

    return rule;
  }

  static fromRuleNode(ruleNode, fileContext) {
    const labels = labelsFromRuleNode(ruleNode, fileContext),
          premises = premisesFromRuleNode(ruleNode, fileContext),
          conclusion = conclusionFromRuleNode(ruleNode, fileContext),
          proof = proofFromRuleNode(ruleNode, fileContext),
          string = stringFromLabelsAndConclusion(labels, conclusion),
          rule = new Rule(fileContext, string, labels, premises, conclusion, proof);

    return rule;
  }
});

function proofFromRuleNode(ruleNode, fileContext) {
  const { Proof } = dom,
        proofNode = ruleNode.getProofNode(),
        proof = Proof.fromProofNode(proofNode, fileContext);

  return proof;
}

function labelsFromRuleNode(ruleNode, fileContext) {
  const { Label } = dom,
        labelNodes = ruleNode.getLabelNodes(),
        labels = labelNodes.map((labelNode) => {
          const label = Label.fromLabelNode(labelNode, fileContext);

          return label;
        });

  return labels;
}

function premisesFromRuleNode(ruleNode, fileContext) {
  const { Premise } = dom,
        premiseNodes = ruleNode.getPremiseNodes(),
        premises = premiseNodes.map((premiseNode) => {
          const premise = Premise.fromPremiseNode(premiseNode, fileContext);

          return premise;
        });

  return premises;
}

function conclusionFromRuleNode(ruleNode, fileContext) {
  const { Conclusion } = dom,
        conclusionNode = ruleNode.getConclusionNode(),
        conclusion = Conclusion.fromConclusionNode(conclusionNode, fileContext);

  return conclusion;
}

function stringFromLabelsAndConclusion(labels, conclusion) {
  const conclusionString = conclusion.getString(),
        labelsString = labelsStringFromLabels(labels),
        string = `${labelsString} :: ${conclusionString}`;

  return string;
}
