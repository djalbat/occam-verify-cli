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

  getFilePath() {
    const context = this.getContext(),
          filePath = context.getFilePath();

    return filePath;
  }

  getVariables(includeRelease) {
    const context = this.getContext(),
          variables = context.getVariables(includeRelease);

    return variables;
  }

  getCombinators(includeRelease) {
    const context = this.getContext(),
          combinators = context.getCombinators(includeRelease);

    return combinators;
  }

  getSubproofOrProofAssertions() {
    const context = this.getContext(),
          subproofOrProofAssertions = context.getSubproofOrProofAssertions();

    return subproofOrProofAssertions;
  }

  findMetavariable(metavariable) {
    const context = this.getContext();

    metavariable = context.findMetavariable(metavariable);  ///

    return metavariable;
  }

  findProcedureByName(name) {
    const context = this.getContext(),
          procedure = context.findProcedureByName(name);

    return procedure;
  }

  findRuleByReference(reference) {
    const context = this.getContext(),
          rule = context.findRuleByReference(reference);

    return rule;
  }

  findFrameByFrameNode(frameNode) {
    const context = this.getContext(),
          frame = context.findFrameByFrameNode(frameNode);

    return frame;
  }

  findStatementByStatementNode(statementNode) {
    const context = this.getContext(),
          statement = context.findStatementByStatementNode(statementNode);

    return statement;
  }

  findTopLevelAssertionByReference(reference) {
    const context = this.getContext(),
          topLevelAssertion = context.findTopLevelAssertionByReference(reference);

    return topLevelAssertion;
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

  isProcedurePresentByName(name) {
    const context = this.getContext(),
          procedurePresent = context.isProcedurePresentByName(name);

    return procedurePresent;
  }

  isLabelPresentByReference(reference) {
    const context = this.getContext(),
          labelPresent = context.isLabelPresentByReference(reference);

    return labelPresent;
  }

  isMetavariablePresentByReference(reference) {
    const context = this.getContext(),
          metavariablePresent = context.isMetavariablePresentByReference(reference);

    return metavariablePresent;
  }

  addRule(rule) {
    const context = this.getContext();

    context.addRule(rule);
  }

  addJudgement(judgement) {
    const context = this.getContext(),
          judgementAdded = context.addJudgement(judgement);

    return judgementAdded;
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    const context = this.getContext();

    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
  }
}
