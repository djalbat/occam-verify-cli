"use strict";

import { META_ARGUMENT_RULE_NAME } from "../ruleNames";
import { matchNonTerminalNodeModuloBrackets } from "../utilities/nonTerminalNode";

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

  match(statementNode) {
    let matches;

    const matchesStatement = this.matchStatement(statementNode);

    matches = matchesStatement; //

    return matches;
  }

  matchStatement(statementNode) {
    let matchesStatement = false;

    if (this.statementNode !== null) {
      const ruleName = META_ARGUMENT_RULE_NAME,
            nonTerminalNodeA = statementNode, ///
            nonTerminalNodeB = this.statementNode,  ///
            nonTerminalNodeMatchesModuloBrackets = matchNonTerminalNodeModuloBrackets(nonTerminalNodeA, nonTerminalNodeB, ruleName),
            statementNodeMatches = nonTerminalNodeMatchesModuloBrackets;  ///

      return statementNodeMatches;
    }

    return matchesStatement;
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
