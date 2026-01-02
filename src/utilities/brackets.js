"use strict";

import elements from "../elements";

import { BRACKETED_TERM_DEPTH, BRACKETED_STATEMENT_DEPTH } from "../constants";
import { instantiateBracketedCombinatorStatement, instantiateBracketedConstructorTerm } from "../process/instantiate";

export function stripBracketsFromTerm(term, context) {
  const termNode = term.getNode(),
        bracketedTermChildNode = bracketedTermChildNodeFromTermNode(termNode);

  if (bracketedTermChildNode !== null) {
    const { Term } = elements,
          termNode = bracketedTermChildNode;  ///

    term = Term.fromTermNode(termNode, context);
  }

  return term;
}

export function stripBracketsFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    const { Statement } = elements,
          statementNode = bracketedStatementChildNode;  ///

    statement = Statement.fromStatementNode(statementNode, context);
  }

  return statement;
}

export function stripBracketsFromTermNode(termNode) {
  const bracketedTermChildNode = bracketedTermChildNodeFromTermNode(termNode);

  if (bracketedTermChildNode !== null) {
    termNode = bracketedTermChildNode;  ///
  }

  return termNode;
}

export function stripBracketsFromStatementNode(statementNode) {
  const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    statementNode = bracketedStatementChildNode;  ///
  }

  return statementNode;
}

function bracketedTermChildNodeFromTermNode(termNode) {
  let bracketedTermChildNode = null;

  const depth = BRACKETED_TERM_DEPTH,
        bracketedConstructorTermNode = instantiateBracketedConstructorTerm(),
        termNodeMatchBracketedConstructorTermNode = termNode.match(bracketedConstructorTermNode, depth);

  if (termNodeMatchBracketedConstructorTermNode) {
    const singularTermNode = termNode.getSingularTermNode();

    bracketedTermChildNode = singularTermNode;  ///
  }

  return bracketedTermChildNode;
}

function bracketedStatementChildNodeFromStatementNode(statementNode) {
  let bracketedStatementChildNode = null;

  const depth = BRACKETED_STATEMENT_DEPTH,
        bracketedCombinatorStatementNode = instantiateBracketedCombinatorStatement(),
        statementNodeMatchBracketedCombinatorStatementNode = statementNode.match(bracketedCombinatorStatementNode, depth);

  if (statementNodeMatchBracketedCombinatorStatementNode) {
    const singularStatementNode = statementNode.getSingularStatementNode();

    bracketedStatementChildNode = singularStatementNode;  ///
  }

  return bracketedStatementChildNode;
}
