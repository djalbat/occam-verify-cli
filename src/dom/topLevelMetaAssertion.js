"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
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
  constructor(fileContext, string, label, suppositions, deduction, proof, substitutions) {
    this.fileContext = fileContext;
    this.string = string;
    this.label = label;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.substitutions = substitutions;
  }

  getFileContext() {
    return this.fileContext;
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
            const proofVerifies = this.proof.verify(this.substitutions, this.deduction, context);

            verifies = proofVerifies; ///
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

  static fromJSON(Class, json, fileContext) {
    const label = labelFromJSON(json, fileContext),
          deduction = deductionFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          substitutions = substitutionsFromJSON(json, fileContext),
          proof = null,
          string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction),
          topLevelMetaAssertion = new Class(fileContext, string, label, suppositions, deduction, proof, substitutions);

    return topLevelMetaAssertion;
  }

  static fromNode(Class, node, fileContext) {
    const topLevelAssertionNode = node, ///
          proofNode = topLevelAssertionNode.getProofNode(),
          labelNode = topLevelAssertionNode.getLabelNode(),
          deductionNode = topLevelAssertionNode.getDeductionNode(),
          suppositionNodes = topLevelAssertionNode.getSuppositionNodes(),
          proof = proofFromProofNode(proofNode, fileContext),
          label = labelFromLabelNode(labelNode, fileContext),
          deduction = deductionFromDeductionNode(deductionNode, fileContext),
          suppositions = suppositionsFromSuppositionNodes(suppositionNodes, fileContext),
          substitutions = Substitutions.fromNothing(),
          string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction),
          topLevelMetaAssertion = new Class(fileContext, string, label, suppositions, deduction, proof, substitutions);

    return topLevelMetaAssertion;
  }
}

function labelFromLabelNode(labelNode, fileContext) {
  let label = null;

  const { Label } = dom;

  if (labelNode !== null) {
    label = Label.fromLabelNode(labelNode, fileContext);
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
