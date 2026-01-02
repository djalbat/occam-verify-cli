"use strict";

import elements from "../../elements";
import Assertion from "../assertion";

import { define } from "../../elements";

export default define(class SatisfiesAssertion extends Assertion {
  constructor(string, node, signature, reference) {
    super(string, node);

    this.signature = signature;
    this.reference = reference;
  }

  getSignature() {
    return this.signature;
  }

  getReference() {
    return this.reference;
  }

  compareSubstitutions(substitutions, context) { return this.signature.compareSubstitutions(substitutions, context); }

  correlateSubstitutions(substitutions, context) { return this.signature.correlateSubstitutions(substitutions, context); }

  verify(assignments, stated, context) {
    let verifies = false;

    const satisfiesAssertionString = this.getString(); ///

    context.trace(`Verifying the '${satisfiesAssertionString}' satisfies assertion...`);

    const signatureVerifies = this.verifySignature(assignments, stated, context);

    if (signatureVerifies) {
      const referenceVerifies = this.verifyReference(assignments, stated, context);

      verifies = referenceVerifies; ///
    }

    if (verifies) {
      context.debug(`...verified the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return verifies;
  }

  verifySignature(assignments, stated, context) {
    const signatureVerifies = this.signature.verify(context);

    return signatureVerifies;
  }

  verifyReference(assignments, stated, context) {
    let referenceVerifies = false;

    const referenceString = this.reference.getString();

    context.trace(`Verifying the '${referenceString}' reference...`);

    const axiom = context.findAxiomByReference(this.reference, context);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        referenceVerifies = true;
      }
    }

    if (referenceVerifies) {
      context.debug(`...verified the '${referenceString}' reference.`);
    }

    return referenceVerifies;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
    let statementUnifies = false;

    const statementString = statement.getString(),
          satisfiesAssertionString = this.getString(); ///

    context.trace(`Unifying the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion...`);

    this.signature.verify(context);

    const axiom = context.findAxiomByReference(this.reference),
          satisfiable = axiom.isSatisfiable();

    if (satisfiable) {
      let substitutions;

      const { Substitutions } = elements;

      substitutions = Substitutions.fromNothing();

      const signatureMatches = axiom.matchSignature(this.signature, substitutions, context);

      if (signatureMatches) {
        const substitutionsB = substitutions; ///

        substitutions = Substitutions.fromNothing();

        statementUnifies = axiom.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);

        if (statementUnifies) {
          const substitutionsA = substitutions, ///
                substitutionsMatch = substitutionsA.correlateSubstitutions(substitutionsB);

          if (!substitutionsMatch) {
            const substitutionsAString = substitutionsA.asString(),
                  substitutionsBString = substitutionsB.asString();

            context.trace(`THe signature's ${substitutionsBString} substitutions do not correlate with the unification's ${substitutionsAString} substitutions.`);

            statementUnifies = false;
          }
        }
      }
    }

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return statementUnifies;
  }

  static name = "SatisfiesAssertion";
});
