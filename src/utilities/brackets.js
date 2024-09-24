"use strict";

import bracketedTermNode from "../node/term/bracketed";
import bracketedStatementNode from "../node/statement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_TERM_DEPTH, BRACKETED_STATEMENT_DEPTH } from "../constants";

const bracketedTermChildNodeQuery = nodeQuery("/term/argument/term!"),
      bracketedStatementChildNodeQuery = nodeQuery("/statement/metaArgument/statement!");

export function stripBracketsFromTerm(statementNode) {
  const bracketedTermChildNode = bracketedTermChildNodeFromTermNode(statementNode);

  if (bracketedTermChildNode !== null) {
    statementNode = bracketedTermChildNode;  ///
  }

  return statementNode;
}

export function stripBracketsFromStatement(statementNode) {
  const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    statementNode = bracketedStatementChildNode;  ///
  }

  return statementNode;
}

function bracketedTermChildNodeFromTermNode(termNode) {
  let bracketedTermChildNode = null;

  const depth = BRACKETED_TERM_DEPTH,
        termNodeMatchBracketedTermNode = termNode.match(bracketedTermNode, depth);

  if (termNodeMatchBracketedTermNode) {
    bracketedTermChildNode = bracketedTermChildNodeQuery(termNode);
  }

  return bracketedTermChildNode;
}

function bracketedStatementChildNodeFromStatementNode(statementNode) {
  let bracketedStatementChildNode = null;

  const depth = BRACKETED_STATEMENT_DEPTH,
        statementNodeMatchBracketedStatementNode = statementNode.match(bracketedStatementNode, depth);

  if (statementNodeMatchBracketedStatementNode) {
    bracketedStatementChildNode = bracketedStatementChildNodeQuery(statementNode);
  }

  return bracketedStatementChildNode;
}
