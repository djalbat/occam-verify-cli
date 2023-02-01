"use strict";

import matcher from "./matcher";
import verifyTerm from "./verify/term";
import equalityCombinator from "./ocmbinator/equality";
import equalityStatementNode from "./node/statement/equality";

import { nodeQuery } from "./utilities/query";
import { first, second } from "./utilities/array";
import { EQUALITY_DEPTH } from "./constants";
import { TERM_RULE_NAME } from "./ruleNames";
import { verifyStatementAgainstCombinator } from "./verify/statement";

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
            nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
    }

    if (leftTermNodeAndRightTermNodeMatch) {
      const leftNonTerminalNode = reversed ?
                                    this.leftTermNode :
                                      this.rightTermNode,  ///
            rightNonTerminalNode = rightTermNode,  ///
            nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);

      leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
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

  equate(equalities, context) {
    const leftNonTerminalNode = this.leftTermNode,  ///
          rightNonTerminalNode = this.rightTermNode,  ///
          nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context),
          equates = nonTerminalNodeEquates; ///

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

  static fromStatementNode(statementNode, context) {
    let equality = null;

    const combinator = equalityCombinator,  ///
          statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);

    if (statementVerifiedAgainstCombinator) {
      const leftTermNode = leftTermNodeQuery(statementNode),
            rightTermNode = rightTermNodeQuery(statementNode);

      equality = new Equality(leftTermNode, rightTermNode);
    }

    return equality;
  }
}

function equateNode(nodeA, nodeB, equalities, context) {
  let nodeEquates = false;

  const nodeATerminalNode = nodeA.isTerminalNode(),
        nodeBTerminalNode = nodeB.isTerminalNode();

  if (nodeATerminalNode === nodeBTerminalNode) {
    if (nodeATerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, equalities, context);

      nodeEquates = terminalNodeEquates;  ///
    } else {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equalities, context);

      nodeEquates = nonTerminalNodeEquates; ///
    }
  }

  return nodeEquates;
}

function equateNodes(leftNodes, rightNodes, equalities, context) {
  let nodesEquate = false;

  const leftNodesLength = leftNodes.length,
        rightNodesLength = rightNodes.length;

  if (leftNodesLength === rightNodesLength) {
    nodesEquate = leftNodes.every((LeftNode, index) => {
      const rightNode = rightNodes[index],
            nodeEquates = equateNode(LeftNode, rightNode, equalities, context);

      if (nodeEquates) {
        return true;
      }
    });
  }

  return nodesEquate;
}

function equateTerminalNode(terminalNodeA, terminalNodeB, equalities, context) {
  const matches = terminalNodeA.match(terminalNodeB),
        terminalNodeEquates = matches;  ///

  return terminalNodeEquates;
}

function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context) {
  let nonTerminalNodeEquates = false;

  const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
        rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();

  if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
    const ruleName = leftNonTerminalNodeRuleName, ///
          ruleNameTermRuleName = (ruleName === TERM_RULE_NAME);

    if (ruleNameTermRuleName) {
      const leftTermNode = leftNonTerminalNode, ///
            rightTermNode = rightNonTerminalNode, ///
            termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, context);

      nonTerminalNodeEquates = termNodeEquates;  ///
    }

    if (!nonTerminalNodeEquates) {
      const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
            rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
            leftNodes = leftNonTerminalNodeChildNodes, ///
            rightNodes = rightNonTerminalNodeChildNodes, ///
            nodesEquate = equateNodes(leftNodes, rightNodes, equalities, context);

      nonTerminalNodeEquates = nodesEquate; ///
    }
  }

  return nonTerminalNodeEquates;
}

function equateTermNode(leftTermNode, rightTermNode, equalities, context) {
  let termNodeEquates = false;

  const equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context);

  if (equality !== null) {
    const equalityA = equality, ///
          equalitiesB = equalities, ///
          equalityMatches = equalitiesB.some((equalityB) => { ///
            const equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);

            if (equalityAMatchesEqualityB) {
              return true;
            }
          });

    termNodeEquates = equalityMatches;  ///
  }

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

function equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context) {
  let equality = null;

  const types = [],
        leftTermVerified = verifyTerm(leftTermNode, types, context),
        rightTermVerified = verifyTerm(rightTermNode, types, context);

  if (leftTermVerified && rightTermVerified) {
    const firstType = first(types),
          secondType = second(types),
          leftTermType = firstType, ///
          rightTermType = secondType, ///
          leftTermTypeEqualToRightTermType = leftTermType.isEqualTo(rightTermType);

    if (leftTermTypeEqualToRightTermType) {
      equality = new Equality(leftTermNode, rightTermNode);
    } else {
      const leftTermString = context.nodeAsString(leftTermNode),
            rightTermString = context.nodeAsString(rightTermNode),
            leftTermTypeName = leftTermType.getName(),
            rightTermTypeName = rightTermType.getName();

      context.error(`The left '${leftTermString}' term's '${leftTermTypeName}' type is not equal to the right '${rightTermString}' term's '${rightTermTypeName}' type.'`, leftTermNode);
    }
  }

  return equality;
}
