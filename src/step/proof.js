"use strict";

import { matchBracketedNonTerminalNode } from "../utilities/substitution";

export default class ProofStep {
  constructor(subproofNode, statementNode) {
    this.subproofNode = subproofNode;
    this.statementNode = statementNode;
  }

  getSubproofNode() {
    return this.subproofNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatement(statementNode) {
    let statementMatches;

    const statementsMatch = this.matchStatements(statementNode);

    statementMatches = statementsMatch; //

    return statementMatches;
  }

  matchStatements(statementNode) {
    let statementsMatch = false;

    if (this.statementNode !== null) {
      const nonTerminalNodeA = statementNode, ///
            nonTerminalNodeB = this.statementNode,  ///
            bracketedNodeMatches = matchBracketedNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB),
            statementNodeMatches = bracketedNodeMatches;  ///

      return statementNodeMatches;
    }

    return statementsMatch;
  }

  static fromSubproofNode(subproofNode) {
    const statementNode = null,
          metaProofStep = new ProofStep(subproofNode, statementNode);

    return metaProofStep;
  }

  static fromStatementNode(statementNode) {
    const subproofNode = null,
          metaProofStep = new ProofStep(subproofNode, statementNode);

    return metaProofStep;
  }
}
