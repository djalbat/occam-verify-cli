"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import TermForVariableSubstitution from "./termForVariable";
import unifyStatementWithStatement from "../unify/statementAtainstStatement";

import { nodeQuery } from "../utilities/query";
import { matchStatementModuloBrackets, bracketedStatementChildNodeFromStatementNode } from "../utilities/match";

const metavariableNodeQuery = nodeQuery("/statement/metavariable!");

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

  getNode() {
    const node = this.statementNode;  ///

    return node;
  }

  matchStatementNode(statementNode) {
    const statementNodeA = statementNode, ///
          statementNodeB = this.statementNode,  ///
          statementNodesMatch = matchStatementModuloBrackets(statementNodeA, statementNodeB),
          statementNodeMatches = statementNodesMatch; ///

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  unifyStatement(statementNode, substitutions, localContextA, localContextB) {
    let statementNodeMatches;

    const substitution = this.substitution, ///
          statementNodeA = statementNode,  ///
          statementNodeB = this.statementNode; ///

    statementNodeMatches = unifyStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);

    if (!statementNodeMatches) {
      const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

      if (bracketedStatementChildNode !== null) {
        const statementNodeA = bracketedStatementChildNode; ///

        statementNodeMatches = unifyStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);
      }
    }

    return statementNodeMatches;
  }

  unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
    let unifiedWithEquivalence = false;  ///

    const metavariableNode = metavariableNodeQuery(this.statementNode);

    if (metavariableNode !== null) {
      substitutions = [ ///
        ...substitutions
      ];

      const { metaLevelUnifier } = shim,
            nodeA = this.metavariableNode, ///
            nodeB = metavariableNode, ///
            unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      unifiedWithEquivalence = unified; ///
    }

    return unifiedWithEquivalence;
  }

  asString(localContextA, localContextB) {
    const statementNodeB = this.statementNode,  ///
          statementStringB = localContextB.nodeAsString(statementNodeB),
          metavariableNodeA = this.metavariableNode,  ///
          metavariableStringA = localContextA.nodeAsString(metavariableNodeA),
          string = `[${statementStringB} for ${metavariableStringA}]`;

    return string;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    let statementForMetavariableSubstitution;

    const substitution = null;

    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);

    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      const statementNode = bracketedStatementChildNode; ///

      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
    }

    return statementForMetavariableSubstitution;
  }

  static fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode) {
    let statementForMetavariableSubstitution;

    let substitution = null;

    if (substitutionNode !== null) {
      const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode);

      substitution = termForVariableSubstitution; ///
    }

    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);

    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      const statementNode = bracketedStatementChildNode; ///

      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution);
    }

    return statementForMetavariableSubstitution;
  }
}

function unifyStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB) {
  let statementUnified;

  if (substitution === null) {
    const statementNodeAMatchesStatementNodeB = statementNodeB.match(statementNodeA);

    statementUnified = statementNodeAMatchesStatementNodeB; ///
  } else {
    const statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);

    statementUnified = statementUnifiedWithStatement; ///
  }

  return statementUnified;
}