"use strict";

import Context from "../context";

export default class EphemeralContext extends Context {
  constructor(context, terms, frames, equalities, statements, assertions, references, substitutions) {
    super(context);

    this.terms = terms;
    this.frames = frames;
    this.equalities = equalities;
    this.statements = statements;
    this.assertions = assertions;
    this.references = references;
    this.substitutions = substitutions;
  }

  getTerms() {
    return this.terms;
  }

  getFrames() {
    return this.frames;
  }

  getEqualities() {
    return this.equalities;
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

    context.trace(`Adding the '${termString}' term to the ephemeral context...`);

    const termB = this.terms.find((term) => {
      const termB = term, ///
            termAEqualToTermB = termA.isEqualTo(termB);

      if (termAEqualToTermB) {
        return true;
      }
    }) || null;

    if (termB !== null) {
      context.trace(`The '${termString}' term has already been added to the ephemeral context.`);
    } else {
      this.terms.push(term);

      context.debug(`...added the '${termString}' term to the ephemeral context.`);
    }
  }

  addFrame(frame) {
    const frameA = frame, ///
      context = this, ///
      frameString = frame.getString();

    context.trace(`Adding the '${frameString}' frame to the ephemeral context...`);

    const frameB = this.frames.find((frame) => {
      const frameB = frame, ///
        frameAEqualToFrameB = frameA.isEqualTo(frameB);

      if (frameAEqualToFrameB) {
        return true;
      }
    }) || null;

    if (frameB !== null) {
      context.trace(`The '${frameString}' frame has already been added to the ephemeral context.`);
    } else {
      this.frames.push(frame);

      context.debug(`...added the '${frameString}' frame to the ephemeral context.`);
    }
  }

  addEquality(equality) {
    const equalityA = equality, ///
          context = this, ///
          equalityString = equality.getString();

    context.trace(`Adding the '${equalityString}' equality to the ephemeral context...`);

    const equalityB = this.equalities.find((equality) => {
      const equalityB = equality, ///
            equalityAEqualToEqualityB = equalityA.isEqualTo(equalityB);

      if (equalityAEqualToEqualityB) {
        return true;
      }
    }) || null;

    if (equalityB !== null) {
      context.trace(`The '${equalityString}' equality has already been added to the ephemeral context.`);
    } else {
      this.equalities.push(equality);

      context.debug(`...added the '${equalityString}' equality to the ephemeral context.`);
    }
  }

  addStatement(statement) {
    const context = this, ///
          statementA = statement, ///
          statementString = statement.getString();

    context.trace(`Adding the '${statementString}' statement to the ephemeral context...`);

    const statementB = this.statements.find((statement) => {
      const statementB = statement, ///
            statementAEqualToStatementB = statementA.isEqualTo(statementB);

      if (statementAEqualToStatementB) {
        return true;
      }
    }) || null;

    if (statementB !== null) {
      context.trace(`The '${statementString}' statement has already been added to the ephemeral context.`);
    } else {
      this.statements.push(statement);

      context.debug(`...added the '${statementString}' statement to the ephemeral context.`);
    }
  }

  addAssertion(assertion) {
    const context = this, ///
          assertionA = assertion, ///
          assertionString = assertion.getString();

    context.trace(`Adding the '${assertionString}' assertion to the ephemeral context...`);

    const assertionB = this.assertions.find((assertion) => {
      const assertionB = assertion, ///
            assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);

      if (assertionAEqualToAssertionB) {
        return true;
      }
    }) || null;

    if (assertionB !== null) {
      context.trace(`The '${assertionString}' assertion has already been added to the ephemeral context.`);
    } else {
      this.assertions.push(assertion);

      context.debug(`...added the '${assertionString}' assertion to the ephemeral context.`);
    }
  }

  addReference(reference) {
    const context = this, ///
          referenceA = reference, ///
          referenceString = reference.getString();

    context.trace(`Adding the '${referenceString}' reference to the ephemeral context...`);

    const referenceB = this.references.find((reference) => {
      const referenceB = reference, ///
            referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);

      if (referenceAEqualToReferenceB) {
        return true;
      }
    }) || null;

    if (referenceB !== null) {
      context.trace(`The '${referenceString}' reference has already been added to the ephemeral context.`);
    } else {
      this.references.push(reference);

      context.debug(`...added the '${referenceString}' reference to the ephemeral context.`);
    }
  }

  addSubstitution(substitution) {
    const context = this, ///
          substitutionA = substitution, ///
          substitutionString = substitution.getString();

    context.trace(`Adding the '${substitutionString}' substitution to the ephemeral context...`);

    const substitutionB = this.substitutions.find((substitution) => {
      const substitutionB = substitution, ///
            substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);

      if (substitutionAEqualToSubstitutionB) {
        return true;
      }
    }) || null;

    if (substitutionB !== null) {
      context.trace(`The '${substitutionString}' substitution has already been added to the ephemeral context.`);
    } else {
      this.substitutions.push(substitution);

      context.debug(`...added the '${substitutionString}' substitution to the ephemeral context.`);
    }
  }

  findTermByTermNode(termNode) {
    const term = this.terms.find((term) => {
      const termNodeMatches = term.matchTermNode(termNode);

      if (termNodeMatches) {
        return true;
      }
    }) || null;

    return term;
  }

  findFrameByFrameNode(frameNode) {
    const frame = this.frames.find((frame) => {
      const frameNodeMatches = frame.matchFrameNode(frameNode);

      if (frameNodeMatches) {
        return true;
      }
    }) || null;

    return frame;
  }

  findEqualityByEqualityNode(equalityNode) {
    const equality = this.equalities.find((equality) => {
      const equalityNodeMatches = equality.matchEqualityNode(equalityNode);

      if (equalityNodeMatches) {
        return true;
      }
    }) || null;

    return equality;
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

  isTermPresentByTermNode(termNode) {
    const termPresent = this.terms.some((term) => {
      const termNodeMatches = term.matchTermNode(termNode);

      if (termNodeMatches) {
        return true;
      }
    });

    return termPresent;
  }

  isFramePresentByFrameNode(frameNode) {
    const framePresent = this.frames.some((frame) => {
      const frameNodeMatches = frame.matchFrameNode(frameNode);

      if (frameNodeMatches) {
        return true;
      }
    });

    return framePresent;
  }

  isEqualityPresentByEqualityNode(equalityNode) {
    const equalityPresent = this.equalities.some((equality) => {
      const equalityNodeMatches = equality.matchEqualityNode(equalityNode);

      if (equalityNodeMatches) {
        return true;
      }
    });

    return equalityPresent;
  }

  isStatementPresentByStatementNode(statementNode) {
    const statementPresent = this.statements.some((statement) => {
      const statementNodeMatches = statement.matchStatementNode(statementNode);

      if (statementNodeMatches) {
        return true;
      }
    });

    return statementPresent;
  }

  isAssertionPresentByAssertionNode(assertionNode) {
    const assertionPresent = this.assertions.some((assertion) => {
      const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);

      if (assertionNodeMatches) {
        return true;
      }
    });

    return assertionPresent;
  }

  isReferencePresentByReferenceNode(referenceNode) {
    const referencePresent = this.references.some((reference) => {
      const referenceNodeMatches = reference.matchReferenceNode(referenceNode);

      if (referenceNodeMatches) {
        return true;
      }
    });

    return referencePresent;
  }

  isSubstitutionPresentBySubstitutionNode(substitutionNode) {
    const substitutionPresent = this.substitutions.some((substitution) => {
      const substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);

      if (substitutionNodeMatches) {
        return true;
      }
    });

    return substitutionPresent;
  }

  static fromNothing(context) {
    const terms = [],
          frames = [],
          equalities = [],
          statements = [],
          assertions = [],
          references = [],
          substitutions = [],
          emphemeralContext = new EphemeralContext(context, terms, frames, equalities, statements, assertions, references, substitutions);

    return emphemeralContext;
  }
}
