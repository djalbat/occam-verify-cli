"use strict";

const log = require("../log"),
      Constructor = require("../constructor");

const { nodeAsString } = require("../utilities/node"),
      { typeNameFromTypeNode } = require("../utilities/query"),
      { TYPE_RULE_NAME, TERM_RULE_NAME } = require("../ruleNames");

function verifyTermAsConstructor(termNode, typeNode, fileContext) {
  let termVerifiedAsConstructor = false;

  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, fileContext);

  let type = null;

  if (childNodesVerified) {
    if (typeNode === null) {
      termVerifiedAsConstructor = true;
    } else {
      const typeName = typeNameFromTypeNode(typeNode);

      type = fileContext.findTypeByTypeName(typeName);

      if (type !== null) {
        termVerifiedAsConstructor = true;
      } else {
        const termNodeString = nodeAsString(termNode);

        log.error(`The '${termNodeString}' constructor's '${typeName}' type is missing.`);
      }
    }
  }

  if (termVerifiedAsConstructor) {
    const constructor = Constructor.fromTermNodeAndType(termNode, type);

    fileContext.addConstructor(constructor);

    const termNodeString = nodeAsString(termNode);

    log.info(`Verified the '${termNodeString}' constructor.`);
  }

  return termVerifiedAsConstructor;
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
