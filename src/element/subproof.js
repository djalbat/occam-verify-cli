"use strict";

import { Element, asynchronousUtilities } from "occam-languages";

import { define } from "../elements";
import { asyncScope } from "../utilities/context";

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

  getLastProofAssertion() { return this.subDerivation.getLastProofAssertion(); }

  getStatements() {
    const lastProofAssertion = this.getLastProofAssertion(),
          suppositionStatements = this.suppositions.map((supposition) => {
            const suppositionStatement = supposition.getStatement();

            return suppositionStatement;
          }),
          lastProofAssertionStatement = lastProofAssertion.getStatement(),
          statements = [
            ...suppositionStatements,
            lastProofAssertionStatement
          ];

    return statements;
  }

  isProofAssertion() {
    const proofAssertion = false;

    return proofAssertion;
  }

  async verify(context) {
    let verifies = false;

    await asyncScope(async () => {
      const suppositionsVerify = await asyncEvery(this.suppositions, async (supposition) => {
        const suppositionVerifies = await supposition.verify(context);

        if (suppositionVerifies) {
          const subproofOrProofAssertion = supposition;  ////

          context.assignAssignments(context);

          context.addSubproofOrProofAssertion(subproofOrProofAssertion);

          return true;
        }
      });

      if (suppositionsVerify) {
        const subDerivationVerifies = await this.subDerivation.verify(context);

        if (subDerivationVerifies) {
          verifies = true;
        }
      }
    }, context);

    return verifies;
  }

  compareStatement(statement, context) {
    const statementUnifies = false;

    return statementUnifies;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const subproofString = this.getString(), ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion...`)

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        const subproof = this,  ///
              substitutions = [],
              statementUnifies = axiom.unifySubproof(subproof, substitutions, context);

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
