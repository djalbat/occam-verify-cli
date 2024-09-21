"use strict";

import { stripBracketsFromStatement } from "./utilities/brackets";

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
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  unifyStatement(statementNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const statementNodeMatches = this.statementNode.match(statementNode),
          statementUnified = statementNodeMatches;  ///

    return statementUnified;
  }

  unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem) {
    const consequent = metaLemmaMetatheorem.getConsequent(),
          statementNode = consequent.getStatementNode(),
          statementNodeMatches = this.statementNode.match(statementNode),
          metaLemmaOrMetaTheoremUnified = statementNodeMatches;  ///

    return metaLemmaOrMetaTheoremUnified;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    if (statementNode !== null) {
      statementNode = stripBracketsFromStatement(statementNode); ///
    }

    const declaration = new Declaration(metavariableNode, statementNode);

    return declaration;
  }
}
