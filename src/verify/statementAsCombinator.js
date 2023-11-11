"use strict";

import Combinator from "../combinator";
import verifyTerm from "../verify/term";
import verifyStatement from "../verify/statement";

import { typeNameFromTypeNode } from "../utilities/query";
import { TYPE_RULE_NAME, TERM_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";

export default function verifyStatementAsCombinator(statementNode, fileContext) {
  let statementVerifiedAsCombinator = false;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.debug(`Verifying the '${statementString}' combinator....`, statementNode);

  const nonTerminalNode = statementNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, fileContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (childNodesVerified) {
    const tokens = fileContext.getTokens(),
          combinator = Combinator.fromStatementNodeAndTokens(statementNode, tokens);

    fileContext.addCombinator(combinator);

    statementVerifiedAsCombinator = true;
  }

  if (statementVerifiedAsCombinator) {
    fileContext.info(`Verified the '${statementString}' combinator.`, statementNode);
  }

  return statementVerifiedAsCombinator;
}

function verifyNode(node, fileContext, verifyAhead) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    const terminalNode = node,  ///
          terminalNodeVerified = verifyTerminalNode(terminalNode, fileContext, verifyAhead);

    nodeVerified = terminalNodeVerified;  ///
  } else {
    const nonTerminalNode = node, ///
          nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead);

    nodeVerified = nonTerminalNodeVerified; ///
  }

  return nodeVerified;
}

function verifyChildNodes(childNodes, fileContext, verifyAhead) {
  const childNodesVerified = childNodes.every((childNode) => {
    const node = childNode, ///
          nodeVerified = verifyNode(node, fileContext, verifyAhead);

    if (nodeVerified) {
      return true;
    }
  });

  return childNodesVerified;
}

function verifyTerminalNode(terminalNode, fileContext, verifyAhead) {
  const terminalNodeVerified = true;

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, fileContext, verifyAhead) {
  let nonTerminalNodeVerified;

  const ruleName = nonTerminalNode.getRuleName();

  switch (ruleName) {
    case TYPE_RULE_NAME: {
      const typeNode = nonTerminalNode, ///
            typeNodeVerified = verifyTypeNode(typeNode, fileContext, verifyAhead);

      nonTerminalNodeVerified = typeNodeVerified; ///

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode, ///
            termNodeVerified = verifyTermNode(termNode, fileContext, verifyAhead);

      nonTerminalNodeVerified = termNodeVerified; ///

      break;
    }

    case STATEMENT_RULE_NAME: {
      const statmentNode = nonTerminalNode, ///
            statmentNodeVerified = verifyStatementNode(statmentNode, fileContext, verifyAhead);

      nonTerminalNodeVerified = statmentNodeVerified; ///

      break;
    }

    default: {
      const childNodes = nonTerminalNode.getChildNodes(),
            childNodesVerified = verifyChildNodes(childNodes, fileContext, verifyAhead);

      nonTerminalNodeVerified = childNodesVerified; ///

      break;
    }
  }

  return nonTerminalNodeVerified;
}

function verifyTypeNode(typeNode, fileContext, verifyAhead) {
  let typeNodeVerified = false;

  const typeName = typeNameFromTypeNode(typeNode),
        typePresent = fileContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    fileContext.error(`The type '${typeName}' not present.`, typeNode);
  } else {
    typeNodeVerified = true;
  }

  return typeNodeVerified;
}

function verifyTermNode(termNode, fileContext, verifyAhead) {
  const types = [],
        context = fileContext,  ///
        termVerified = verifyTerm(termNode, types, context, verifyAhead),
        termNodeVerified = termVerified;  ///

  return termNodeVerified;
}

function verifyStatementNode(statementNode, fileContext, verifyAhead) {
  const context = fileContext,  ///
        derived = false,
        assignments = [],
        statementVerified = verifyStatement(statementNode, assignments, derived, context, verifyAhead),
        statementNodeVerified = statementVerified;  ///

  return statementNodeVerified;
}

