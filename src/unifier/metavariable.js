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
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, localContext) => {
        let unified = false;

        const { Term } = shim,
              typeNode = typeNodeB, ///
              typeName = typeNameFromTypeNode(typeNode),
              type = localContext.findTypeByTypeName(typeName);

        if (type !== null) {
          const termNode = termNodeA, ///
                term = Term.fromTermNode(termNode, localContext),
                termVerifiedGivenType = term.verifyGivenType(type, localContext);

          if (termVerifiedGivenType) {
            unified = true;
          }
        }

        return unified;
      }
    }
  ];
}

const metavariableUnifier = new MetavariableUnifier();

export default metavariableUnifier;
