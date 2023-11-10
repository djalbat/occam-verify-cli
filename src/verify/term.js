"use strict";

import Verifier from "../verifier";

import { first } from "../utilities/array";
import { objectType } from "../type";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { ARGUMENT_RULE_NAME } from "../ruleNames";
import { nodeQuery, typeNameFromTypeNode, variableNameFromVariableNode } from "../utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      variableNodeQuery = nodeQuery("/term/variable!");

class TermVerifier extends Verifier {
  verifyTerminalNode(terminalNode, constructorTerminalNode, context) {
    let terminalNodeVerified = false;

    const matches = terminalNode.match(constructorTerminalNode);

    if (matches) {
      terminalNodeVerified = true;
    }

    return terminalNodeVerified;
  }

  verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context) {
    let nonTerminalNodeVerified = false;

    const ruleName = nonTerminalNode.getRuleName(), ///
          constructorRuleName = constructorNonTerminalNode.getRuleName(); ///

    if (ruleName === constructorRuleName) {
      switch (ruleName) {
        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                constructorArgumentNode = constructorNonTerminalNode, ///
                argumentNodeVerified = this.verifyArgumentNode(argumentNode, constructorArgumentNode, context);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        default: {
          const childNodes = nonTerminalNode.getChildNodes(),
                constructorChildNodes = constructorNonTerminalNode.getChildNodes(),
                nodes = childNodes, ///
                constructorNodes = constructorChildNodes, ///
                nodesVerified = this.verifyNodes(nodes, constructorNodes, context);

          nonTerminalNodeVerified = nodesVerified; ///

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyArgumentNode(argumentNode, constructorArgumentNode, context) {
    let argumentNodeVerified = false;

    const typeNode = typeNodeQuery(argumentNode);

    if (typeNode !== null) {
      const argumentString = context.nodeAsString(argumentNode);

      context.error(`The '${argumentString}' argument should be a term, not a type`, argumentNode);
    } else {
      const termNode = termNodeQuery(argumentNode),
            constructorTermNode = termNodeQuery(constructorArgumentNode),
            constructorTypeNode = typeNodeQuery(constructorArgumentNode);

      if (false) {
        ///
      } else if (constructorTermNode !== null) {
        const node = termNode,  ///
              constructorNode = constructorTermNode,  ///
              nodeVerified = this.verifyNode(node, constructorNode, context);

        argumentNodeVerified = nodeVerified;  ///
      } else if (constructorTypeNode !== null) {
        const types = [],
              termVerified = verifyTerm(termNode, types, context);

        if (termVerified) {
          const constructorTypeName = typeNameFromTypeNode(constructorTypeNode),
                firstType = first(types),
                termType = firstType, ///
                termTypeName = termType.getName(),
                constructorType = (constructorTypeName === OBJECT_TYPE_NAME) ?
                                    objectType :
                                      context.findTypeByTypeName(constructorTypeName),
                termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);

          context.trace(`The type of the term is '${termTypeName}' and the type of the constructor is '${constructorTypeName}'.`, argumentNode);

          if (termTypeEqualToOrSubTypeOfType) {
            argumentNodeVerified = true;
          }
        }
      }
    }

    return argumentNodeVerified;
  }
}

export const termVerifier = new TermVerifier();

export default function verifyTerm(termNode, types, context) {
  let termVerified = false;

  const termString = context.nodeAsString(termNode);

  context.debug(`Verifying the '${termString}' term...`, termNode);

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
    context.debug(`Verified the '${termString}' term.`, termNode);
  }

  return termVerified;
}

export function verifyTermAgainstConstructors(termNode, types, context) {
  let termVerifiedAgainstConstructors = false;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term against constructors...`, termNode);

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

  return termVerifiedAgainstConstructors;
}

export function verifyTermAgainstConstructor(termNode, constructor, context) {
  const termString = context.nodeAsString(termNode),
        constructorString = constructor.getString();

  context.trace(`Verifying the '${termString}' term against the '${constructorString}' constructor.`, termNode);

  const constructorTermNode = constructor.getTermNode(),
        nonTerminalNNdeA = termNode,  ///
        nonTerminalNodeB = constructorTermNode,  ///
        nodeVerified = termVerifier.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context),
        termVerifiedAgainstConstructor = nodeVerified;  ///

  return termVerifiedAgainstConstructor;
}

export function verifyTermAsVariable(termNode, variables, context) {
  let termVerifiedAsVariable = false;

  const termString = context.nodeAsString(termNode);

  context.trace(`Verifying the '${termString}' term as a variable...`, termNode);

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

  return termVerifiedAsVariable;
}
