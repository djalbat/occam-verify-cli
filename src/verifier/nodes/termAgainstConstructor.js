"use strict";

import NodesVerifier from "../../verifier/nodes";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { ARGUMENT_RULE_NAME } from "../../ruleNames";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!");

class TermAgainstConstructorNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNode = nonTerminalNodeA, ///
          constructorNonTerminalNode = nonTerminalNodeB, ///
          ruleName = nonTerminalNode.getRuleName(), ///
          constructorRuleName = constructorNonTerminalNode.getRuleName(); ///

    if (ruleName === constructorRuleName) {
      switch (ruleName) {
        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                constructorArgumentNode = constructorNonTerminalNode, ///
                argumentNodeVerified = this.verifyArgumentNode(argumentNode, constructorArgumentNode, localContext, verifyAhead);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNode, constructorNonTerminalNode, localContext, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyArgumentNode(argumentNode, constructorArgumentNode, localContext, verifyAhead) {
    let argumentNodeVerified = false;

    const argumentString = localContext.nodeAsString(argumentNode);

    const typeNode = typeNodeQuery(argumentNode);

    if (typeNode !== null) {
      localContext.debug(`The '${argumentString}' argument should be a term, not a type.`, argumentNode);
    } else {
      const termNode = termNodeQuery(argumentNode);

      if (!argumentNodeVerified) {
        const constructorTermNode = termNodeQuery(constructorArgumentNode);

        if (constructorTermNode !== null) {
          const node = termNode,  ///
                constructorNode = constructorTermNode,  ///
                nodeVerified = this.verifyNode(node, constructorNode, localContext, verifyAhead);

          argumentNodeVerified = nodeVerified;  ///
        }
      }

      if (!argumentNodeVerified) {
        const constructorTypeNode = typeNodeQuery(constructorArgumentNode);

        if (constructorTypeNode !== null) {
          const { verifyTerm } = termAgainstConstructorNodesVerifier,
                terms = [],
                termVerified = verifyTerm(termNode, terms, localContext, () => {
                  let verifiedAhead = false;

                  const firstTerm = first(terms),
                        term = firstTerm, ///
                        termType = term.getType(),
                        constructorType = localContext.findTypeByTypeNode(constructorTypeNode),
                        termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(constructorType);

                  if (termTypeEqualToOrSubTypeOfType) {
                    verifiedAhead = verifyAhead();
                  }

                  return verifiedAhead;
                });

          argumentNodeVerified = termVerified;  ///
        }
      }
    }

    return argumentNodeVerified;
  }
}

const termAgainstConstructorNodesVerifier = new TermAgainstConstructorNodesVerifier();

export default termAgainstConstructorNodesVerifier;

