"use strict";

export default class VariableAssignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(context) {
    const nested = false,
          variableAdded = context.addVariable(this.variable, nested),
          variableType = this.variable.getType(),
          variableString = this.variable.getString(),
          variableTypeName = variableType.getName(),
          variableAssigned = variableAdded; ///

    variableAssigned ?
      context.trace(`Assigned the '${variableString}' variable with type '${variableTypeName}'.`) :
        context.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeName}'.`);

    return variableAssigned;
  }

  static fromVariable(variable) {
    const variableAssignment = new VariableAssignment(variable);

    return variableAssignment;
  }
}
