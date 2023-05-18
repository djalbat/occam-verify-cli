"use strict";

import bracketedStatementNode from "../node/statement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_STATEMENT_DEPTH } from "../constants";

const bracketedStatementChildNodeQuery = nodeQuery('/statement/metaArgument!/statement!');

export function matchStatementModuloBrackets(statementNodeA, statementNodeB) {
  let statementMatchesModuloBrackets = false;

  if (!statementMatchesModuloBrackets) {
    const statementNodeMatches = statementNodeA.match(statementNodeB);

    statementMatchesModuloBrackets = statementNodeMatches;  ///
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementChildNodeA = bracketedStatementChildNodeFromStatementNode(statementNodeA);

    if (bracketedStatementChildNodeA !== null) {
      const bracketedStatementChildNodeAMatchStatementNodeB = bracketedStatementChildNodeA.match(statementNodeB);

      statementMatchesModuloBrackets = bracketedStatementChildNodeAMatchStatementNodeB; ///
    }
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementChildNodeB = bracketedStatementChildNodeFromStatementNode(statementNodeB);

    if (bracketedStatementChildNodeB !== null) {
      const statementNodeAMatchBracketedStatementChildNodeB = statementNodeA.match(bracketedStatementChildNodeB);

      statementMatchesModuloBrackets = statementNodeAMatchBracketedStatementChildNodeB; ///
    }
  }

  return statementMatchesModuloBrackets;
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
