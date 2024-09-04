"use strict";

import bracketedStatementNode from "../node/statement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_STATEMENT_DEPTH } from "../constants";

const bracketedStatementChildNodeQuery = nodeQuery("/statement/statement!");

export function matchStatementModuloBrackets(statementNodeA, statementNodeB) {
  let statementMatches = false;

  if (!statementMatches) {
    const statementNodeMatches = statementNodeA.match(statementNodeB);

    statementMatches = statementNodeMatches;  ///
  }

  if (!statementMatches) {
    const bracketedStatementChildNodeA = bracketedStatementChildNodeFromStatementNode(statementNodeA);

    if (bracketedStatementChildNodeA !== null) {
      const bracketedStatementChildNodeAMatchesStatementNodeB = bracketedStatementChildNodeA.match(statementNodeB);

      statementMatches = bracketedStatementChildNodeAMatchesStatementNodeB; ///
    }
  }

  if (!statementMatches) {
    const bracketedStatementChildNodeB = bracketedStatementChildNodeFromStatementNode(statementNodeB);

    if (bracketedStatementChildNodeB !== null) {
      const statementNodeAMatchesBracketedStatementChildNodeB = statementNodeA.match(bracketedStatementChildNodeB);

      statementMatches = statementNodeAMatchesBracketedStatementChildNodeB; ///
    }
  }

  return statementMatches;
}

export function bracketedStatementChildNodeFromStatementNode(statementNode) {
  let bracketedStatementChildNode = null;

  const depth = BRACKETED_STATEMENT_DEPTH,
        statementNodeMatchBracketedStatementNode = statementNode.match(bracketedStatementNode, depth);

  if (statementNodeMatchBracketedStatementNode) {
    bracketedStatementChildNode = bracketedStatementChildNodeQuery(statementNode);
  }

  return bracketedStatementChildNode;
}
