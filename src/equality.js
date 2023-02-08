"use strict";

import matcher from "./matcher";
import equalityVerifier from "./verifier/equality";
import equalityStatementNode from "./node/statement/equality";

import { nodeQuery } from "./utilities/query";

const leftTermNodeQuery = nodeQuery("/statement/argument[0]/term!"),
      rightTermNodeQuery = nodeQuery("/statement/argument[1]/term!");

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
    let leftTermNodeAndRightTermNodeMatch = true;

    if (leftTermNodeAndRightTermNodeMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.rightTermNode :
                                      this.leftTermNode,  ///
            rightNonTerminalNode = leftTermNode,  ///
            nonTerminalNodeVerifies = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerifies; ///
    }

    if (leftTermNodeAndRightTermNodeMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.leftTermNode :
                                      this.rightTermNode,  ///
            rightNonTerminalNode = rightTermNode,  ///
            nonTerminalNodeVerifies = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeVerifies; ///
    }

    return leftTermNodeAndRightTermNodeMatch;
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

  verify(equalities, context) {
    const leftNonTerminalNode = this.leftTermNode,  ///
          rightNonTerminalNode = this.rightTermNode,  ///
          nonTerminalNodeVerifies = equalityVerifier.verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context),
          equates = nonTerminalNodeVerifies; ///

    return equates;
  }

  static fromProofStep(proofStep) {
    let equality = null;

    const statementNode = proofStep.getStatementNode();

    if (statementNode !== null) {
      const nodeA = statementNode,  ///
            nodeB = equalityStatementNode,  ///
            depth = EQUALITY_DEPTH,
            nodeMatches = matcher.matchNode(nodeA, nodeB, depth);

      if (nodeMatches) {
        const leftTermNode = leftTermNodeQuery(statementNode),
              rightTermNode = rightTermNodeQuery(statementNode);

        equality = new Equality(leftTermNode, rightTermNode);
      }
    }

    return equality;
  }

  static fromStatementNode(statementNode) {
    const leftTermNode = leftTermNodeQuery(statementNode),
          rightTermNode = rightTermNodeQuery(statementNode),
          equality = new Equality(leftTermNode, rightTermNode);

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
