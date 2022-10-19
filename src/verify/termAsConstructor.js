"use strict";

import verifyTerm from "../verify/term";
import Constructor from "../constructor";

import { first } from "../utilities/array";
import { nodeAsString } from "../utilities/string";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { TERM_RULE_NAME, ARGUMENT_RULE_NAME } from "../ruleNames";

const typeNodeQuery = nodeQuery("/argument/type");

export default function verifyTermAsConstructor(termNode, typeNode, context) {
  let termVerifiedAsConstructor = false;

  const termString = nodeAsString(termNode);

  context.debug(`Verifying the '${termString}' term as a constructor...`);

  const nonTerminalNode = termNode,  ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, context);

  let type = null;

  if (childNodesVerified) {
    if (typeNode === null) {
      termVerifiedAsConstructor = true;
    } else {
      const typeName = typeNameFromTypeNode(typeNode);

      type = context.findTypeByTypeName(typeName);

      if (type !== null) {
        termVerifiedAsConstructor = true;
      } else {
        const termString = nodeAsString(termNode);

        context.error(`The '${termString}' constructor's '${typeName}' type is missing.`);
      }
    }
  }

  if (termVerifiedAsConstructor) {
    const constructor = Constructor.fromTermNodeAndType(termNode, type);

    context.addConstructor(constructor);

    const termString = nodeAsString(termNode);

    context.info(`Verified the '${termString}' constructor.`);
  }

  return termVerifiedAsConstructor;
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
    case ARGUMENT_RULE_NAME: {
      const argumentNode = nonTerminalNode, ///
            argumentNodeVerified = verifyArgumentNode(argumentNode, context);

      nonTerminalNodeVerified = argumentNodeVerified; ///

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode, ///
            types = [],
            values = [],
            termVerified = verifyTerm(termNode, types, values, context);

      if (termVerified) {
        const firstType = first(types),
              type = firstType; ///

        if (type !== null) {
          const termString = nodeAsString(termNode);

          context.error(`The type of the constructor's compound '${termString}' term node is not null.`);
        } else {
          nonTerminalNodeVerified = true; ///
        }
      }

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

function verifyArgumentNode(argumentNode, context) {
  let typeNodeVerified = false;

  const typeNode = typeNodeQuery(argumentNode);

  if (typeNode === null) {
    const argumentString = nodeAsString(argumentNode);

    context.error(`The ${argumentString} argument should be a type.`);
  } else {
    const typeName = typeNameFromTypeNode(typeNode),
          typePresent = context.isTypePresentByTypeName(typeName);

    if (!typePresent) {
      context.error(`The type '${typeName}' is missing.`);
    } else {
      typeNodeVerified = true;
    }
  }

  return typeNodeVerified;
}
