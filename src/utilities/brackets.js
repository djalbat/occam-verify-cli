"use strict";

import ontology from "../ontology";
import combinatorBracketedContext from "../context/bracketed/combinator";
import constructorBracketedContext from "../context/bracketed/constructor";

import { contextFromStatement } from "../utilities/context";

import { BRACKETED_TERM_DEPTH, BRACKETED_STATEMENT_DEPTH } from "../constants";

export function stripBracketsFromTerm(term, context) {
  const termNode = term.getNode(),
        bracketedTermChildNode = bracketedTermChildNodeFromTermNode(termNode);

  if (bracketedTermChildNode !== null) {
    const { Term } = ontology,
          termNode = bracketedTermChildNode;  ///

    term = Term.fromTermNode(termNode, context);
  }

  return term;
}

export function stripBracketsFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    context = contextFromStatement(statement, context); ///

    const { Statement } = ontology,
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

export function bracketedTermChildNodeFromTermNode(termNode) {
  let bracketedTermChildNode = null;

  const depth = BRACKETED_TERM_DEPTH,
        bracketedTermNode = constructorBracketedContext.getBracketedTermNode(),
        termNodeMatchBracketedTermNode = termNode.match(bracketedTermNode, depth);

  if (termNodeMatchBracketedTermNode) {
    const singularTermNode = termNode.getSingularTermNode();

    bracketedTermChildNode = singularTermNode;  ///
  }

  return bracketedTermChildNode;
}

export function bracketedStatementChildNodeFromStatementNode(statementNode) {
  let bracketedStatementChildNode = null;

  const depth = BRACKETED_STATEMENT_DEPTH,
        bracketedStatementNode = combinatorBracketedContext.getBracketedStatementNode(),
        statementNodeMatchBracketedStatementNode = statementNode.match(bracketedStatementNode, depth);

  if (statementNodeMatchBracketedStatementNode) {
    const singularStatementNode = statementNode.getSingularStatementNode();

    bracketedStatementChildNode = singularStatementNode;  ///
  }

  return bracketedStatementChildNode;
}
