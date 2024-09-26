"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyVariableWithTerm from "../unify/variableWithTerm";
import unifyMetavariableWithFrame from "../unify/metavariableWithFrame";
import unifyMetavariableWithStatement from "../unify/metavariableWithStatement";
import unifyMetavariableWithStatementGivenSubstitution from "../unify/metavariableWithStatementGivenSubstitution";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      frameNodeQuery = nodeQuery("/frame!"),
      statementNodeQuery = nodeQuery("/statement!"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      statementSubstitutionNodeQuery = nodeQuery("/statement/substitution!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!");

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

        const matches = statementNodeA.match(statementNodeB);

        if (matches) {
          statementUnifiedWithStatement = true;
        } else {
          const statementMetavariableNodeA = statementMetavariableNodeQuery(statementNodeA);

          if (statementMetavariableNodeA !== null) {
            const metavariableNodeA = statementMetavariableNodeA, ///
                  statementSubstitutionNodeA = statementSubstitutionNodeQuery(statementNodeA);

            if (statementSubstitutionNodeA === null) {
              const metavariableUnifiedWithStatement = unifyMetavariableWithStatement(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB);

              statementUnifiedWithStatement = metavariableUnifiedWithStatement; ///
            } else {
              const substitutionNodeA = statementSubstitutionNodeA, ///
                    metavariableUnifiedWithStatementGivenSubstitution = unifyMetavariableWithStatementGivenSubstitution(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);

              statementUnifiedWithStatement = metavariableUnifiedWithStatementGivenSubstitution; ///
            }
          } else {
            statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB);
          }
        }

        return statementUnifiedWithStatement;
      }
    },
    {
      nodeQueryA: frameMetavariableNodeQuery,
      nodeQueryB: frameNodeQuery,
      unify: (frameMetavariableNodeA, frameNodeB, substitutions, localContextA, localContextB) => {
        const metavariableNodeA = frameMetavariableNodeA, ///
              metavariableUnifiedWithFrame = unifyMetavariableWithFrame(metavariableNodeA, frameNodeB, substitutions, localContextA, localContextB);

        return metavariableUnifiedWithFrame;
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

function unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB) {
  const nonTerminalNodeA = statementNodeA, ///
        nonTerminalNodeB = statementNodeB, ///
        nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
        nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
        childNodesA = nonTerminalNodeAChildNodes, ///
        childNodesB = nonTerminalNodeBChildNodes, ///
        childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB),
        statementUnifiedWithStatement = childNodesVerified; ///

  return statementUnifiedWithStatement;
}
