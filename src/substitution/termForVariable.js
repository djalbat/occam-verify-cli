"use strict";

import Substitution from "../substitution";

export default class TermForVariableSubstitution extends Substitution {
  constructor(variableNode, termNode) {
    super();

    this.variableNode = variableNode;
    this.termNode = termNode;
  }

  getVariableNode() {
    return this.variableNode;
  }

  getTermNode() {
    return this.termNode;
  }

  matchTermNode(termNode) {
    const termNodeMatches = this.termNode.match(termNode);

    return termNodeMatches;
  }

  matchVariableNode(variableNode) {
    const variableNodeMatches = this.variableNode.match(variableNode);

    return variableNodeMatches;
  }

  static fromVariableNodeAndTermNode(variableNode, termNode) {
    const termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);

    return termForVariableSubstitution;
  }
}