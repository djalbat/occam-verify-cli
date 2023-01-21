"use strict";

import { first } from "../utilities/array";
import { objectType } from "../type";
import { nodeAsString } from "../utilities/string";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { ARGUMENT_RULE_NAME } from "../ruleNames";
import { nodeQuery, typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyTerm(termNode, types, context) {
  let termVerified = false;

  context.begin(termNode);

  const termString = nodeAsString(termNode);

  context.debug(`Verifying the '${termString}' term...`);

  if (!termVerified) {
    const variables = [],
          termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

    if (termVerifiedAsVariable) {
      const firstVariable = first(variables),
            variable = firstVariable, ///
            type = variable.getType();

      types.push(type);

      termVerified = true;
    }
  }

  if (!termVerified) {
    const termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context);

    if (termVerifiedAgainstConstructors) {
      termVerified = true;
    }
  }

  if (termVerified) {
    context.info(`Verified the '${termString}' term.`);
  }

  termVerified ?
    context.complete(termNode) :
      context.halt(termNode);

  return termVerified;
}

export function verifyTermAsVariable(termNode, variables, context) {
  let termVerifiedAsVariable = false;

  context.begin(termNode);

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variableName = variableNameFromVariableNode(variableNode),
          variablePresent = context.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      const variable = context.findVariableByVariableName(variableName);

      variables.push(variable);

      termVerifiedAsVariable = true;
    }
  }

  termVerifiedAsVariable ?
    context.complete(termNode) :
      context.halt(termNode);

  return termVerifiedAsVariable;
}

export function verifyTermAgainstConstructors(termNode, types, context) {
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
    const type = constructor.getType();

    types.push(type);

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

function verifyNodes(nodes, constructorNodes, context) {
  let nodesVerified = false;

  const nodesLength = nodes.length,
        constructorNodesLength = constructorNodes.length;

  if (nodesLength === constructorNodesLength) {
    nodesVerified = nodes.every((node, index) => {
      const constructorNode = constructorNodes[index],
            nodeVerified = verifyNode(node, constructorNode, context);

      if (nodeVerified) {
        return true;
      }
    });
  }

  return nodesVerified;
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

  const ruleName = nonTerminalNode.getRuleName(), ///
        constructorRuleName = constructorNonTerminalNode.getRuleName(); ///

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
              nodes = childNodes, ///
              constructorNodes = constructorChildNodes, ///
              nodesVerified = verifyNodes(nodes, constructorNodes, context);

        nonTerminalNodeVerified = nodesVerified; ///

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
          termVerified = verifyTerm(termNode, types, context);

    if (termVerified) {
      const firstType = first(types),
            termType = firstType, ///
            typeNode = typeNodeQuery(constructorArgumentNode),
            typeName = typeNameFromTypeNode(typeNode),
            type = (typeName === OBJECT_TYPE_NAME) ?
                     objectType :  ///
                       context.findTypeByTypeName(typeName),
            termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

      if (termTypeEqualToOrSubTypeOfType) {
        argumentNodeVerified = true;
      }
    }
  }

  return argumentNodeVerified;
}
