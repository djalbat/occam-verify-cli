"use strict";

import Substitution from "../substitution";

import TermForVariableSubstitution from "./termForVariable";
import intrinsicLevelNodesVerifier from "../verifier/nodes/intrinsicLevel";

import { bracketedStatementChildNodeFromStatementNode } from "../utilities/proof";

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(metavariableNode, statementNode, substitution) {
    super();

    this.metavariableNode = metavariableNode;
    this.statementNode = statementNode;
    this.substitution = substitution;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getSubstitution() {
    return this.substitution;
  }

  matchStatementNode(statementNode, substitutions, localContextA, localContextB) {
    let statementNodeMatches;

    statementNodeMatches = this.matchStatementNodeEx(statementNode, substitutions, localContextA, localContextB);

    if (!statementNodeMatches) {
      const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

      if (bracketedStatementChildNode !== null) {
        const statementNode = bracketedStatementChildNode; ///

        statementNodeMatches = this.matchStatementNodeEx(statementNode, substitutions, localContextA, localContextB);
      }
    }

    return statementNodeMatches;
  }

  matchStatementNodeEx(statementNode, substitutions, localContextA, localContextB) {
    let statementNodeMatches;

    if (this.substitution === null) {
      statementNodeMatches = this.statementNode.match(statementNode);
    } else {
      const substitution = this.substitution,
            statementNodeA = statementNode, ///
            statementNodeB = this.statementNode;  ///

      statementNodeMatches = matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
    }

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    const substitution = null;

    let statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);

    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      const statementNode = bracketedStatementChildNode; ///

      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
    }

    return statementForMetavariableSubstitution;
  }

  static fromMetavariableNodeStatementNodeAndSubstitution(metavariableNode, statementNode, substitution) {
    let statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);

    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      const statementNode = bracketedStatementChildNode; ///

      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
    }

    return statementForMetavariableSubstitution;
  }
}

export function matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
  let statementNodeMatches;

  const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionAndSubstitutions(substitution, substitutions);

  substitution = termForVariableSubstitution; ///

  substitutions = [ ///
    substitution
  ];

  const nonTerminalNodeA = statementNodeA, ///
        nonTerminalNodeB = statementNodeB,  ///
        nonTerminalNodeVerified = intrinsicLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  statementNodeMatches = nonTerminalNodeVerified; ///

  return statementNodeMatches;
}
