"use strict";

const Error = require("../error"),
      TermNode = require("../miscellaneous/termNode"),
      ruleNames = require("../miscellaneous/ruleNames"),
      typeUtilities = require("../utilities/type"),
      nodeUtilities = require("../utilities/node"),
      ExpressionNode = require("../miscellaneous/expressionNode"),
      verifyTermExpression = require("../verify/termExpression"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { nodeAsString } = nodeUtilities,
      { verifyTerm, verifyExpression } = verifyTermExpression,
      { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames,
      { typeFromTermNode, typeFromExpressionNode } = typeUtilities;

function verifyExpressionAsOperator(expressionNode, fileContext) {
  const nonTerminalNode = expressionNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        parentNode = nonTerminalNode,  ///
        verified = verifyChildNodes(childNodes, parentNode, fileContext);

  return verified;
}

function verifyTermAsConstructor(termNode, fileContext) {
  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        parentNode = nonTerminalNode,  ///
        verified = verifyChildNodes(childNodes, parentNode, fileContext);

  return verified;
}

module.exports = {
  verifyExpressionAsOperator,
  verifyTermAsConstructor
};

function verifyNode(node, parentNode, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    verified = verifyTerminalNode(terminalNode, parentNode, fileContext);
  } else {
    const nonTerminalNode = node; ///

    verified = verifyNonTerminalNode(nonTerminalNode, parentNode, fileContext);
  }

  return verified;
}

function verifyTerminalNode(terminalNode, parentNode, fileContext) {
  const verified = true;

  ///

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, parentNode, fileContext) {
  let verified = false;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case EXPRESSION_RULE_NAME: {
      const expressionNode = nonTerminalNode; ///

      verified = verifyExpressionNode(expressionNode, fileContext);

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode; ///

      verified = verifyTermNode(termNode, fileContext);

      break;
    }

    default: {
      if (!verified) {
        const parentNodeExpressionNode = (parentNode instanceof ExpressionNode);

        if (!parentNodeExpressionNode) {
          const expressionNode = ExpressionNode.fromNonTerminalNode(nonTerminalNode);

          verified = verifyExpressionNode(expressionNode, fileContext);
        }
      }

      if (!verified) {
        const parentNodeTermNode = (parentNode instanceof TermNode);

        if (!parentNodeTermNode) {
          const termNode = TermNode.fromNonTerminalNode(nonTerminalNode);

          verified = verifyTermNode(termNode, fileContext);
        }
      }

      if (!verified) {
        const childNodes = nonTerminalNode.getChildNodes(),
              parentNode = nonTerminalNode; ///

        verified = verifyChildNodes(childNodes, parentNode, fileContext);
      }

      break;
    }
  }

  return verified;
}

function verifyChildNodes(childNodes, parentNode, fileContext) {
  let verified = false;

  const nonTerminalNodeContext = NonTerminalNodeContext.fromChildNodesAndFileContext(childNodes, fileContext);

  let nextChildNode = nonTerminalNodeContext.getNextChildNode();

  while (nextChildNode !== undefined) {
    const node = nextChildNode;  ///

    verified = verifyNode(node, parentNode, fileContext);

    if (!verified) {
      break;
    }

    nextChildNode = nonTerminalNodeContext.getNextChildNode();
  }

  return verified;
}

function verifyExpressionNode(expressionNode, fileContext) {
  let verified = false;

  const type = typeFromExpressionNode(expressionNode, fileContext);

  if (type !== undefined) {
    verified = true;
  } else {
    const operator = verifyExpression(expressionNode, fileContext);

    if (operator !== undefined) {
      const operatorType = operator.getType();

      if (operatorType !== undefined) {
        const node = expressionNode,  ///
              expressionString = nodeAsString(expressionNode),
              message = `The '${expressionString}' sub-expression cannot be verified because its type is not undefined.`;

        throw new Error(node, message);
      }

      verified = true;
    }
  }

  return verified;
}

function verifyTermNode(termNode, fileContext) {
  let verified = false;

  const type = typeFromTermNode(termNode, fileContext);

  if (type !== undefined) {
    verified = true;
  } else {
    const constructor = verifyTerm(termNode, fileContext);

    if (constructor !== undefined) {
      const constructorType = constructor.getType();

      if (constructorType !== undefined) {
        const node = termNode,  ///
              nodeString = nodeAsString(termNode),
              message = `The '${nodeString}' sub-term cannot be verified because its type is not undefined.`;

        throw new Error(node, message);
      }

      verified = true;
    }
  }

  return verified;
}

