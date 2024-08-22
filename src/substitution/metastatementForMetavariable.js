"use strict";

import Substitution from "../substitution";

import { bracketedMetastatementChildNodeFromMetastatementNode } from "../utilities/metaproof";

export default class MetastatementForMetavariableSubstitution extends Substitution {
  constructor(metavariableNode, metastatementNode) {
    super();

    this.metavariableNode = metavariableNode;
    this.metastatementNode = metastatementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
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

  static fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
    let metastatementForMetavariableSubstitution;

    metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode);

    const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode);

    if (bracketedMetastatementChildNode !== null) {
      const metastatementNode = bracketedMetastatementChildNode; ///

      metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode);
    }

    return metastatementForMetavariableSubstitution;
  }
}
