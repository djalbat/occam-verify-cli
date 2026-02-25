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

  getSatisfiesAssertionNode() {
    const node = this.getNode(),
          satisfiesAssertionNode = node;  ///

    return satisfiesAssertionNode;
  }

  compareSubstitutions(substitutions, context) { return this.signature.compareSubstitutions(substitutions, context); }

  correlateSubstitutions(substitutions, context) { return this.signature.correlateSubstitutions(substitutions, context); }

  validate(stated, context) {
    let satisfiesAssertion = null;

    const satisfiesAssertionString = this.getString(); ///

    context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion) {
      satisfiesAssertion = validAssertion; ///

      context.debug(`...the '${satisfiesAssertionString}' satisfies satisfiesAssertion is already valid.`);
    } else {
      let validates = true;

      const signatureVerifies = this.validateSignature(stated, context);

      if (signatureVerifies) {
        const referenceVerifies = this.validateReference(stated, context);

        if (referenceVerifies) {
          validates = true;
        }

        validates = true;
      }

      if (validates) {
        const assertion = this; ///

        satisfiesAssertion = assertion; ///

        context.addAssertion(satisfiesAssertion);

        context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion.`);
      }
    }

    return satisfiesAssertion;
  }

  validateSignature(stated, context) {
    const signatureVerifies = this.signature.validate(context);

    return signatureVerifies;
  }

  validateReference(stated, context) {
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

  toJSON() {
    debugger

    const { name } = this.constructor,
          string = this.getString(),
          json = {
            name,
            string
          };

    return json;
  }

  static name = "SatisfiesAssertion";

  static fromJSON(json, context) {
    let satisfiesAssertion = null;

    const { name } = json;

    if (this.name === name) {
      debugger
    }

    return satisfiesAssertion;
  }
});
