"use strict";

import bracketedMetastatementNode from "../node/metastatement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_METASTATEMENT_DEPTH } from "../constants";

const bracketedMetastatementChildNodeQuery = nodeQuery("/metastatement/metastatement!");

export function matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB) {
  let metastatementMatchesModuloBrackets = false;

  if (!metastatementMatchesModuloBrackets) {
    const metastatementNodeMatches = metastatementNodeA.match(metastatementNodeB);

    metastatementMatchesModuloBrackets = metastatementNodeMatches;  ///
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedMetastatementChildNodeA = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeA);

    if (bracketedMetastatementChildNodeA !== null) {
      const bracketedMetastatementChildNodeAMatchesMetastatementNodeB = bracketedMetastatementChildNodeA.match(metastatementNodeB);

      metastatementMatchesModuloBrackets = bracketedMetastatementChildNodeAMatchesMetastatementNodeB; ///
    }
  }

  if (!metastatementMatchesModuloBrackets) {
    const bracketedMetastatementChildNodeB = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeB);

    if (bracketedMetastatementChildNodeB !== null) {
      const metastatementNodeAMatchesBracketedMetastatementChildNodeB = metastatementNodeA.match(bracketedMetastatementChildNodeB);

      metastatementMatchesModuloBrackets = metastatementNodeAMatchesBracketedMetastatementChildNodeB; ///
    }
  }

  return metastatementMatchesModuloBrackets;
}

export function bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode) {
  let bracketedMetastatementChildNode = null;

  const depth = BRACKETED_METASTATEMENT_DEPTH,
        metastatementNodeMatchesBracketedMetastatementNode = metastatementNode.match(bracketedMetastatementNode, depth);

  if (metastatementNodeMatchesBracketedMetastatementNode) {
    bracketedMetastatementChildNode = bracketedMetastatementChildNodeQuery(metastatementNode);
  }

  return bracketedMetastatementChildNode;
}
