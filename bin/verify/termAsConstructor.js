"use strict";

const queries = require("../miscellaneous/queries"),
      TermNode = require("../miscellaneous/termNode"),
      ruleNames = require("../miscellaneous/ruleNames"),
      ExpressionNode = require("../miscellaneous/expressionNode"),
      NonTerminalNodeContext = require("../context/nonTerminalNode"),
      verifyTermAgainstConstructors = require("../verify/termAgainstConstructors"),
      verifyExpressionAgainstOperators = require("../verify/expressionAgainstOperators");

const { nameTerminalNodeQuery } = queries,
      { NAME_RULE_NAME, TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames;

function verifyTermAsConstructor(termNode, fileContext) {
	const nonTerminalNode = termNode,  ///
			  verified = verifyNonTerminalNode(nonTerminalNode, fileContext);

	return verified;
}

module.exports = verifyTermAsConstructor;

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
  const verified = true;  ///

  return verified;
}

function verifyNonTerminalNode(nonTerminalNode, fileContext) {
  let verified = false;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case NAME_RULE_NAME: {
      const nameNode = nonTerminalNode; ///

      verified = verifyNameNode(nameNode, fileContext);
      break;
    }

    case TERM_RULE_NAME:
    case EXPRESSION_RULE_NAME: {
      const childNodes = nonTerminalNode.getChildNodes();

      verified = verifyChildNodes(childNodes, fileContext);
      break;
    }

    default: {
      if (!verified) {
        const termNode = TermNode.fromNonTerminalNode(nonTerminalNode),
              constructor = verifyTermAgainstConstructors(termNode, fileContext);

        if (constructor !== undefined) {
          verified = true;
        }
      }

      if (!verified) {
        const expressionNode = ExpressionNode.fromNonTerminalNode(nonTerminalNode),
              operator = verifyExpressionAgainstOperators(expressionNode, fileContext);

        if (operator !== undefined) {
          verified = true;
        }
      }

      if (!verified) {
        const childNodes = nonTerminalNode.getChildNodes();

        verified = verifyChildNodes(childNodes, fileContext);
      }
    }
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
