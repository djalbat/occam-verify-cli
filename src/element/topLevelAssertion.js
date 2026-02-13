"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";
import { asynchronousUtilities } from "occam-languages";

import assignAssignments from "../process/assign";

import { asyncScope } from "../utilities/context";
import { labelsFromJSON,
         deductionFromJSON,
         signatureFromJSON,
         labelsToLabelsJSON,
         hypothesesFromJSON,
         suppositionsFromJSON,
         deductionToDeductionJSON,
         signatureToSignatureJSON,
         hypothesesToHypothesesJSON,
         suppositionsToSuppositionsJSON } from "../utilities/json";

const { asyncForwardsEvery } = asynchronousUtilities,
      { extract, reverse, correlate, backwardsEvery } = arrayUtilities;

export default class TopLevelAssertion extends Element {
  constructor(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses) {
    super(context, string, node);

    this.labels = labels;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.signature = signature;
    this.hypotheses = hypotheses;
  }

  getLabels() {
    return this.labels;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getDeduction() {
    return this.deduction;
  }

  getProof() {
    return this.proof;
  }

  getSignature() {
    return this.signature;
  }

  getHypotheses() {
    return this.hypotheses;
  }

  setHypotheses(hypotheses) {
    this.hypotheses = hypotheses;
  }

  getStatement() { return this.deduction.getStatement(); }

  isHypothetical() {
    const hypothesesLength = this.hypotheses.length,
          hypothetical = (hypothesesLength > 0);

    return hypothetical;
  }

  isUnconditional() {
    const suppositionsLength = this.suppositions.length,
          unconditional = (suppositionsLength === 0);

    return unconditional;
  }

  getSupposition(index) {
    const supposition = this.suppositions[index] || null;

    return supposition;
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

  correlateHypotheses(context) {
    let correlatesToHypotheses;

    const hypothetical = this.isHypothetical();

    if (hypothetical) {
      const proofAssertions = context.getProofAssertions(),
            topLevelAssertionString = this.getString();  ///

      context.trace(`Correlating the hypotheses of the '${topLevelAssertionString}' top level assertion...`);

      correlatesToHypotheses = correlate(this.hypotheses, proofAssertions, (hypothesis, proofAssertion) => {
        const hypothesesComparesToStep = hypothesis.compareProofAssertion(proofAssertion, context);

        if (hypothesesComparesToStep) {
          return true;
        }
      });

      if (correlatesToHypotheses) {
        context.debug(`...correlated the hypotheses of the '${topLevelAssertionString}' top level assertion.`);
      }
    } else {
      correlatesToHypotheses = true
    }

    return correlatesToHypotheses;
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

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          topLevelAssertionString = this.getString(); ///

    context.trace(`Verifying the '${topLevelAssertionString}' top level assertion...`);

    await asyncScope(async (context) => {
      const labelsVerify = this.verifyLabels();

      if (labelsVerify) {
        const suppositionsVerify = await this.verifySuppositions(context);

        if (suppositionsVerify) {
          const deductionVerifies = await this.verifyDeduction(context);

          if (deductionVerifies) {
            const proofVerifies = await this.verifyProof(context);

            if (proofVerifies) {
              verifies = true;
            }
          }
        }
      }
    }, context);

    if (verifies) {
      context.debug(`...verified the '${topLevelAssertionString}' top level assertion.`);
    }

    return verifies;
  }

  async verifyProof(context) {
    let proofVerifies;

    if (this.proof === null) {
      proofVerifies = true;
    } else {
      const topLevelAssertionString = this.getString();  ///

      context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's proof...`);

      const statement = this.deduction.getStatement();

      proofVerifies = this.proof.verify(statement, context);

      if (proofVerifies) {
        context.debug(`...verified the '${topLevelAssertionString}' top level assertion's proof.`);
      }
    }

    return proofVerifies;
  }

  async verifyDeduction(context) {
    let deductionVerifies;

    const topLevelAssertionString = this.getString();

    context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's deduction...`);

    deductionVerifies = await this.deduction.verify(context);

    if (deductionVerifies) {
      context.debug(`...verified the '${topLevelAssertionString}' top level assertion's deduction.`);
    }

    return deductionVerifies;
  }

  async verifySuppositions(context) {
    let suppositionsVerify;

    const topLevelAssertionString = this.getString();  ///

    context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's suppositions...`);

    suppositionsVerify = await asyncForwardsEvery(this.suppositions, async (supposition) => {
      const assignments = [],
            suppositionVerifies = await supposition.verify(assignments, context)

      if (suppositionVerifies) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const subproofOrProofAssertion = supposition;  ////

          context.addSubproofOrProofAssertion(subproofOrProofAssertion);

          return true;
        }
      }
    });

    if (suppositionsVerify) {
      context.debug(`...verified the '${topLevelAssertionString}' top level assertion's suppositions.`);
    }

    return suppositionsVerify;
  }

  unifyStatementWithDeduction(statement, substitutions, context) {
    let statementUnifiesWithDeduction = false;

    const statementUnifies = this.deduction.unifyStatement(statement, substitutions, context);  ///

    if (statementUnifies) {
      statementUnifiesWithDeduction = true;
    }

    return statementUnifiesWithDeduction;
  }

  unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, substitutions, context) {
    let statementAndSubproofOrProofAssertionsUnify = false;

    const correlatesToHypotheses = this.correlateHypotheses(context);

    if (correlatesToHypotheses) {
      const statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);

      if (statementUnifiesWithDeduction) {
        const subproofOrProofAssertionsUnifyWithSuppositions = this.unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, substitutions, context);

        if (subproofOrProofAssertionsUnifyWithSuppositions) {
          const substitutionsResolved = substitutions.areResolved();

          if (substitutionsResolved) {
            statementAndSubproofOrProofAssertionsUnify = true;
          }
        }
      }
    }

    return statementAndSubproofOrProofAssertionsUnify;
  }

  unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext) {
    let subproofOrProofAssertionsUnifiesWithSupposition = false;

    if (!subproofOrProofAssertionsUnifiesWithSupposition) {
      const subproofOrProofAssertion = extract(subproofOrProofAssertions, (subproofOrProofAssertion) => {
        const subproofOrProofAssertionUnifies = supposition.unifySubproofOrProofAssertion(subproofOrProofAssertion, substitutions, generalContext, specificContext);

        if (subproofOrProofAssertionUnifies) {
          return true;
        }
      }) || null;

      if (subproofOrProofAssertion !== null) {
        subproofOrProofAssertionsUnifiesWithSupposition = true;
      }
    }

    if (!subproofOrProofAssertionsUnifiesWithSupposition) {
      const context = specificContext,  ///
            suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context);

      if (suppositionUnifiesIndependently) {
        subproofOrProofAssertionsUnifiesWithSupposition = true;
      }
    }

    return subproofOrProofAssertionsUnifiesWithSupposition;
  }

  unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, substitutions, generalContext, specificContext) {
    subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///

    const subproofOrProofAssertionsUnifyWithSuppositions = backwardsEvery(this.suppositions, (supposition) => {
      const subproofOrProofAssertionsUnifiesWithSupposition = this.unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext);

      if (subproofOrProofAssertionsUnifiesWithSupposition) {
        return true;
      }
    });

    return subproofOrProofAssertionsUnifyWithSuppositions;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          deductionJSON = deductionToDeductionJSON(this.deduction),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          signatureJSON = signatureToSignatureJSON(this.signature),
          hypothesesJSON = hypothesesToHypothesesJSON(this.hypotheses),
          labels = labelsJSON,  ///
          deduction = deductionJSON,  ///
          suppositions = suppositionsJSON,  ///
          signature = signatureJSON,  ///
          hypotheses = hypothesesJSON,  ///
          json = {
            labels,
            deduction,
            suppositions,
            signature,
            hypotheses
          };

    return json;
  }

  static fromJSON(Class, json, context) {
    const labels = labelsFromJSON(json, context),
          deduction = deductionFromJSON(json, context),
          suppositions = suppositionsFromJSON(json, context),
          signature = signatureFromJSON(json, context),
          hypotheses = hypothesesFromJSON(json, context),
          node = null,
          proof = null,
          string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
          topLevelAssertion = new Class(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

    return topLevelAssertion;
  }
}
