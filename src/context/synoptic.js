"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

import { compressTerms,
         compressFrames,
         compressEqualities,
         compressJudgements,
         compressAssertions,
         compressStatements,
         compressReferences,
         compressAssumptions,
         compressMetavariables,
         compressSubstitutions,} from "../utilities/synoptic";

const { push } = arrayUtilities;

export default class SynopticContext extends Context {
  constructor(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions, derivedSubstitutions) {
    super(context);

    this.terms = terms;
    this.frames = frames;
    this.equalities = equalities;
    this.judgements = judgements;
    this.assertions = assertions;
    this.statements = statements;
    this.references = references;
    this.assumptions = assumptions;
    this.metavariables = metavariables;
    this.substitutions = substitutions;
    this.derivedSubstitutions = derivedSubstitutions;
  }

  getTerms(terms = []) {
    const context = this.getContext();

    push(terms, this.terms);

    context.getTerms(terms);

    compressTerms(terms);

    return terms;
  }

  getFrames(frames = []) {
    const context = this.getContext();

    push(frames, this.frames);

    context.getFrames(frames);

    compressFrames(frames);

    return frames;
  }

  getEqualities(equalities = []) {
    const context = this.getContext();

    push(equalities, this.equalities);

    context.getEqualities(equalities);

    compressEqualities(equalities);

    return equalities;
  }

  getJudgements(judgements = []) {
    const context = this.getContext();

    push(judgements, this.judgements);

    context.getJudgements(judgements);

    compressJudgements(judgements);

    return judgements;
  }

  getStatements(statements = []) {
    const context = this.getContext();

    push(statements, this.statements);

    context.getStatements(statements);

    compressStatements(statements);

    return statements;
  }

  getAssertions(assertions = []) {
    const context = this.getContext();

    push(assertions, this.assertions);

    context.getAssertions(assertions);

    compressAssertions(assertions);

    return assertions;
  }

  getReferences(references = []) {
    const context = this.getContext();

    push(references, this.references);

    context.getReferences(references);

    compressReferences(references);

    return references;
  }

  getAssumptions(assumptions = []) {
    const context = this.getContext();

    push(assumptions, this.assumptions);

    context.getAssumptions(assumptions);

    compressAssumptions(assumptions);

    return assumptions;
  }

  getMetavariables(metavariables = []) {
    const context = this.getContext();

    push(metavariables, this.metavariables);

    context.getMetavariables(metavariables);

    compressMetavariables(metavariables);

    return metavariables;
  }

  getSubstitutions(substitutions = []) {
    const context = this.getContext();

    push(substitutions, this.substitutions);

    context.getSubstitutions(substitutions);

    compressSubstitutions(substitutions);

    return substitutions;
  }

  getDerivedSubstitutions(derivedSubstitutions = []) {
    const context = this.getContext();

    push(derivedSubstitutions, this.derivedSubstitutions);

    context.getDerivedSubstitutions(derivedSubstitutions);

    return derivedSubstitutions;
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
    const context = contexts.pop(),  ///
          terms = termsFromContexts(contexts),
          frames = framesFromContexts(contexts),
          equalities = equalitiesFromContexts(contexts),
          judgements = judgementsFromContexts(contexts),
          assertions = assertionsFromContexts(contexts),
          statements = statementsFromContexts(contexts),
          references = referencesFromContexts(contexts),
          assumptions = assumptionsFromContexts(contexts),
          metavariables = metavariablesFromContexts(contexts),
          substitutions = substitutionsFromContexts(contexts),
          derivedSubstitutions = derivedSubstitutionsFromContexts(contexts),
          synopticContext = new SynopticContext(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions, derivedSubstitutions);

    return synopticContext;
  }
}

function termsFromContexts(contexts) {
  const terms = [];

  contexts.forEach((context) => {
    context.getTerms(terms);
  });

  compressTerms(terms);

  return terms;
}

function framesFromContexts(contexts) {
  const frames = [];

  contexts.forEach((context) => {
    context.getFrames(frames);
  });

  compressFrames(frames);

  return frames;
}

function equalitiesFromContexts(contexts) {
  const equalities = [];

  contexts.forEach((context) => {
    context.getEqualities(equalities);
  });

  compressEqualities(equalities);

  return equalities;
}

function judgementsFromContexts(contexts) {
  const judgements = [];

  contexts.forEach((context) => {
    context.getJudgements(judgements);
  });

  compressJudgements(judgements);

  return judgements;
}

function assertionsFromContexts(contexts) {
  const assertions = [];

  contexts.forEach((context) => {
    context.getAssertions(assertions);
  });

  compressAssertions(assertions);

  return assertions;
}

function statementsFromContexts(contexts) {
  const statements = [];

  contexts.forEach((context) => {
    context.getStatements(statements);
  });

  compressStatements(statements);

  return statements;
}

function referencesFromContexts(contexts) {
  const references = [];

  contexts.forEach((context) => {
    context.getReferences(references);
  });

  compressReferences(references);

  return references;
}

function assumptionsFromContexts(contexts) {
  const assumptions = [];

  contexts.forEach((context) => {
    context.getAssumptions(assumptions);
  });

  compressAssumptions(assumptions);

  return assumptions;
}

function metavariablesFromContexts(contexts) {
  const metavariables = [];

  contexts.forEach((context) => {
    context.getMetavariables(metavariables);
  });

  compressMetavariables(metavariables);

  return metavariables;
}

function substitutionsFromContexts(contexts) {
  const substitutions = [];

  contexts.forEach((context) => {
    context.getSubstitutions(substitutions);
  });

  compressSubstitutions(substitutions);

  return substitutions;
}

function derivedSubstitutionsFromContexts(contexts) {
  const derivedSubstitutions = [];

  contexts.forEach((context) => {
    context.getDerivedSubstitutions(derivedSubstitutions);
  });

  return derivedSubstitutions;
}
