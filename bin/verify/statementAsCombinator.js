"use strict";

const log = require("../log"),
      Combinator = require("../combinator");

const { nodeAsString } = require("../utilities/node"),
      { typeNameFromTypeNode } = require("../utilities/query"),
      { TERM_RULE_NAME, TYPE_RULE_NAME } = require("../ruleNames");

function verifyStatementAsCombinator(statementNode, fileContext) {
  let statementVerifiedAsCombinator = false;

  const nonTerminalNode = statementNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, fileContext);

  if (childNodesVerified) {
    statementVerifiedAsCombinator = true;
  }

  if (statementVerifiedAsCombinator) {
    const combinator = Combinator.fromStatementNode(statementNode);

    fileContext.addCombinator(combinator);

    const statementNodeString = nodeAsString(statementNode);

    log.info(`Verified the '${statementNodeString}' combinator.`);
  }

  return statementVerifiedAsCombinator;
}

module.exports = verifyStatementAsCombinator;

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
    case TYPE_RULE_NAME: {
      const typeNode = nonTerminalNode, ///
            typeNodeVerified = verifyTypeNode(typeNode, fileContext);

      nonTerminalNodeVerified = typeNodeVerified; ///

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

function verifyTypeNode(typeNode, fileContext) {
  let typeNodeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    log.error(`The type '${typeName}' is missing.`);
  } else {
    typeNodeVerified = true;
  }

  return typeNodeVerified;
}

function verifyTermNode(termNode, fileContext) {
  let termNodeVerified = false;

  debugger

  return termNodeVerified;
}
