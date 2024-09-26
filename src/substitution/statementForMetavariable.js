"use strict";

import Substitution from "../substitution";
import TermForVariableSubstitution from "../substitution/termForVariable";
import FrameForMetavariableSubstitution from "../substitution/frameForMetavariable";

import { stripBracketsFromStatement } from "../utilities/brackets";

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

  isSimple() {
    const simple = (this.substitution === null);

    return simple;
  }

  matchStatementNode(statementNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const statementNodeMatches = this.statementNode.match(statementNode);

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
      const substitutionString = this.substitution.asString(localContextA, localContextA);

      string = `[${statementStringB} for ${metavariableStringA}${substitutionString}]`;
    }

    return string;
  }

  static fromStatementNodeAndMetavariableNode(statementNode, metavariableNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const substitution = null,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const substitution = substitutionFromSubstitutionNode(substitutionNode),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }
}

function substitutionFromSubstitutionNode(substitutionNode) {
  let substitution = null;

  if (substitution === null) {
    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode);

    if (termForVariableSubstitution !== null) {
      substitution = termForVariableSubstitution; ///
    }
  }

  if (substitution === null) {
    const frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromSubstitutionNode(substitutionNode);

    if (frameForMetavariableSubstitution !== null) {
      substitution = frameForMetavariableSubstitution;  ///
    }
  }

  return substitution;
}
