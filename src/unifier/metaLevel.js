"use strict";

import Unifier from "../unifier";
import unifyVariableAgainstTerm from "../unify/variableAgainstTerm";
import unifyMetavariableAgainstStatement from "../unify/metavariableAgainstStatement";

import { unify } from "../unifier";
import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      statementNodeQuery = nodeQuery("/statement!"),
      nonTerminalNodeQuery = nodeQuery("/*"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      statementSubstitutionNodeQuery = nodeQuery("/statement/substitution!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!");

class MetaLevelUnifier extends Unifier {
  unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead) {
    let nonTerminalNodeUnified;

    const nodeQueryMaps = [
      {
        nodeQueryA: statementMetavariableNodeQuery,
        nodeQueryB: statementNodeQuery,
        unify: (nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) => {
          let nonTerminalNodeUnified;

          const statementNodeA = nonTerminalNodeA,  ///
                statementNodeB = nodeB, ///
                statementMetavariableNodeA = nodeA, ///
                statementSubstitutionNodeA = statementSubstitutionNodeQuery(statementNodeA),
                metavariableNodeUnifiedAgainstStatementNode =

                  this.unifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead);

          nonTerminalNodeUnified = metavariableNodeUnifiedAgainstStatementNode;  ///

          return nonTerminalNodeUnified;
        }
      },
      {
        nodeQueryA: termVariableNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: (nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) => {
          let nonTerminalNodeUnified;

          const termNodeB = nodeB,  ///
                termVariableNodeA = nodeA,  ///
                termVariableNodeUnifiedAgainstTermNode =

                  this.unifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);

          nonTerminalNodeUnified = termVariableNodeUnifiedAgainstTermNode;  ///

          return nonTerminalNodeUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) => {
          let nonTerminalNodeUnified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodeUnified =

            super.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead);

          return nonTerminalNodeUnified;
        }
      }
    ];

    const nodesUnified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead);

    nonTerminalNodeUnified = nodesUnified;  ///

    return nonTerminalNodeUnified;
  }

  unifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead) {
    let metavariableNodeUnifiedAgainstStatementNode;

    const substitutionNode = statementSubstitutionNodeA,  ///
          metavariableNodeA = statementMetavariableNodeA, ///
          metavariableUnifiedAgainstStatement = unifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, unifyAhead);

    metavariableNodeUnifiedAgainstStatementNode = metavariableUnifiedAgainstStatement;  ///

    return metavariableNodeUnifiedAgainstStatementNode;
  }

  unifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead) {
    let termVariableNodeUnifiedAgainstTermNode;

    const variableNodeA = termVariableNodeA, ///
          termUnifiedAgainstVariable = unifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);

    termVariableNodeUnifiedAgainstTermNode = termUnifiedAgainstVariable;  ///

    return termVariableNodeUnifiedAgainstTermNode;
  }
}

const metaLevelUnifier = new MetaLevelUnifier();

export default metaLevelUnifier;
