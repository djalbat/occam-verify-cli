"use strict";

import dom from "../dom";
import Substitutions from "../substitutions";

import { proofFromProofNode, deductionFromDeductionNode, suppositionsFromSuppositionNodes } from "./topLevelAssertion";
import { labelFromJSON,
         labelToLabelJSON,
         deductionFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         deductionToDeductionJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "../utilities/json";

export default class TopLevelMetaAssertion {
  constructor(context, string, label, suppositions, deduction, proof, substitutions) {
    this.context = context;
    this.string = string;
    this.label = label;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.substitutions = substitutions;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getLabel() {
    return this.label;
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

  getSubstitutions() {
    return this.substitutions;
  }

  getStatement() { return this.deduction.getStatement(); }

  matchReference(reference) {
    const label = this.getLabel(),
          referenceMatches = label.matchReference(reference);

    return referenceMatches;
  }

  verify() {
    let verifies = false;

    const labelVerifies = this.verifyLabel();

    if (labelVerifies) {
      const suppositionsVerify = this.verifySuppositions(this.context);

      if (suppositionsVerify) {
        const deductionVerifies = this.verifyDeduction(this.context);

        if (deductionVerifies) {
          const proofVerifies = this.verifyProof(this.context);

          if (proofVerifies) {
            verifies = true;
          }
        }
      }
    }

    return verifies;
  }

  verifyLabel() {
    const nameOnly = false,
          labelVerifies = this.label.verify(nameOnly);

    return labelVerifies;
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
      proofVerifies = this.proof.verify(this.substitutions, this.deduction, context);
    }

    return proofVerifies;
  }

  toJSON() {
    const labelJSON = labelToLabelJSON(this.label),
          deductionJSON = deductionToDeductionJSON(this.deduction),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          substitutionsJSON = substitutionsToSubstitutionsJSON(this.substitutions),
          label = labelJSON,  ///
          deduction = deductionJSON,  ///
          suppositions = suppositionsJSON,  ///
          substitutions = substitutionsJSON,  ///
          json = {
            label,
            deduction,
            suppositions,
            substitutions
          };

    return json;
  }

  static fromJSON(Class, json, context) {
    const label = labelFromJSON(json, context),
          deduction = deductionFromJSON(json, context),
          suppositions = suppositionsFromJSON(json, context),
          substitutions = substitutionsFromJSON(json, context),
          proof = null,
          string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction),
          topLevelMetaAssertion = new Class(context, string, label, suppositions, deduction, proof, substitutions);

    return topLevelMetaAssertion;
  }

  static fromNode(Class, node, context) {
    const topLevelAssertionNode = node, ///
          proofNode = topLevelAssertionNode.getProofNode(),
          labelNode = topLevelAssertionNode.getLabelNode(),
          deductionNode = topLevelAssertionNode.getDeductionNode(),
          suppositionNodes = topLevelAssertionNode.getSuppositionNodes(),
          proof = proofFromProofNode(proofNode, context),
          label = labelFromLabelNode(labelNode, context),
          deduction = deductionFromDeductionNode(deductionNode, context),
          suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context),
          substitutions = Substitutions.fromNothing(),
          string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction),
          topLevelMetaAssertion = new Class(context, string, label, suppositions, deduction, proof, substitutions);

    return topLevelMetaAssertion;
  }
}

function labelFromLabelNode(labelNode, context) {
  let label = null;

  const { Label } = dom;

  if (labelNode !== null) {
    label = Label.fromLabelNode(labelNode, context);
  }

  return label;
}

function labelStringFromLabel(label) {
  const labelsString = (label !== null) ?
                          label.getString() :
                            null;

  return labelsString;
}

function suppositionsStringFromSuppositions(suppositions) {
  const suppositionsString = suppositions.reduce((suppositionsString, supposition) => {
    const suppositionString = supposition.getString();

    suppositionsString = (suppositionsString !== null) ?
                          `${suppositionsString}, ${suppositionString}` :
                            suppositionString;  ///

    return suppositionsString;
  }, null);

  return suppositionsString;
}

function stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction) {
  const suppositionsString = suppositionsStringFromSuppositions(suppositions),
        deductionString = deduction.getString(),
        labelString = labelStringFromLabel(label),
        string = (labelString === null) ?
                    deductionString : ///
                     `${labelString} :: [${suppositionsString}] ... ${deductionString}`;

  return string;
}
