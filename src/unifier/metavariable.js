"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { typeNameFromTypeNode } from "../utilities/name";

const typeNodeQuery = nodeQuery("/type!"),
      termNodeQuery = nodeQuery("/term!");

class MetavariableUnifier extends Unifier {
  unify(metavariableNodeA, metavariableNodeB, localContext) {
    let metavariableUnified;

    const nonTerminalNodeA = metavariableNodeA, ///
          nonTerminalNodeB = metavariableNodeB, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    metavariableUnified = nonTerminalNodeUnified; ///

    return metavariableUnified;
  }

  static maps = [
    {
      nodeQueryA: typeNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (typeNodeA, termNodeB, localContext) => {
        let termUnified = false;

        const { Term } = shim,
              typeNode = typeNodeA, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = localContext.findTypeByTypeName(typeName);

        if (type !== null) {
          const termNode = termNodeB, ///
                term = Term.fromTermNode(termNode, localContext),
                termVerifiedGivenType = term.verifyGivenType(type, localContext);

          if (termVerifiedGivenType) {
            termUnified = true;
          }
        }

        return termUnified;
      }
    }
  ];
}

const metavariableUnifier = new MetavariableUnifier();

export default metavariableUnifier;
