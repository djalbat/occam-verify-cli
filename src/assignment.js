"use strict";

export default class Assignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(proofContext) {
    proofContext.addVariable(this.variable);
  }

  match(assignment) {
    const variable = assignment.getVariable(),
          variableMatches = variable.match(this.variable),
          matches = variableMatches;  ///

    return matches;
  }

  matchNameAndType(name, type) {
    const variableMatchesNameAndType = this.variable.matchNameAndType(name, type),
          nameAndTypeMatch = variableMatchesNameAndType; ///

    return nameAndTypeMatch;
  }

  static fromVariable(variable) {
    const assignment = new Assignment(variable);

    return assignment;
  }
}
