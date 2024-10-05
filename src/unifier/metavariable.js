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
        const termNode = termNodeA, ///
              typeNode = typeNodeB, ///
              termUnifiedWithType = unifyTermWithType(termNode, typeNode, localContext);

        return termUnifiedWithType;
      }
    }
  ];
}

const metavariableUnifier = new MetavariableUnifier();

export default metavariableUnifier;
