"use strict";

import { matcher } from "../matcher";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalNodeFromNonTerminalNode } from "../utilities/nonTerminalNode"

export function matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB) {
  let metastatementMatchesModuloBrackets = false;

  const ruleName = METASTATEMENT_RULE_NAME,
        nonTerminalNodeA = metastatementNodeA,  ///
        nonTerminalNodeB = metastatementNodeB;  ///

  if (!metastatementMatchesModuloBrackets) {
    const nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    metastatementMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedNonTerminalNodeA = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeA, ruleName);

    if (bracketedNonTerminalNodeA !== null) {
      const nodeA = bracketedNonTerminalNodeA,  ///
            nodeB = nonTerminalNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedNonTerminalNodeB = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNodeB, ruleName);

    if (bracketedNonTerminalNodeB !== null) {
      const nodeB = bracketedNonTerminalNodeB,  ///
            nodeA = nonTerminalNodeA, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return metastatementMatchesModuloBrackets;
}
