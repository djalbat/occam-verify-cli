"use strict";

import shim from "../shim";
import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { variableNameFromVariableNode } from "../utilities/name";

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
        let termUnified = false;

        const variableNodeA = termVariableNodeA, ///
              variableNameA = variableNameFromVariableNode(variableNodeA),
              variableA = localContextA.findVariableByVariableName(variableNameA);

        if (variableA !== null) {
          const { Term } = shim,
                termB = Term.fromTermNode(termNodeB, localContextB),
                localContext = localContextB, ///
                variable = variableA, ///
                term = termB; ///

          termUnified = variable.unifyTerm(term, substitutions, localContext);
        }

        return termUnified;
      }
    }
  ];
}

const intrinsicLevelUnifier = new IntrinsicLevelUnifier();

export default intrinsicLevelUnifier;
