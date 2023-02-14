"use strict";

import matcher from "../matcher";

import { bracketedStatementChildNodeFromStatementNode } from "../utilities/proof";

export default class StatementForMetavariableSubstitution {
  constructor(metavariableName, statementNode) {
    this.metavariableName = metavariableName;
    this.statementNode = statementNode;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode) {
    let statementNodeMatches;

    const nodeA = this.statementNode,  ///
          nodeB = statementNode,
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    statementNodeMatches = nodeMatches;  ///

    if (!statementNodeMatches) {
      const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

      if (bracketedStatementChildNode !== null) {
        const statementNode = bracketedStatementChildNode, ///
              nodeA = this.statementNode,  ///
              nodeB = statementNode,
              nodeMatches = matcher.matchNode(nodeA, nodeB);

        statementNodeMatches = nodeMatches;  ///
      }
    }

    return statementNodeMatches;
  }

  static fromMetavariableNameAndStatementNode(metavariableName, statementNode) {
    let statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);

    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      const statementNode = bracketedStatementChildNode; ///

      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);
    }

    return statementForMetavariableSubstitution;
  }
}
