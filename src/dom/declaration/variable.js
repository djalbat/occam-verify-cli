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
    let verified = false;

    const variableDeclarationString = this.getString();

    this.fileContext.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);

    const variableTypeVerified = this.verifyVariableType();

    if (variableTypeVerified) {
      const variableVerified = this.verifyVariable();

      if (variableVerified) {
        this.fileContext.addVariable(this.variable);

        verified = true;
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verified;
  }

  verifyVariable() {
    let  variableVerified = false;

    const variableString = this.variable.getString();

    this.fileContext.trace(`Verifying the '${variableString}' variable...`);

    const variableName = this.variable.getName(),
          variablePresent = this.fileContext.isVariablePresentByVariableName(variableName);

    if (variablePresent) {
      this.fileContext.debug(`The '${variableName}' variable is already present.`);
    } else {
      variableVerified = true;
    }

    if ( variableVerified) {
      this.fileContext.debug(`...verified the '${variableString}' variable.`);
    }

    return  variableVerified;
  }

  verifyVariableType() {
    let variableTypeVerified = false;

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

        variableTypeVerified = true;
      }
    }

    if (variableTypeVerified) {
      this.fileContext.debug(`...verified the '${typeString}' type.`);
    }

    return variableTypeVerified;
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
