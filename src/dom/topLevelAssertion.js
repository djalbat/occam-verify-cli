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
  constructor(context, string, labels, suppositions, deduction, proof, signature) {
    this.context = context;
    this.string = string;
    this.labels = labels;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.signature = signature;
  }

  getContext() {
    return this.context;
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
      const localContext = LocalContext.fromContext(this.context),
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

    const generalContext = this.context, ///
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

  static fromJSON(Class, json, context) {
    const labels = labelsFromJSON(json, context),
          deduction = deductionFromJSON(json, context),
          suppositions = suppositionsFromJSON(json, context),
          signature = signatureFromJSON(json, context),
          proof = null,
          string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
          topLevelAssertion = new Class(context, string, labels, suppositions, deduction, proof, signature);

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
          string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction),
          topLevelAssertion = new Class(context, string, labels, suppositions, deduction, proof, signature);

    return topLevelAssertion;
  }
}

export function proofFromProofNode(proofNode, context) {
  const { Proof } = dom,
        proof = Proof.fromProofNode(proofNode, context);

  return proof;
}

export function labelsFromLabelNodes(labelNodes, context) {
  const { Label } = dom,
        labels = labelNodes.map((labelNode) => {
          const label = Label.fromLabelNode(labelNode, context);

          return label;
        });

  return labels;
}

export function signatureFromSignatureNode(signatureNode, context) {
  let signature = null;

  if (signatureNode !== null) {
    const { Signature } = dom;

    signature = Signature.fromSignatureNode(signatureNode, context);
  }

  return signature;
}

export function deductionFromDeductionNode(deductionNode, context) {
  const { Deduction } = dom,
        deduction = Deduction.fromDeductionNode(deductionNode, context);

  return deduction;
}

export function suppositionsFromSuppositionNodes(suppositionNodes, context) {
  const { Supposition } = dom,
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
