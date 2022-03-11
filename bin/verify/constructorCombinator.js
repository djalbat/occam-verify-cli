"use strict";

const log = require("../log"),
      TermNode = require("../node/term"),
      ExpressionNode = require("../node/expression");

const { nodeAsString } = require("../utilities/node"),
      { verifyTerm, verifyExpression } = require("../verify/termExpression"),
      { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = require("../ruleNames"),
      { typeFromTermNode, typeFromExpressionNode } = require("../utilities/type");

function verifyExpressionAsCombinator(expressionNode, fileContext) {
  const nonTerminalNode = expressionNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        parentNode = nonTerminalNode,  ///
        verified = verifyChildNodes(childNodes, parentNode, fileContext),
        expressionVerified = verified;  ///

  return expressionVerified;
}

function verifyTermAsConstructor(termNode, fileContext) {
  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        parentNode = nonTerminalNode,  ///
        verified = verifyChildNodes(childNodes, parentNode, fileContext),
        termVerified = verified;  ///

  return termVerified;
}

module.exports = {
  verifyExpressionAsCombinator,
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

  let index = 0,
      childNode = childNodes[index];

  while (childNode !== undefined) {
    const node = childNode;  ///

    verified = verifyNode(node, parentNode, fileContext);

    if (!verified) {
      break;
    }

    index++;
    childNode = childNodes[index];
  }

  return verified;
}

function verifyExpressionNode(expressionNode, fileContext) {
  let verified = false;

  const type = typeFromExpressionNode(expressionNode, fileContext);

  if (type !== undefined) {
    verified = true;
  } else {
    const combinator = verifyExpression(expressionNode, fileContext);

    if (combinator !== undefined) {
      const combinatorType = combinator.getType();

      if (combinatorType !== undefined) {
        const expressionString = nodeAsString(expressionNode);

        log.error(`The '${expressionString}' sub-expression cannot be verified because its type is not undefined.`);
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
        const termString = nodeAsString(termNode);

        log.error(`The '${termString}' sub-term cannot be verified because its type is not undefined.`);
      }

      verified = true;
    }
  }

  return verified;
}
