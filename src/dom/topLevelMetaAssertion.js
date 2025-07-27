"use strict";

import { arrayUtilities } from "necessary";

import LocalContext from "../context/local";
import TopLevelAssertion from "./topLevelAssertion";

import { proofFromProofNode, labelsFromLabelNodes, deductionFromDeductionNode, suppositionsFromSuppositionNodes, stringFromLabelsAndDeduction } from "./topLevelAssertion";
import { labelsFromJSON,
         labelsToLabelsJSON,
         deductionFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         deductionToDeductionJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "../utilities/json";

const { first } = arrayUtilities;

export default class TopLevelMetaAssertion extends TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, deduction, proof, substitutions) {
    super(fileContext, string, labels, suppositions, deduction, proof);

    this.substitutions = substitutions;
  }

  getSubstitutions() {
    return this.substitutions;
  }

  getLabel() {
    const labels = this.getLabels(),
          firstLabel = first(labels),
          label = firstLabel; ///

    return label;
  }

  matchReference(reference) {
    const label = this.getLabel(),
          referenceMatches = label.matchReference(reference);

    return referenceMatches;
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
            const proofVerified = this.proof.verify(this.substitutions, this.deduction, context);

            verified = proofVerified; ///
          }
        }
      }
    }

    return verified;
  }

  verifyLabels() {
    const labelsVerified = this.labels.every((label) => {
      const nameOnly = false,
            labelVerified = label.verify(nameOnly);

      if (labelVerified) {
        return true;
      }
    });

    return labelsVerified;
  }

  toJSON() {
    const labelsJSON = labelsToLabelsJSON(this.labels),
          deductionJSON = deductionToDeductionJSON(this.deduction),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          substitutionsJSON = substitutionsToSubstitutionsJSON(this.substitutions),
          labels = labelsJSON,  ///
          deduction = deductionJSON,  ///
          suppositions = suppositionsJSON,  ///
          substitutions = substitutionsJSON,  ///
          json = {
            labels,
            deduction,
            suppositions,
            substitutions
          };

    return json;
  }

  static fromJSON(Class, json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          deduction = deductionFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          substitutions = substitutionsFromJSON(json, fileContext),
          proof = null,
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelMetaAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof, substitutions);

    return topLevelMetaAssertion;
  }

  static fromNode(Class, node, fileContext) {
    const topLevelAssertionNode = node, ///
          proofNode = topLevelAssertionNode.getProofNode(),
          labelNodes = topLevelAssertionNode.getLabelNodes(),
          deductionNode = topLevelAssertionNode.getDeductionNode(),
          suppositionNodes = topLevelAssertionNode.getSuppositionNodes(),
          proof = proofFromProofNode(proofNode, fileContext),
          labels = labelsFromLabelNodes(labelNodes, fileContext),
          deduction = deductionFromDeductionNode(deductionNode, fileContext),
          suppositions = suppositionsFromSuppositionNodes(suppositionNodes, fileContext),
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelMetaAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof);

    return topLevelMetaAssertion;
  }
}
