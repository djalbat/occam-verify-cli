"use strict";

import verifyTerm from "../verify/term";
import Constructor from "../constructor";

import { first } from "../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { TERM_RULE_NAME, ARGUMENT_RULE_NAME } from "../ruleNames";

const typeNodeQuery = nodeQuery("/argument/type"),
      termNodeQuery = nodeQuery("/argument/term");

export default function verifyTermAsConstructor(termNode, typeNode, fileContext) {
  let termVerifiedAsConstructor = false;

  let type = null;

  const nonTerminalNode = termNode,  ///
        termString = fileContext.nodeAsString(termNode);

  const childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, fileContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (childNodesVerified) {
    if (typeNode === null) {
      termVerifiedAsConstructor = true;
    } else {
      const typeName = typeNameFromTypeNode(typeNode);

      type = fileContext.findTypeByTypeName(typeName);

      if (type !== null) {
        termVerifiedAsConstructor = true;
      } else {
        fileContext.error(`The '${termString}' constructor's '${typeName}' type is not present.`, termNode);
      }
    }
  }

  if (termVerifiedAsConstructor) {
    const tokens = fileContext.getTokens(),
          constructor = Constructor.fromTermNodeTypeAndTokens(termNode, type, tokens);

    fileContext.addConstructor(constructor);
  }

  if (termVerifiedAsConstructor) {
    fileContext.info(`Verified the '${termString}' constructor.`, termNode);
  }

  return termVerifiedAsConstructor;
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
    case ARGUMENT_RULE_NAME: {
      const argumentNode = nonTerminalNode, ///
            argumentNodeVerified = verifyArgumentNode(argumentNode, fileContext, verifyAhead);

      nonTerminalNodeVerified = argumentNodeVerified; ///

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode, ///
            types = [],
            context = fileContext,  ///
            termVerified = verifyTerm(termNode, types, context, verifyAhead);

      if (termVerified) {
        const firstType = first(types),
              type = firstType; ///

        if (type !== null) {
          const termString = fileContext.nodeAsString(termNode);

          fileContext.error(`The type of the constructor's compound '${termString}' term node is not null.`, termNode);
        } else {
          nonTerminalNodeVerified = true; ///
        }
      }

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

function verifyArgumentNode(argumentNode, fileContext, verifyAhead) {
  let argumentNodeVerified = false;

  const typeNode = typeNodeQuery(argumentNode),
        termNode = termNodeQuery(argumentNode);

  if (false) {
    ///
  } else if (typeNode !== null) {
    const typeName = typeNameFromTypeNode(typeNode),
          typePresent = fileContext.isTypePresentByTypeName(typeName);

    if (!typePresent) {
      fileContext.error(`The type '${typeName}' is not present.`, argumentNode);
    }

    argumentNodeVerified = typePresent; ///
  } else if (termNode !== null) {
    const node = termNode,  ///
          nodeVerified = verifyNode(node, fileContext, verifyAhead);

    argumentNodeVerified = nodeVerified;  ///
  }

  return argumentNodeVerified;
}
