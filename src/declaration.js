"use strict";

import { matchMetastatement } from "./utilities/metaproof";

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
          metavariableNodeMatches = this.matchMetavariableNode(metavariableNode),
          metastatementNodeMatches = this.matchMetastatementNode(metastatementNode),
          substitutionMatches = (metavariableNodeMatches && metastatementNodeMatches);

    return substitutionMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  matchMetastatementNode(metastatementNode) {
    const metastatementNodeA = metastatementNode, ///
          metastatementNodeB = this.metastatementNode,  ///
          metastatementMatches = matchMetastatement(metastatementNodeA, metastatementNodeB),
          metastatementNodeMatches = metastatementMatches;  ///

    return metastatementNodeMatches;
  }

  matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
    const metaConsequent = metaLemmaMetatheorem.getMetaConsequent(),
          metastatementNode = metaConsequent.getMetastatementNode(),
          matches = this.metastatementNode.match(metastatementNode),
          metaLemmaOrMetaTheoremMatches = matches;  ///

    return metaLemmaOrMetaTheoremMatches;
  }

  static fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
    const declaration = new Declaration(metavariableNode, metastatementNode);

    return declaration;
  }
}
