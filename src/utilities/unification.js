"use string";

import LocalContext from "../context/local";
import Substitutions from "../substitutions";
import equalityUnifier from "../unifier/equality";
import referenceUnifier from "../unifier/reference";
import metaLevelUnifier from "../unifier/metaLevel";
import metavariableUnifier from "../unifier/metavariable";
import intrinsicLevelUnifier from "../unifier/intrinsicLevel";
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

  generalContext = contextFromTokens(generalStatementTokens, generalContext); ///

  specificContext = contextFromTokens(specificStatementTokens, specificContext);  ///

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

  generalContext = contextFromTokens(generalSubstitutionTokens, generalContext); ///

  specificContext = contextFromTokens(specificSubstitutionTokens, specificContext);  ///

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
        generalMetavariableTokens = generalMetavariable.getTokens(),
        specificMetavariableTokens = specificMetavariable.getTokens();

  generalContext = contextFromTokens(generalMetavariableTokens, generalContext); ///

  specificContext = contextFromTokens(specificMetavariableTokens, specificContext); ///

  metavariableUnified = metavariableUnifier.unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);

  return metavariableUnified;
}

export function unifyLabelWithReference(label, reference, context) {
  let labelUnifiedWithReference;

  let generalContext,
      specificContext;

  const fileContext = label.getFileContext(),
        labelMetavariable = label.getMetavariable(),
        referenceMetavariable = reference.getMetavariable(),
        labelMetavariableNode = labelMetavariable.getNode(),
        labelMetavariableTokens = labelMetavariable.getTokens(),
        referenceMetavariableNode = referenceMetavariable.getNode(),
        referenceMetavariableTokens = referenceMetavariable.getTokens();

  generalContext = context; ///

  specificContext = fileContext;  ///

  generalContext = contextFromTokens(labelMetavariableTokens, generalContext);  ///

  specificContext = contextFromTokens(referenceMetavariableTokens, specificContext);  ///

  const substitutions = Substitutions.fromNothing(),
        referenceUnified = referenceUnifier.unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext);

  labelUnifiedWithReference = referenceUnified; ///

  return labelUnifiedWithReference;
}

export function unifyMetavariableWithReference(metavariable, reference, context) {
  let metavariableUnifiedWithReference;

  let generalContext,
      specificContext;

  const fileContext = context.getFileContext(),
        metavariableNode = metavariable.getNode(),
        metavariableTokens = metavariable.getTokens(),
        referenceMetavariable = reference.getMetavariable(),
        referenceMetavariableNode = referenceMetavariable.getNode(),
        referenceMetavariableTokens = referenceMetavariable.getTokens();

  generalContext = context; ///

  specificContext = fileContext;  ///

  generalContext = contextFromTokens(metavariableTokens, generalContext);  ///

  specificContext = contextFromTokens(referenceMetavariableTokens, specificContext);  ///

  const substitutions = Substitutions.fromNothing(),
        referenceUnified = referenceUnifier.unify(metavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext);

  metavariableUnifiedWithReference = referenceUnified; ///

  return metavariableUnifiedWithReference;
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

  let generalContext = context, ///
      specificContext = context;  ///

  generalContext = contextFromTokens(combinatorStatementTokens, generalContext);  ///

  specificContext = contextFromTokens(statementTokens, specificContext);  ///

  statementUnifiedWithCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);

  return statementUnifiedWithCombinator;
}

export function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext) {
  let metavariableUnifiedIntrinsically;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        generalMetavariableTokens = generalMetavariable.getTokens(),
        specificMetavariableTokens = specificMetavariable.getTokens();

  generalContext = contextFromTokens(generalMetavariableTokens, generalContext); ///

  specificContext = contextFromTokens(specificMetavariableTokens, specificContext); ///

  metavariableUnifiedIntrinsically = intrinsicLevelUnifier.unify(generalMetavariableNode, specificMetavariableNode, substitutions, generalContext, specificContext);

  return metavariableUnifiedIntrinsically;
}

function contextFromTokens(tokens, context) {
  const localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext;  ///

  return context;
}
