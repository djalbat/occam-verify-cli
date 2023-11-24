"use strict";

import equalityNodesVerifier from "./verifier/nodes/equality";

import { nodeQuery } from "./utilities/query";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      leftTermNodeQuery = nodeQuery("/equality/argument[0]/term!"),
      rightTermNodeQuery = nodeQuery("/equality/argument[1]/term!");

export default class Equality {
  constructor(leftTermNode, rightTermNode) {
    this.leftTermNode = leftTermNode;
    this.rightTermNode = rightTermNode;
  }

  getLeftTermNode() {
    return this.leftTermNode;
  }

  getRightTermNode() {
    return this.rightTermNode;
  }

  matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context) {
    let termNodesMatch = true;

    if (termNodesMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.rightTermNode :
                                      this.leftTermNode,  ///
            rightNonTerminalNode = leftTermNode,  ///
            nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      termNodesMatch = nonTerminalNodeVerified; ///
    }

    if (termNodesMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.leftTermNode :
                                      this.rightTermNode,  ///
            rightNonTerminalNode = rightTermNode,  ///
            nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      termNodesMatch = nonTerminalNodeVerified; ///
    }

    return termNodesMatch;
  }

  match(equality, equalities, context) {
    let matches = false;

    const leftTermNode = equality.getLeftTermNode(),
          rightTermNode = equality.getRightTermNode();

    equalities = filterEqualities(equalities, equality);  ///

    if (!matches) {
      const reversed = false,
            leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);

      matches = leftTermNodeAndRightTermNodeMatch;  ///
    }

    if (!matches) {
      const reversed = true,
            leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);

      matches = leftTermNodeAndRightTermNodeMatch;  ///
    }

    return matches;
  }

  verify(equalities, context, verifyAhead) {
    const leftNonTerminalNode = this.leftTermNode,  ///
          rightNonTerminalNode = this.rightTermNode,  ///
          nonTerminalNodeVerified = equalityNodesVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead),
          verified = nonTerminalNodeVerified; ///

    return verified;
  }

  static fromProofStep(proofStep) {
    let equality = null;

    const statementNode = proofStep.getStatementNode();

    if (statementNode !== null) {
      const equalityNode = equalityNodeQuery(statementNode);

      if (equalityNode !== null) {
        const leftTermNode = leftTermNodeQuery(statementNode),
              rightTermNode = rightTermNodeQuery(statementNode);

        equality = new Equality(leftTermNode, rightTermNode);
      }
    }

    return equality;
  }

  static fromEqualityNode(equalityNode) {
    const leftTermNode = leftTermNodeQuery(equalityNode),
          rightTermNode = rightTermNodeQuery(equalityNode),
          equality = new Equality(leftTermNode, rightTermNode);

    return equality;
  }

  static fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode) {
    const equality = new Equality(leftTermNode, rightTermNode);

    return equality;
  }
}

function filterEqualities(equalities, equality) {
  const equalityA = equality; ///

  equalities = equalities.filter((equality) => {
    const equalityB = equality; ///

    if (equalityA !== equalityB) {
      return true;
    }
  });

  return equalities;
}
