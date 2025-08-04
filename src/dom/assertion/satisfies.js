"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

import Substitutions from "../../substitutions";

export default domAssigned(class SatisfiesAssertion {
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

  matchSubstitutions(substitutions, context) {
    let substitutionsMatch;

    const termsString = termsStringFromTerms(this.terms),
          substitutionsString = substitutions.asString();

    context.trace(`Matching the '${substitutionsString}' substitutions against the ${termsString} terms...`);

    const termsMatch = substitutions.matchTerms(this.terms);

    substitutionsMatch = termsMatch;  ///

    if (substitutionsMatch) {
      context.debug(`...matched the '${substitutionsString}' substitutions against the ${termsString} terms.`);
    }

    return substitutionsMatch;
  }

  verify(assignments, stated, context) {
    let verified = false;

    const satisfiesAssertionString = this.string; ///

    context.trace(`Verifying the '${satisfiesAssertionString}' satisfies assertion...`);

    const termsVerified = this.verifyTerms(assignments, stated, context);

    if (termsVerified) {
      const referenceVerified = this.verifyReference(assignments, stated, context);

      verified = referenceVerified; ///
    }

    if (verified) {
      context.debug(`...verified the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return verified;
  }

  verifyTerms(assignments, stated, context) {
    let termsVerified;

    const termsString = termsStringFromTerms(this.terms);

    context.trace(`Verifying the ${termsString} terms...`);

    termsVerified = this.terms.every((term) => {
      const termVerified = term.verify(context, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });

      return termVerified;
    });

    if (termsVerified) {
      context.debug(`...verified the ${termsString} terms.`);
    }

    return termsVerified;
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
    let statementUnified;

    const statementString = statement.getString(),
          satisfiesAssertionString = this.string;

    context.trace(`Unifying the '${statementString}' statement with the '${satisfiesAssertionString}' satisfies assertion...`);

    const axiom = context.findAxiomByReference(this.reference),
          substitutions = Substitutions.fromNothing();

    statementUnified = axiom.unifyStatement(statement, substitutions, context);

    if (statementUnified) {
      const substitutionsMatch = this.matchSubstitutions(substitutions, context);

      statementUnified = substitutionsMatch;  ///
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
            terms = termsFromSatisfiesAssertionNode(satisfiesAssertionNode, context),
            reference = Reference.fromSatisfiesAssertionNode(satisfiesAssertionNode, context);

      satisfiesAssertion = new SatisfiesAssertion(string, node, tokens, terms, reference);
    }

    return satisfiesAssertion;
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

function termsFromSatisfiesAssertionNode(satisfiesAssertionNode, context) {
  const termNodes = satisfiesAssertionNode.getTermNodes(),
        terms = termNodes.map((termNode) => {
          const { Term } = dom,
                term = Term.fromTermNode(termNode, context);

          return term;
        });

  return terms;
}
