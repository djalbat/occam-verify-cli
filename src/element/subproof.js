"use strict";

import elements from "../elements";
import LocalContext from "../context/local";

import { define } from "../elements";

export default define(class Subproof {
  constructor(context, string, node, suppositions, subDerivation) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.suppositions = suppositions;
    this.subDerivation = subDerivation;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getSuppositions() {
    return this.suppositions;
  }

  getSubDerivation() {
    return this.subDerivation;
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

  isStep() {
    const sStep = false;

    return sStep;
  }

  unify(substitutions, context) {
    let unifies;

    unifies = true; ///

    return unifies;
  }

  verify(substitutions, assignments, context) {
    let subproofVerifies = false;

    const localContext = LocalContext.fromNothing(context);  ///

    context = localContext; ///

    const suppositionsVerify = this.suppositions.every((supposition) => {
      const suppositionVerifies = supposition.verify(context);

      if (suppositionVerifies) {
        return true;
      }
    });

    if (suppositionsVerify) {
      const subDerivationVerifies = this.subDerivation.verify(substitutions, context);

      if (subDerivationVerifies) {
        subproofVerifies = true;
      }
    }

    return subproofVerifies;
  }

  equateWithStatement(statement, context) {
    const statementUnifies = false;

    return statementUnifies;
  }

  unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
    let unifiesWithSatisfiesAssertion = false;

    const subproofString = this.string, ///
          satisfiesAssertionString = satisfiesAssertion.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${satisfiesAssertionString}' satisfies assertion...`)

    const reference = satisfiesAssertion.getReference(),
          axiom = context.findAxiomByReference(reference);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        const { Substitutions } = elements,
              subproof = this,  ///
              substitutions = Substitutions.fromNothing(),
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
