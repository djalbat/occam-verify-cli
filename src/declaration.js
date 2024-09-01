"use strict";

import { matchMetastatementModuloBrackets } from "./utilities/match";

export default class Declaration {
  constructor(metavariableNode, metastatementNode) {
    this.metavariableNode = metavariableNode;
    this.metastatementNode = metastatementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchSubstitution(substitution) {
    const metavariableNode = substitution.getMetavariableNode(),
          metastatementNode = substitution.getMetastatementNode(),
          matchesMetavariableNode = this.matchMetavariableNode(metavariableNode),
          matchesMetastatementNode = this.matchMetastatementNode(metastatementNode),
          matchesSubstitution = (matchesMetavariableNode && matchesMetastatementNode);

    return matchesSubstitution;
  }

  matchMetavariableNode(metavariableNode) {
    const matchesMetavariableNode = this.metavariableNode.match(metavariableNode);

    return matchesMetavariableNode;
  }

  matchMetastatementNode(metastatementNode) {
    const metastatementNodeA = metastatementNode, ///
          metastatementNodeB = this.metastatementNode,  ///
          metastatementMatches = matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB),
          matchesMetastatementNode = metastatementMatches;  ///

    return matchesMetastatementNode;
  }

  matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
    const metaConsequent = metaLemmaMetatheorem.getMetaConsequent(),
          metastatementNode = metaConsequent.getMetastatementNode(),
          matches = this.metastatementNode.match(metastatementNode),
          matchesMetaLemmaOrMetaTheorem = matches;  ///

    return matchesMetaLemmaOrMetaTheorem;
  }

  static fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
    const declaration = new Declaration(metavariableNode, metastatementNode);

    return declaration;
  }
}
