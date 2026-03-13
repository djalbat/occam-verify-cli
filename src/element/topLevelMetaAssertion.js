"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import { asyncRestrict } from "../utilities/context";
import { topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction } from "../utilities/string";
import { labelFromJSON,
         labelToLabelJSON,
         deductionFromJSON,
         suppositionsFromJSON,
         deductionToDeductionJSON,
         suppositionsToSuppositionsJSON,
         metaLevelSubstitutionsFromJSON,
         metaLevelSubstitutionsToMetaLevelSubstitutionsJSON } from "../utilities/json";

const { asyncForwardsEvery } = asynchronousUtilities;

export default class TopLevelMetaAssertion extends Element {
  constructor(context, string, node, label, suppositions, deduction, proof, metaLevelSubstitutions) {
    super(context, string, node);

    this.label = label;
    this.suppositions = suppositions;
    this.deduction = deduction;
    this.proof = proof;
    this.metaLevelSubstitutions = metaLevelSubstitutions;
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
    return this.metaLevelSubstitutions;
  }

  getStatement() { return this.deduction.getStatement(); }

  compareReference(reference) {
    const label = this.getLabel(),
          labelComparesToRefference = label.compareReference(reference),
          comparesToReference = labelComparesToRefference;  ///

    return comparesToReference;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          topLevelMetaAssertionString = this.getString(); ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion...`);

    await asyncRestrict(async (context) => {
      const labelVerifies = this.verifyLabel();

      if (labelVerifies) {
        const suppositionsVerify = await this.verifySuppositions(context);

        if (suppositionsVerify) {
          const deductionVerifies = await this.verifyDeduction(context);

          if (deductionVerifies) {
            const proofVerifies = await this.verifyProof(context);

            if (proofVerifies) {
              verifies = true;
            }
          }
        }
      }
    }, this.metaLevelSubstitutions, context);

    if (verifies) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion.`);
    }

    return verifies;
  }

  verifyLabel() {
    let labelVerifies;

    const context = this.getContext(),
          topLevelMetaAssertionString = this.getString(),  ///
          labelString = this.label.getString();

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's '${labelString}' label...`);

    labelVerifies = this.label.verify();

    if (labelVerifies) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's '${labelString}' label.`);
    }

    return labelVerifies;
  }

  async verifyProof(context) {
    let proofVerifies;

    const topLevelMetaAssertionString = this.getString();  ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's proof...`);

    const statement = this.deduction.getStatement();

    proofVerifies = await this.proof.verify(statement, context);

    if (proofVerifies) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's proof.`);
    }

    return proofVerifies;
  }

  async verifyDeduction(context) {
    let deductionVerifies;

    const deductionString = this.deduction.getString(),
          topLevelMetaAssertionString = this.getString(); ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion's '${deductionString}' deduction...`);

    deductionVerifies = await this.deduction.verify(context);

    if (deductionVerifies) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion's '${deductionString}' deduction.`);
    }

    return deductionVerifies;
  }

  async verifySupposition(supposition, context) {
    let suppositionVerifies;

    const suppositionString = supposition.getString(),
          topLevelMetaAssertionString = this.getString();  ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's '${suppositionString}' supposition...`);

    suppositionVerifies = await supposition.verify(context)

    if (suppositionVerifies) {
      const subproofOrProofAssertion = supposition;  ////

      context.assignAssignments();

      context.addSubproofOrProofAssertion(subproofOrProofAssertion);
    }

    if (suppositionVerifies) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's '${suppositionString}' supposition.`);
    }

    return suppositionVerifies;
  }

  async verifySuppositions(context) {
    let suppositionsVerify;

    const topLevelMetaAssertionString = this.getString();  ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's suppositions...`);

    suppositionsVerify = await asyncForwardsEvery(this.suppositions, async (supposition) => {
      const suppositionVerifies = await this.verifySupposition(supposition, context);

      if (suppositionVerifies) {
        return true;
      }
    });

    if (suppositionsVerify) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's suppositions.`);
    }

    return suppositionsVerify;
  }

  toJSON() {
    const labelJSON = labelToLabelJSON(this.label),
          deductionJSON = deductionToDeductionJSON(this.deduction),
          suppositionsJSON = suppositionsToSuppositionsJSON(this.suppositions),
          metaLevelSubstitutionsJSON = metaLevelSubstitutionsToMetaLevelSubstitutionsJSON(this.metaLevelSubstitutions),
          label = labelJSON,  ///
          deduction = deductionJSON,  ///
          suppositions = suppositionsJSON,  ///
          metaLevelSubstitutions = metaLevelSubstitutionsJSON,  ///
          json = {
            label,
            deduction,
            suppositions,
            metaLevelSubstitutions
          };

    return json;
  }

  static fromJSON(Class, json, context) {
    const label = labelFromJSON(json, context),
          deduction = deductionFromJSON(json, context),
          suppositions = suppositionsFromJSON(json, context),
          metaLevelSubstitutions = metaLevelSubstitutionsFromJSON(json, context),
          node = null,
          proof = null,
          string = topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction(label, suppositions, deduction),
          topLevelMetaAssertion = new Class(context, string, node, label, suppositions, deduction, proof, metaLevelSubstitutions);

    return topLevelMetaAssertion;
  }
}
