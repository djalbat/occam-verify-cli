"use strict";

import { matcher } from "../matcher";
import { nodeQuery } from "./query";
import { META_ARGUMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalNodeFromNonTerminalNode } from "../utilities/nonTerminalNode"

const statementNodeQuery = nodeQuery('/metaArgument/statement!');

export function matchStatementModuloBrackets(statementNodeA, statementNodeB) {
  let statementMatchesModuloBrackets = false;

  const ruleName = META_ARGUMENT_RULE_NAME,
        nonTerminalNodeA = statementNodeA,  ///
        nonTerminalNodeB = statementNodeB;  ///

  if (!statementMatchesModuloBrackets) {
    const nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    statementMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedNonTerminalNodeA = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeA, ruleName),
          metaArgumentNodeA = bracketedNonTerminalNodeA;  ///

    if (metaArgumentNodeA !== null) {
      const statementNodeA = statementNodeQuery(metaArgumentNodeA),
            nodeA = statementNodeA,  ///
            nodeB = nonTerminalNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      statementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedNonTerminalNodeB = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeB, ruleName),
          metaArgumentNodeB = bracketedNonTerminalNodeB;  ///

    if (metaArgumentNodeB !== null) {
      const statementNodeB = statementNodeQuery(metaArgumentNodeB),
            nodeA = nonTerminalNodeA, ///
            nodeB = statementNodeB,  ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      statementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return statementMatchesModuloBrackets;
}
