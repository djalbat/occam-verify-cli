"use strict";

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
