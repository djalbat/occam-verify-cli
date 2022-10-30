"use strict";

import Combinator from "../combinator";

import { nodeAsString } from "../utilities/string";
import { typeNameFromTypeNode } from "../utilities/query";
import { TERM_RULE_NAME, TYPE_RULE_NAME } from "../ruleNames";

export default function verifyStatementAsCombinator(statementNode, context = this) {
  let statementVerifiedAsCombinator = false;

  context.begin(statementNode);

  const nonTerminalNode = statementNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, context);

  if (childNodesVerified) {
    const combinator = Combinator.fromStatementNode(statementNode),
          statementString = nodeAsString(statementNode);

    context.info(`Verified the '${statementString}' combinator.`);

    context.addCombinator(combinator);

    statementVerifiedAsCombinator = true;
  }

  statementVerifiedAsCombinator ?
    context.complete(statementNode) :
      context.halt(statementNode);

  return statementVerifiedAsCombinator;
}

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

function verifyTypeNode(typeNode, context) {
  let typeNodeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    context.error(`The type '${typeName}' is missing.`);
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
