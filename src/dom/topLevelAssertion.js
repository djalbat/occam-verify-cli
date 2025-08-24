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
      const localContext = LocalContext.fromFileContext(this.fileContext),
            context = localContext, ///
            suppositionsVerify = this.suppositions.every((supposition) => {
              const suppositionVerifies = supposition.verify(context);

              if (suppositionVerifies) {
                return true;
              }
            });

      if (suppositionsVerify) {
        const deductionVerifies = this.deduction.verify(context);

        if (deductionVerifies) {
          if (this.proof === null) {
            verifies = true;
          } else {
            const substitutions = Substitutions.fromNothing(),
                  proofVerifies = this.proof.verify(substitutions, this.deduction, context);

            verifies = proofVerifies; ///
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

  unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext) {
    let statementUnifiesWithDeduction = false;

    const statementUnifies = this.deduction.unifyStatement(statement, substitutions, generalContext, specificContext);  ///

    if (statementUnifies) {
      statementUnifiesWithDeduction = true;
    }

    return statementUnifiesWithDeduction;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
    let statementAndStepsOrSubproofsUnify = false;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context, ///
          statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

    if (statementUnifiesWithDeduction) {
      const stepsOrSubproofsUnifyWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext);

      if (stepsOrSubproofsUnifyWithSuppositions) {
        const substitutionsResolved = substitutions.areResolved();

        if (substitutionsResolved) {
          statementAndStepsOrSubproofsUnify = true;
        }
      }
    }

    return statementAndStepsOrSubproofsUnify;
  }

  unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext) {
    let stepsOrSubproofsUnifyWithSupposition = false;

    const context = specificContext,  ///
          suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context);

    if (suppositionUnifiesIndependently) {
      stepsOrSubproofsUnifyWithSupposition = true;
    } else {
      const stepOrSubproof = extract(stepsOrSubproofs, (stepOrSubproof) => {
        const stepOrSubproofUnifies = supposition.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);

        if (stepOrSubproofUnifies) {
          return true;
        }
      }) || null;

      if (stepOrSubproof !== null) {
        stepsOrSubproofsUnifyWithSupposition = true;
      }
    }

    return stepsOrSubproofsUnifyWithSupposition;
  }

  unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext) {
    stepsOrSubproofs = reverse(stepsOrSubproofs); ///

    const stepsOrSubproofsUnifyWithSuppositions = backwardsEvery(this.suppositions, (supposition) => {
      const stepsOrSubproofsUnifyWithSupposition = this.unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext);

      if (stepsOrSubproofsUnifyWithSupposition) {
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
          string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
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
          string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
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
  const suppositionsString = suppositionsStringFromSuppositions(suppositions),
        deductionString = deduction.getString(),
        labelsString = labelsStringFromLabels(labels),
        string = (labelsString === null) ?
                   deductionString : ///
                    `${labelsString} :: [${suppositionsString}] ... ${deductionString}`;

  return string;
}
