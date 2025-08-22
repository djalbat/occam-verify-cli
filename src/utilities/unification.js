"use string";

import LocalContext from "../context/local";
import metaLevelUnifier from "../unifier/metaLevel";
import metavariableUnifier from "../unifier/metavariable";
import intrinsicLevelUnifier from "../unifier/intrinsicLevel";
import termWithConstructorUnifier from "../unifier/termWithConstructor";
import statementWithCombinatorUnifier from "../unifier/statementWithCombinator";

export function unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let statementUnifies = false;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalStatementTokens = generalStatement.getTokens(),
        specificStatementTokens = specificStatement.getTokens();

  generalContext = contextFromTokens(generalStatementTokens, generalContext); ///

  specificContext = contextFromTokens(specificStatementTokens, specificContext);  ///

  const generalNonTerminalNode = generalStatementNode, ///
        specificNonTerminalNode = specificStatementNode,  ///
        unifiesAtMetaLevel = metaLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  if (unifiesAtMetaLevel) {
    statementUnifies = true;
  }

  return statementUnifies;
}

export function unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext) {
  let substitutionUnifies = false;

  const generalSubstitutionNode = generalSubstitution.getNode(),
        specificSubstitutionNode = specificSubstitution.getNode(),
        generalSubstitutionTokens = generalSubstitution.getTokens(),
        specificSubstitutionTokens = specificSubstitution.getTokens();

  generalContext = contextFromTokens(generalSubstitutionTokens, generalContext); ///

  specificContext = contextFromTokens(specificSubstitutionTokens, specificContext);  ///

  const generalNonTerminalNode = generalSubstitutionNode, ///
        specificNonTerminalNode = specificSubstitutionNode,
        unifiesAtMetaLevel = metaLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  if (unifiesAtMetaLevel) {
    substitutionUnifies = true;
  }

  return substitutionUnifies;
}

export function unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext) {
  let metavariableUnifies;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        generalMetavariableTokens = generalMetavariable.getTokens(),
        specificMetavariableTokens = specificMetavariable.getTokens();

  generalContext = contextFromTokens(generalMetavariableTokens, generalContext); ///

  specificContext = contextFromTokens(specificMetavariableTokens, specificContext); ///

  metavariableUnifies = metavariableUnifier.unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);

  return metavariableUnifies;
}

export function unifyTermWithConstructor(term, constructor, context) {
  let termUnifiesWithConstructor;

  const termNode = term.getNode(),
        constructorTerm = constructor.getTerm(),
        constructorTermNode = constructorTerm.getNode();

  termUnifiesWithConstructor = termWithConstructorUnifier.unify(constructorTermNode, termNode, context);

  return termUnifiesWithConstructor;
}

export function unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let metavariableUnifiesIntrinsically;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalStatementTokens = generalStatement.getTokens(),
        specificStatementTokens = specificStatement.getTokens();

  generalContext = contextFromTokens(generalStatementTokens, generalContext); ///

  specificContext = contextFromTokens(specificStatementTokens, specificContext); ///

  const generalNonTerminalNode = generalStatementNode, ///
        specificNonTerminalNode = specificStatementNode; ///

  metavariableUnifiesIntrinsically = intrinsicLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  return metavariableUnifiesIntrinsically;
}

export function unifyStatementWithCombinator(statement, combinator, assignments, stated, context) {
  let statementUnifiesWithCombinator;

  const statementNode = statement.getNode(),
        statementTokens = statement.getTokens(),
        combinatorStatement = combinator.getStatement(),
        combinatorStatementNode = combinatorStatement.getNode(),
        combinatorStatementTokens = combinatorStatement.getTokens();

  let generalContext = context, ///
      specificContext = context;  ///

  generalContext = contextFromTokens(combinatorStatementTokens, generalContext);  ///

  specificContext = contextFromTokens(statementTokens, specificContext);  ///

  statementUnifiesWithCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);

  return statementUnifiesWithCombinator;
}

export function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext) {
  let metavariableUnifiesIntrinsically;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        generalMetavariableTokens = generalMetavariable.getTokens(),
        specificMetavariableTokens = specificMetavariable.getTokens();

  generalContext = contextFromTokens(generalMetavariableTokens, generalContext); ///

  specificContext = contextFromTokens(specificMetavariableTokens, specificContext); ///

  const generalNonTerminalNode = generalMetavariableNode, ///
        specificNonTerminalNode = specificMetavariableNode; ///

  metavariableUnifiesIntrinsically = intrinsicLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  return metavariableUnifiesIntrinsically;
}

function contextFromTokens(tokens, context) {
  const localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext;  ///

  return context;
}
