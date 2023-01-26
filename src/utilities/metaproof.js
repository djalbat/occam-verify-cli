"use strict";

import { matcher } from "../matcher";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalNodeFromNonTerminalNode } from "../utilities/nonTerminalNode"

export function matchMetastatementNodeModuloBrackets(metastatementNodeA, metastatementNodeB) {
  let metastatementNodeMatchesModuloBrackets = false;

  const ruleName = METASTATEMENT_RULE_NAME,
        nonTerminalNodeA = metastatementNodeA,  ///
        nonTerminalNodeB = metastatementNodeB;  ///

  if (!metastatementNodeMatchesModuloBrackets) {
    const nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    metastatementNodeMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!metastatementNodeMatchesModuloBrackets) {
    const bracketedNonTerminalNodeA = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeA, ruleName);

    if (bracketedNonTerminalNodeA !== null) {
      const nodeA = bracketedNonTerminalNodeA,  ///
            nodeB = nonTerminalNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementNodeMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!metastatementNodeMatchesModuloBrackets) {
    const bracketedNonTerminalNodeB = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeB, ruleName);

    if (bracketedNonTerminalNodeB !== null) {
      const nodeB = bracketedNonTerminalNodeB,  ///
            nodeA = nonTerminalNodeA, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementNodeMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return metastatementNodeMatchesModuloBrackets;
}
