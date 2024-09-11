"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyVariableAgainstTerm from "../unify/variableAgainstTerm";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      termVariableNodeQuery = nodeQuery("/term/variable!");

class IntrinsicLevelUnifier extends Unifier {
  unify(nodeA, nodeB, substitutions, localContextA, localContextB) {
    let unified;

    const nonTerminalNodeA = nodeA, ///
          nonTerminalNodeB = nodeB, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB);

    unified = nonTerminalNodeUnified; ///

    return unified;
  }

  static maps = [
    {
      nodeQueryA: termVariableNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) => {
        const variableNodeA = termVariableNodeA, ///
              variableUnifiedAgainstTerm = unifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB);

        return variableUnifiedAgainstTerm;
      }
    }
  ];
}

const intrinsicLevelUnifier = new IntrinsicLevelUnifier();

Object.assign(shim, {
  intrinsicLevelUnifier
});

export default intrinsicLevelUnifier;
