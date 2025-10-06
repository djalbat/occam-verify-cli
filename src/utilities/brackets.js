"use strict";

import dom from "../dom";
import LocalContext from "../context/local";
import combinatorBracketedContext from "../context/bracketed/combinator";
import constructorBracketedContext from "../context/bracketed/constructor";

import { BRACKETED_TERM_DEPTH, BRACKETED_STATEMENT_DEPTH } from "../constants";

export function stripBracketsFromTerm(term, context) {
  const termNode = term.getNode(),
        bracketedTermChildNode = bracketedTermChildNodeFromTermNode(termNode);

  if (bracketedTermChildNode !== null) {
    const { Term } = dom,
          termNode = bracketedTermChildNode;  ///

    term = Term.fromTermNode(termNode, context);
  }

  return term;
}

export function stripBracketsFromReference(reference, context) {
  const referenceNode = reference.getNode(),
    bracketedReferenceChildNode = bracketedReferenceChildNodeFromReferenceNode(referenceNode);

  if (bracketedReferenceChildNode !== null) {
    context = contextFromReference(reference, context); ///

    const { Reference } = dom,
          referenceNode = bracketedReferenceChildNode;  ///

    reference = Reference.fromReferenceNode(referenceNode, context);
  }

  return reference;
}

export function stripBracketsFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    context = contextFromStatement(statement, context); ///

    const { Statement } = dom,
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

function contextFromReference(reference, context) {
  const referenceTokens = reference.getTokens(),
        tokens = referenceTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  return context;
}

function contextFromStatement(statement, context) {
  const statementTokens = statement.getTokens(),
        tokens = statementTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  return context;
}
