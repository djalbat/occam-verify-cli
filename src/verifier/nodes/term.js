"use strict";

import NodesVerifier from "../../verifier/nodes";

import { first } from "../../utilities/array";
import { objectType } from "../../type";
import { OBJECT_TYPE_NAME } from "../../typeNames";
import { ARGUMENT_RULE_NAME } from "../../ruleNames";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!");

class TermNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const ruleName = nonTerminalNode.getRuleName(), ///
          constructorRuleName = constructorNonTerminalNode.getRuleName(); ///

    if (ruleName === constructorRuleName) {
      switch (ruleName) {
        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                constructorArgumentNode = constructorNonTerminalNode, ///
                argumentVerified = verifyArgument(argumentNode, constructorArgumentNode, context, verifyAhead),
                argumentNodeVerified = argumentVerified;  ///

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, context, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }
}

const termNodesVerifier = new TermNodesVerifier();

export default termNodesVerifier;

export function verifyArgument(argumentNode, constructorArgumentNode, context, verifyAhead) {
  let argumentVerified = false;

  const argumentString = context.nodeAsString(argumentNode);

  context.trace(`Verifying the '${argumentString}' argument...`, argumentNode);

  const typeNode = typeNodeQuery(argumentNode);

  if (typeNode !== null) {
    const argumentString = context.nodeAsString(argumentNode);

    context.info(`The '${argumentString}' argument should be a term, not a type`, argumentNode);
  } else {
    const termNode = termNodeQuery(argumentNode),
          constructorTermNode = termNodeQuery(constructorArgumentNode),
          constructorTypeNode = typeNodeQuery(constructorArgumentNode);

    if (false) {
      ///
    } else if (constructorTermNode !== null) {
      const node = termNode,  ///
            constructorNode = constructorTermNode,  ///
            nodeVerified = this.verifyNode(node, constructorNode, context, verifyAhead);

      argumentVerified = nodeVerified;  ///
    } else if (constructorTypeNode !== null) {
      const { verifyTerm } = termNodesVerifier,
            types = [],
            termVerified = verifyTerm(termNode, types, context, verifyAhead);

      if (termVerified) {
        const constructorTypeName = typeNameFromTypeNode(constructorTypeNode),
              firstType = first(types),
              termType = firstType, ///
              termTypeName = termType.getName(),
              constructorType = (constructorTypeName === OBJECT_TYPE_NAME) ?
                                  objectType :
                                    context.findTypeByTypeName(constructorTypeName),
              termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);

        if (termTypeEqualToOrSubTypeOfType) {
          const termString = context.nodeAsString(termNode);

          context.trace(`The '${termTypeName}' type of the '${termString}' term is equal to or a sub-type of the '${constructorTypeName}' type in the constructor.`, argumentNode);

          argumentVerified = true;
        }
      }
    }
  }

  if (argumentVerified) {
    context.debug(`...verified the '${argumentString}' argument.`, argumentNode);
  }

  return argumentVerified;
}
