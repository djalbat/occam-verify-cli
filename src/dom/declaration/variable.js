"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class VariableDeclaration {
  constructor(fileContext, string, variable) {
    this.fileContext = fileContext;
    this.string = string;
    this.variable = variable;
  }

  getFileContext() {
    return this.fileContext;
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

    this.fileContext.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);

    const variableTypeVerifies = this.verifyVariableType();

    if (variableTypeVerifies) {
      const variableVerifies = this.verifyVariable();

      if (variableVerifies) {
        this.fileContext.addVariable(this.variable);

        verifies = true;
      }
    }

    if (verifies) {
      this.fileContext.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verifies;
  }

  verifyVariable() {
    let  variableVerifies = false;

    const variableString = this.variable.getString();

    this.fileContext.trace(`Verifying the '${variableString}' variable...`);

    const variableName = this.variable.getName(),
          variablePresent = this.fileContext.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      this.fileContext.debug(`The '${variableName}' variable is already present.`);
    } else {
      variableVerifies = true;
    }

    if ( variableVerifies) {
      this.fileContext.debug(`...verified the '${variableString}' variable.`);
    }

    return  variableVerifies;
  }

  verifyVariableType() {
    let variableTypeVerifies = false;

    let type;

    type = this.variable.getType();

    const typeName = type.getName(),
          typeString = type.getString();

    this.fileContext.trace(`Verifying the '${typeString}' type...`);

    const includeSupertypes = false,
          provisional = type.isProvisional(includeSupertypes);

    type = this.fileContext.findTypeByTypeName(typeName);

    const typePresent = (type !== null)

    if (!typePresent) {
      this.fileContext.debug(`The '${typeString}' type is not present.`);
    } else {
      const provisionalMatches = type.matchProvisional(provisional);

      if (!provisionalMatches) {
        provisional ?
          this.fileContext.debug(`The '${typeString}' type is present but not provisional.`) :
            this.fileContext.debug(`The '${typeString}' type is present but provisional.`);
      } else {
        this.variable.setType(type);

        variableTypeVerifies = true;
      }
    }

    if (variableTypeVerifies) {
      this.fileContext.debug(`...verified the '${typeString}' type.`);
    }

    return variableTypeVerifies;
  }

  static name = "VariableDeclaration";

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const { Variable } = dom,
          node = variableDeclarationNode, ///
          string = fileContext.nodeAsString(node),
          variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, fileContext),
          variableDeclaration = new VariableDeclaration(fileContext, string, variable);

    return variableDeclaration;
  }
});
