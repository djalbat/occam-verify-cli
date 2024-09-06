"use strict";

import { matchStatementModuloBrackets } from "./utilities/match";

export default class Declaration {
  constructor(metavariableNode, statementNode) {
    this.metavariableNode = metavariableNode;
    this.statementNode = statementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchSubstitution(substitution) {
    const statementNode = substitution.getStatementNode(),
          metavariableNode = substitution.getMetavariableNode(),
          matchesStatementNode = this.matchStatementNode(statementNode),
          matchesMetavariableNode = this.matchMetavariableNode(metavariableNode),
          matchesSubstitution = (matchesMetavariableNode && matchesStatementNode);

    return matchesSubstitution;
  }

  matchMetavariableNode(metavariableNode) {
    const matchesMetavariableNode = this.metavariableNode.match(metavariableNode);

    return matchesMetavariableNode;
  }

  matchStatementNode(statementNode) {
    const statementNodeA = statementNode, ///
          statementNodeB = this.statementNode,  ///
          statementMatches = matchStatementModuloBrackets(statementNodeA, statementNodeB),
          matchesStatementNode = statementMatches;  ///

    return matchesStatementNode;
  }

  matchMetaLemmaOrMetaTheorem(metaLemmaMetatheorem) {
    const consequent = metaLemmaMetatheorem.getConsequent(),
          statementNode = consequent.getStatementNode(),
          matches = this.statementNode.match(statementNode),
          matchesMetaLemmaOrMetaTheorem = matches;  ///

    return matchesMetaLemmaOrMetaTheorem;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    const declaration = new Declaration(metavariableNode, statementNode);

    return declaration;
  }
}
