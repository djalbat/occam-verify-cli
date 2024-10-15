"use strict";

import Substitution from "../substitution";
import FrameForMetavariableSubstitution from "../substitution/frameForMetavariable";

import { stripBracketsFromStatement } from "../utilities/brackets";

export default class StatementForMetavariableSubstitution extends Substitution {
  constructor(string, statementNode, metavariableNode, substitutionNode) {
    super(string);

    this.statementNode = statementNode;
    this.metavariableNode = metavariableNode;
    this.substitutionNode = substitutionNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getSubstitutionNode() {
    return this.substitutionNode;
  }

  isSimple() {
    const simple = (this.substitutionNode === null);

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

  matchSubstitutionNode(substitutionNode) {
    let substitutionNodeMatches;

    if ((substitutionNode === null) && (this.substitutionNode === null)) {
      substitutionNodeMatches = true;
    } else if ((substitutionNode === null) && (this.substitutionNode !== null)) {
      substitutionNodeMatches = false;
    } else if ((substitutionNode !== null) && (this.substitutionNode === null)) {
      substitutionNodeMatches = false;
    } else {
      substitutionNodeMatches = this.substitutionNode.match(substitutionNode);
    }

    return substitutionNodeMatches;
  }

  matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const metavariableNodeMatches = this.matchMetavariableNode(metavariableNode),
          substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode),
          metavariableNodeAndSubstitutionNodeMatches = (metavariableNodeMatches && substitutionNodeMatches);

    return metavariableNodeAndSubstitutionNodeMatches;
  }

  static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
    let statementNode = statement.getNode();

    statementNode = stripBracketsFromStatement(statementNode); ///

    const string = stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext),
          metavariableNode = metavariable.getNode(),
          substitutionNode = (substitution !== null) ?
                                substitution.getNode() :
                                  null,
          statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(string, statementNode, metavariableNode, substitutionNode);

    return statementForMetavariableSubstitution;
  }
}

function stringFromStatementMetavariableAndSubstitution(statement, metavariable, substitution, localContext) {
  let string;

  const statementNode = statement.getNode(),
        statementString = localContext.nodeAsString(statementNode),
        metavariableString = metavariable.getString();

  if (substitution === null) {
    string = `[${statementString} for ${metavariableString}]`;
  } else {
    const substitutionString = substitution.getString();

    string = `[${statementString} for ${metavariableString}${substitutionString}]`;
  }

  return string;
}