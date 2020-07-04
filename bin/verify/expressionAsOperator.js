"use strict";

const queries = require("../miscellaneous/queries"),
      ruleNames = require("../miscellaneous/ruleNames"),
      NonTerminalNodeContext = require("../context/nonTerminalNode"),
      verifyTermAgainstConstructors = require("../verify/termAgainstConstructors"),
      verifyExpressionAgainstOperators = require("../verify/expressionAgainstOperators");

const { nameTerminalNodeQuery } = queries,
      { NAME_RULE_NAME, TERM_RULE_NAME, EXPRESSION_RULE_NAME } = ruleNames;

function verifyExpressionAsOperator(expressionNode, fileContext) {
  const nonTerminalNode = expressionNode,  ///
        verified = verifyNonTerminalAsExpression(nonTerminalNode, fileContext);

	return verified;
}

module.exports = verifyExpressionAsOperator;

function verifyAsExpression(node, fileContext) {
  let verified = false;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node;  ///

    verified = verifyTerminalAsExpression(terminalNode, fileContext);
  } else {
    const nonTerminalNode = node; ///

    verified = verifyNonTerminalAsExpression(nonTerminalNode, fileContext);
  }

  return verified;
}

function verifyTerminalAsExpression(terminalNode, fileContext) {
  const verified = true;  ///

  return verified;
}

function verifyNonTerminalAsExpression(nonTerminalNode, fileContext) {
  let verified = false;

  const ruleName = nonTerminalNode.getRuleName();

  if (ruleName === NAME_RULE_NAME) {
    const nameNode = nonTerminalNode; ///

    verified = verifyNameAsExpression(nameNode, fileContext);
  } else {
    switch (ruleName) {
      case EXPRESSION_RULE_NAME: {
        const expressionNode = nonTerminalNode; ///

        verified = verifyExpressionAgainstOperators(expressionNode, fileContext);
        break;
      }

      case TERM_RULE_NAME: {
        const termNode = nonTerminalNode; ///

        verified = verifyTermAgainstConstructors(termNode, fileContext);
        break;
      }
    }

    if (!verified) {
      const nonTerminalNodeContext = NonTerminalNodeContext.fromFileContextAndNonTerminalNode(fileContext, nonTerminalNode);

      let nextChildNode = nonTerminalNodeContext.getNextChildNode();

      while (nextChildNode !== undefined) {
        const node = nextChildNode;  ///

        verified = verifyAsExpression(node, fileContext);

        if (!verified) {
          break;
        }

        nextChildNode = nonTerminalNodeContext.getNextChildNode();
      }
    }
  }

  return verified;
}

function verifyNameAsExpression(nameNode, fileContext) {
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
