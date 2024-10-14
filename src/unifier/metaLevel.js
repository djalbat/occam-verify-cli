"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import unifyMetavariableWithFrame from "../unify/metavariableWithFrame";

import { nodeQuery } from "../utilities/query";
import { variableNameFromVariableNode, metavariableNameFromMetavariableNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term!"),
      frameNodeQuery = nodeQuery("/frame!"),
      statementNodeQuery = nodeQuery("/statement!"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      frameMetavariableNodeQuery = nodeQuery("/frame/metavariable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!");

class MetaLevelUnifier extends Unifier {
  unify(nodeA, nodeB, substitutions, localContextA, localContextB) {
    let unifiedAtMetaLevel;

    const nonTerminalNodeA = nodeA, ///
          nonTerminalNodeB = nodeB, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB);

    unifiedAtMetaLevel = nonTerminalNodeUnified; ///

    return unifiedAtMetaLevel;
  }

  static maps = [
    {
      nodeQueryA: statementNodeQuery,
      nodeQueryB: statementNodeQuery,
      unify: (statementNodeA, statementNodeB, substitutions, localContextA, localContextB) => {
        let statementUnified;

        const matches = statementNodeA.match(statementNodeB);

        if (matches) {
          statementUnified = true;
        } else {
          const statementNode = statementNodeA, ///
                statementSubstitution = null, ///
                statementMetavariableNode = statementMetavariableNodeQuery(statementNode);

          if (statementMetavariableNode !== null) {
            const { Statement } = shim,
                  metavariableNode = statementMetavariableNode, ///
                  metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
                  metavariable = localContextA.findMetavariableByMetavariableName(metavariableName),
                  substitution = statementSubstitution, ///
                  localContext = localContextB, ///
                  statementNode = statementNodeB, ///
                  statement = Statement.fromStatementNode(statementNode, localContext);

            if (substitution === null) {
              statementUnified = metavariable.unifyStatement(statement, substitutions, localContext);
            } else {
              const statementUnifiedGivenSubstitution = metavariable.unifyStatementGivenSubstitution(statement, substitution, substitutions, localContext);

              statementUnified = statementUnifiedGivenSubstitution; ///
            }
          } else {
            statementUnified = unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB);
          }
        }

        return statementUnified;
      }
    },
    {
      nodeQueryA: frameMetavariableNodeQuery,
      nodeQueryB: frameNodeQuery,
      unify: (frameMetavariableNodeA, frameNodeB, substitutions, localContextA, localContextB) => {
        debugger

        const metavariableNodeA = frameMetavariableNodeA, ///
              metavariableUnifiedWithFrame = unifyMetavariableWithFrame(metavariableNodeA, frameNodeB, substitutions, localContextA, localContextB);

        return metavariableUnifiedWithFrame;
      }
    },
    {
      nodeQueryA: termVariableNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) => {
        let termUnified = false;

        const variableNode = termVariableNodeA, ///
              variableName = variableNameFromVariableNode(variableNode),
              variable = localContextA.findVariableByVariableName(variableName);

        if (variable !== null) {
          const { Term } = shim,
                localContext = localContextB, ///
                termNode = termNodeB, ///
                term = Term.fromTermNode(termNode, localContextB);

          termUnified = variable.unifyTerm(term, substitutions, localContext);
        }

        return termUnified;
      }
    }
  ];
}

const metaLevelUnifier = new MetaLevelUnifier();

export default metaLevelUnifier;

function unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB) {
  const nonTerminalNodeA = statementNodeA, ///
        nonTerminalNodeB = statementNodeB, ///
        nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
        nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
        childNodesA = nonTerminalNodeAChildNodes, ///
        childNodesB = nonTerminalNodeBChildNodes, ///
        childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB),
        statementUnified = childNodesVerified; ///

  return statementUnified;
}
