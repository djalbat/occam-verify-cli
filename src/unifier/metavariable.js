"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";

const typeNodeQuery = nodeQuery("/type!"),
      termNodeQuery = nodeQuery("/term!");

class MetavariableUnifier extends Unifier {
  unify(metavariableNodeA, metavariableNodeB, localContext) {
    let unified;

    const nonTerminalNodeA = metavariableNodeA, ///
          nonTerminalNodeB = metavariableNodeB, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    unified = nonTerminalNodeUnified; ///

    return unified;
  }

  static maps = [
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: typeNodeQuery,
      unify: (termNodeA, typeNodeB, localContext) => {
        let unified = false;

        const { Term, Type } = shim,
              typeNode = typeNodeB, ///
              type = Type.fromTypeNode(typeNode, localContext),
              typeVerified = type.verify(localContext);

        if (typeVerified) {
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
