"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

import Substitutions from "../../substitutions";

export default domAssigned(class SatisfiesAssertion {
  constructor(string, node, tokens, signature, reference) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.signature = signature;
    this.reference = reference;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getTokens() {
    return this.tokens;
  }

  getSignature() {
    return this.signature;
  }

  getReference() {
    return this.reference;
  }

  correlateSubstitutions(substitutions, context) { return this.signature.correlateSubstitutions(substitutions, context); }

  verify(assignments, stated, context) {
    let verifies = false;

    const satisfiesAssertionString = this.string; ///

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
          satisfiesAssertionString = this.string; ///

    context.trace(`Unifying the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion...`);

    this.signature.verify(context);

    const axiom = context.findAxiomByReference(this.reference),
          satisfiable = axiom.isSatisfiable();

    if (satisfiable) {
      let substitutions;

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

  static fromStatementNode(statementNode, context) {
    let satisfiesAssertion = null;

    const satisfiesAssertionNode = statementNode.getSatisfiedAssertionNode();

    if (satisfiesAssertionNode !== null) {
      const { Reference } = dom,
            node = satisfiesAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            signature = signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context),
            reference = Reference.fromSatisfiesAssertionNode(satisfiesAssertionNode, context);

      satisfiesAssertion = new SatisfiesAssertion(string, node, tokens, signature, reference);
    }

    return satisfiesAssertion;
  }
});

function signatureFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  const { Signature } = dom,
        signatureNode = satisfiesAssertionNode.getSignatureNode(),
        signature = Signature.fromSignatureNode(signatureNode, context);

  return signature;
}
