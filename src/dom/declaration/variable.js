"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class VariableDeclaration {
  constructor(context, string, variable) {
    this.context = context;
    this.string = string;
    this.variable = variable;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getVariable() {
    return this.variable;
  }

  verify() {
    let verifies = false;

    const variableDeclarationString = this.getString();

    this.context.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);

    const variableTypeVerifies = this.verifyVariableType();

    if (variableTypeVerifies) {
      const variableVerifies = this.verifyVariable();

      if (variableVerifies) {
        this.context.addVariable(this.variable);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verifies;
  }

  verifyVariable() {
    let  variableVerifies = false;

    const variableString = this.variable.getString();

    this.context.trace(`Verifying the '${variableString}' variable...`);

    const variableName = this.variable.getName(),
          variablePresent = this.context.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      this.context.debug(`The '${variableName}' variable is already present.`);
    } else {
      variableVerifies = true;
    }

    if ( variableVerifies) {
      this.context.debug(`...verified the '${variableString}' variable.`);
    }

    return  variableVerifies;
  }

  verifyVariableType() {
    let variableTypeVerifies = false;

    let type;

    type = this.variable.getType();

    const typeName = type.getName(),
          typeString = type.getString();

    this.context.trace(`Verifying the '${typeString}' type...`);

    const includeSupertypes = false,
          provisional = type.isProvisional(includeSupertypes);

    type = this.context.findTypeByTypeName(typeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      this.context.debug(`The '${typeString}' type is not present.`);
    } else {
      const provisionalMatches = type.matchProvisional(provisional);

      if (!provisionalMatches) {
        provisional ?
          this.context.debug(`The '${typeString}' type is present but not provisional.`) :
            this.context.debug(`The '${typeString}' type is present but provisional.`);
      } else {
        this.variable.setType(type);

        variableTypeVerifies = true;
      }
    }

    if (variableTypeVerifies) {
      this.context.debug(`...verified the '${typeString}' type.`);
    }

    return variableTypeVerifies;
  }

  static name = "VariableDeclaration";

  static fromVariableDeclarationNode(variableDeclarationNode, context) {
    const { Variable } = dom,
          node = variableDeclarationNode, ///
          string = context.nodeAsString(node),
          variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, context),
          variableDeclaration = new VariableDeclaration(context, string, variable);

    return variableDeclaration;
  }
});
