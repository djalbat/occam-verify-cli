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

  getEqualities() {
    const context = this.getContext(),
          equalities = context.getEqualities();

    return equalities;
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

  getEquivalences() {
    const context = this.getContext(),
          equivalences = context.getEquivalences();

    return equivalences;
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

  findMetaTypeByMetaTypeName(metaTypeName) {
    const context = this.getContext(),
          metaType = context.findMetaTypeByMetaTypeName(metaTypeName);

    return metaType;
  }

  findTermByTermNode(termNode) {
    const context = this.getContext(),
          term = context.findTermByTermNode(termNode);

    return term;
  }

  findFrameByFrameNode(frameNode) {
    const context = this.getContext(),
      frame = context.findFrameByFrameNode(frameNode);

    return frame;
  }

  findEqualityByEqualityNode(equalityNode) {
    const context = this.getContext(),
      equality = context.findEqualityByEqualityNode(equalityNode);

    return equality;
  }

  findJudgementByJudgementNode(judgementNode) {
    const context = this.getContext(),
          judgement = context.findJudgementByJudgementNode(judgementNode);

    return judgement;
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

  findSubstitutionBySubstitutionNode(substitutionNode) {
    const context = this.getContext(),
          substitution = context.findSubstitutionBySubstitutionNode(substitutionNode);

    return substitution;
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

  findProcedureByProcedureName(procedureName) {
    const context = this.getContext(),
      procedure = context.findProcedureByProcedureName(procedureName);

    return procedure;
  }

  isMetavariablePresent(metavariable) {
    metavariable = this.findMetavariable(metavariable); ///

    const metavariablePresent = (metavariable !== null);

    return metavariablePresent;
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

  isTermPresentByTermNode(termNode) {
    const context = this.getContext(),
          termPresent = context.isTermPresentByTermNode(termNode);

    return termPresent;
  }

  isFramePresentByFrameNode(frameNode) {
    const context = this.getContext(),
          framePresent = context.isFramePresentByFrameNode(frameNode);

    return framePresent;
  }

  isJudgementPresentByJudgementNode(judgementNode) {
    const context = this.getContext(),
          judgementPresent = context.isJudgementPresentByJudgementNode(judgementNode);

    return judgementPresent;
  }

  isEqualityPresentByEqualityNode(equalityNode) {
    const context = this.getContext(),
          equalityPresent = context.isEqualityPresentByEqualityNode(equalityNode);

    return equalityPresent;
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

  isReferencePresentByMetavariableNode(metvvariableNode) {
    const context = this.getContext(),
          referencePresent = context.isReferencePresentByMetavariableNode(metvvariableNode);

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

  isProcedurePresentByProcedureName(procedureName) {
    const context = this.getContext(),
          procedurePresent = context.isProcedurePresentByProcedureName(procedureName);

    return procedurePresent;
  }

  addTerm(term) {
    const context = this.getContext();

    context.addTerm(term);
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
    const context = this.getContext();

    context.addJudgement(judgement);
  }

  addAssignment(assignment) {
    const context = this.getContext();

    context.addAssignment(assignment);
  }

  addSubstitution(substitution) {
    const context = this.getContext();

    context.addSubstitution(substitution);
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    const context = this.getContext();

    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
  }
}
