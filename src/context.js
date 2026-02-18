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

  getTerms() {
    const context = this.getContext(),
          terms = context.getTerms();

    return terms;
  }

  getFrames() {
    const context = this.getContext(),
          frames = context.getFrames();

    return frames;
  }

  getStatements() {
    const context = this.getContext(),
          statements = context.getStatements();

    return statements;
  }

  getReferences() {
    const context = this.getContext(),
          references = context.getReferences();

    return references;
  }

  getSubstitutions() {
    const context = this.getContext(),
          substitutions = context.getSubstitutions();

    return substitutions;
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

  getConstrustors(includeRelease) {
    const context = this.getContext(),
          constructors = context.getConstrustors(includeRelease);

    return constructors;
  }

  getMetavariables(includeRelease) {
    const context = this.getContext(),
          metavariables = context.getMetavariables(includeRelease);

    return metavariables;
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

  findProcedureByProcedureName(procedureName) {
    const context = this.getContext(),
          procedure = context.findProcedureByProcedureName(procedureName);

    return procedure;
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

  findReferenceByMetavariableNode(metavariableNode) {
    const context = this.getContext(),
          reference = context.findReferenceByMetavariableNode(metavariableNode);

    return reference;
  }

  findVariableByVariableIdentifier(variableIdentifier) {
    const context = this.getContext(),
          variable = context.findVariableByVariableIdentifier(variableIdentifier);

    return variable;
  }

  findSubstitutionByMetavariableName(metavariableName) {
    const context = this.getContext(),
          substitution = context.findSubstitutionByMetavariableName(metavariableName);

    return substitution;
  }

  findMetavariableByMetavariableName(metavariableName) {
    const context = this.getContext(),
          metavariable = context.findMetavariableByMetavariableName(metavariableName);

    return metavariable;
  }

  findSubstitutionByVariableIdentifier(variableIdentifier) {
    const context = this.getContext(),
          substitution = context.findSubstitutionByVariableIdentifier(variableIdentifier);

    return substitution;
  }

  findSimpleSubstitutionByMetavariableName(metavariableName) {
    const context = this.getContext(),
          simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);

    return simpleSubstitution;
  }

  findComplexSubstitutionsByMetavariableName(metavariableName) {
    const context = this.getContext(),
          complexSubstitution = context.findComplexSubstitutionsByMetavariableName(metavariableName);

    return complexSubstitution;
  }

  findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) {
    const context = this.getContext();

    substitution = context.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution); ///

    return substitution;
  }

  findRuleByReference(reference) {
    const context = this.getContext(),
          rule = context.findRuleByReference(reference);

    return rule;
  }

  findTopLevelAssertionByReference(reference) {
    const context = this.getContext(),
          topLevelAssertion = context.findTopLevelAssertionByReference(reference);

    return topLevelAssertion;
  }

  isTermPresentByTermNode(termNode) {
    const context = this.getContext(),
          termPresent = context.isTermPresentByTermNode(termNode);

    return termPresent;
  }

  isProcedurePresentByProcedureName(procedureName) {
    const context = this.getContext(),
          procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

    return procedurePresent;
  }

  isFramePresentByFrameNode(frameNode) {
    const context = this.getContext(),
          framePresent = context.isFramePresentByFrameNode(frameNode);

    return framePresent;
  }

  isStatementPresentByStatementNode(statementNode) {
    const context = this.getContext(),
      statementPresent = context.isStatementPresentByStatementNode(statementNode);

    return statementPresent;
  }

  isAssertionPresentByAssertionNode(assertionNode) {
    const context = this.getContext(),
          assertionPresent = context.isAssertionPresentByAssertionNode(assertionNode);

    return assertionPresent;
  }

  isReferencePresentByReferenceNode(referenceNode) {
    const context = this.getContext(),
          referencePresent = context.isReferencePresentByReferenceNode(referenceNode);

    return referencePresent;
  }

  isJudgementPresentByMetavariableName(metavariableName) {
    const context = this.getContext(),
          judgementPresent = context.isJudgementPresentByMetavariableName(metavariableName);

    return judgementPresent;
  }

  isSubstitutionPresentBySubstitutionNode(substitutionNode) {
    const context = this.getContext(),
          substitutionPresent = context.isSubstitutionPresentBySubstitutionNode(substitutionNode);

    return substitutionPresent;
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

  adTerm(term) {
    const context = this.getContext();

    context.adTerm(term);
  }

  addFrame(frame) {
    const context = this.getContext();

    context.addFrame(frame);
  }

  addStatement(statement) {
    const context = this.getContext();

    context.addStatement(statement);
  }

  addReference(reference) {
    const context = this.getContext();

    context.addReference(reference);
  }

  addJudgement(judgement) {
    const context = this.getContext(),
          judgementAdded = context.addJudgement(judgement);

    return judgementAdded;
  }

  addSubstitution(substitution) {
    const context = this.getContext();

    context.addSubstitution(substitution);
  }

  removeSubstitution(substitution) {
    const context = this.getContext();

    context.removeSubstitution(substitution);
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    const context = this.getContext();

    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
  }
}
