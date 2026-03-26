"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push, last } = arrayUtilities;

export default class SynopticContext extends Context {
  constructor(context, contexts) {
    super(context);

    this.contexts = contexts;
  }

  getContexts() {
    return this.contexts;
  }

  getTerms() {
    const terms = [];

    this.contexts.forEach((context) => {
      const contextTerms = context.getTerms();

      push(terms, contextTerms);
    });

    return terms;
  }

  getFrames() {
    const frames = [];

    this.contexts.forEach((context) => {
      const contextFrames = context.getFrames();

      push(frames, contextFrames);
    });

    return frames;
  }

  getEqualities() {
    const equalities = [];

    this.contexts.forEach((context) => {
      const contextEqualities = context.getEqualities();

      push(equalities, contextEqualities);
    });

    return equalities;
  }

  getJudgements() {
    const judgements = [];

    this.contexts.forEach((context) => {
      const contextJudgements = context.getJudgements();

      push(judgements, contextJudgements);
    });

    return judgements;
  }

  getStatements() {
    const statements = [];

    this.contexts.forEach((context) => {
      const contextStatements = context.getStatements();

      push(statements, contextStatements);
    });

    return statements;
  }

  getAssertions() {
    const assertions = [];

    this.contexts.forEach((context) => {
      const contextAssertions = context.getAssertions();

      push(assertions, contextAssertions);
    });

    return assertions;
  }

  getReferences() {
    const references = [];

    this.contexts.forEach((context) => {
      const contextReferences = context.getReferences();

      push(references, contextReferences);
    });

    return references;
  }

  getAssumptions() {
    const assumptions = [];

    this.contexts.forEach((context) => {
      const contextAssumptions = context.getAssumptions();

      push(assumptions, contextAssumptions);
    });

    return assumptions;
  }

  getMetavariables() {
    const metavariables = [];

    this.contexts.forEach((context) => {
      const contextMetavariables = context.getMetavariables();

      push(metavariables, contextMetavariables);
    });

    return metavariables;
  }

  getSubstitutions() {
    const substitutions = [];

    this.contexts.forEach((context) => {
      const contextSubstitutions = context.getSubstitutions();

      push(substitutions, contextSubstitutions);
    });

    return substitutions;
  }

  findTermByTermNode(termNode) {
    const terms = this.getTerms(),
          term = terms.find((term) => {
            const termNodeMatches = term.matchTermNode(termNode);

            if (termNodeMatches) {
              return true;
            }
          }) || null;

    return term;
  }

  findFrameByFrameNode(frameNode) {
    const frames = this.getFrames(),
          frame = frames.find((frame) => {
            const frameNodeMatches = frame.matchFrameNode(frameNode);

            if (frameNodeMatches) {
              return true;
            }
          }) || null;

    return frame;
  }

  findEqualityByEqualityNode(equalityNode) {
    const equalities = this.getEqualities(),
          equality = equalities.find((equality) => {
            const equalityNodeMatches = equality.matchEqualityNode(equalityNode);

            if (equalityNodeMatches) {
              return true;
            }
          }) || null;

    return equality;
  }

  findJudgementByJudgementNode(judgementNode) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);

            if (judgementNodeMatches) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findStatementByStatementNode(statementNode) {
    const statements = this.getStatements(),
          statement = statements.find((statement) => {
            const statementNodeMatches = statement.matchStatementNode(statementNode);

            if (statementNodeMatches) {
              return true;
            }
          }) || null;

    return statement;
  }

  findReferenceByReferenceNode(referenceNode) {
    const references = this.getReferences(),
          reference = references.find((reference) => {
            const referenceMatcheReferenceNode = reference.matchReferenceNode(referenceNode);

            if (referenceMatcheReferenceNode) {
              return true;
            }
          }) || null;

    return reference;
  }

  findAssertionByAssertionNode(assertionNode) {
    const assertions = this.getAssertions(),
          assertion = assertions.find((assertion) => {
            const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);

            if (assertionNodeMatches) {
              return true;
            }
          }) || null;

    return assertion;
  }

  findAssumptionByAssumptionNode(assumptionNode) {
    const assumptions = this.getAssumptions(),
          assumption = assumptions.find((assumption) => {
            const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);

            if (assumptionNodeMatches) {
              return true;
            }
          }) || null;

    return assumption;
  }

  findReferenceByMetavariableNode(metavariableNode) {
    const references = this.getReferences(),
          reference = references.find((reference) => {
            const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);

            if (referenceMatcheMetavariableNode) {
              return true;
            }
          }) || null;

    return reference;
  }

  findMetavariableByMetavariableNode(metavariableNode) {
    const metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findSubstitutionBySubstitutionNode(substitutionNode) {
    const substitutions = this.getSubstitutions(),
          substitution = substitutions.find((substitution) => {
            const substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);

            if (substitutionNodeMatches) {
              return true;
            }
          }) || null;

    return substitution;
  }

  static fromContexts(...contexts) {
    const lastContext = last(contexts),
          context = lastContext,  ///
          synopticContext = new SynopticContext(context, contexts);

    return synopticContext;
  }
}
