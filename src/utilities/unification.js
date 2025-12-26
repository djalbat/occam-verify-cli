"use string";

import metaLevelUnifier from "../unifier/metaLevel";
import metavariableUnifier from "../unifier/metavariable";
import intrinsicLevelUnifier from "../unifier/intrinsicLevel";
import termWithConstructorUnifier from "../unifier/termWithConstructor";
import statementWithCombinatorUnifier from "../unifier/statementWithCombinator";

export function unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let statementUnifies = false;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalNonTerminalNode = generalStatementNode, ///
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
        generalNonTerminalNode = generalSubstitutionNode, ///
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
        specificMetavariableNode = specificMetavariable.getNode();

  metavariableUnifies = metavariableUnifier.unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);

  return metavariableUnifies;
}

export function unifyTermWithConstructor(term, constructor, context) {
  let termUnifiesWithConstructor;

  const termNode = term.getNode(),
        generalContext = context, ///
        specificContext = context,  ///
        constructorTerm = constructor.getTerm(),
        constructorTermNode = constructorTerm.getNode();

  termUnifiesWithConstructor = termWithConstructorUnifier.unify(constructorTermNode, termNode, generalContext, specificContext);

  return termUnifiesWithConstructor;
}

export function unifyStatementIntrinsically(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
  let metavariableUnifiesIntrinsically;

  const generalStatementNode = generalStatement.getNode(),
        specificStatementNode = specificStatement.getNode(),
        generalNonTerminalNode = generalStatementNode, ///
        specificNonTerminalNode = specificStatementNode; ///

  metavariableUnifiesIntrinsically = intrinsicLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  return metavariableUnifiesIntrinsically;
}

export function unifyStatementWithCombinator(statement, combinator, assignments, stated, context) {
  let statementUnifiesWithCombinator;

  const statementNode = statement.getNode(),
        generalContext = context, ///
        specificContext = context,  ///
        combinatorStatement = combinator.getStatement(),
        combinatorStatementNode = combinatorStatement.getNode();

  statementUnifiesWithCombinator = statementWithCombinatorUnifier.unify(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);

  return statementUnifiesWithCombinator;
}

export function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext) {
  let metavariableUnifiesIntrinsically;

  const generalMetavariableNode = generalMetavariable.getNode(),
        specificMetavariableNode = specificMetavariable.getNode(),
        generalNonTerminalNode = generalMetavariableNode, ///
        specificNonTerminalNode = specificMetavariableNode; ///

  metavariableUnifiesIntrinsically = intrinsicLevelUnifier.unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);

  return metavariableUnifiesIntrinsically;
}
