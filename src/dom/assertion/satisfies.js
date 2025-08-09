"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

import LocalContext from "../../context/local";
import Substitutions from "../../substitutions";
import {statementFromJSON} from "../../utilities/json";

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

  matchSubstitutions(substitutions, context) {
    const substitutionsMatch = this.signature.matchSubstitutions(substitutions, context);

    return substitutionsMatch;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const satisfiesAssertionString = this.string; ///

    context.trace(`Verifying the '${satisfiesAssertionString}' satisfies assertion...`);

    const signatureVerified = this.verifySignature(assignments, stated, context);

    if (signatureVerified) {
      const referenceVerified = this.verifyReference(assignments, stated, context);

      verified = referenceVerified; ///
    }

    if (verified) {
      context.debug(`...verified the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return verified;
  }

  verifySignature(assignments, stated, context) {
    const signatureVerified = this.signature.verify(context);

    return signatureVerified;
  }

  verifyReference(assignments, stated, context) {
    let referenceVerified = false;

    const referenceString = this.reference.getString();

    context.trace(`Verifying the '${referenceString}' reference...`);

    const axiom = context.findAxiomByReference(this.reference, context);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        referenceVerified = true;
      }
    }

    if (referenceVerified) {
      context.debug(`...verified the '${referenceString}' reference.`);
    }

    return referenceVerified;
  }

  unifyStatement(statement, context) {
    let statementUnified = false;

    const statementString = statement.getString(),
          satisfiesAssertionString = this.string; ///

    context.trace(`Unifying the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion...`);

    this.signature.verify(context);

    let substitutions;

    const axiom = context.findAxiomByReference(this.reference),
          fileContext = axiom.getFileContext(),
          localContext = LocalContext.fromFileContext(fileContext);

    substitutions = Substitutions.fromNothing();

    const generalContext = localContext,  ///
          specificContext = context,  ///
          signatureMatches = axiom.matchSignature(this.signature, substitutions, generalContext, specificContext);

    if (signatureMatches) {
      const substitutionsB = substitutions; ///

      substitutions = Substitutions.fromNothing();

      statementUnified = axiom.unifyStatement(statement, substitutions, generalContext, specificContext);

      if (statementUnified) {
        const substitutionsA = substitutions, ///
              substitutionsMatch = substitutionsB.matchSubstitutions(substitutionsA);

        if (!substitutionsMatch) {
          statementUnified = false;
        }
      }
    }

    if (statementUnified) {
      context.debug(`...unified the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return statementUnified;
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
