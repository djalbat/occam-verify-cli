"use strict";

import { Element } from "occam-languages";

import assignAssignments from "../process/assign";

import { asyncScope } from "../utilities/context";
import { labelFromJSON,
         labelToLabelJSON,
         deductionFromJSON,
         suppositionsFromJSON,
         substitutionsFromJSON,
         deductionToDeductionJSON,
         suppositionsToSuppositionsJSON,
         substitutionsToSubstitutionsJSON } from "../utilities/json";

export default class TopLevelMetaAssertion extends Element {
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

  verifyLabel() {
    let labelVerifies;

    const context = this.getContext(),
          topLevelMetaAssertionString = this.getString(); ///

    context.trace(`Verifiesing the '${topLevelMetaAssertionString}' top level meta assertion's label...`);

    const nameOnly = true;

    labelVerifies = this.label.verify(nameOnly);

    if (labelVerifies) {
      context.trace(`...verified the '${topLevelMetaAssertionString}' top level meta assertion's label.`);
    }

    return labelVerifies;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          topLevelMetaAssertionString = this.getString(); ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion...`);

    await asyncScope(async (context) => {
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
    }, context);

    if (verifies) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion.`);
    }

    return verifies;
  }

  async verifyProof(context) {
    let proofVerifies;

    if (this.proof === null) {
      proofVerifies = true;
    } else {
      const topLevelMetaAssertionString = this.getString();  ///

      context.trace(`Verifying the '${topLevelMetaAssertionString}' top meta level assertion's proof...`);

      const statement = this.deduction.getStatement();

      proofVerifies = this.proof.verify(statement, context);

      if (proofVerifies) {
        context.debug(`...verified the '${topLevelMetaAssertionString}' top meta level assertion's proof.`);
      }
    }

    return proofVerifies;
  }

  async verifyDeduction(context) {
    let deductionVerifies;

    const topLevelMetaAssertionString = this.getString(); ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion's deduction...`);

    deductionVerifies = await this.deduction.verify(context);

    if (deductionVerifies) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion's deduction.`);
    }

    return deductionVerifies;
  }

  async verifySuppositions(context) {
    let suppositionsVerify;

    const topLevelMetaAssertionString = this.getString();  ///

    context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion's suppositions...`);

    suppositionsVerify = await asyncForwardsEvery(this.suppositions, async (supposition) => {
      const assignments = [],
            suppositionVerifies = await supposition.verify(assignments, context)

      if (suppositionVerifies) {
        assignAssignments(assignments, context);

        const subproofOrProofAssertion = supposition;  ////

        context.addSubproofOrProofAssertion(subproofOrProofAssertion);

        return true;
      }
    });

    if (suppositionsVerify) {
      context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion's suppositions.`);
    }

    return suppositionsVerify;
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
          string = topLevelMetaAssertionStringFromLabelASuppositionsAndDeduction(label, suppositions, deduction),
          topLevelMetaAssertion = new Class(context, string, node, label, suppositions, deduction, proof, substitutions);

    return topLevelMetaAssertion;
  }
}
