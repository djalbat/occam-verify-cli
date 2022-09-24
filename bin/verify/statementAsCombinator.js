"use strict";

const { loggingUtilities } = require("necessary");

const Combinator = require("../combinator");

const { nodeAsString } = require("../utilities/node"),
      { typeNameFromTypeNode } = require("../utilities/query"),
      { TERM_RULE_NAME, TYPE_RULE_NAME } = require("../ruleNames");

const { log } = loggingUtilities;

function verifyStatementAsCombinator(statementNode, context) {
  let statementVerifiedAsCombinator = false;

  const statementString = nodeAsString(statementNode);

  log.debug(`Verifiying the ${statementString} statement as a combinator...`);

  const nonTerminalNode = statementNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, context);

  if (childNodesVerified) {
    statementVerifiedAsCombinator = true;
  }

  if (statementVerifiedAsCombinator) {
    const combinator = Combinator.fromStatementNode(statementNode);

    context.addCombinator(combinator);

    const statementString = nodeAsString(statementNode);

    log.info(`Verified the '${statementString}' combinator.`);
  }

  return statementVerifiedAsCombinator;
}

module.exports = verifyStatementAsCombinator;

function verifyNode(node, context) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          terminalNodeVerified = verifyTerminalNode(terminalNode, context);

    nodeVerified = terminalNodeVerified;  ///
  } else {
    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, context);

    nodeVerified = nonTerminalNodeVerified; ///
  }

  return nodeVerified;
}

function verifyChildNodes(childNodes, context) {
  const childNodesVerified = childNodes.every((childNode) => {
    const node = childNode, ///
          nodeVerified = verifyNode(node, context);

    if (nodeVerified) {
      return true;
    }
  });

  return childNodesVerified;
}

function verifyTerminalNode(terminalNode, context) {
  const terminalNodeVerified = true;

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, context) {
  let nonTerminalNodeVerified;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case TYPE_RULE_NAME: {
      const typeNode = nonTerminalNode, ///
            typeNodeVerified = verifyTypeNode(typeNode, context);

      nonTerminalNodeVerified = typeNodeVerified; ///

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode, ///
            termNodeVerified = verifyTermNode(termNode, context);

      nonTerminalNodeVerified = termNodeVerified; ///

      break;
    }

    default: {
      const childNodes = nonTerminalNode.getChildNodes(),
            childNodesVerified = verifyChildNodes(childNodes, context);

      nonTerminalNodeVerified = childNodesVerified; ///

      break;
    }
  }

  return nonTerminalNodeVerified;
}

function verifyTypeNode(typeNode, context) {
  let typeNodeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    log.error(`The type '${typeName}' is missing.`);
  } else {
    typeNodeVerified = true;
  }

  return typeNodeVerified;
}

function verifyTermNode(termNode, context) {
  let termNodeVerified = false;

  debugger

  return termNodeVerified;
}
