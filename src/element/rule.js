"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";
import elements from "../elements";
import LocalContext from "../context/local";

import { define } from "../elements";
import { labelsFromJSON,
         premisesFromJSON,
         conclusionFromJSON,
         labelsToLabelsJSON,
         premisesToPremisesJSON,
         conclusionToConclusionJSON } from "../utilities/json";

const { reverse, extract, backwardsEvery } = arrayUtilities;

export default define(class Rule extends Element {
  constructor(context, string, node, proof, labels, premises, conclusion) {
    super(context, string, node);

    this.proof = proof;
    this.labels = labels;
    this.premises = premises;
    this.conclusion = conclusion;
  }

  getLabels() {
    return this.labels;
  }

  getPremises() {
    return this.premises;
  }

  getProof() {
    return this.proof;
  }

  getConclusion() {
    return this.conclusion;
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

    let context;

    const node = this.getNode();

    context = this.getContext();

    const ruleString = this.getString(); ///

    context.trace(`Verifying the '${ruleString}' rule...`, node);

    const labelsVerify = this.verifyLabels();

    if (labelsVerify) {
      const localContext = LocalContext.fromNothing(context);

      context = localContext; ///

      const premisesValidate = this.validatePremises(context);

      if (premisesValidate) {
        const conclusionVerifies = this.verifyConclusion(context);

        if (conclusionVerifies) {
          const proofVerifies = this.verifyProof(context);

          if (proofVerifies) {
            const rule = this;  ///

            context.addRule(rule);

            verifies = true;
          }
        }
      }
    }

    if (verifies) {
      context.debug(`...verified the '${ruleString}' rule.`, node);
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

  validatePremises(context) {
    const premisesValidate = this.premises.every((premise) => {
      const premiseValidates = this.validatePremise(premise, context);

      if (premiseValidates) {
        return true;
      }
    });

    return premisesValidate;
  }

  validatePremise(premise, context) {
    const premiseValidates = premise.validate(context);

    return premiseValidates;
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
      const { Substitutions } = elements,
            substitutions = Substitutions.fromNothing();

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

    const { Substitutions } = elements,
          substitutions = Substitutions.fromNothing(),
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

    rule = new Rule(context, string, node, labels, premises, conclusion, proof);

    return rule;
  }
});
