"use strict";

export default class VariableAssignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(localContext) {
    const variableAdded = localContext.addVariable(this.variable),
          variableNode = this.variable.getNode(),
          variableString = localContext.nodeAsString(variableNode),
          variableAssigned = variableAdded; ///

    variableAssigned ?
      localContext.debug(`Able to assign the '${variableString}' variable.`, variableNode) :
        localContext.trace(`Unable to assign the '${variableString}' variable.`, variableNode);

    return variableAssigned;
  }

  static fromVariable(variable) {
    const variableAssignment = new VariableAssignment(variable);

    return variableAssignment;
  }
}
