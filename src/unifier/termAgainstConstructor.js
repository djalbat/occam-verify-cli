"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyTermAgainstType from "../unify/termAgainstType";

import { unify } from "../unifier";
import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term"),
      typeNodeQuery = nodeQuery("/type"),
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
                termUnifiedAgainstType =

                  this.unifyTermAgainstType(termNodeA, typeNodeB, localContext, unifyAhead);

          nonTerminalNodUnified = termUnifiedAgainstType;  ///

          return nonTerminalNodUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          const unified = super.unify(nodeA, nodeB, localContext, unifyAhead);

          return unified;
        }
      }
    ];

    const unified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

    nonTerminalNodUnified = unified;  ///

    return nonTerminalNodUnified;
  }

  unifyTermAgainstType(termNodeA, typeNodeB, localContext, unifyAhead) {
    let termUnifiedAgainstType;

    const { verifyTerm } = shim,
          termNode = termNodeA, ///
          typeNode = typeNodeB, ///
          typeUnifiedAgainstTerm = unifyTermAgainstType(termNode, typeNode, localContext, unifyAhead, verifyTerm);

    termUnifiedAgainstType = typeUnifiedAgainstTerm; ///

    return termUnifiedAgainstType;
  }
}

const termAgainstConstructorUnifier = new TermAgainstConstructorUnifier();

export default termAgainstConstructorUnifier;
