"use strict";

import { Context as ContextBase } from "occam-languages";

export default class Context extends ContextBase {
  getLexer() {
    const context = this.getContext(),
          lexer = context.getLexer();

    return lexer;
  }

  getParser() {
    const context = this.getContext(),
          parser = context.getParser();

    return parser;
  }

  getCombinators(includeRelease) {
    const context = this.getContext(),
          combinators = context.getCombinators(includeRelease);

    return combinators;
  }

  findMetavariable(metavariable) {
    const context = this.getContext();

    metavariable = context.findMetavariable(metavariable);  ///

    return metavariable;
  }

  isMetavariablePresentByReference(reference) {
    const context = this.getContext(),
          metavariablePresent = context.isMetavariablePresentByReference(reference);  ///

    return metavariablePresent;
  }

  findProcedureByName(name) {
    const context = this.getContext(),
      procedure = context.findProcedureByName(name);

    return procedure;
  }

  findVariableByVariableIdentifier(variableIdentifier) {
    const context = this.getContext(),
          variable = context.findVariableByVariableIdentifier(variableIdentifier);

    return variable;
  }

  findMetavariableByMetavariableName(metavariableName) {
    const context = this.getContext(),
          metavariable = context.findMetavariableByMetavariableName(metavariableName);

    return metavariable;
  }

  addJudgement(judgement) {
    const context = this.getContext();

    context.addJudgement(judgement);
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    const context = this.getContext();

    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
  }
}
