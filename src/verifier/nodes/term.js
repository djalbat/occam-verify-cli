"use strict";

import NodesVerifier from "../../verifier/nodes";

import { first } from "../../utilities/array";
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
    context.debug(`The '${argumentString}' argument should be a term, not a type.`, argumentNode);
  } else {
    const termNode = termNodeQuery(argumentNode);

    if (!argumentVerified) {
      const constructorTermNode = termNodeQuery(constructorArgumentNode);

      if (constructorTermNode !== null) {
        const node = termNode,  ///
              constructorNode = constructorTermNode,  ///
              nodeVerified = this.verifyNode(node, constructorNode, context, verifyAhead);

        argumentVerified = nodeVerified;  ///
      }
    }

    if (!argumentVerified) {
      const constructorTypeNode = typeNodeQuery(constructorArgumentNode);

      if (constructorTypeNode !== null) {
        const { verifyTerm } = termNodesVerifier,
              terms = [],
              termVerified = verifyTerm(termNode, terms, context, () => {
                let verifiedAhead = false;

                const constructorTypeName = typeNameFromTypeNode(constructorTypeNode),
                      firstTerm = first(terms),
                      term = firstTerm, ///
                      termType = term.getType(),
                      constructorType = context.findTypeByTypeName(constructorTypeName),
                      termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);

                if (termTypeEqualToOrSubTypeOfType) {
                  verifiedAhead = verifyAhead();
                }

                return verifiedAhead;
              });

        argumentVerified = termVerified;  ///
      }
    }
  }

  if (argumentVerified) {
    context.debug(`...verified the '${argumentString}' argument.`, argumentNode);
  }

  return argumentVerified;
}
