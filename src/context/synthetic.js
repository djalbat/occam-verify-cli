"use strict";

import { arrayUtilities } from "necessary";

import Context from "../context";

const { push, last } = arrayUtilities;

export default class SyntheticContext extends Context {
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

  static fromContexts(...contexts) {
    const lastContext = last(contexts),
          context = lastContext,  ///
          syntheticContext = new SyntheticContext(context, contexts);

    return syntheticContext;
  }
}
