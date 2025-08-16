"use string";

import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";
import metavariableUnifier from "../unifier/metavariable";
import intrinsicLevelUnifier from "../unifier/intrinsicLevel";
import termWithConstructorUnifier from "../unifier/termWithConstructor";
import statementWithCombinatorUnifier from "../unifier/statementWithCombinator";

export function unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let statementUnified;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalStatementTokens = generalStatement.getTokens(),
        specificStatementTokens = specificStatement.getTokens();

  generalContext = contextFromTokens(generalStatementTokens, generalContext); ///

  specificContext = contextFromTokens(specificStatementTokens, specificContext);  ///

  const generalNonTerminalNode = generalStatementNode, ///
        specificNonTerminalNode = specificStatementNode,  ///
        unifiedAtMetaLevel = metaLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

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

  const generalNonTerminalNode = generalSubstitutionNode, ///
        specificNonTerminalNode = specificSubstitutionNode,
        unifiedAtMetaLevel = metaLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

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

export function unifyTermWithConstructor(term, constructor, context) {
  let termUnifiedWithConstructor;

  const termNode = term.getNode(),
        constructorTerm = constructor.getTerm(),
        constructorTermNode = constructorTerm.getNode();

  termUnifiedWithConstructor = termWithConstructorUnifier.unify(constructorTermNode, termNode, context);

  return termUnifiedWithConstructor;
}

export function unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let metavariableUnifiedIntrinsically;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalStatementTokens = generalStatement.getTokens(),
        specificStatementTokens = specificStatement.getTokens();

  generalContext = contextFromTokens(generalStatementTokens, generalContext); ///

  specificContext = contextFromTokens(specificStatementTokens, specificContext); ///

  const generalNonTerminalNode = generalStatementNode, ///
        specificNonTerminalNode = specificStatementNode; ///

  metavariableUnifiedIntrinsically = intrinsicLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  return metavariableUnifiedIntrinsically;
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

  const generalNonTerminalNode = generalMetavariableNode, ///
        specificNonTerminalNode = specificMetavariableNode; ///

  metavariableUnifiedIntrinsically = intrinsicLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  return metavariableUnifiedIntrinsically;
}

function contextFromTokens(tokens, context) {
  const localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext;  ///

  return context;
}
