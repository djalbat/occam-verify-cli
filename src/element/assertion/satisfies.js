"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";

export default define(class SatisfiesAssertion extends Assertion {
  constructor(context, string, node, signature, reference) {
    super(context, string, node);

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

  validate(assignments, stated, context) {
    let validates = false;

    const satisfiesAssertionString = this.getString(); ///

    context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertion...`);

    const valid = this.isValid(context);

    if (valid) {
      validates = true;

      context.debug(`...the '${satisfiesAssertionString}' satisfies assertion is already valid.`);
    } else {
      const signatureVerifies = this.validateSignature(assignments, stated, context);

      if (signatureVerifies) {
        const referenceVerifies = this.validateReference(assignments, stated, context);

        validates = referenceVerifies; ///
      }

      if (validates) {
        context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion.`);
      }
    }

    return validates;
  }

  validateSignature(assignments, stated, context) {
    const signatureVerifies = this.signature.validate(context);

    return signatureVerifies;
  }

  validateReference(assignments, stated, context) {
    let referenceVerifies = false;

    const referenceString = this.reference.getString(),
          satisfiesAssertionString = this.getString();  ///

    context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference...`);

    const axiom = context.findAxiomByReference(this.reference, context);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        referenceVerifies = true;
      }
    }

    if (referenceVerifies) {
      context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference.`);
    }

    return referenceVerifies;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
    let statementUnifies = false;

    const statementString = statement.getString(),
          satisfiesAssertionString = this.getString(); ///

    context.trace(`Unifying the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion...`);

    this.signature.validate(context);

    const axiom = context.findAxiomByReference(this.reference),
          satisfiable = axiom.isSatisfiable();

    if (satisfiable) {
      let substitutions;

      substitutions = [];

      const axiomComparesToSignature = axiom.compareSignature(this.signature, substitutions, context);

      if (axiomComparesToSignature) {
        const substitutionsB = substitutions; ///

        substitutions = [];

        statementUnifies = axiom.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);

        if (statementUnifies) {
          const substitutionsA = substitutions, ///
                substitutionsCorrelate = substitutionsA.correlateSubstitutions(substitutionsB);

          if (!substitutionsCorrelate) {
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
