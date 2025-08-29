"use strict";

export default class VariableAssignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(context) {
    const nested = false;

    context.addVariable(this.variable, nested);

    const variableType = this.variable.getType(),
          variableString = this.variable.getString(),
          variableAssigned = true, ///
          variableTypeString = variableType.getString();

    variableAssigned ?
      context.trace(`Assigned the '${variableString}' variable with type '${variableTypeString}'.`) :
        context.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeString}'.`);

    return variableAssigned;
  }

  static fromVariable(variable) {
    const variableAssignment = new VariableAssignment(variable);

    return variableAssignment;
  }
}
