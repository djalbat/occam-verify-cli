"use strict";

import { arrayUtilities } from "necessary";

import { chainContext } from "../utilities/context";

const { extract } = arrayUtilities;

export default class EphemeralContext {
  constructor(context, terms, frames, statements, references, assertions) {
    this.context = context;
    this.terms = terms;
    this.frames = frames;
    this.statements = statements;
    this.references = references;
    this.assertions = assertions;

    return chainContext(this);
  }

  getContext() {
    return this.context;
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

  getReferences() {
    return this.references;
  }

  getAssertions() {
    return this.assertions;
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

    context.trace(`ADded the '${termString}' term to the context.`);

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

  findReferenceByMetavariableNode(metavariableNode) {
    const reference = this.references.find((reference) => {
      const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);

      if (referenceMatcheMetavariableNode) {
        return true;
      }
    }) || null;

    return reference;
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

  static fromNothing(context) {
    const terms = [],
          frames = [],
          statements = [],
          references = [],
          assertions = [],
          emphemeralContext = new EphemeralContext(context, terms, frames, statements, references, assertions);

    return emphemeralContext;
  }
}
