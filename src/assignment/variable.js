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
          variableType = this.variable.getType(),
          variableString = localContext.nodeAsString(variableNode),
          variableTypeName = variableType.getName(),
          variableAssigned = variableAdded; ///

    variableAssigned ?
      localContext.trace(`Assigned the '${variableString}' variable with type '${variableTypeName}'.`, variableNode) :
        localContext.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeName}'.`, variableNode);

    return variableAssigned;
  }

  static fromVariable(variable) {
    const variableAssignment = new VariableAssignment(variable);

    return variableAssignment;
  }
}
