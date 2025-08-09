"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";

import { labelsFromJSON,
         deductionFromJSON,
         signatureFromJSON,
         labelsToLabelsJSON,
         suppositionsFromJSON,
         deductionToDeductionJSON,
         signatureToSignatureJSON,
         suppositionsToSuppositionsJSON } from "../utilities/json";

const { reverse, extract, backwardsEvery } = arrayUtilities;

export default class TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, deduction, proof, signature) {
    this.fileContext = fileContext;
    this.string = string;
    this.labels = labels;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.signature = signature;
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

  getStatement() { return this.deduction.getStatement(); }

  isUnconditional() {
    const suppositionsLength = this.suppositions.length,
          unconditional = (suppositionsLength === 0);

    return unconditional;
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
    let verified = false;

    const labelsVerified = this.verifyLabels();

    if (labelsVerified) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
            context = localContext, ///
            suppositionsVerified = this.suppositions.every((supposition) => {
              const suppositionVerified = supposition.verify(context);

              if (suppositionVerified) {
                return true;
              }
            });

      if (suppositionsVerified) {
        const deductionVerified = this.deduction.verify(context);

        if (deductionVerified) {
          if (this.proof === null) {
            verified = true;
          } else {
            const substitutions = Substitutions.fromNothing(),
                  proofVerified = this.proof.verify(substitutions, this.deduction, context);

            verified = proofVerified; ///
          }
        }
      }
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

  unifyStatement(statement, context) {
    let statementUnified;

    const statementString = statement.getString(),
          axiomLemmaTheoremConjecture = this, ///
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture...`);

    const suppositions = this.getSuppositions(),
          suppositionsLength = suppositions.length;

    if (suppositionsLength === 0) {
      const substitutions = Substitutions.fromNothing(),
            localContext = LocalContext.fromFileContext(this.fileContext),
            generalContext = localContext,  ///
            specificContext = context,  ///
            statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

      statementUnified = statementUnifiedWithDeduction;  ///
    }

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture.`);
    }

    return statementUnified;
  }

  unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext) {
    let deductionUnified;

    const statementUnified = this.deduction.unifyStatement(statement, substitutions, generalContext, specificContext);  ///

    deductionUnified = statementUnified; ///

    return deductionUnified;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
    let statementAndStepsOrSubproofsUnified = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context, ///
          statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

    if (statementUnifiedWithDeduction) {
      const stepsOrSubproofsUnifiedWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext);

      if (stepsOrSubproofsUnifiedWithSuppositions) {
        const substitutionsResolved = substitutions.areResolved();

        statementAndStepsOrSubproofsUnified = substitutionsResolved; ///
      }
    }

    return statementAndStepsOrSubproofsUnified;
  }

  unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext) {
    let stepsOrSubproofsUnifiedWithSupposition  =false;

    const context = specificContext,  ///
          suppositionUnifiedIndependently = supposition.unifyIndependently(substitutions, context);

    if (suppositionUnifiedIndependently) {
      stepsOrSubproofsUnifiedWithSupposition = true;
    } else {
      const step = extract(stepsOrSubproofs, (stepOrSubproof) => {
        const stepUnified = supposition.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);

        if (stepUnified) {
          return true;
        }
      }) || null;

      if (step !== null) {
        stepsOrSubproofsUnifiedWithSupposition = true;
      }
    }

    return stepsOrSubproofsUnifiedWithSupposition;
  }

  unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext) {
    stepsOrSubproofs = reverse(stepsOrSubproofs); ///

    const stepsOrSubproofsUnifiedWithSuppositions = backwardsEvery(this.suppositions, (supposition) => {
      const stepsOrSubproofsUnifiedWithSupposition = this.unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext);

      if (stepsOrSubproofsUnifiedWithSupposition) {
        return true;
      }
    });

    return stepsOrSubproofsUnifiedWithSuppositions;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          deductionJSON = deductionToDeductionJSON(this.deduction),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          signatureJSON = signatureToSignatureJSON(this.signature),
          labels = labelsJSON,  ///
          deduction = deductionJSON,  ///
          suppositions = suppositionsJSON,  ///
          signature = signatureJSON,
          json = {
            labels,
            deduction,
            suppositions,
            signature,
          };

    return json;
  }

  static fromJSON(Class, json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          deduction = deductionFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          signature = signatureFromJSON(json, fileContext),
          proof = null,
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof, signature);

    return topLevelAssertion;
  }

  static fromNode(Class, node, fileContext) {
    const topLevelAssertionNode = node, ///
          proofNode = topLevelAssertionNode.getProofNode(),
          labelNodes = topLevelAssertionNode.getLabelNodes(),
          deductionNode = topLevelAssertionNode.getDeductionNode(),
          suppositionNodes = topLevelAssertionNode.getSuppositionNodes(),
          signatureNode = topLevelAssertionNode.getSignatureNode(),
          proof = proofFromProofNode(proofNode, fileContext),
          labels = labelsFromLabelNodes(labelNodes, fileContext),
          deduction = deductionFromDeductionNode(deductionNode, fileContext),
          suppositions = suppositionsFromSuppositionNodes(suppositionNodes, fileContext),
          signature = signatureFromSignatureNode(signatureNode, fileContext),
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof, signature);

    return topLevelAssertion;
  }
}

export function proofFromProofNode(proofNode, fileContext) {
  const { Proof } = dom,
        proof = Proof.fromProofNode(proofNode, fileContext);

  return proof;
}

export function labelsFromLabelNodes(labelNodes, fileContext) {
  const { Label } = dom,
        labels = labelNodes.map((labelNode) => {
          const label = Label.fromLabelNode(labelNode, fileContext);

          return label;
        });

  return labels;
}

export function signatureFromSignatureNode(signatureNode, fileContext) {
  let signature = null;

  if (signatureNode !== null) {
    const { Signature } = dom;

    signature = Signature.fromSignatureNode(signatureNode, fileContext);
  }

  return signature;
}

export function deductionFromDeductionNode(deductionNode, fileContext) {
  const { Deduction } = dom,
        deduction = Deduction.fromDeductionNode(deductionNode, fileContext);

  return deduction;
}

export function suppositionsFromSuppositionNodes(suppositionNodes, fileContext) {
  const { Supposition } = dom,
        suppositions = suppositionNodes.map((suppositionNode) => {
          const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

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

export function stringFromLabelsAndDeduction(labels, deduction) {
  const deductionString = deduction.getString(),
        labelsString = labelsStringFromLabels(labels),
        string = (labelsString === null) ?
                   deductionString : ///
                    `${labelsString} :: ${deductionString}`;

  return string;
}
