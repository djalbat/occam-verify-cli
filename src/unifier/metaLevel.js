"use strict";

import shim from "../shim";
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
                metavariableUnifiedAgainstStatement =

                  this.unifyStatementMetavariableAgainstStatement(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead);

          nonTerminalNodeUnified = metavariableUnifiedAgainstStatement;  ///

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
                termVariableUnifiedAgainstTerm =

                  this.unifyTermVariableAgainstTerm(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);

          nonTerminalNodeUnified = termVariableUnifiedAgainstTerm;  ///

          return nonTerminalNodeUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead) => {
          const unified = super.unify(nodeA, nodeB, substitutions, localContextA, localContextB, unifyAhead);

          return unified;
        }
      }
    ];

    const unified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, unifyAhead);

    nonTerminalNodeUnified = unified;  ///

    return nonTerminalNodeUnified;
  }

  unifyStatementMetavariableAgainstStatement(statementMetavariableNodeA, statementSubstitutionNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead) {
    let metavariableUnifiedAgainstStatement;

    const substitutionNode = statementSubstitutionNodeA,  ///
          metavariableNodeA = statementMetavariableNodeA; ///

    metavariableUnifiedAgainstStatement = unifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, unifyAhead);

    return metavariableUnifiedAgainstStatement;
  }

  unifyTermVariableAgainstTerm(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead) {
    let termVariableUnifiedAgainstTerm;

    const variableNodeA = termVariableNodeA, ///
          termUnifiedAgainstVariable = unifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);

    termVariableUnifiedAgainstTerm = termUnifiedAgainstVariable;  ///

    return termVariableUnifiedAgainstTerm;
  }
}

const metaLevelUnifier = new MetaLevelUnifier();

Object.assign(shim, {
  metaLevelUnifier
});

export default metaLevelUnifier;
