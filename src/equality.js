"use strict";

import { ARGUMENT_RULE_NAME } from "./ruleNames";
import { nodeQuery, variableNameFromVariableNode } from "./utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!"),
      equalityNodeQuery = nodeQuery("/statement/equality!"),
      leftTermNodeQuery = nodeQuery("/equality/term[0]"),
      rightTermNodeQuery = nodeQuery("/equality/term[1]");

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

  areTermsEqual(equalities, proofContext) {
    const leftNonTerminalNode = this.leftTermNode,  ///
          rightNonTerminalNode = this.rightTermNode,  ///
          nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext),
          termsEqual = nonTerminalNodeEquates; ///

    return termsEqual;
  }

  static fromProofStep(proofStep) {
    let equality = null;

    const statementNode = proofStep.getStatementNode();

    if (statementNode !== null) {
      const equalityNode = equalityNodeQuery(statementNode);

      if (equalityNode !== null) {
        const leftTermNode = leftTermNodeQuery(equalityNode),
              rightTermNode = rightTermNodeQuery(equalityNode);

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
}

function variableFromTermNode(termNode, proofContext) {
  let variable = null;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode);

    variable = proofContext.findVariableByVariableName(variableName);
  }

  return variable;
}

function equateNode(nodeA, nodeB) {
  let nodeEquates = false;

  const nodeATerminalNode = nodeA.isTerminalNode(),
        nodeBTerminalNode = nodeB.isTerminalNode();

  if (nodeATerminalNode === nodeBTerminalNode) {
    if (nodeATerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB);

      nodeEquates = terminalNodeEquates;  ///
    } else {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);

      nodeEquates = nonTerminalNodeEquates; ///
    }
  }

  return nodeEquates;
}

function equateNodes(leftNodes, rightNodes, equalities, proofContext) {
  let nodesEquate = false;

  const leftNodesLength = leftNodes.length,
        rightNodesLength = rightNodes.length;

  if (leftNodesLength === rightNodesLength) {
    nodesEquate = leftNodes.every((LeftNode, index) => {
      const rightNode = rightNodes[index],
            nodeEquates = equateNode(LeftNode, rightNode, equalities, proofContext);

      if (nodeEquates) {
        return true;
      }
    });
  }

  return nodesEquate;
}

function equateTermNode(leftTermNode, rightTermNode, equalities, proofContext) {
  let termNodeEquates = false;

  const leftVariable = variableFromTermNode(leftTermNode, proofContext),
        rightVariable = variableFromTermNode(rightTermNode, proofContext);

  if (false) {
    ///
  } else if ((leftVariable !== null) && (rightVariable !== null)) {
    const leftVariableEqualToRightVariable = leftVariable.isEqualTo(rightVariable);

    termNodeEquates = leftVariableEqualToRightVariable; ///
  } else if (leftVariable !== null) {
    const leftVariableValue = leftVariable.getValue();

    if (leftVariableValue !== undefined) {
      const leftTermNode = leftVariableValue; ///

      termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, proofContext);
    }
  } else if (rightVariable !== null) {
    const rightVariableValue = rightVariable.getValue();

    if (rightVariableValue !== undefined) {
      const rightTermNode = rightVariableValue; ///

      termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, proofContext);
    }
  }

  return termNodeEquates;
}

function equateTerminalNode(terminalNodeA, terminalNodeB) {
  const matches = terminalNodeA.match(terminalNodeB),
        terminalNodeEquates = matches;  ///

  return terminalNodeEquates;
}

function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext) {
  let nonTerminalNodeEquates = false;

  const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
        rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName(),
        leftRuleName = leftNonTerminalNodeRuleName, ///
        rightRuleName = rightNonTerminalNodeRuleName; ///

  if (leftRuleName === rightRuleName) {
    if (!nonTerminalNodeEquates) {
      const ruleName = leftRuleName,  ///
            ruleNameTermRuleName = (ruleName === TERM_RULE_NAME);

      if (ruleNameTermRuleName) {
        const leftTermNode = leftNonTerminalNode, ///
              rightTermNode = rightNonTerminalNode, ///
              termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, proofContext);

        nonTerminalNodeEquates = termNodeEquates; ///
      }
    }

    if (!nonTerminalNodeEquates) {
      const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
            rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
            leftNodes = leftNonTerminalNodeChildNodes,  ///
            rightNodes = rightNonTerminalNodeChildNodes,  ///
            nodesEquate = equateNodes(leftNodes, rightNodes, equalities, proofContext);

      nonTerminalNodeEquates = nodesEquate; ///
    }
  }

  return nonTerminalNodeEquates;
}
