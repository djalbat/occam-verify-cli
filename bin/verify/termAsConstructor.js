"use strict";

const log = require("../log");

const { nodeAsString } = require("../utilities/node"),
      { verifyTerm, verifyExpression } = require("../verify/termExpression"),
      { TERM_RULE_NAME, EXPRESSION_RULE_NAME } = require("../ruleNames"),
      { typeFromTermNode, typeFromExpressionNode } = require("../utilities/type");

function verifyTermAsConstructor(termNode, fileContext) {
  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, fileContext),
        termVerified = childNodesVerified;  ///

  return termVerified;
}

module.exports = verifyTermAsConstructor;

function verifyNode(node, fileContext) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          terminalNodeVerified = verifyTerminalNode(terminalNode, fileContext);

    nodeVerified = terminalNodeVerified;  ///
  } else {
    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, fileContext);

    nodeVerified = nonTerminalNodeVerified; ///
  }

  return nodeVerified;
}

function verifyChildNodes(childNodes, fileContext) {
  const childNodesVerified = childNodes.every((childNode) => {
    const node = childNode, ///
          nodeVerified = verifyNode(node, fileContext);

    if (nodeVerified) {
      return true;
    }
  });

  return childNodesVerified;
}

function verifyTerminalNode(terminalNode, fileContext) {
  const terminalNodeVerified = true;

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, fileContext) {
  let nonTerminalNodeVerified;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case EXPRESSION_RULE_NAME: {
      const expressionNode = nonTerminalNode, ///
            expressionNodeVerified = verifyExpressionNode(expressionNode, fileContext);

      nonTerminalNodeVerified = expressionNodeVerified; ///

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode, ///
            termNodeVerified = verifyTermNode(termNode, fileContext);

      nonTerminalNodeVerified = termNodeVerified; ///

      break;
    }

    default: {
      const childNodes = nonTerminalNode.getChildNodes(),
            childNodesVerified = verifyChildNodes(childNodes, fileContext);

      nonTerminalNodeVerified = childNodesVerified; ///

      break;
    }
  }

  return nonTerminalNodeVerified;
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
