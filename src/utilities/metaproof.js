"use strict";

import bracketedMetastatementNode from "../node/metastatement/bracketed";

import { matcher } from "../matcher";
import { nodeQuery } from "../utilities/query";
import { BRACKETED_METASTATEMENT_DEPTH } from "../constants";

const bracketedMetastatementChildNodeQuery = nodeQuery('/metastatement/metastatement!');

export function matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB) {
  let metastatementMatchesModuloBrackets = false;

  if (!metastatementMatchesModuloBrackets) {
    const nonTerminalNodeA = metastatementNodeA,  ///
          nonTerminalNodeB = metastatementNodeB,  ///
          nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

    metastatementMatchesModuloBrackets = nonTerminalNodeMatches;  ///
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedMetastatementChildNodeA = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeA);

    if (bracketedMetastatementChildNodeA !== null) {
      const nodeA = bracketedMetastatementChildNodeA,  ///
            nodeB = metastatementNodeB, ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedMetastatementChildNodeB = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeB);

    if (bracketedMetastatementChildNodeB !== null) {
      const nodeA = metastatementNodeA, ///
            nodeB = bracketedMetastatementChildNodeB,  ///
            nodeMatches = matcher.matchNode(nodeA, nodeB);

      metastatementMatchesModuloBrackets = nodeMatches; ///
    }
  }

  return metastatementMatchesModuloBrackets;
}

export function bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode) {
  let bracketedMetastatementChildNode = null;

  const depth = BRACKETED_METASTATEMENT_DEPTH,
        substitutions = null,
        nonTerminalNodeA = metastatementNode,  ///
        nonTerminalNodeB = bracketedMetastatementNode,  ///
        nonTerminalNodeMatches = matcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, depth);

  if (nonTerminalNodeMatches) {
    bracketedMetastatementChildNode = bracketedMetastatementChildNodeQuery(metastatementNode);
  }

  return bracketedMetastatementChildNode;
}
