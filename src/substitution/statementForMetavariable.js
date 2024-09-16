"use strict";

import Substitution from "../substitution";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { stripBrackets } from "../utilities/statement";

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(statementNode, metavariableNode, substitution) {
    super();

    this.statementNode = statementNode;
    this.metavariableNode = metavariableNode;
    this.substitution = substitution;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getSubstitution() {
    return this.substitution;
  }

  getNode() {
    const node = this.statementNode;  ///

    return node;
  }

  isStraightForward() {
    const straightforward = (this.substitution !== null);

    return straightforward;
  }

  matchStatementNode(statementNode) {
    statementNode = stripBrackets(statementNode); ///

    const statementNodeMatches = this.statementNode.match(statementNode);

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.metavariableNode.match(metavariableNode);

    return metavariableNodeMatches;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const matchesMetavariableNodeAndSubstitutionNode = false;

    return matchesMetavariableNodeAndSubstitutionNode;
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
      const substitutionString = this.substitution.asString(localContextA, localContextB);

      string = `[${statementStringB} for ${metavariableStringA}${substitutionString}]`;
    }

    return string;
  }

  static fromStatementNodeAndMetavariableNode(statementNode, metavariableNode) {
    statementNode = stripBrackets(statementNode); ///

    const substitution = null,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode) {
    statementNode = stripBrackets(statementNode); ///

    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode),
          substitution = termForVariableSubstitution, ///
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }
}
