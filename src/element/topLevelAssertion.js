"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";
import { asynchronousUtilities } from "occam-languages";

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

const { extract, reverse, correlate } = arrayUtilities,
      { asyncForwardsEvery, asyncBackwardsEvery } = asynchronousUtilities;

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
    let labelsVerify;

    const context = this.getContext(),
          topLevelAssertionString = this.getString();

    context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's labels...`);

    labelsVerify = this.labels.every((label) => {
      const nameOnly = true,
            labelVerifies = label.verify(nameOnly);

      if (labelVerifies) {
        return true;
      }
    });

    if (labelsVerify) {
      context.trace(`...verified the '${topLevelAssertionString}' top level assertion's labels.`);
    }

    return labelsVerify;
  }

  unifyStatementWithDeduction(statement, context) {
    let statementUnifiesWithDeduction = false;

    const statementString = statement.getString(),
          deductionString = this.deduction.getString(),
          topLevelAssertionString = this.getString(); ///

    context.trace(`Unifying the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction...`);

    const statementUnifies = this.deduction.unifyStatement(statement, context);

    if (statementUnifies) {
      statementUnifiesWithDeduction = true;
    }

    if (statementUnifiesWithDeduction) {
      context.debug(`...unified the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction.`);
    }

    return statementUnifiesWithDeduction;
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

    const topLevelAssertionString = this.getString(); ///

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
      const suppositionVerifies = await supposition.verify(context)

      if (suppositionVerifies) {
        const subproofOrProofAssertion = supposition;  ////

        context.assignAssignments();

        context.addSubproofOrProofAssertion(subproofOrProofAssertion);

        return true;
      }
    });

    if (suppositionsVerify) {
      context.debug(`...verified the '${topLevelAssertionString}' top level assertion's suppositions.`);
    }

    return suppositionsVerify;
  }

  async unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
    let statementAndSubproofOrProofAssertionsUnify = false;

    const correlatesToHypotheses = this.correlateHypotheses(context);

    if (correlatesToHypotheses) {
      const statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);

      if (statementUnifiesWithDeduction) {
        const subproofOrProofAssertionsUnifiesWithSuppositions = await this.unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context);

        if (subproofOrProofAssertionsUnifiesWithSuppositions) {
          const substitutionsResolved = context.areSubstitutionsResolved();

          if (substitutionsResolved) {
            statementAndSubproofOrProofAssertionsUnify = true;
          }
        }
      }
    }

    return statementAndSubproofOrProofAssertionsUnify;
  }

  async unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, context) {
    let subproofOrProofAssertionsUnifiesWithSupposition = false;

    if (!subproofOrProofAssertionsUnifiesWithSupposition) {
      const subproofOrProofAssertion = extract(subproofOrProofAssertions, (subproofOrProofAssertion) => {
        const subproofOrProofAssertionUnifies = supposition.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);

        if (subproofOrProofAssertionUnifies) {
          const specificContext = context;  ///

          context = this.getContext();

          const generalContext = context; ///

          context = specificContext;  ///

          context.resolveSubstitutions(generalContext, specificContext);

          return true;
        }
      }) || null;

      if (subproofOrProofAssertion !== null) {
        subproofOrProofAssertionsUnifiesWithSupposition = true;
      }
    }

    if (!subproofOrProofAssertionsUnifiesWithSupposition) {
      const suppositionUnifiesIndependently = await supposition.unifyIndependently(context);

      if (suppositionUnifiesIndependently) {
        subproofOrProofAssertionsUnifiesWithSupposition = true;
      }
    }

    return subproofOrProofAssertionsUnifiesWithSupposition;
  }

  async unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context) {
    let subproofOrProofAssertionsUnifiesWithSuppositions;

    subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///

    subproofOrProofAssertionsUnifiesWithSuppositions = asyncBackwardsEvery(this.suppositions, async (supposition) => {
      const stepUnifiesWithSupposition = await this.unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, context);

      if (stepUnifiesWithSupposition) {
        return true;
      }
    });

    return subproofOrProofAssertionsUnifiesWithSuppositions;
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
