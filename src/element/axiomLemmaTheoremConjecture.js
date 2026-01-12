"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";
import elements from "../elements";
import LocalContext from "../context/local";

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

const { extract, reverse, correlate, backwardsEvery } = arrayUtilities;

export default class AxiomLemmaTheoremConjecture extends Element {
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
            axiomLemmaTheoremConjectureString = this.getString();  ///

      context.trace(`Correlating the hypotheses of the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`, this.node);

      correlatesToHypotheses = correlate(this.hypotheses, proofAssertions, (hypothesis, proofAssertion) => {
        const hypothesesComparesToStep = hypothesis.compareProofAssertion(proofAssertion, context);

        if (hypothesesComparesToStep) {
          return true;
        }
      });

      if (correlatesToHypotheses) {
        context.debug(`...correlated the hypotheses of the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`, this.node);
      }
    } else {
      correlatesToHypotheses = true
    }

    return correlatesToHypotheses;
  }

  verify() {
    let verifies = false;

    const labelsVerify = this.verifyLabels();

    if (labelsVerify) {
      const localContext = LocalContext.fromNothing(this.context),
            context = localContext, ///
            suppositionsVerify = this.verifySuppositions(context);

      if (suppositionsVerify) {
        const deductionVerifies = this.verifyDeduction(context);

        if (deductionVerifies) {
          const proofVerifies = this.verifyProof(context);

          if (proofVerifies) {
            verifies = true;
          }
        }
      }
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

  verifySuppositions(context) {
    const suppositionsVerify = this.suppositions.every((supposition) => {
      const suppositionVerifies = this.verifySupposition(supposition, context);

      if (suppositionVerifies) {
        return true;
      }
    });

    return suppositionsVerify;
  }

  verifySupposition(supposition, context) {
    const suppositionVerifies = supposition.verify(context);

    return suppositionVerifies;
  }

  verifyDeduction(context) {
    const deductionVerifies = this.deduction.verify(context);

    return deductionVerifies;
  }

  verifyProof(context) {
    let proofVerifies;

    if (this.proof === null) {
      proofVerifies = true;
    } else {
      const { Substitutions } = elements,
            substitutions = Substitutions.fromNothing();

      proofVerifies = this.proof.verify(substitutions, this.deduction, context);
    }

    return proofVerifies;
  }

  unifyStatementWithDeduction(statement, substitutions, context) {
    let statementUnifiesWithDeduction = false;

    const statementUnifies = this.deduction.unifyStatement(statement, substitutions, context);  ///

    if (statementUnifies) {
      statementUnifiesWithDeduction = true;
    }

    return statementUnifiesWithDeduction;
  }

  unifyStatementAndStepsOrSubproofs(statement, subproofOrProofAssertions, substitutions, context) {
    let statementAndStepsOrSubproofsUnifies = false;

    const correlatesToHypotheses = this.correlateHypotheses(context);

    if (correlatesToHypotheses) {
      const statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);

      if (statementUnifiesWithDeduction) {
        const subproofOrProofAssertionsUnifyWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(subproofOrProofAssertions, substitutions, context);

        if (subproofOrProofAssertionsUnifyWithSuppositions) {
          const substitutionsResolved = substitutions.areResolved();

          if (substitutionsResolved) {
            statementAndStepsOrSubproofsUnifies = true;
          }
        }
      }
    }

    return statementAndStepsOrSubproofsUnifies;
  }

  unifyStepsOrSubproofsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext) {
    let subproofOrProofAssertionsUnifiesWithSupposition = false;

    const context = specificContext,  ///
          suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context);

    if (suppositionUnifiesIndependently) {
      subproofOrProofAssertionsUnifiesWithSupposition = true;
    } else {
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

    return subproofOrProofAssertionsUnifiesWithSupposition;
  }

  unifyStepsOrSubproofsWithSuppositions(subproofOrProofAssertions, substitutions, generalContext, specificContext) {
    subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///

    const subproofOrProofAssertionsUnifyWithSuppositions = backwardsEvery(this.suppositions, (supposition) => {
      const subproofOrProofAssertionsUnifiesWithSupposition = this.unifyStepsOrSubproofsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext);

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
          axiomLemmaTheoremConjecture = new Class(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);

    return axiomLemmaTheoremConjecture;
  }
}
