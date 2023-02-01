"use strict";

import matcher from "../matcher";

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
    let matchesTermNode;

    const nodeA = this.termNode,  ///
          nodeB = termNode,
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    matchesTermNode = nodeMatches;  ///

    return matchesTermNode;
  }

  static fromVariableNameAndTermNode(variableName, termNode) {
    const termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);

    return termForVariableSubstitution;
  }
}
