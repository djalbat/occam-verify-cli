"use strict";

import Substitution from "../substitution";
import TermForVariableSubstitution from "./termForVariable";
import intrinsicLevelNodesVerifier from "../verifier/nodes/intrinsicLevel";

import { push } from "../utilities/array";
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
      const substitution = this.substitution, ///
            statementNodeA = statementNode,  ///
            statementNodeB = this.statementNode; ///

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

function transformSubstitutions(substitutionsA, substitutionsB) {
  substitutionsA = substitutionsA.map((substitutionA) => {
    const substitution = substitutionA,  ///
          substitutions = substitutionsB,
          termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionAndSubstitutions(substitution, substitutions);

    substitutionA = termForVariableSubstitution; ///

    return substitutionA;
  });

  return substitutionsA;
}

export function matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
  let statementNodeMatches = false;

  const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionAndSubstitutions(substitution, substitutions),
        intrinsic = termForVariableSubstitution.isIntrinsic(substitution);

  let substitutionsA = []; ///

  if (intrinsic) {
    const substitutionA = termForVariableSubstitution;  ///

    substitutionsA.push(substitutionA);
  }

  const nonTerminalNodeA = statementNodeA,  ///
        nonTerminalNodeB = statementNodeB,  ///
        nonTerminalNodeVerified = intrinsicLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutionsA, localContextA, localContextB, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (nonTerminalNodeVerified) {
    if (!intrinsic) {
      const substitutionB = termForVariableSubstitution,  ///
            substitutionsB = [
              substitutionB
            ];

      substitutionsA = transformSubstitutions(substitutionsA, substitutionsB);

      push(substitutions, substitutionsA);
    }

    statementNodeMatches = true;
  }

  return statementNodeMatches;
}
