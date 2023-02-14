"use strict";

import { META_ARGUMENT_RULE_NAME } from "../ruleNames";
import { matchStatementModuloBrackets } from "../utilities/proof";

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

    const statementMatches = this.matchStatement(statementNode);

    matches = statementMatches; //

    return matches;
  }

  matchStatement(statementNode) {
    let statementMatches = false;

    if (this.statementNode !== null) {
      const ruleName = META_ARGUMENT_RULE_NAME,
            statementNodeA = statementNode, ///
            statementNodeB = this.statementNode,  ///
            statementMatchesModuloBrackets = matchStatementModuloBrackets(statementNodeA, statementNodeB, ruleName);

      statementMatches = statementMatchesModuloBrackets;  ///
    }

    return statementMatches;
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
