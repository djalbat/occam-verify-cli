"use strict";

import { arrayUtilities } from "necessary";
import { Context, contextUtilities } from "occam-languages";

const { extract } = arrayUtilities,
      { chainContext } = contextUtilities;

export default class EphemeralContext extends Context {
  constructor(context, terms, frames, statements, assertions, references, substitutions) {
    super(context);

    this.terms = terms;
    this.frames = frames;
    this.statements = statements;
    this.assertions = assertions;
    this.references = references;
    this.substitutions = substitutions;

    return chainContext(this);
  }

  getTerms() {
    return this.terms;
  }

  getFrames() {
    return this.frames;
  }

  getStatements() {
    return this.statements;
  }

  getAssertions() {
    return this.assertions;
  }

  getReferences() {
    return this.references;
  }

  getSubstitutions() {
    return this.substitutions;
  }

  addTerm(term) {
    const termA = term, ///
          context = this, ///
          termString = term.getString();

    extract(this.terms, (term) => {
      const termB = term, ///
            termAEqualToTermB = termA.isEqualTo(termB);

      if (termAEqualToTermB) {
        return true;
      }
    });

    context.trace(`Added the '${termString}' term to the context.`);

    this.terms.push(term);
  }

  addFrame(frame) {
    const frameA = frame, ///
          context = this, ///
          frameString = frame.getString();

    extract(this.frames, (frame) => {
      const frameB = frame, ///
            frameAEqualToFrameB = frameA.isEqualTo(frameB);

      if (frameAEqualToFrameB) {
        return true;
      }
    });

    context.trace(`Added the '${frameString}' frame to the context.`);

    this.frames.push(frame);
  }

  addStatement(statement) {
    const context = this, ///
          statementA = statement, ///
          statementString = statement.getString();

    extract(this.statements, (statement) => {
      const statementB = statement, ///
            statementAEqualToFrameB = statementA.isEqualTo(statementB);

      if (statementAEqualToFrameB) {
        return true;
      }
    });

    context.trace(`Added the '${statementString}' statement to the context.`);

    this.statements.push(statement);
  }

  addAssertion(assertion) {
    const context = this, ///
          assertionA = assertion, ///
          assertionString = assertion.getString();

    extract(this.assertions, (assertion) => {
      const assertionB = assertion, ///
        assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);

      if (assertionAEqualToAssertionB) {
        return true;
      }
    });

    context.trace(`Added the '${assertionString}' assertion to the context.`);

    this.assertions.push(assertion);
  }

  addReference(reference) {
    const context = this, ///
          referenceA = reference, ///
          referenceString = reference.getString();

    extract(this.references, (reference) => {
      const referenceB = reference, ///
            referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);

      if (referenceAEqualToReferenceB) {
        return true;
      }
    });

    context.trace(`Added the '${referenceString}' reference to the context.`);

    this.references.push(reference);
  }

  addSubstitution(substitution) {
    const context = this, ///
          substitutionA = substitution, ///
          substitutionString = substitution.getString();

    extract(this.substitutions, (substitution) => {
      const substitutionB = substitution, ///
            substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);

      if (substitutionAEqualToAssertionB) {
        return true;
      }
    });

    context.trace(`Added the '${substitutionString}' substitution to the context.`);

    this.substitutions.push(substitution);
  }

  findTermByTermNode(termNode) {
    const term = this.terms.find((term) => {
      const termNodeMatches = term.matchNode(termNode);

      if (termNodeMatches) {
        return true;
      }
    }) || null;

    return term;
  }

  findFrameByFrameNode(frameNode) {
    const frame = this.frames.find((frame) => {
      const frameNodeMatches = frame.matchNode(frameNode);

      if (frameNodeMatches) {
        return true;
      }
    }) || null;

    return frame;
  }

  findStatementByStatementNode(statementNode) {
    const statement = this.statements.find((statement) => {
      const statementNodeMatches = statement.matchNode(statementNode);

      if (statementNodeMatches) {
        return true;
      }
    }) || null;

    return statement;
  }

  findAssertionByAssertionNode(assertionNode) {
    const assertion = this.assertions.find((assertion) => {
      const assertionNodeMatches = assertion.matchNode(assertionNode);

      if (assertionNodeMatches) {
        return true;
      }
    }) || null;

    return assertion;
  }

  findReferenceByMetavariableNode(metavariableNode) {
    const reference = this.references.find((reference) => {
      const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);

      if (referenceMatcheMetavariableNode) {
        return true;
      }
    }) || null;

    return reference;
  }

  findSubstitutionBySubstitutionNode(substitutionNode) {
    const substitution = this.substitutions.find((substitution) => {
      const substitutionNodeMatches = substitution.matchNode(substitutionNode);

      if (substitutionNodeMatches) {
        return true;
      }
    }) || null;

    return substitution;
  }

  static fromNothing(context) {
    const terms = [],
          frames = [],
          statements = [],
          assertions = [],
          references = [],
          substitutions = [],
          emphemeralContext = new EphemeralContext(context, terms, frames, statements, assertions, references, substitutions);

    return emphemeralContext;
  }
}
