"use strict";

import bracketedStatementNode from "../node/statement/bracketed";

import { matcher } from "../matcher";
import { nodeQuery } from "../utilities/query";
import { BRACKETED_STATEMENT_DEPTH } from "../constants";

const bracketedStatementChildNodeQuery = nodeQuery('/statement/metaArgument!/statement!');

export function matchStatementModuloBrackets(statementNodeA, statementNodeB) {
  let statementMatchesModuloBrackets = false;

  if (!statementMatchesModuloBrackets) {
    const nonTerminalNodeA = statementNodeA,  ///
          nonTerminalNodeB = statementNodeB,  ///
          nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    statementMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementChildNodeA = bracketedStatementChildNodeFromStatementNode(statementNodeA);

    if (bracketedStatementChildNodeA !== null) {
      const nodeA = bracketedStatementChildNodeA,  ///
            nodeB = statementNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      statementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementChildNodeB = bracketedStatementChildNodeFromStatementNode(statementNodeB);

    if (bracketedStatementChildNodeB !== null) {
      const nodeA = statementNodeA, ///
            nodeB = bracketedStatementChildNodeB,  ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      statementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return statementMatchesModuloBrackets;
}

export function bracketedStatementChildNodeFromStatementNode(statementNode) {
  let bracketedStatementChildNode = null;

  const depth = BRACKETED_STATEMENT_DEPTH,
        substitutions = null,
        nonTerminalNodeA = statementNode,  ///
        nonTerminalNodeB = bracketedStatementNode,  ///
        nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, depth);

  if (nonTerminalNodeMatches) {
    bracketedStatementChildNode = bracketedStatementChildNodeQuery(statementNode);
  }

  return bracketedStatementChildNode;
}
