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

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatement(statementNode); ///

    const { Statement } = shim;

    statement = Statement.fromStatementNode(statementNode, localContext); ///

    const metavariableNode = metavariable.getNode(),
          string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution);

    substitution = substitutionFromSubstitution(substitution, localContext);

    const statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statementNode, metavariableNode, substitution);

    return statementForMetavariableSubstitution;
  }
}

function substitutionFromSubstitution(substitution, localContext) {
  if (substitution === null) {
    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitution(substitution, localContext);

    if (termForVariableSubstitution !== null) {
      substitution = termForVariableSubstitution; ///
    }
  }

  if (substitution === null) {
    const frameForMetavariableSubstitution = FrameForMetavariableSubstitution.fromSubstitution(substitution, localContext);

    if (frameForMetavariableSubstitution !== null) {
      substitution = frameForMetavariableSubstitution;  ///
    }
  }

  return substitution;
}

function stringFromStatementAndMetavariable(statement, metavariable) {
  const statementString = statement.getString(),
        metavariableString = metavariable.getString(),
        string = `[${statementString} for ${metavariableString}]`;

  return string;
}

function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution) {
  let string;

  const statementString = statement.getString(),
        metavariableString = metavariable.getString();

  if (substitution === null) {
    string = `[${statementString} for ${metavariableString}]`;
  } else {
    const substitutionString = substitution.getString();

    string = `[${statementString} for ${metavariableString}${substitutionString}]`;
  }

  return string;
}