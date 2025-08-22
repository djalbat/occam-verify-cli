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
    let statementAndStepsOrSubproofsUnifies = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context; ///

    const substitutions = Substitutions.fromNothing(),
          statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);

    if (statementUnifiesWithConclusion) {
      const stepsOrSubproofsUnifiesWithPremises = this.unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, generalContext, specificContext);

      if (stepsOrSubproofsUnifiesWithPremises) {
        const substitutionsResolved = substitutions.areResolved();

        if (substitutionsResolved) {
          statementAndStepsOrSubproofsUnifies = true;
        }
      }
    }

    return statementAndStepsOrSubproofsUnifies;
  }

  unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext) {
    let statementUnifiesWithConclusion = false;

    const statementUnifies = this.conclusion.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      statementUnifiesWithConclusion = true;
    }

    return statementUnifiesWithConclusion;
  }

  unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, generalContext, specificContext) {
    stepsOrSubproofs = reverse(stepsOrSubproofs); ///

    const stepsOrSubproofsUnifiesWithPremises = backwardsEvery(this.premises, (premise) => {
      const stepUnifiesWithPremise = this.unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, generalContext, specificContext);

      if (stepUnifiesWithPremise) {
        return true;
      }
    });

    return stepsOrSubproofsUnifiesWithPremises;
  }

  unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, generalContext, specificContext) {
    let stepsOrSubproofsUnifiesWithPremise = false;

    if (!stepsOrSubproofsUnifiesWithPremise) {
      const context = specificContext,  ///
            premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);

      if (premiseUnifiesIndependently) {
        stepsOrSubproofsUnifiesWithPremise = true;
      }
    }

    if (!stepsOrSubproofsUnifiesWithPremise) {
      const stepOrSubproof = extract(stepsOrSubproofs, (stepOrSubproof) => {
        const stepOrSubproofUnifies = premise.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);

        if (stepOrSubproofUnifies) {
          return true;
        }
      }) || null;

      if (stepOrSubproof !== null) {
        stepsOrSubproofsUnifiesWithPremise = true;
      }
    }

    return stepsOrSubproofsUnifiesWithPremise;
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
          string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion);

    rule = new Rule(fileContext, string, labels, premises, conclusion, proof);

    return rule;
  }

  static fromRuleNode(ruleNode, fileContext) {
    const proof = proofFromRuleNode(ruleNode, fileContext),
          labels = labelsFromRuleNode(ruleNode, fileContext),
          premises = premisesFromRuleNode(ruleNode, fileContext),
          conclusion = conclusionFromRuleNode(ruleNode, fileContext),
          string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion),
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

function premisesStringFromPremises(premises) {
  const premisesString = premises.reduce((premisesString, premise) => {
    const premiseString = premise.getString();

    premisesString = (premisesString !== null) ?
                       `${premisesString}, ${premiseString}` :
                         premiseString;  ///

    return premisesString;
  }, null);

  return premisesString;
}

function stringFromLabelsPremisesAndConclusion(labels, premises, conclusion) {
  const premisesString = premisesStringFromPremises(premises),
        conclusionString = conclusion.getString(),
        labelsString = labelsStringFromLabels(labels),
        string = `${labelsString} :: [${premisesString}] ... ${conclusionString}`;

  return string;
}
