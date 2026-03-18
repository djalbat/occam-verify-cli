"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import { define } from "../elements";
import { asyncRestrict } from "../utilities/context";

const { asyncEvery } = asynchronousUtilities;

export default define(class Subproof extends Element {
  constructor(context, string, node, suppositions, subDerivation) {
    super(context, string, node);

    this.suppositions = suppositions;
    this.subDerivation = subDerivation;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getSubDerivation() {
    return this.subDerivation;
  }

  getSubproofNode() {
    const node = this.getNode(),
          subproofNode = node;  ///

    return subproofNode;
  }

  getLastStep() { return this.subDerivation.getLastStep(); }

  getStatements() {
    const lastStep = this.getLastStep(),
          suppositionStatements = this.suppositions.map((supposition) => {
            const suppositionStatement = supposition.getStatement();

            return suppositionStatement;
          }),
          lastStepStatement = lastStep.getStatement(),
          statements = [
            ...suppositionStatements,
            lastStepStatement
          ];

    return statements;
  }

  isProofAssertion() {
    const proofAssertion = false;

    return proofAssertion;
  }

  compareStatement(statement, context) {
    const statementUnifies = false;

    return statementUnifies;
  }

  async verify(context) {
    let verifies = false;

    await asyncRestrict(async (context) => {
      const suppositionsVerify = await this.verifySuppositions(context);

      if (suppositionsVerify) {
        const subDerivationVerifies = await this.verifySubDerivation(context);

        if (subDerivationVerifies) {
          verifies = true;
        }
      }
    }, context);

    return verifies;
  }

  async verifySupposition(supposition, context) {
    const suppositionVerifies = await supposition.verify(context);

    if (suppositionVerifies) {
      const subproofOrProofAssertion = supposition;  ////

      context.assignAssignments(context);

      context.addSubproofOrProofAssertion(subproofOrProofAssertion);
    }

    return suppositionVerifies;
  }

  async verifySuppositions(context) {
    let suppositionsVerify;

    suppositionsVerify = await asyncEvery(this.suppositions, async (supposition) => {
      const suppositionVerifies = await this.verifySupposition(supposition, context);

      if (suppositionVerifies) {
        return true;
      }
    });

    return suppositionsVerify;
  }

  async verifySubDerivation(context) {
    const subDerivationVerifies = await this.subDerivation.verify(context);

    return subDerivationVerifies;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const subproofString = this.getString(), ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion...`)

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference, context);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        const subproof = this,  ///
              statementUnifies = axiom.unifySubproof(subproof, context);

        if (statementUnifies) {
          const substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);

          if (substitutionsCompare) {
            unifiesWithSatisfiesAssertion = true;
          }
        }
      }
    }

    if (unifiesWithSatisfiesAssertion) {
      context.debug(`...unified the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion.`)
    }

    return unifiesWithSatisfiesAssertion;
  }

  static name = "Subproof";
});
