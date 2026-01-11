"use strict";

import Element from "../element";
import LocalContext from "../context/local";

import { labelFromJSON,
         labelToLabelJSON,
         deductionFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         deductionToDeductionJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "../utilities/json";

export default class MetaLemmaMetatheorem extends Element {
  constructor(context, string, node, label, suppositions, deduction, proof, substitutions) {
    super(context, string, node);

    this.label = label;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.substitutions = substitutions;
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

  compareReference(reference) {
    const label = this.getLabel(),
          labelComparesToRefference = label.compareReference(reference),
          comparesToReference = labelComparesToRefference;  ///

    return comparesToReference;
  }

  verify() {
    let verifies = false;

    const labelVerifies = this.verifyLabel();

    if (labelVerifies) {
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
          node = null,
          proof = null,
          string = metaLemmaMetatheoremStringFromLabelASuppositionsAndDeduction(label, suppositions, deduction),
          metaLemmaMetatheorem = new Class(context, string, node, label, suppositions, deduction, proof, substitutions);

    return metaLemmaMetatheorem;
  }
}
