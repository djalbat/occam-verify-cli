"use strict";

import NodesVerifier from "../../verifier/nodes";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!");

class TermAgainstConstructorNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const termNodeA = nodeA,  ///
                typeNodeB = nodeB,  ///
                termVerifiedAgainstType =

              this.verifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, verifyAhead);

          nonTerminalNodeVerified = termVerifiedAgainstType;  ///

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    nonTerminalNodeVerified = nodesVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    return nonTerminalNodeVerified;
  }

  verifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, verifyAhead) {
    let termVerifiedAgainstType;

    const { verifyTerm } = termAgainstConstructorNodesVerifier,
          terms = [],
          termNode = termNodeA, ///
          termVerified = verifyTerm(termNode, terms, localContext, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  term = firstTerm, ///
                  termType = term.getType(),
                  typeNode = typeNodeB, ///
                  type = localContext.findTypeByTypeNode(typeNode),
                  termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

            if (termTypeEqualToOrSubTypeOfType) {
              verifiedAhead = verifyAhead();
            }

            return verifiedAhead;
          });

    termVerifiedAgainstType = termVerified; ///

    return termVerifiedAgainstType;
  }
}

const termAgainstConstructorNodesVerifier = new TermAgainstConstructorNodesVerifier();

export default termAgainstConstructorNodesVerifier;
