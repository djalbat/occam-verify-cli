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

  getJudgements() {
    const context = this.getContext(),
          judgements = context.getJudgements();

    return judgements;
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

  getAssertions() {
    const context = this.getContext(),
          assertions = context.getAssertions();

    return assertions;
  }

  getReferences() {
    const context = this.getContext(),
          references = context.getReferences();

    return references;
  }

  getAssumptions() {
    const context = this.getContext(),
          assumptions = context.getAssumptions();

    return assumptions;
  }

  getSubstitutions() {
    const context = this.getContext(),
          substitutions = context.getSubstitutions();

    return substitutions;
  }

  getEquivalences() {
    const context = this.getContext(),
          equivalences = context.getEquivalences();

    return equivalences;
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

  getConstructors(includeRelease) {
    const context = this.getContext(),
          constructors = context.getConstructors(includeRelease);

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

  retrieveEphemeralContext() {
    const context = this.getContext(),
          ephemeralContext = context.retrieveEphemeralContext();

    return ephemeralContext;
  }

  findMetavariable(metavariable, context) {
    const childContext = context; ///

    context = this.getContext();

    const parentContext = context; ///

    metavariable = parentContext.findMetavariable(metavariable, childContext);  ///

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

  findTopLevelMetaAssertionsByReference(reference) {
    const context = this.getContext(),
          topLevelMetaAssertion = context.findTopLevelMetaAssertionsByReference(reference);

    return topLevelMetaAssertion;
  }

  findTypeByTypeName(metaTypeName) {
    const context = this.getContext(),
          type = context.findTypeByTypeName(metaTypeName);

    return type;
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

  findAssertionByAssertionNode(assertionNode) {
    const context = this.getContext(),
          assertion = context.findAssertionByAssertionNode(assertionNode);

    return assertion;
  }

  findReferenceByReferenceNode(referenceNode) {
    const context = this.getContext(),
          reference = context.findReferenceByReferenceNode(referenceNode);

    return reference;
  }

  findStatementByStatementNode(statementNode) {
    const context = this.getContext(),
          statement = context.findStatementByStatementNode(statementNode);

    return statement;
  }

  findAssumptionByAssumptionNode(assumptionNode) {
    const context = this.getContext(),
          assumption = context.findAssumptionByAssumptionNode(assumptionNode);

    return assumption;
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

  findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode) {
    const context = this.getContext(),
          metaLevelSubstitution = context.findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode);

    return metaLevelSubstitution;
  }

  findTypeByNominalTypeName(nominalTypeName) {
    const context = this.getContext(),
          type = context.findTypeByNominalTypeName(nominalTypeName);

    return type;
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

  isMetavariablePresent(metavariable, context) {
    const childContext = context; ///

    context = this.getContext();

    const parentContext = context,  ///
          metavariablePresent = parentContext.isMetavariablePresent(metavariable, childContext);

    return metavariablePresent;
  }

  isLabelPresentByReference(reference) {
    const context = this.getContext(),
          labelPresent = context.isLabelPresentByReference(reference);

    return labelPresent;
  }

  isTopLevelMetaAssertionPresentByReference(reference) {
    const context = this.getContext(),
          topLevelMetaAssertionPresent = context.isTopLevelMetaAssertionPresentByReference(reference);

    return topLevelMetaAssertionPresent;
  }

  isTermPresentByTermNode(termNode) {
    const context = this.getContext(),
          termPresent = context.isTermPresentByTermNode(termNode);

    return termPresent;
  }

  isLabelPresentByLabelNode(labelNode) {
    const context = this.getContext(),
          labelPresent = context.isLabelPresentByLabelNode(labelNode);

    return labelPresent;
  }

  isFramePresentByFrameNode(frameNode) {
    const context = this.getContext(),
          framePresent = context.isFramePresentByFrameNode(frameNode);

    return framePresent;
  }

  isTypePresentByNominalTypeName(nominalTypeName) {
    const context = this.getContext(),
          typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

    return typePresent;
  }

  isEqualityPresentByEqualityNode(equalityNode) {
    const context = this.getContext(),
          equalityPresent = context.isEqualityPresentByEqualityNode(equalityNode);

    return equalityPresent;
  }

  isJudgementPresentByJudgementNode(judgementNode) {
    const context = this.getContext(),
          judgementPresent = context.isJudgementPresentByJudgementNode(judgementNode);

    return judgementPresent;
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

  isMetavariablePresentByMetavariableName(metavariableName) {
    const context = this.getContext(),
          metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);

    return metavariablePresent;
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

  hasMetaLevelSubstitutions() {
    const context = this.getContext(),
          metaLevelSubstitutions = context.hasMetaLevelSubstitutions();

    return metaLevelSubstitutions;
  }

  addTerms(terms) {
    const context = this.getContext();

    context.addTerms(terms);
  }

  addTerm(term) {
    const context = this.getContext();

    context.addTerm(term);
  }

  addFrame(frame) {
    const context = this.getContext();

    context.addFrame(frame);
  }

  addEquality(equality) {
    const context = this.getContext();

    context.addEquality(equality);
  }

  addJudgement(judgement) {
    const context = this.getContext();

    context.addJudgement(judgement);
  }

  addStatement(statement) {
    const context = this.getContext();

    context.addStatement(statement);
  }

  addAssertion(assertion) {
    const context = this.getContext();

    context.addAssertion(assertion);
  }

  addReference(reference) {
    const context = this.getContext();

    context.addReference(reference);
  }

  addAssumption(assumption) {
    const context = this.getContext();

    context.addAssumption(assumption);
  }

  addAssignment(assignment) {
    const context = this.getContext();

    context.addAssignment(assignment);
  }

  addSubstitution(substitution) {
    const context = this.getContext();

    context.addSubstitution(substitution);
  }

  addMetaLevelSubstitution(metaLevelSubstitution) {
    const context = this.getContext();

    context.addMetaLevelSubstitution(metaLevelSubstitution);
  }

  addSubproofOrProofAssertion(subproofOrProofAssertion) {
    const context = this.getContext();

    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
  }
}
