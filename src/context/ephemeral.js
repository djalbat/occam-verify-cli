"use strict";

import Context from "../context";

import { termsFromJSON,
         framesFromJSON,
         termsToTermsJSON,
         framesToFramesJSON,
         judgementsFromJSON,
         equalitiesFromJSON,
         statementsFromJSON,
         assertionsFromJSON,
         referencesFromJSON,
         assumptionsFromJSON,
         substitutionsFromJSON,
         judgementsToJudgementsJSON,
         equalitiesToEqualitiesJSON,
         statementsToStatementsJSON,
         assertionsToAssertionsJSON,
         referencesToReferencesJSON,
         assumptionsToAssumptionsJSON,
         substitutionsToCSubstitutionsJSON } from "../utilities/json";

export default class EphemeralContext extends Context {
  constructor(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions) {
    super(context);

    this.terms = terms;
    this.frames = frames;
    this.judgements = judgements;
    this.equalities = equalities;
    this.assertions = assertions;
    this.statements = statements;
    this.references = references;
    this.assumptions = assumptions;
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

  getJudgements() {
    return this.judgements;
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

  getAssumptions() {
    return this.assumptions;
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

  addJudgement(judgement) {
    const judgementA = judgement, ///
          context = this, ///
          judgementString = judgement.getString();

    context.trace(`Adding the '${judgementString}' judgement to the ephemeral context...`);

    const judgementB = this.judgements.find((judgement) => {
      const judgementB = judgement, ///
            judgementAEqualToEqualityB = judgementA.isEqualTo(judgementB);

      if (judgementAEqualToEqualityB) {
        return true;
      }
    }) || null;

    if (judgementB !== null) {
      context.trace(`The '${judgementString}' judgement has already been added to the ephemeral context.`);
    } else {
      this.judgements.push(judgement);

      context.debug(`...added the '${judgementString}' judgement to the ephemeral context.`);
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

  addAssumption(assumption) {
    const context = this, ///
          assumptionA = assumption, ///
          assumptionString = assumption.getString();

    context.trace(`Adding the '${assumptionString}' assumption to the ephemeral context...`);

    const assumptionB = this.assumptions.find((assumption) => {
      const assumptionB = assumption, ///
            assumptionAEqualToAssumptionB = assumptionA.isEqualTo(assumptionB);

      if (assumptionAEqualToAssumptionB) {
        return true;
      }
    }) || null;

    if (assumptionB !== null) {
      context.trace(`The '${assumptionString}' assumption has already been added to the ephemeral context.`);
    } else {
      this.assumptions.push(assumption);

      context.debug(`...added the '${assumptionString}' assumption to the ephemeral context.`);
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

  findJudgementByJudgementNode(judgementNode) {
    const judgement = this.judgements.find((judgement) => {
      const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);

      if (judgementNodeMatches) {
        return true;
      }
    }) || null;

    return judgement;
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
      const statementNodeMatches = statement.matchStatementNode(statementNode);

      if (statementNodeMatches) {
        return true;
      }
    }) || null;

    return statement;
  }

  findAssertionByAssertionNode(assertionNode) {
    const assertion = this.assertions.find((assertion) => {
      const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);

      if (assertionNodeMatches) {
        return true;
      }
    }) || null;

    return assertion;
  }

  findAssumptionByAssumptionNode(assumptionNode) {
    const assumption = this.assumptions.find((assumption) => {
      const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);

      if (assumptionNodeMatches) {
        return true;
      }
    }) || null;

    return assumption;
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
      const substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);

      if (substitutionNodeMatches) {
        return true;
      }
    }) || null;

    return substitution;
  }

  isTermPresentByTermNode(termNode) {
    const term = this.findTermByTermNode(termNode),
          termPresent = (term !== null);

    return termPresent;
  }

  isFramePresentByFrameNode(frameNode) {
    const frame = this.findFrameByFrameNode(frameNode),
          framePresent = (frame !== null);

    return framePresent;
  }

  isEqualityPresentByEqualityNode(equalityNode) {
    const equality = this.findEqualityByEqualityNode(equalityNode),
          equalityPresent = (equality !== null);

    return equalityPresent;
  }

  isJudgementPresentByJudgementNode(judgementNode) {
    const judgement = this.findJudgementByJudgementNode(judgementNode),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isStatementPresentByStatementNode(statementNode) {
    const statement = this.findStatementByStatementNode(statementNode),
          statementPresent = (statement !== null);

    return statementPresent;
  }

  isAssertionPresentByAssertionNode(assertionNode) {
    const assertion = this.findAssertionByAssertionNode(assertionNode),
          assertionPresent = (assertion !== null);

    return assertionPresent;
  }

  isAssumptionPresentByAssumptionNode(assumptionNode) {
    const assumption = this.findAssumptionByAssumptionNode(assumptionNode),
          assumptionPresent = (assumption !== null);

    return assumptionPresent;
  }

  isReferencePresentByMetavariableNode(metavariableNode) {
    const reference = this.findReferenceByMetavariableNode(metavariableNode),
          referencePresent = (reference !== null);

    return referencePresent;
  }

  isSubstitutionPresentBySubstitutionNode(substitutionNode) {
    const substitution = this.findSubstitutionBySubstitutionNode(substitutionNode),
          substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  initialise(json) {
    const context = this; ///

    this.terms = termsFromJSON(json, context);
    this.frames = framesFromJSON(json, context);
    this.judgements = judgementsFromJSON(json, context);
    this.equalities = equalitiesFromJSON(json, context);
    this.statements = statementsFromJSON(json, context);
    this.assertions = assertionsFromJSON(json, context);
    this.references = referencesFromJSON(json, context);
    this.assumptions = assumptionsFromJSON(json, context);
    this.substitutions = substitutionsFromJSON(json, context);
  }

  toJSON() {
    const termsJSON = termsToTermsJSON(this.terms),
          framesJSON = framesToFramesJSON(this.frames),
          judgementsJSON = judgementsToJudgementsJSON(this.judgements),
          equalitiesJSON = equalitiesToEqualitiesJSON(this.equalities),
          statementsJSON = statementsToStatementsJSON(this.statements),
          assertionsJSON = assertionsToAssertionsJSON(this.assertions),
          referencesJSON = referencesToReferencesJSON(this.references),
          assumptionsJSON = assumptionsToAssumptionsJSON(this.assumptions),
          substitutionsJSON = substitutionsToCSubstitutionsJSON(this.substitutions),
          terms = termsJSON, ///
          frames = framesJSON, ///
          judgements = judgementsJSON, ///
          equalities = equalitiesJSON, ///
          statements = statementsJSON, ///
          assertions = assertionsJSON, ///
          references = referencesJSON, ///
          assumptions = assumptionsJSON, ///
          substitutions = substitutionsJSON, ///
          json = {
            terms,
            frames,
            judgements,
            equalities,
            statements,
            assertions,
            references,
            assumptions,
            substitutions
          };

    return json;
  }

  static fromJSON(json, context) {
    const terms = null,
          frames = null,
          judgements = null,
          equalities = null,
          statements = null,
          assertions = null,
          references = null,
          assumptions = null,
          substitutions = null,
          emphemeralContext = new EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions);

    emphemeralContext.initialise(json);

    return emphemeralContext;
  }

  static fromNothing(context) {
    const terms = [],
          frames = [],
          judgements = [],
          equalities = [],
          statements = [],
          assertions = [],
          references = [],
          assumptions = [],
          substitutions = [],
          emphemeralContext = new EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions);

    return emphemeralContext;
  }
}
