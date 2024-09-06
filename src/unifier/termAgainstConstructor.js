"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyTermAgainstType from "../unify/termAgainstType";

import { unify } from "../unifier";
import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class TermAgainstConstructorUnifier extends Unifier {
  unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead) {
    let nonTerminalNodUnified;

    const nodeQueryMaps = [
      {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodUnified;

          const termNodeA = nodeA,  ///
                typeNodeB = nodeB,  ///
                termNodUnifiedAgainstTypeNode =

                  this.unifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, unifyAhead);

          nonTerminalNodUnified = termNodUnifiedAgainstTypeNode;  ///

          return nonTerminalNodUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodUnified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodUnified =

            super.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

          return nonTerminalNodUnified;
        }
      }
    ];

    const nodesVerified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

    nonTerminalNodUnified = nodesVerified;  ///

    return nonTerminalNodUnified;
  }

  unifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, unifyAhead) {
    let termNodUnifiedAgainstTypeNode;

    const { verifyTerm } = shim,
          termNode = termNodeA, ///
          typeNode = typeNodeB, ///
          typeUnifiedAgainstTerm = unifyTermAgainstType(termNode, typeNode, localContext, unifyAhead, verifyTerm);

    termNodUnifiedAgainstTypeNode = typeUnifiedAgainstTerm; ///

    return termNodUnifiedAgainstTypeNode;
  }
}

const termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();

export default termAgainstConstructorUnifier;
