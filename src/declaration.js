"use strict";

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
          metavariableNodeMatches = this.metavariableNode.match(metavariableNode),
          metastatementNodeMatches = this.metastatementNode.match(metastatementNode),
          substitutionMatches = (metavariableNodeMatches && metastatementNodeMatches);

    return substitutionMatches;
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
