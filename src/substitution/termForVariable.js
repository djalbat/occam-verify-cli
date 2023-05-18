"use strict";

export default class TermForVariableSubstitution {
  constructor(variableName, termNode) {
    this.variableName = variableName;
    this.termNode = termNode;
  }

  getVariableName() {
    return this.variableName;
  }

  getTermNode() {
    return this.termNode;
  }

  matchTermNode(termNode) {
    let termNodeMatches;

    termNodeMatches = this.termNode.match(termNode);

    return termNodeMatches;
  }

  static fromVariableNameAndTermNode(variableName, termNode) {
    const termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);

    return termForVariableSubstitution;
  }
}
