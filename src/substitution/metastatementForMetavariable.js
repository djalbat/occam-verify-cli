"use strict";

import { matcher } from "../matcher";
import { bracketedMetastatementNodeFromMetastatementNode } from "../utilities/metaproof";

export default class MetastatementForMetavariableSubstitution {
  constructor(metavariableName, metastatementNode) {
    this.metavariableName = metavariableName;
    this.metastatementNode = metastatementNode;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetastatementNode(metastatementNode) {
    let matchesMetastatementNode;

    const nodeA = this.metastatementNode,  ///
          nodeB = metastatementNode,
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    matchesMetastatementNode = nodeMatches;  ///

    if (!matchesMetastatementNode) {
      const bracketedNonTerminalNode = bracketedMetastatementNodeFromMetastatementNode(metastatementNode);

      if (bracketedNonTerminalNode !== null) {
        const metastatementNode = bracketedNonTerminalNode, ///
              nodeA = this.metastatementNode,  ///
              nodeB = metastatementNode,
              nodeMatches = matcher.matchNode(nodeA, nodeB);

        matchesMetastatementNode = nodeMatches;  ///
      }
    }

    return matchesMetastatementNode;
  }

  static fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode) {
    let metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);

    const bracketedMetastatementNode = bracketedMetastatementNodeFromMetastatementNode(metastatementNode);

    if (bracketedMetastatementNode !== null) {
      const metastatementNode = bracketedMetastatementNode; ///

      metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
    }

    return metastatementForMetavariableSubstitution;
  }
}
