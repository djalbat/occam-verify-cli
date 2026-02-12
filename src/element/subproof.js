"use strict";

import { Element } from "occam-languages";

import { scope } from "../utilities/context";
import { define } from "../elements";

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

  verify(substitutions, assignments, context) {
    let verifies = false;

    scope(() => {
      const suppositionsVerify = this.suppositions.every((supposition) => {
        const suppositionVerifies = supposition.verify(context);

        if (suppositionVerifies) {
          return true;
        }
      });

      if (suppositionsVerify) {
        const subDerivationVerifies = this.subDerivation.verify(substitutions, context);

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
