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

  unifySubstitution(substitution) {
    const statementNode = substitution.getStatementNode(),
          metavariableNode = substitution.getMetavariableNode(),
          statementUnified = this.unifyStatement(statementNode),
          metavariableUnified = this.unifyMetavariable(metavariableNode),
          substitutionUnified = (metavariableUnified && statementUnified);

    return substitutionUnified;
  }

  unifyMetavariable(metavariableNode) {
    const matchesMetavariableNode = this.metavariableNode.match(metavariableNode);

    return matchesMetavariableNode;
  }

  unifyStatement(statementNode) {
    const statementNodeA = statementNode, ///
          statementNodeB = this.statementNode,  ///
          statementMatches = matchStatementModuloBrackets(statementNodeA, statementNodeB),
          matchesStatementNode = statementMatches;  ///

    return matchesStatementNode;
  }

  unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
    const consequent = metaLemmaMetatheorem.getConsequent(),
          statementNode = consequent.getStatementNode(),
          matches = this.statementNode.match(statementNode),
          metaLemmaOrMetaTheoremUnified = matches;  ///

    return metaLemmaOrMetaTheoremUnified;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    const declaration = new Declaration(metavariableNode, statementNode);

    return declaration;
  }
}
