"use strict";

export default class VariableAssignment {
  constructor(variable) {
    this.variable = variable;
  }

  getVariable() {
    return this.variable;
  }

  assign(context) {
    const variableAdded = context.addVariable(this.variable),
          variableNode = this.variable.getNode(),
          variableType = this.variable.getType(),
          variableString = context.nodeAsString(variableNode),
          variableTypeName = variableType.getName(),
          variableAssigned = variableAdded; ///

    variableAssigned ?
      context.trace(`Assigned the '${variableString}' variable with type '${variableTypeName}'.`, variableNode) :
        context.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeName}'.`, variableNode);

    return variableAssigned;
  }

  static fromVariable(variable) {
    const variableAssignment = new VariableAssignment(variable);

    return variableAssignment;
  }
}
