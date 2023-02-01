"use strict";

import matcher from "../matcher";
import bracketedMetastatementNode from "../node/metastatement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_METASTATEMENT_DEPTH } from "../constants";

const bracketedMetastatementChildNodeQuery = nodeQuery('/metastatement/metastatement!');

export function matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB) {
  let metastatementMatchesModuloBrackets = false;

  if (!metastatementMatchesModuloBrackets) {
    const nodeA = metastatementNodeA,  ///
          nodeB = metastatementNodeB,  ///
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    metastatementMatchesModuloBrackets = nodeMatches;  ///
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

  const nodeA = metastatementNode,  ///
        nodeB = bracketedMetastatementNode,  ///
        depth = BRACKETED_METASTATEMENT_DEPTH,
        nonTerminalNodeMatches = matcher.matchNode(nodeA, nodeB, depth);

  if (nonTerminalNodeMatches) {
    bracketedMetastatementChildNode = bracketedMetastatementChildNodeQuery(metastatementNode);
  }

  return bracketedMetastatementChildNode;
}
