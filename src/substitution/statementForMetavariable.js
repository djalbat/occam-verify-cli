"use strict";

import Substitution from "../substitution";
import Substitutions from "../substitutions";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { matchStatementModuloBrackets, bracketedStatementChildNodeFromStatementNode } from "../utilities/match";

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
          metavariableStringA = localContextA.nodeAsString(metavariableNodeA),
          substitutionsString = this.substitutions.asString(localContextB, localContextB);  ///

    if (this.substitution === null) {
      string = `[${statementStringB} for ${metavariableStringA}${substitutionsString}]`;
    } else {
      const substitutionString = this.substitution.asString(localContextA, localContextB);

      string = `[${statementStringB} for ${metavariableStringA}${substitutionString}${substitutionsString}]`;
    }

    return string;
  }

  static fromMetavariableNodeAndStatementNode(metavariableNode, statementNode) {
    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      statementNode = bracketedStatementChildNode; ///
    }

    const substitution = null,
          substitutions = Substitutions.fromNothing(),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution, substitutions);

    return statementForMetavariableSubstitution;
  }

  static fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode) {
    const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

    if (bracketedStatementChildNode !== null) {
      statementNode = bracketedStatementChildNode; ///
    }

    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode),
          substitution = termForVariableSubstitution, ///
          substitutions = Substitutions.fromNothing(),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableNode, statementNode, substitution, substitutions);

    return statementForMetavariableSubstitution;
  }
}
