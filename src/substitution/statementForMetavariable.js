"use strict";

import Substitution from "../substitution";

import { bracketedStatementChildNodeFromStatementNode } from "../utilities/proof";

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(metavariableNode, statementNode) {
    super();

    this.metavariableNode = metavariableNode;
    this.statementNode = statementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode) {
    let statementNodeMatches;

    statementNodeMatches = this.statementNode.match(statementNode);

    if (!statementNodeMatches) {
      const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

      if (bracketedStatementChildNode !== null) {
        const statementNode = bracketedStatementChildNode; ///

        statementNodeMatches = this.statementNode.match(statementNode);
      }
    }

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    let statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode);

    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      const statementNode = bracketedStatementChildNode; ///

      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode);
    }

    return statementForMetavariableSubstitution;
  }
}
