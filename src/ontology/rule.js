"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { define } from "../ontology";
import { labelsStringFromLabels } from "./topLevelAssertion";
import { labelsFromJSON,
         premisesFromJSON,
         conclusionFromJSON,
         labelsToLabelsJSON,
         premisesToPremisesJSON,
         conclusionToConclusionJSON } from "../utilities/json";

const { reverse, extract, backwardsEvery } = arrayUtilities;

export default define(class Rule {
  constructor(context, node, string, labels, premises, conclusion, proof) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
    this.proof = proof;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
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

  verify() {
    let verifies = false;

    const ruleString = this.string; ///

    this.context.trace(`Verifying the '${ruleString}' rule...`, this.node);

    const labelsVerify = this.verifyLabels();

    if (labelsVerify) {
      const localContext = LocalContext.fromNothing(this.context),
            context = localContext, ///
            premisesVerify = this.verifyPremises(context);

      if (premisesVerify) {
        const conclusionVerifies = this.verifyConclusion(context);

        if (conclusionVerifies) {
          const proofVerifies = this.verifyProof(context);

          if (proofVerifies) {
            const rule = this;  ///

            this.context.addRule(rule);

            verifies = true;
          }
        }
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${ruleString}' rule.`, this.node);
    }

    return verifies;
  }

  verifyLabels() {
    const labelsVerify = this.labels.every((label) => {
      const nameOnly = true,
            labelVerifies = label.verify(nameOnly);

      if (labelVerifies) {
        return true;
      }
    });

    return labelsVerify;
  }

  verifyPremises(context) {
    const premisesVerify = this.premises.every((premise) => {
      const premiseVerifies = this.verifyPremise(premise, context);

      if (premiseVerifies) {
        return true;
      }
    });

    return premisesVerify;
  }

  verifyPremise(premise, context) {
    const premiseVerifies = premise.verify(context);

    return premiseVerifies;
  }

  verifyConclusion(context) {
    const conclusionVerifies = this.conclusion.verify(context);

    return conclusionVerifies;
  }

  verifyProof(context) {
    let proofVerifies;

    if (this.proof === null) {
      proofVerifies = true;
    } else {
      const substitutions = Substitutions.fromNothing();

      proofVerifies = this.proof.verify(substitutions, this.conclusion, context);
    }

    return proofVerifies;
  }

  unifyStatementWithConclusion(statement, substitutions, context) {
    let statementUnifiesWithConclusion = false;

    const statementUnifies = this.conclusion.unifyStatement(statement, substitutions, context);

    if (statementUnifies) {
      statementUnifiesWithConclusion = true;
    }

    return statementUnifiesWithConclusion;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
    let statementAndStepsOrSubproofsUnify = false;

    const substitutions = Substitutions.fromNothing(),
          statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, context);

    if (statementUnifiesWithConclusion) {
      const stepsOrSubproofsUnifiesWithPremises = this.unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context);

      if (stepsOrSubproofsUnifiesWithPremises) {
        const substitutionsResolved = substitutions.areResolved();

        if (substitutionsResolved) {
          statementAndStepsOrSubproofsUnify = true;
        }
      }
    }

    return statementAndStepsOrSubproofsUnify;
  }

  unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, context) {
    let stepsOrSubproofsUnifiesWithPremise = false;

    if (!stepsOrSubproofsUnifiesWithPremise) {
      const premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);

      if (premiseUnifiesIndependently) {
        stepsOrSubproofsUnifiesWithPremise = true;
      }
    }

    if (!stepsOrSubproofsUnifiesWithPremise) {
      const stepOrSubproof = extract(stepsOrSubproofs, (stepOrSubproof) => {
        const stepOrSubproofUnifies = premise.unifyStepOrSubproof(stepOrSubproof, substitutions, context);

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

  unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context) {
    stepsOrSubproofs = reverse(stepsOrSubproofs); ///

    const stepsOrSubproofsUnifiesWithPremises = backwardsEvery(this.premises, (premise) => {
      const stepUnifiesWithPremise = this.unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, context);

      if (stepUnifiesWithPremise) {
        return true;
      }
    });

    return stepsOrSubproofsUnifiesWithPremises;
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

  static fromJSON(json, context) {
    let rule;

    const node = null,
          proof = null,
          labels = labelsFromJSON(json, context),
          premises = premisesFromJSON(json, context),
          conclusion = conclusionFromJSON(json, context),
          string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion);

    rule = new Rule(context, node, string, labels, premises, conclusion, proof);

    return rule;
  }

  static fromRuleNode(ruleNode, context) {
    const node = ruleNode,  ///
          proof = proofFromRuleNode(ruleNode, context),
          labels = labelsFromRuleNode(ruleNode, context),
          premises = premisesFromRuleNode(ruleNode, context),
          conclusion = conclusionFromRuleNode(ruleNode, context),
          string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion),
          rule = new Rule(context, node, string, labels, premises, conclusion, proof);

    return rule;
  }
});

function proofFromRuleNode(ruleNode, context) {
  const { Proof } = ontology,
        proofNode = ruleNode.getProofNode(),
        proof = Proof.fromProofNode(proofNode, context);

  return proof;
}

function labelsFromRuleNode(ruleNode, context) {
  const { Label } = ontology,
        labelNodes = ruleNode.getLabelNodes(),
        labels = labelNodes.map((labelNode) => {
          const label = Label.fromLabelNode(labelNode, context);

          return label;
        });

  return labels;
}

function premisesFromRuleNode(ruleNode, context) {
  const { Premise } = ontology,
        premiseNodes = ruleNode.getPremiseNodes(),
        premises = premiseNodes.map((premiseNode) => {
          const premise = Premise.fromPremiseNode(premiseNode, context);

          return premise;
        });

  return premises;
}

function conclusionFromRuleNode(ruleNode, context) {
  const { Conclusion } = ontology,
        conclusionNode = ruleNode.getConclusionNode(),
        conclusion = Conclusion.fromConclusionNode(conclusionNode, context);

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
        string = (premisesString !== null) ?
                    `${labelsString} :: [${premisesString}] ... ${conclusionString}` :
                      `${labelsString} :: ${conclusionString}`;

  return string;
}
