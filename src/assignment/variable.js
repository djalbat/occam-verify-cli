"use strict";

export default class VariableAssignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(localContext) {
    const nested = false,
          variableAdded = localContext.addVariable(this.variable, nested),
          variableType = this.variable.getType(),
          variableString = this.variable.getString(),
          variableTypeName = variableType.getName(),
          variableAssigned = variableAdded; ///

    variableAssigned ?
      localContext.trace(`Assigned the '${variableString}' variable with type '${variableTypeName}'.`) :
        localContext.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeName}'.`);

    return variableAssigned;
  }

  static fromVariable(variable) {
    const variableAssignment = new VariableAssignment(variable);

    return variableAssignment;
  }
}
