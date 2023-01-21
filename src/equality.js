"use strict";

import { nodeQuery } from "./utilities/query";
import { TERM_RULE_NAME } from "./ruleNames";

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

  match(equality, equalities) {
    let matches = false;

    const leftTermNode = equality.getLeftTermNode(),
          rightTermNode = equality.getRightTermNode();

    if (!matches) {
      const reversed = false,
            leftTermNodeAndRightTermNodeMatch = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities);

      matches = leftTermNodeAndRightTermNodeMatch;  ///
    }

    if (!matches) {
      const reversed = true,
            leftTermNodeAndRightTermNodeMatch = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities);

      matches = leftTermNodeAndRightTermNodeMatch;  ///
    }

    return matches;
  }

  matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities) {
    let leftTermNodeAndRightTermNodeMatch = true;

    if (leftTermNodeAndRightTermNodeMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.rightTermNode :
                                      this.leftTermNode,  ///
            rightNonTerminalNode = leftTermNode,  ///
            nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
    }

    if (leftTermNodeAndRightTermNodeMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.leftTermNode :
                                      this.rightTermNode,  ///
            rightNonTerminalNode = rightTermNode,  ///
            nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
    }

    return leftTermNodeAndRightTermNodeMatch;
  }

  equate(equalities) {
    const leftNonTerminalNode = this.leftTermNode,  ///
          rightNonTerminalNode = this.rightTermNode,  ///
          nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities),
          equates = nonTerminalNodeEquates; ///

    return equates;
  }

  static fromProofStep(proofStep) {
    let equality = null;

    const statementNode = proofStep.getStatementNode();

    if (statementNode !== null) {
      const leftTermNode = leftTermNodeQuery(statementNode),
            rightTermNode = rightTermNodeQuery(statementNode);

      if ((leftTermNode !== null) && (rightTermNode !== null)) {
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

  static fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode) {
    const equality = new Equality(leftTermNode, rightTermNode);

    return equality;
  }
}

function equateNode(nodeA, nodeB, equalities) {
  let nodeEquates = false;

  const nodeATerminalNode = nodeA.isTerminalNode(),
        nodeBTerminalNode = nodeB.isTerminalNode();

  if (nodeATerminalNode === nodeBTerminalNode) {
    if (nodeATerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, equalities);

      nodeEquates = terminalNodeEquates;  ///
    } else {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equalities);

      nodeEquates = nonTerminalNodeEquates; ///
    }
  }

  return nodeEquates;
}

function equateNodes(leftNodes, rightNodes, equalities) {
  let nodesEquate = false;

  const leftNodesLength = leftNodes.length,
        rightNodesLength = rightNodes.length;

  if (leftNodesLength === rightNodesLength) {
    nodesEquate = leftNodes.every((LeftNode, index) => {
      const rightNode = rightNodes[index],
            nodeEquates = equateNode(LeftNode, rightNode, equalities);

      if (nodeEquates) {
        return true;
      }
    });
  }

  return nodesEquate;
}

function equateTerminalNode(terminalNodeA, terminalNodeB, equalities) {
  const matches = terminalNodeA.match(terminalNodeB),
        terminalNodeEquates = matches;  ///

  return terminalNodeEquates;
}

function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities) {
  let nonTerminalNodeEquates = false;

  const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
        rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();

  if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
    const ruleName = leftNonTerminalNodeRuleName, ///
          ruleNameTermRuleName = (ruleName === TERM_RULE_NAME);

    if (ruleNameTermRuleName) {
      const leftTermNode = leftNonTerminalNode, ///
            rightTermNode = rightNonTerminalNode, ///
            termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities);

      nonTerminalNodeEquates = termNodeEquates;  ///
    }

    if (!nonTerminalNodeEquates) {
      const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
            rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
            leftNodes = leftNonTerminalNodeChildNodes, ///
            rightNodes = rightNonTerminalNodeChildNodes, ///
            nodesEquate = equateNodes(leftNodes, rightNodes, equalities);

      nonTerminalNodeEquates = nodesEquate; ///
    }
  }

  return nonTerminalNodeEquates;
}

function equateTermNode(leftTermNode, rightTermNode, equalities) {
  const equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode),
        equalityA = equality, ///
        equalityMatches = equalities.some((equality) => { ///
          let equalitiesB = equalities; ///

          const equalityB = equality; ///

          equalitiesB = filterEqualities(equalitiesB, equalityB);  ///

          const equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB);

          if (equalityAMatchesEqualityB) {
            return true;
          }
        }),
        termNodeEquates = equalityMatches;  ///

  return termNodeEquates;
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
