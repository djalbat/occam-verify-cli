"use strict";

import shim from "../shim";
import Unifier from "../unifier";
import TermForVariableSubstitution from "../substitution/termForVariable";
import FrameForMetavariableSubstitution from "../substitution/frameForMetavariable";

import { nodeQuery } from "../utilities/query";
import { variableNameFromVariableNode } from "../utilities/name";

const termNodeQuery = nodeQuery("/term"),
      frameNodeQuery = nodeQuery("/frame"),
      statementNodeQuery = nodeQuery("/statement"),
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
          let localContext,
              statementNode;

          localContext = localContextA; ///

          statementNode = statementNodeA; ///

          const statementMetavariableNode = statementMetavariableNodeQuery(statementNode);

          if (statementMetavariableNode !== null) {
            const substitution = FrameForMetavariableSubstitution.fromStatementNode(statementNode, localContext) ||
                                   TermForVariableSubstitution.fromStatementNode(statementNode, localContext) ||
                                     null;

            const { Statement } = shim,
                  metavariableNode = statementMetavariableNode, ///
                  metavariable = localContextA.findMetavariableByMetavariableNode(metavariableNode, localContextB);

            localContext = localContextB; ///

            statementNode = statementNodeB; ///

            const statement = Statement.fromStatementNode(statementNode, localContext);

            statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, localContext);
          } else {
            statementUnified = unifyChildNodes(statementNodeA, statementNodeB, substitutions, localContextA, localContextB);
          }
        }

        return statementUnified;
      }
    },
    {
      nodeQueryA: frameMetavariableNodeQuery,
      nodeQueryB: frameNodeQuery,
      unify: (frameMetavariableNodeA, frameNodeB, substitutions, localContextA, localContextB) => {
        let frameUnified = false;

        const metavariableNode = frameMetavariableNodeA,  ///
              metavariablePresent = localContextA.isMetavariablePresentByMetavariableNode(metavariableNode, localContextB);

        if (metavariablePresent) {
          const { Frame, Metavariable } = shim,
                localContext = localContextB, ///
                frameNode = frameNodeB, ///
                metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContextA),
                frame = Frame.fromFrameNode(frameNode, localContextB);

          frameUnified = metavariable.unifyFrame(frame, substitutions, localContext);
        }

        return frameUnified;
      }
    },
    {
      nodeQueryA: termVariableNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) => {
        let termUnified = false;

        const variableNode = termVariableNodeA, ///
              variableName = variableNameFromVariableNode(variableNode),
              variablePresent = localContextA.isVariablePresentByVariableName(variableName);

        if (variablePresent) {
          const { Term, Variable } = shim,
                localContext = localContextB, ///
                termNode = termNodeB, ///
                variable = Variable.fromVariableNode(variableNode, localContextA),
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

function unifyChildNodes(statementNodeA, statementNodeB, substitutions, localContextA, localContextB) {
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
