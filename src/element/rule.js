"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import elements from "../elements";

import { scope } from "../utilities/context";
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

  compareMetavariableName(metavariableName) {
    const comparesToMetavariableName = this.labels.some((label) => {
      const labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);

      if (labelComparesToMetavariableName) {
        return true;
      }
    });

    return comparesToMetavariableName;
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
      const { Substitutions } = elements,
            substitutions = Substitutions.fromNothing(context);

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

  unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
    let statementAndSubproofOrProofAssertionsUnify = false;

    const { Substitutions } = elements,
          substitutions = Substitutions.fromNothing(context),
          statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, context);

    if (statementUnifiesWithConclusion) {
      const subproofOrProofAssertionsUnifiesWithPremises = this.unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, substitutions, context);

      if (subproofOrProofAssertionsUnifiesWithPremises) {
        const substitutionsResolved = substitutions.areResolved();

        if (substitutionsResolved) {
          statementAndSubproofOrProofAssertionsUnify = true;
        }
      }
    }

    return statementAndSubproofOrProofAssertionsUnify;
  }

  unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, substitutions, context) {
    let subproofOrProofAssertionsUnifiesWithPremise = false;

    if (!subproofOrProofAssertionsUnifiesWithPremise) {
      const subproofOrProofAssertion = extract(subproofOrProofAssertions, (subproofOrProofAssertion) => {
        const subproofOrProofAssertionUnifies = premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, substitutions, context);

        if (subproofOrProofAssertionUnifies) {
          return true;
        }
      }) || null;

      if (subproofOrProofAssertion !== null) {
        subproofOrProofAssertionsUnifiesWithPremise = true;
      }
    }

    if (!subproofOrProofAssertionsUnifiesWithPremise) {
      const premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);

      if (premiseUnifiesIndependently) {
        subproofOrProofAssertionsUnifiesWithPremise = true;
      }
    }

    return subproofOrProofAssertionsUnifiesWithPremise;
  }

  unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, substitutions, context) {
    subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///

    const subproofOrProofAssertionsUnifiesWithPremises = backwardsEvery(this.premises, (premise) => {
      const stepUnifiesWithPremise = this.unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, substitutions, context);

      if (stepUnifiesWithPremise) {
        return true;
      }
    });

    return subproofOrProofAssertionsUnifiesWithPremises;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext();

    this.break(context);

    const ruleString = this.getString(); ///

    context.trace(`Verifying the '${ruleString}' rule...`);

    scope((context) => {
      const labelsVerify = this.verifyLabels();

      if (labelsVerify) {
        const premisesVerify = this.verifyPremises(context);

        if (premisesVerify) {
          const conclusionVerifies = this.verifyConclusion(context);

          if (conclusionVerifies) {
            const proofVerifies = this.verifyProof(context);

            if (proofVerifies) {
              verifies = true;
            }
          }
        }
      }
    }, context);

    if (verifies) {
      const rule = this;  ///

      context.addRule(rule);

      context.debug(`...verified the '${ruleString}' rule.`);
    }

    return verifies;
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
