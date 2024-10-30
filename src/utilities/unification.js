"use string";

import LocalContext from "../context/local";
import labelUnifier from "../unifier/label";
import equalityUnifier from "../unifier/equality";
import metaLevelUnifier from "../unifier/metaLevel";
import metavariableUnifier from "../unifier/metavariable";
import termWithConstructorUnifier from "../unifier/termWithConstructor";
import statementWithCombinatorUnifier from "../unifier/statementWithCombinator";

export function unifyEquality(equality, context) {
  let equalityUnified;

  const leftTerm = equality.getLeftTerm(),
        rightTerm = equality.getRightTerm(),
        leftTermNode = leftTerm.getNode(),
        rightTermNode = rightTerm.getNode();

  equalityUnified = equalityUnifier.unify(leftTermNode, rightTermNode, context);

  return equalityUnified;
}

export function unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let statementUnified;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalStatementTokens = generalStatement.getTokens(),
        specificStatementTokens = specificStatement.getTokens();

  let tokens,
      context,
      localContext;

  tokens = generalStatementTokens;  ///

  context = generalContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  generalContext = localContext;  ///

  tokens = specificStatementTokens; ///

  context = specificContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  specificContext = localContext; ///

  const generalNode = generalStatementNode, ///
        specificNode = specificStatementNode,
        unifiedAtMetaLevel = metaLevelUnifier.unify(generalNode, specificNode, substitutions, generalContext, specificContext);

  statementUnified = unifiedAtMetaLevel; ///

  return statementUnified;
}

export function unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext) {
  let substitutionUnified;

  const generalSubstitutionNode = generalSubstitution.getNode(),
        specificSubstitutionNode = specificSubstitution.getNode(),
        generalSubstitutionTokens = generalSubstitution.getTokens(),
        specificSubstitutionTokens = specificSubstitution.getTokens();

  let tokens,
        context,
        localContext;

  tokens = generalSubstitutionTokens;  ///

  context = generalContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  generalContext = localContext;  ///

  tokens = specificSubstitutionTokens; ///

  context = specificContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  specificContext = localContext; ///

  const generalNode = generalSubstitutionNode, ///
        specificNode = specificSubstitutionNode,
        unifiedAtMetaLevel = metaLevelUnifier.unify(generalNode, specificNode, substitutions, generalContext, specificContext);

  substitutionUnified = unifiedAtMetaLevel; ///

  return substitutionUnified;
}

export function unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext) {
  let metavariableUnified;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        generalMetavariableTokens = generalMetavariable.getTokens();

  let tokens,
      context,
      localContext;

  tokens = generalMetavariableTokens;  ///

  context = generalContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  generalContext = localContext;  ///

  metavariableUnified = metavariableUnifier.unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);

  return metavariableUnified;
}

export function unifyLabelWithReference(label, reference, substitutions, generalContext, specificContext) {
  let labelUnifiedWithReference;

  const labelMetavariable = label.getMetavariable(),
        referenceMetavariable = reference.getMetavariable(),
        labelMetavariableNode = labelMetavariable.getNode(),
        labelMetavariableTokens = labelMetavariable.getTokens(),
        referenceMetavariableNode = referenceMetavariable.getNode(),
        referenceMetavariableTokens = referenceMetavariable.getTokens();

  let tokens,
      context,
      localContext;

  tokens = labelMetavariableTokens;  ///

  context = generalContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  generalContext = localContext;  ///

  tokens = referenceMetavariableTokens; ///

  context = specificContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  specificContext = localContext; ///

  const labelUnified = labelUnifier.unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext);

  labelUnifiedWithReference = labelUnified; ///

  return labelUnifiedWithReference;
}

export function unifyTermWithConstructor(term, constructor, context) {
  let termUnifiedWithConstructor;

  const termNode = term.getNode(),
        constructorTerm = constructor.getTerm(),
        constructorTermNode = constructorTerm.getNode();

  termUnifiedWithConstructor = termWithConstructorUnifier.unify(constructorTermNode, termNode, context);

  return termUnifiedWithConstructor;
}

export function unifyStatementWithCombinator(statement, combinator, assignments, stated, context) {
  let statementUnifiedWithCombinator;

  const statementNode = statement.getNode(),
        statementTokens = statement.getTokens(),
        combinatorStatement = combinator.getStatement(),
        combinatorStatementNode = combinatorStatement.getNode(),
        combinatorStatementTokens = combinatorStatement.getTokens();

  let tokens,
      localContext,
      generalContext = context, ///
      specificContext = context;  ///

  tokens = combinatorStatementTokens; ///

  context = generalContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  generalContext = localContext;  ///

  tokens = statementTokens;  ///

  context = specificContext; ///

  localContext = LocalContext.fromContextAndTokens(context, tokens);

  specificContext = localContext; ///

  statementUnifiedWithCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);

  return statementUnifiedWithCombinator;
}
