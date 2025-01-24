"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const termNodesQuery = nodesQuery("/satisfyingAssertion/term"),
      satisfyingAssertionNodeQuery = nodeQuery("/statement/satisfyingAssertion");

export default domAssigned(class SatisfyingAssertion {
  constructor(string, node, tokens, terms, reference) {
    this.string = string;
    this.node = node;
    this.tokens = tokens;
    this.terms = terms;
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

  getTerms() {
    return this.terms;
  }

  getReference() {
    return this.reference;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const satisfyingAssertionString = this.string; ///

    context.trace(`Verifying the '${satisfyingAssertionString}' satisfying assertion...`);

    const termsVerified = this.verifyTerms(assignments, stated, context);

    if (termsVerified) {
      const referenceVerified = this.verifyReference(assignments, stated, context);

      verified = referenceVerified; ///
    }

    if (verified) {
      context.debug(`...verified the '${satisfyingAssertionString}' satisfying assertion.`);
    }

    return verified;
  }

  verifyTerms(assignments, stated, context) {
    let termsVerified;

    const termsString = termsStringFromTerms(this.terms),
          satisfyingAssertionString = this.string; ///

    context.trace(`Verifying the '${satisfyingAssertionString}' satisfying assertion's ${termsString} terms...`);

    termsVerified = this.terms.every((term) => {
      const termVerified = term.verify(context, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });

      return termVerified;
    });

    if (termsVerified) {
      context.debug(`...verified the '${satisfyingAssertionString}' satisfying assertion's ${termsString} terms.`);
    }

    return termsVerified;
  }

  verifyReference(assignments, stated, context) {
    let referenceVerified = false;

    const referenceString = this.reference.getString(),
          satisfyingAssertionString = this.string; ///

    context.trace(`Verifying the '${satisfyingAssertionString}' satisfying assertion's '${referenceString}' reference...`);

    const axiom = context.findAxiomByReference(this.reference, context);

    if (axiom !== null) {
      referenceVerified = true;
    }

    if (referenceVerified) {
      context.debug(`...verified the '${satisfyingAssertionString}' satisfying assertion's '${referenceString}' reference.`);
    }

    return referenceVerified;
  }

  static name = "SatisfyingAssertion";

  static fromStatementNode(statementNode, context) {
    let satisfyingAssertion = null;

    const satisfyingAssertionNode = satisfyingAssertionNodeQuery(statementNode);

    if (satisfyingAssertionNode !== null) {
      const { Reference } = dom,
            node = satisfyingAssertionNode,  ///
            string = context.nodeAsString(node),
            tokens = context.nodeAsTokens(node),
            terms = termsFromSatisfyingAssertionNode(satisfyingAssertionNode, context),
            reference = Reference.fromSatisfyingAssertionNode(satisfyingAssertionNode, context);

      satisfyingAssertion = new SatisfyingAssertion(string, node, tokens, terms, reference);
    }

    return satisfyingAssertion;
  }
});

function termsStringFromTerms(terms) {
  const termsString = terms.reduce((termsString, term) => {
    const termString = term.getString();

    termsString = (termsString === null) ?
                   `'${termString}'` :  ///
                     `${termsString}, '${termString}'`;

    return termsString;
  }, null);

  return termsString;
}

function termsFromSatisfyingAssertionNode(satisfyingAssertionNode, context) {
  const termNodes = termNodesQuery(satisfyingAssertionNode),
        terms = termNodes.map((termNode) => {
          const { Term } = dom,
                term = Term.fromTermNode(termNode, context);

          return term;
        });

  return terms;
}
