"use strict";

import { ARGUMENT_RULE_NAME } from "./ruleNames";
import { nodeQuery, variableNameFromVariableNode } from "./utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      variableNodeQuery = nodeQuery("/term/variable!"),
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

function equateNode(nodeA, nodeB, equalities, proofContext) {
  let nodeEquates = false;

  const nodeATerminalNode = nodeA.isTerminalNode(),
        nodeBTerminalNode = nodeB.isTerminalNode();

  if (nodeATerminalNode === nodeBTerminalNode) {
    if (nodeATerminalNode) {
      const terminalNodeA = nodeA,  ///
            terminalNodeB = nodeB,  ///
            terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, equalities, proofContext);

      nodeEquates = terminalNodeEquates;  ///
    } else {
      const nonTerminalNodeA = nodeA,  ///
            nonTerminalNodeB = nodeB, ///
            nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equalities, proofContext);

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

function equateTerminalNode(terminalNodeA, terminalNodeB, equalities, proofContext) {
  const matches = terminalNodeA.match(terminalNodeB),
        terminalNodeEquates = matches;  ///

  return terminalNodeEquates;
}

function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext) {
  let nonTerminalNodeVerified = false;

  const leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(),
        rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();

  if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
    const ruleName = leftNonTerminalNodeRuleName; ///

    switch (ruleName) {
      case ARGUMENT_RULE_NAME: {
        const leftArgumentNode = leftNonTerminalNode, ///
              rightArgumentNode = rightNonTerminalNode, ///
              argumentNodeVerified = equateArgumentNode(leftArgumentNode, rightArgumentNode, equalities, proofContext);

        nonTerminalNodeVerified = argumentNodeVerified; ///

        break;
      }

      default: {
        const leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
              rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
              leftNodes = leftNonTerminalNodeChildNodes, ///
              rightNodes = rightNonTerminalNodeChildNodes, ///
              nodesVerified = equateNodes(leftNodes, rightNodes, equalities, proofContext);

        nonTerminalNodeVerified = nodesVerified; ///

        break;
      }
    }
  }

  return nonTerminalNodeVerified;
}

function equateArgumentNode(leftArgumentNode, rightArgumentNode, equalities, proofContext) {
  let argumentNodeEquates = false;

  const leftTermNode = termNodeQuery(leftArgumentNode),
        rightTermNode = termNodeQuery(rightArgumentNode),
        leftVariable = variableFromTermNode(leftTermNode, proofContext),
        rightVariable = variableFromTermNode(rightTermNode, proofContext);

  if (false) {
    ///
  } else if ((leftVariable !== null) && (rightVariable !== null)) {
    const leftVariableEqualToRightVariable = leftVariable.isEqualTo(rightVariable);

    argumentNodeEquates = leftVariableEqualToRightVariable; ///
  } else if (leftVariable !== null) {
    const leftVariableValue = leftVariable.getValue();

    if (leftVariableValue !== undefined) {
      const leftNode = leftVariableValue, ///
            rightNode = rightTermNode,  ///
            termNodeEquates = equateNode(leftNode, rightNode, equalities, proofContext);;

      argumentNodeEquates = termNodeEquates;  ///
    }
  } else if (rightVariable !== null) {
    const rightVariableValue = rightVariable.getValue();

    if (rightVariableValue !== undefined) {
      const leftNode = leftTermNode,  ///
            rightNode = rightVariableValue, ///
            termNodeEquates = equateNode(leftNode, rightNode, equalities, proofContext);;

      argumentNodeEquates = termNodeEquates;  ///
    }
  }

  return argumentNodeEquates;
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

