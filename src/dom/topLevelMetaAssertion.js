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
    let verified = false;

    const labelVerified = this.verifyLabel();

    if (labelVerified) {
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
            const proofVerified = this.proof.verify(this.substitutions, this.deduction, context);

            verified = proofVerified; ///
          }
        }
      }
    }

    return verified;
  }

  verifyLabel() {
    const nameOnly = false,
          labelVerified = this.label.verify(nameOnly);

    return labelVerified;
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
          string = stringFromLabelAndDeduction(label, deduction),
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
          string = stringFromLabelAndDeduction(label, deduction),
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

function stringFromLabelAndDeduction(label, deduction) {
  const deductionString = deduction.getString(),
        labelString = labelStringFromLabel(label),
        string = (labelString === null) ?
                    deductionString : ///
                     `${labelString} :: ${deductionString}`;

  return string;
}
