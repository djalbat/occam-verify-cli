"use strict";

import Substitution from "../substitution";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { matchStatementModuloBrackets, bracketedStatementChildNodeFromStatementNode } from "../utilities/match";
import Substitutions from "../substitutions";

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(metavariableNode, statementNode, substitution, substitutions) {
    super();

    this.metavariableNode = metavariableNode;
    this.statementNode = statementNode;
    this.substitution = substitution;
    this.substitutions = substitutions;
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

  getSubstitutions() {
    return this.substitutions;
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

  asString(localContextA, localContextB) {
    let string;

    const statementNodeB = this.statementNode,  ///
          statementStringB = localContextB.nodeAsString(statementNodeB),
          metavariableNodeA = this.metavariableNode,  ///
          metavariableStringA = localContextA.nodeAsString(metavariableNodeA);

    if (this.substitution === null) {
      string = `[${statementStringB} for ${metavariableStringA}]`;
    } else {
      localContextB = localContextA;  ///

      const substitutionString = this.substitution.asString(localContextA, localContextB);

      string = `[${statementStringB} for ${metavariableStringA}${substitutionString}]`;
    }

    return string;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    let statementForMetavariableSubstitution;

    const substitution = null,
          substitutions = Substitutions.fromNothing(),
          bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      statementNode = bracketedStatementChildNode; ///
    }

    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution, substitutions);

    return statementForMetavariableSubstitution;
  }

  static fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode) {
    let statementForMetavariableSubstitution;

    let substitution = null;

    if (substitutionNode !== null) {
      const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode);

      substitution = termForVariableSubstitution; ///
    }

    const substitutions = Substitutions.fromNothing(),
          bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      statementNode = bracketedStatementChildNode; ///
    }

    statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution, substitutions);

    return statementForMetavariableSubstitution;
  }
}
