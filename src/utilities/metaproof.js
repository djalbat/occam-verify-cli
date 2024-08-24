"use strict";

import bracketedMetastatementNode from "../node/metastatement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_METASTATEMENT_DEPTH } from "../constants";

const bracketedMetastatementChildNodeQuery = nodeQuery("/metastatement/metastatement!");

export function matchMetastatement(metastatementNodeA, metastatementNodeB) {
  let metastatementMatches = false;

  if (!metastatementMatches) {
    const metastatementNodeMatches = metastatementNodeA.match(metastatementNodeB);

    metastatementMatches = metastatementNodeMatches;  ///
  }

  if (!metastatementMatches) {
    const bracketedMetastatementChildNodeA = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeA);

    if (bracketedMetastatementChildNodeA !== null) {
      const bracketedMetastatementChildNodeAMatchesMetastatementNodeB = bracketedMetastatementChildNodeA.match(metastatementNodeB);

      metastatementMatches = bracketedMetastatementChildNodeAMatchesMetastatementNodeB; ///
    }
  }

  if (!metastatementMatches) {
    const bracketedMetastatementChildNodeB = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeB);

    if (bracketedMetastatementChildNodeB !== null) {
      const metastatementNodeAMatchesBracketedMetastatementChildNodeB = metastatementNodeA.match(bracketedMetastatementChildNodeB);

      metastatementMatches = metastatementNodeAMatchesBracketedMetastatementChildNodeB; ///
    }
  }

  return metastatementMatches;
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
