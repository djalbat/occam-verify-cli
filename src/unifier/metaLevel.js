"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyVariableWithTerm from "../unify/variableWithTerm";
import unifyMetavariableWithStatement from "../unify/metavariableWithStatement";
import unifyMetavariableWithStatementGivenSubstitution from "../unify/metavariableWithStatementGivenSubstitution";

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
        let statementUnifiedWithStatement;

        const metavariableNodeA = metavariableNodeQuery(statementNodeA);

        if (metavariableNodeA !== null) {
          const substitutionNodeA = substitutionNodeQuery(statementNodeA);

          if (substitutionNodeA === null) {
            const metavariableUnifiedWithStatement = unifyMetavariableWithStatement(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB);

            statementUnifiedWithStatement = metavariableUnifiedWithStatement; ///
          } else {
            const metavariableUnifiedWithStatementGivenSubstitution = unifyMetavariableWithStatementGivenSubstitution(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);

            statementUnifiedWithStatement = metavariableUnifiedWithStatementGivenSubstitution; ///
          }
        } else {
          const nonTerminalNodeA = statementNodeA, ///
                nonTerminalNodeB = statementNodeB, ///
                nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB);

          statementUnifiedWithStatement = childNodesVerified; ///
        }

        return statementUnifiedWithStatement;
      }
    },
    {
      nodeQueryA: termVariableNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) => {
        const variableNodeA = termVariableNodeA, ///
              variableUnifiedWithTerm = unifyVariableWithTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB);

        return variableUnifiedWithTerm;
      }
    }
  ];
}

const metaLevelUnifier = new MetaLevelUnifier();

Object.assign(shim, {
  metaLevelUnifier
});

export default metaLevelUnifier;
