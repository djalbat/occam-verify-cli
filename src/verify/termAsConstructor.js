"use strict";

import verifyTerm from "../verify/term";
import Constructor from "../constructor";

import { first } from "../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { TERM_RULE_NAME, ARGUMENT_RULE_NAME } from "../ruleNames";

const typeNodeQuery = nodeQuery("/argument/type");

export default function verifyTermAsConstructor(termNode, typeNode, fileContext) {
  let termVerifiedAsConstructor = false;

  let type = null;

  const nonTerminalNode = termNode,  ///
        termString = fileContext.nodeAsString(termNode);

  const childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = verifyChildNodes(childNodes, fileContext);

  if (childNodesVerified) {
    if (typeNode === null) {
      termVerifiedAsConstructor = true;
    } else {
      const typeName = typeNameFromTypeNode(typeNode);

      type = fileContext.findTypeByTypeName(typeName);

      if (type !== null) {
        termVerifiedAsConstructor = true;
      } else {
        fileContext.error(termNode, `The '${termString}' constructor's '${typeName}' type is missing.`);
      }
    }
  }

  if (termVerifiedAsConstructor) {
    const constructor = Constructor.fromTermNodeAndType(termNode, type);

    fileContext.addConstructor(constructor);
  }

  if (termVerifiedAsConstructor) {
    fileContext.info(termNode, `Verified the '${termString}' constructor.`);
  }

  return termVerifiedAsConstructor;
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
    case ARGUMENT_RULE_NAME: {
      const argumentNode = nonTerminalNode, ///
            argumentNodeVerified = verifyArgumentNode(argumentNode, fileContext);

      nonTerminalNodeVerified = argumentNodeVerified; ///

      break;
    }

    case TERM_RULE_NAME: {
      const termNode = nonTerminalNode, ///
            types = [],
            context = fileContext,  ///
            termVerified = verifyTerm(termNode, types, context);

      if (termVerified) {
        const firstType = first(types),
              type = firstType; ///

        if (type !== null) {
          const termString = fileContext.nodeAsString(termNode);

          fileContext.error(termNode, `The type of the constructor's compound '${termString}' term node is not null.`);
        } else {
          nonTerminalNodeVerified = true; ///
        }
      }

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

function verifyArgumentNode(argumentNode, fileContext) {
  let typeNodeVerified = false;

  const typeNode = typeNodeQuery(argumentNode);

  if (typeNode === null) {
    const argumentString = fileContext.nodeAsString(argumentNode);

    fileContext.error(argumentNode, `The ${argumentString} argument should be a type.`);
  } else {
    const typeName = typeNameFromTypeNode(typeNode),
          typePresent = fileContext.isTypePresentByTypeName(typeName);

    if (!typePresent) {
      fileContext.error(argumentNode, `The type '${typeName}' is missing.`);
    } else {
      typeNodeVerified = true;
    }
  }

  return typeNodeVerified;
}
