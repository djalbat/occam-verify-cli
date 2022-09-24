"use strict";

const { ARGUMENT_RULE_NAME } = require("../ruleNames");

function verifyTermAgainstConstructor(termNode, constructor, context) {
  const constructorTermNode = constructor.getTermNode(),
        node = termNode,  ///
        constructorNode = constructorTermNode, ///
        nodeVerified = verifyNode(node, constructorNode, context),
        termVerifiedAgainstConstructor = nodeVerified;  ///

  return termVerifiedAgainstConstructor;
}

module.exports = verifyTermAgainstConstructor;

function verifyNode(node, constructorNode, context) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode(),
        constructorNodeTerminalNode = constructorNode.isTerminalNode();

  if (nodeTerminalNode === constructorNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            constructorTerminalNode = constructorNode,  ///
            terminalNodeVerified = verifyTerminalNode(terminalNode, constructorTerminalNode, context);

      nodeVerified = terminalNodeVerified;  ///
    } else {
      const nonTerminalNode = node, ///
            constructorNonTerminalNode = constructorNode,  ///
            nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context);

      nodeVerified = nonTerminalNodeVerified; ///
    }
  }

  return nodeVerified;
}

function verifyChildNodes(childNodes, constructorChildNodes, context) {
  let childNodesVerified = false;

  const childNodesLength = childNodes.length,
        constructorChildNodesLength = constructorChildNodes.length;

  if (childNodesLength === constructorChildNodesLength) {
    childNodesVerified = childNodes.every((childNode, index) => {
      const constructorChildNode = constructorChildNodes[index],
            node = childNode, ///
            constructorNode = constructorChildNode,  ///
            nodeVerified = verifyNode(node, constructorNode, context);

      if (nodeVerified) {
        return true;
      }
    });
  }

  return childNodesVerified;
}

function verifyTerminalNode(terminalNode, constructorTerminalNode, context) {
  let terminalNodeVerified = false;

  const matches = terminalNode.match(constructorTerminalNode);

  if (matches) {
    terminalNodeVerified = true;
  }

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context) {
  let nonTerminalNodeVerified = false;

  const ruleName = nonTerminalNode.getRuleName(),
        constructorRuleName = constructorNonTerminalNode.getRuleName();

  if (ruleName === constructorRuleName) {
    switch (ruleName) {
      case ARGUMENT_RULE_NAME: {
        const argumentNode = nonTerminalNode, ///
              constructorArgumentNode = constructorNonTerminalNode, ///
              argumentNodeVerified = verifyArgumentNode(argumentNode, constructorArgumentNode, context);

        nonTerminalNodeVerified = argumentNodeVerified; ///

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              constructorChildNodes = constructorNonTerminalNode.getChildNodes(),
              childNodesVerified = verifyChildNodes(childNodes, constructorChildNodes, context);

        nonTerminalNodeVerified = childNodesVerified; ///

        break;
      }
    }
  }

  return nonTerminalNodeVerified;
}

function verifyArgumentNode(argumentNode, constructorArgumentNode, context) {
  let argumentNodeVerified = false;

  debugger

  return argumentNodeVerified;
}
