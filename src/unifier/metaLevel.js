"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyVariableAgainstTerm from "../unify/variableAgainstTerm";
import unifyMetavariableAgainstStatement from "../unify/metavariableAgainstStatement";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      statementNodeQuery = nodeQuery("/statement!"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      substitutionNodeQuery = nodeQuery("/statement/substitution!"),
      metavariableNodeQuery = nodeQuery("/statement/metavariable!");

class MetaLevelUnifier extends Unifier {
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
      nodeQueryA: statementNodeQuery,
      nodeQueryB: statementNodeQuery,
      unify: (statementNodeA, statementNodeB, substitutions, localContextA, localContextB) => {
        let statementUnifiedAgainstStatement;

        const metavariableNodeA = metavariableNodeQuery(statementNodeA);

        if (metavariableNodeA !== null) {
          const substitutionNodeA = substitutionNodeQuery(statementNodeA),
                metavariableUnifiedAgainstStatement = unifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);

          statementUnifiedAgainstStatement = metavariableUnifiedAgainstStatement;  ///
        } else {
          const nonTerminalNodeA = statementNodeA, ///
                nonTerminalNodeB = statementNodeB, ///
                nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB);

          statementUnifiedAgainstStatement = childNodesVerified; ///
        }

        return statementUnifiedAgainstStatement;
      }
    },
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

const metaLevelUnifier = new MetaLevelUnifier();

Object.assign(shim, {
  metaLevelUnifier
});

export default metaLevelUnifier;
