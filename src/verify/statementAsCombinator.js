"use strict";

import Combinator from "../combinator";
import verifyTerm from "../verify/term";
import verifyStatement from "../verify/statement";

import { typeNameFromTypeNode } from "../utilities/query";
import { TYPE_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";

export default function verifyStatementAsCombinator(statementNode, fileContext) {
  let statementVerifiedAsCombinator = false;

  fileContext.begin(statementNode);

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.debug(`Verifying the '${statementString}' combinator....`);

  const nonTerminalNode = statementNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, fileContext);

  if (childNodesVerified) {
    const combinator = Combinator.fromStatementNode(statementNode);

    fileContext.addCombinator(combinator);

    statementVerifiedAsCombinator = true;
  }

  if (statementVerifiedAsCombinator) {
    fileContext.info(`Verified the '${statementString}' combinator.`);
  }

  statementVerifiedAsCombinator ?
    fileContext.complete(statementNode) :
      fileContext.halt(statementNode);

  return statementVerifiedAsCombinator;
}

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

    case STATEMENT_RULE_NAME: {
      const statmentNode = nonTerminalNode, ///
            statmentNodeVerified = verifyStatementNode(statmentNode, fileContext);

      nonTerminalNodeVerified = statmentNodeVerified; ///

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
    fileContext.error(`The type '${typeName}' is missing.`);
  } else {
    typeNodeVerified = true;
  }

  return typeNodeVerified;
}

function verifyTermNode(termNode, fileContext) {
  const types = [],
        context = fileContext,  ///
        termVerified = verifyTerm(termNode, types, context),
        termNodeVerified = termVerified;  ///

  return termNodeVerified;
}

function verifyStatementNode(statementNode, fileContext) {
  const context = fileContext,  ///
        derived = false,
        assertions = [],
        statementVerified = verifyStatement(statementNode, assertions, derived, context),
        statementNodeVerified = statementVerified;  ///

  return statementNodeVerified;
}

