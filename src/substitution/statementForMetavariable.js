"use strict";

import { matcher } from "../matcher";
import { bracketedStatementNodeFromStatementNode } from "../utilities/proof";

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
    let matchesStatementNode;

    const nodeA = this.statementNode,  ///
          nodeB = statementNode,
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    matchesStatementNode = nodeMatches;  ///

    if (!matchesStatementNode) {
      const bracketedStatementNode = bracketedStatementNodeFromStatementNode(statementNode);

      if (bracketedStatementNode !== null) {
        const statementNode = bracketedStatementNode, ///
              nodeA = this.statementNode,  ///
              nodeB = statementNode,
              nodeMatches = matcher.matchNode(nodeA, nodeB);

        matchesStatementNode = nodeMatches;  ///
      }
    }

    return matchesStatementNode;
  }

  static fromMetavariableNameAndStatementNode(metavariableName, statementNode) {
    let statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);

    const bracketedStatementNode = bracketedStatementNodeFromStatementNode(statementNode);

    if (bracketedStatementNode !== null) {
      const statementNode = bracketedStatementNode; ///

      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);
    }

    return statementForMetavariableSubstitution;
  }
}
