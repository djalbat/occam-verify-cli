"use strict";

import shim from "../shim";
import Substitution from "../substitution";
import TermForVariableSubstitution from "../substitution/termForVariable";
import FrameForMetavariableSubstitution from "../substitution/frameForMetavariable";

import { stripBracketsFromStatement } from "../utilities/brackets";

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(string, statementNode, metavariableNode, substitution) {
    super(string);

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

  static fromStatementAndMetavariable(statement, metavariable, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatement(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, localContext); ///

    const string = stringFromStatementAndMetavariable(statement, metavariable),
          substitution = null,
          metavariableNode = metavariable.getNode(),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }

  static fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode, localContextA, localContextB) {
    statementNode = stripBracketsFromStatement(statementNode); ///

    const substitution = substitutionFromSubstitutionNode(substitutionNode, localContextA, localContextB),
          string = stringFromStatementNodeMetavariableNodeAndSubstitution(statementNode, metavariableNode, substitution, localContextA, localContextB),
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }
}

function stringFromStatementAndMetavariable(statement, metavariable) {
  const statementString = statement.getString(),
        metavariableString = metavariable.getString(),
        string = `[${statementString} for ${metavariableString}]`;

  return string;
}


function substitutionFromSubstitutionNode(substitutionNode, localContextA, localContextB) {
  let substitution = null;

  if (substitution === null) {
    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode, localContextA, localContextB);

    if (termForVariableSubstitution !== null) {
      substitution = termForVariableSubstitution; ///
    }
  }

  if (substitution === null) {
    const frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromSubstitutionNode(substitutionNode, localContextA, localContextB);

    if (frameForMetavariableSubstitution !== null) {
      substitution = frameForMetavariableSubstitution;  ///
    }
  }

  return substitution;
}

function stringFromStatementNodeMetavariableNodeAndSubstitution(statementNode, metavariableNode, substitution, localContextA, localContextB) {
  let string;

  const statementNodeB = statementNode,  ///
        statementStringB = localContextB.nodeAsString(statementNodeB),
        metavariableNodeA = metavariableNode,  ///
        metavariableStringA = localContextA.nodeAsString(metavariableNodeA);

  if (substitution === null) {
    string = `[${statementStringB} for ${metavariableStringA}]`;
  } else {
    const substitutionString = substitution.asString(localContextA, localContextA);

    string = `[${statementStringB} for ${metavariableStringA}${substitutionString}]`;
  }

  return string;
}