"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

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

export default class TopLevelAssertion {
  constructor(context, node, string, labels, suppositions, deduction, proof, signature, hypotheses) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.labels = labels;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.signature = signature;
    this.hypotheses = hypotheses;
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
      const substitutions = Substitutions.fromNothing();

      proofVerifies = this.proof.verify(substitutions, this.deduction, context);
    }

    return proofVerifies;
  }

  correlateHypotheses(context) {
    let hypothesesCorrelate;

    const hypothetical = this.isHypothetical();

    if (hypothetical) {
      const steps = context.getSteps(),
            topLevelAssertionString = this.string;  ///

      context.trace(`Correlating the hypotheses of the '${topLevelAssertionString}' axiom, lemma, theorem or conjecture...`, this.node);

      hypothesesCorrelate = correlate(this.hypotheses, steps, (hypothesis, step) => {
        const hypothesesEqualToStep = hypothesis.isEqualToStep(step, context);

        if (hypothesesEqualToStep) {
          return true;
        }
      });

      if (hypothesesCorrelate) {
        context.debug(`...correlated the hypotheses of the '${topLevelAssertionString}' axiom, lemma, theorem or conjecture.`, this.node);
      }
    } else {
      hypothesesCorrelate = true
    }

    return hypothesesCorrelate;
  }

  unifyStatementWithDeduction(statement, substitutions, context) {
    let statementUnifiesWithDeduction = false;

    const statementUnifies = this.deduction.unifyStatement(statement, substitutions, context);  ///

    if (statementUnifies) {
      statementUnifiesWithDeduction = true;
    }

    return statementUnifiesWithDeduction;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
    let statementAndStepsOrSubproofsUnifies = false;

    const hypothesesCorrelate = this.correlateHypotheses(context);

    if (hypothesesCorrelate) {
      const statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);

      if (statementUnifiesWithDeduction) {
        const stepsOrSubproofsUnifyWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, context);

        if (stepsOrSubproofsUnifyWithSuppositions) {
          const substitutionsResolved = substitutions.areResolved();

          if (substitutionsResolved) {
            statementAndStepsOrSubproofsUnifies = true;
          }
        }
      }
    }

    return statementAndStepsOrSubproofsUnifies;
  }

  unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext) {
    let stepsOrSubproofsUnifiesWithSupposition = false;

    const context = specificContext,  ///
          suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context);

    if (suppositionUnifiesIndependently) {
      stepsOrSubproofsUnifiesWithSupposition = true;
    } else {
      const stepOrSubproof = extract(stepsOrSubproofs, (stepOrSubproof) => {
        const stepOrSubproofUnifies = supposition.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);

        if (stepOrSubproofUnifies) {
          return true;
        }
      }) || null;

      if (stepOrSubproof !== null) {
        stepsOrSubproofsUnifiesWithSupposition = true;
      }
    }

    return stepsOrSubproofsUnifiesWithSupposition;
  }

  unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext) {
    stepsOrSubproofs = reverse(stepsOrSubproofs); ///

    const stepsOrSubproofsUnifyWithSuppositions = backwardsEvery(this.suppositions, (supposition) => {
      const stepsOrSubproofsUnifiesWithSupposition = this.unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext);

      if (stepsOrSubproofsUnifiesWithSupposition) {
        return true;
      }
    });

    return stepsOrSubproofsUnifyWithSuppositions;
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
          topLevelAssertion = new Class(context, node, string, labels, suppositions, deduction, proof, signature, hypotheses);

    return topLevelAssertion;
  }

  static fromNode(Class, node, context) {
    const topLevelAssertionNode = node, ///
          proofNode = topLevelAssertionNode.getProofNode(),
          labelNodes = topLevelAssertionNode.getLabelNodes(),
          deductionNode = topLevelAssertionNode.getDeductionNode(),
          suppositionNodes = topLevelAssertionNode.getSuppositionNodes(),
          signatureNode = topLevelAssertionNode.getSignatureNode(),
          proof = proofFromProofNode(proofNode, context),
          labels = labelsFromLabelNodes(labelNodes, context),
          deduction = deductionFromDeductionNode(deductionNode, context),
          suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context),
          signature = signatureFromSignatureNode(signatureNode, context),
          hypotheses = [],
          string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
          topLevelAssertion = new Class(context, node, string, labels, suppositions, deduction, proof, signature, hypotheses);

    return topLevelAssertion;
  }
}

export function proofFromProofNode(proofNode, context) {
  const { Proof } = ontology,
        proof = Proof.fromProofNode(proofNode, context);

  return proof;
}

export function labelsFromLabelNodes(labelNodes, context) {
  const { Label } = ontology,
        labels = labelNodes.map((labelNode) => {
          const label = Label.fromLabelNode(labelNode, context);

          return label;
        });

  return labels;
}

export function signatureFromSignatureNode(signatureNode, context) {
  let signature = null;

  if (signatureNode !== null) {
    const { Signature } = ontology;

    signature = Signature.fromSignatureNode(signatureNode, context);
  }

  return signature;
}

export function deductionFromDeductionNode(deductionNode, context) {
  const { Deduction } = ontology,
        deduction = Deduction.fromDeductionNode(deductionNode, context);

  return deduction;
}

export function suppositionsFromSuppositionNodes(suppositionNodes, context) {
  const { Supposition } = ontology,
        suppositions = suppositionNodes.map((suppositionNode) => {
          const supposition = Supposition.fromSuppositionNode(suppositionNode, context);

          return supposition;
        });

    return suppositions;
}

export function labelsStringFromLabels(labels) {
  const labelsString = labels.reduce((labelsString, label) => {
    const labelString = label.getString();

    labelsString = (labelsString === null) ?
                      labelString: ///
                        `${labelsString}, ${labelString}`;

    return labelsString;
  }, null);

  return labelsString;
}

export function suppositionsStringFromSuppositions(suppositions) {
  const suppositionsString = suppositions.reduce((suppositionsString, supposition) => {
    const suppositionString = supposition.getString();

    suppositionsString = (suppositionsString !== null) ?
                           `${suppositionsString}, ${suppositionString}` :
                             suppositionString;  ///

    return suppositionsString;
  }, null);

  return suppositionsString;
}

export function stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction) {
  let string;

  const suppositionsString = suppositionsStringFromSuppositions(suppositions),
        deductionString = deduction.getString(),
        labelsString = labelsStringFromLabels(labels);

  if (labelsString !== null) {
    string = (suppositionsString !== null) ?
               `${labelsString} :: [${suppositionsString}] ... ${deductionString}` :
                 `${labelsString} :: ${deductionString}`;
  } else {
    string = (suppositionsString !== null) ?
               `[${suppositionsString}] ... ${deductionString}` :
                 deductionString;
  }

  return string;
}
