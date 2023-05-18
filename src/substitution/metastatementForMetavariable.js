"use strict";

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

    metastatementNodeMatches = this.metastatementNode.match(metastatementNode)

    if (!metastatementNodeMatches) {
      const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode);

      if (bracketedMetastatementChildNode !== null) {
        const metastatementNode = bracketedMetastatementChildNode; ///

        metastatementNodeMatches = this.metastatementNode.match(metastatementNode);
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
