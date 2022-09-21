"use strict";

const { ARGUMENT_RULE_NAME } = require("../ruleNames");

function verifyTermAgainstConstructor(termNode, constructor, fileContext) {
  let termVerifiedAgainstConstructor = false;

  const constructorTermNode = constructor.getTermNode(),
        node = termNode,  ///
        constructorNode = constructorTermNode, ///
        nodeVerified = verifyNode(node, constructorNode, fileContext);

  if (nodeVerified) {
    termVerifiedAgainstConstructor = true;
  }

  return termVerifiedAgainstConstructor;
}

module.exports = verifyTermAgainstConstructor;

function verifyNode(node, constructorNode, fileContext) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode(),
        constructorNodeTerminalNode = constructorNode.isTerminalNode();

  if (nodeTerminalNode === constructorNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            constructorTerminalNode = constructorNode,  ///
            terminalNodeVerified = verifyTerminalNode(terminalNode, constructorTerminalNode, fileContext);

      nodeVerified = terminalNodeVerified;  ///
    } else {
      const nonTerminalNode = node, ///
            constructorNonTerminalNode = constructorNode,  ///
            nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, fileContext);

      nodeVerified = nonTerminalNodeVerified; ///
    }
  }

  return nodeVerified;
}

function verifyChildNodes(childNodes, constructorChildNodes, fileContext) {
  let childNodesVerified = false;

  const childNodesLength = childNodes.length,
        constructorChildNodesLength = constructorChildNodes.length;

  if (childNodesLength === constructorChildNodesLength) {
    childNodesVerified = childNodes.every((childNode, index) => {
      const construcotorChildNode = constructorChildNodes[index],
            node = childNode, ///
            constructorNode = construcotorChildNode,  ///
            nodeVerified = verifyNode(node, constructorNode, fileContext);

      if (nodeVerified) {
        return true;
      }
    });
  }

  return childNodesVerified;
}

function verifyTerminalNode(terminalNode, constructorTerminalNode, fileContext) {
  let terminalNodeVerified = true;

  const significantToken = terminalNode.getSignificantToken(),
        constructorSignificantToken = constructorTerminalNode.getSignificantToken(),
        matches = significantToken.match(constructorSignificantToken);

  if (matches) {
    terminalNodeVerified = true;
  }

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, fileContext) {
  let nonTerminalNodeVerified = false;

  const ruleName = nonTerminalNode.getRuleName(),
        constructorRuleName = constructorNonTerminalNode.getRuleName();

  if (ruleName === constructorRuleName) {
    switch (ruleName) {
      case ARGUMENT_RULE_NAME: {
        const argumentNode = nonTerminalNode, ///
              constructorArgumentNode = constructorNonTerminalNode, ///
              argumentNodeVerified = verifyArgumentNode(argumentNode, constructorArgumentNode, fileContext);

        nonTerminalNodeVerified = argumentNodeVerified; ///

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              childNodesVerified = verifyChildNodes(childNodes, fileContext);

        nonTerminalNodeVerified = childNodesVerified; ///

        break;
      }
    }

  }

  return nonTerminalNodeVerified;
}

function verifyArgumentNode(argumentNode, constructorArgumentNode, fileContext) {
  let argumentNodeVerified = false;

  debugger

  return argumentNodeVerified;
}
