"use strict";

import matcher from "../matcher";

import { bracketedMetastatementChildNodeFromMetastatementNode } from "../utilities/metaproof";

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
    let metastatementNodeMatches;

    const nodeA = this.metastatementNode,  ///
          nodeB = metastatementNode,
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    metastatementNodeMatches = nodeMatches;  ///

    if (!metastatementNodeMatches) {
      const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode);

      if (bracketedMetastatementChildNode !== null) {
        const metastatementNode = bracketedMetastatementChildNode, ///
              nodeA = this.metastatementNode,  ///
              nodeB = metastatementNode,
              nodeMatches = matcher.matchNode(nodeA, nodeB);

        metastatementNodeMatches = nodeMatches;  ///
      }
    }

    return metastatementNodeMatches;
  }

  static fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode) {
    let metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);

    const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode);

    if (bracketedMetastatementChildNode !== null) {
      const metastatementNode = bracketedMetastatementChildNode; ///

      metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
    }

    return metastatementForMetavariableSubstitution;
  }
}
