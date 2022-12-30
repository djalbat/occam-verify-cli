"use strict";

import { first } from "../utilities/array";
import { nodeAsString } from "../utilities/string";
import { ARGUMENT_RULE_NAME } from "../ruleNames";
import { nodeQuery, typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyTerm(termNode, types, values, context) {
  let termVerified = false;

  context.begin(termNode);

  const termVerifiedAsVariable = verifyTermAsVariable(termNode, types, values, context);

  if (termVerifiedAsVariable) {
    termVerified = true;
  } else {
    const termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, values, context);

    if (termVerifiedAgainstConstructors) {
      termVerified = true;
    }
  }

  termVerified ?
    context.complete(termNode) :
      context.halt(termNode);

  return termVerified;
}

export function verifyTermAsVariable(termNode, types, values, context) {
  let termVerifiedAsVariable = false;

  context.begin(termNode);

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode),
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (!variablePresent) {
      context.error(`The ${variableName} variable is not present.`)
    } else {
      const variable = context.findVariableByVariableName(variableName),
        type = variable.getType(),
        value = variable.getValue();

      types.push(type);

      values.push(value);

      termVerifiedAsVariable = true;
    }
  }

  termVerifiedAsVariable ?
    context.complete(termNode) :
      context.halt(termNode);

  return termVerifiedAsVariable;
}

export function verifyTermAgainstConstructors(termNode, types, values, context) {
  let termVerifiedAgainstConstructors = false;

  context.begin(termNode);

  const constructors = context.getConstructors(),
        constructor = constructors.find((constructor) => {
          const termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, constructor, context);

          if (termVerifiedAgainstConstructor) {
            return true;
          }
        }) || null;

  if (constructor !== null) {
    const type = constructor.getType(),
          value = termNode; ///

    types.push(type);

    values.push(value);

    termVerifiedAgainstConstructors = true;
  }

  termVerifiedAgainstConstructors ?
    context.complete(termNode) :
      context.halt(termNode);

  return termVerifiedAgainstConstructors;
}

function verifyTermAgainstConstructor(termNode, constructor, context) {
  const constructorTermNode = constructor.getTermNode(),
        node = termNode,  ///
        constructorNode = constructorTermNode, ///
        nodeVerified = verifyNode(node, constructorNode, context),
        termVerifiedAgainstConstructor = nodeVerified;  ///

  return termVerifiedAgainstConstructor;
}

function verifyNode(node, constructorNode, context) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode(),
        constructorNodeTerminalNode = constructorNode.isTerminalNode();

  if (nodeTerminalNode === constructorNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            constructorTerminalNode = constructorNode,  ///
            terminalNodeVerified = verifyTerminalNode(terminalNode, constructorTerminalNode, context);

      nodeVerified = terminalNodeVerified;  ///
    } else {
      const nonTerminalNode = node, ///
            constructorNonTerminalNode = constructorNode,  ///
            nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context);

      nodeVerified = nonTerminalNodeVerified; ///
    }
  }

  return nodeVerified;
}

function verifyChildNodes(childNodes, constructorChildNodes, context) {
  let childNodesVerified = false;

  const childNodesLength = childNodes.length,
        constructorChildNodesLength = constructorChildNodes.length;

  if (childNodesLength === constructorChildNodesLength) {
    childNodesVerified = childNodes.every((childNode, index) => {
      const constructorChildNode = constructorChildNodes[index],
            node = childNode, ///
            constructorNode = constructorChildNode,  ///
            nodeVerified = verifyNode(node, constructorNode, context);

      if (nodeVerified) {
        return true;
      }
    });
  }

  return childNodesVerified;
}

function verifyTerminalNode(terminalNode, constructorTerminalNode, context) {
  let terminalNodeVerified = false;

  const matches = terminalNode.match(constructorTerminalNode);

  if (matches) {
    terminalNodeVerified = true;
  }

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context) {
  let nonTerminalNodeVerified = false;

  const ruleName = nonTerminalNode.getRuleName(),
        constructorRuleName = constructorNonTerminalNode.getRuleName();

  if (ruleName === constructorRuleName) {
    switch (ruleName) {
      case ARGUMENT_RULE_NAME: {
        const argumentNode = nonTerminalNode, ///
              constructorArgumentNode = constructorNonTerminalNode, ///
              argumentNodeVerified = verifyArgumentNode(argumentNode, constructorArgumentNode, context);

        nonTerminalNodeVerified = argumentNodeVerified; ///

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              constructorChildNodes = constructorNonTerminalNode.getChildNodes(),
              childNodesVerified = verifyChildNodes(childNodes, constructorChildNodes, context);

        nonTerminalNodeVerified = childNodesVerified; ///

        break;
      }
    }
  }

  return nonTerminalNodeVerified;
}

function verifyArgumentNode(argumentNode, constructorArgumentNode, context) {
  let argumentNodeVerified = false;

  const termNode = termNodeQuery(argumentNode);

  if (termNode === null) {
    const argumentString = nodeAsString(argumentNode);

    context.error(`The ${argumentString} argument should be a term, not a type`);
  } else {
    const types = [],
          values = [],
          termVerified = verifyTerm(termNode, types, values, context);

    if (termVerified) {
      const firstType = first(types),
            termType = firstType, ///
            typeNode = typeNodeQuery(constructorArgumentNode),
            typeName = typeNameFromTypeNode(typeNode),
            type = context.findTypeByTypeName(typeName),
            termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

      if (termTypeEqualToOrSubTypeOfType) {
        argumentNodeVerified = true;
      }
    }
  }

  return argumentNodeVerified;
}
