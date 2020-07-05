"use strict";

const queries = require("../miscellaneous/queries"),
      TermNode = require("../miscellaneous/termNode"),
      ruleNames = require("../miscellaneous/ruleNames"),
      ExpressionNode = require("../miscellaneous/expressionNode"),
      verifyTermOrExpression = require("../verify/termOrExpression"),
      NonTerminalNodeContext = require("../context/nonTerminalNode");

const { verifyTerm, verifyExpression } = verifyTermOrExpression,
      { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames,
      { termNameNodeQuery, nameTerminalNodeQuery } = queries;

function verifyExpressionAsOperator(expressionNode, fileContext) {
  const nonTerminalNode = expressionNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        verified = verifyChildNodes(childNodes, fileContext);

  return verified;
}

function verifyTermAsConstructor(termNode, fileContext) {
  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        verified = verifyChildNodes(childNodes, fileContext);

  return verified;
}

module.exports = {
  verifyExpressionAsOperator,
  verifyTermAsConstructor
};

function verifyNode(node, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    verified = verifyTerminalNode(terminalNode, fileContext);
  } else {
    const nonTerminalNode = node; ///

    verified = verifyNonTerminalNode(nonTerminalNode, fileContext);
  }

  return verified;
}

function verifyTerminalNode(terminalNode, fileContext) {
  const verified = true;

  ///

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, fileContext) {
  let verified = false;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode; ///

      verified = verifyTermNode(termNode, fileContext);

      break;
    }

    case EXPRESSION_RULE_NAME: {
      const expressionNode = nonTerminalNode; ///

      verified = verifyExpressionNode(expressionNode, fileContext);

      break;
    }

    default: {
      if (!verified) {
        const termNode = TermNode.fromNonTerminalNode(nonTerminalNode);

        verified = verifyTermNode(termNode, fileContext);
      }

      if (!verified) {
        const expressionNode = ExpressionNode.fromNonTerminalNode(nonTerminalNode);

        verified = verifyExpressionNode(expressionNode, fileContext);
      }

      if (!verified) {
        const childNodes = nonTerminalNode.getChildNodes();

        verified = verifyChildNodes(childNodes, fileContext);
      }

      break;
    }
  }

  return verified;
}

function verifyExpressionNode(expressionNode, fileContext) {
  let verified = false;

  const operator = verifyExpression(expressionNode, fileContext);

  if (operator !== undefined) {
    const type = operator.getType();

    if (type === undefined) {
      verified = true;
    }
  }

  return verified;
}

function verifyTermNode(termNode, fileContext) {
  let verified = false;

  const nameNode = termNameNodeQuery(termNode);

  if (nameNode !== undefined) {
    verified = verifyNameNode(nameNode, fileContext);
  } else {
    const constructor = verifyTerm(termNode, fileContext);

    if (constructor !== undefined) {
      const type = constructor.getType();

      if (type === undefined) {
        verified = true;
      }
    }
  }

  return verified;
}

function verifyNameNode(nameNode, fileContext) {
  let verified = false;

  const nameTerminalNode = nameTerminalNodeQuery(nameNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent, ///
        type = fileContext.findTypeByName(name);

  if (type !== undefined) {
    verified = true;
  }

  return verified;
}

function verifyChildNodes(childNodes, fileContext) {
  let verified = false;

  const nonTerminalNodeContext = NonTerminalNodeContext.fromChildNodesAndFileContext(childNodes, fileContext);

  let nextChildNode = nonTerminalNodeContext.getNextChildNode();

  while (nextChildNode !== undefined) {
    const node = nextChildNode;  ///

    verified = verifyNode(node, fileContext);

    if (!verified) {
      break;
    }

    nextChildNode = nonTerminalNodeContext.getNextChildNode();
  }

  return verified;
}
