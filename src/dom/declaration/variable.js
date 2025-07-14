"use strict";

import dom from "../../dom";

import { objectType } from "../type";
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

    const variableVerified = this.verifyVariable();

    if (variableVerified) {
      const variableTypeVerified = this.verifyVariableType();

      if (variableTypeVerified) {
        let type;

        type = this.variable.getType();

        const typeObjectType = (type === objectType);

        if (!typeObjectType) {
          const typeName = type.getName();

          type = this.fileContext.findTypeByTypeName(typeName);
        }

        const typeProvisional = type.isProvisional(),
              variableProvisional = this.variable.isProvisional();

        if (typeProvisional !== variableProvisional) {
          const typeString = type.getString(),
                variableString = this.variable.getString();

          if (typeProvisional) {
            this.fileContext.debug(`The '${typeString}' type is provisional whilst the '${variableString}' variable's type is not.`);
          }

          if (variableProvisional) {
            this.fileContext.debug(`The '${typeString}' type is not provisional whilst the '${variableString}' variable's type is.`);
          }
        } else {
          this.variable.setType(type);

          this.fileContext.addVariable(this.variable);

          verified = true;
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verified;
  }

  verifyVariableType() {
    let typeVerified = false;

    const type = this.variable.getType();

    if (type === objectType) {
      typeVerified = true;
    } else {
      const typeString = type.getString();

      this.fileContext.trace(`Verifying the '${typeString}' type...`);

      const typePresent = this.fileContext.isTypePresentByTypeName(typeString);

      if (!typePresent) {
        this.fileContext.debug(`The '${typeString}' type is not present.`);
      } else {
        typeVerified = true;
      }

      if (typeVerified) {
        this.fileContext.debug(`...verified the '${typeString}' type.`);
      }
    }

    return typeVerified;
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
