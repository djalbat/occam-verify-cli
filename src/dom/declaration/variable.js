"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
import { objectType } from "../type";
import { domAssigned } from "../../dom";
import { typeNameFromTypeNode } from "../../utilities/name";

const typeNodeQuery = nodeQuery("/variableDeclaration/type");

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

    const variableDeclarationString = this.string; ///

    this.fileContext.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);

    const variableVerified = this.verifyVariable(this.variable);

    if (variableVerified) {
      let type;

      type = this.variable.getType();

      const typeVerified = this.verifyType(type);

      if (typeVerified) {
        const typeName = type.getName();

        type = this.fileContext.findTypeByTypeName(typeName);

        this.variable.setType(type);

        this.fileContext.addVariable(this.variable);

        verified = true;
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verified;
  }

  verifyType(type) {
    let typeVerified = false;

    if (type === objectType) {
      typeVerified = true;
    } else {
      const typeName = type.getName();

      this.fileContext.trace(`Verifying the '${typeName}' type...`);

      const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

      if (!typePresent) {
        this.fileContext.debug(`The '${typeName}' type is not present.`);
      } else {
        typeVerified = true;
      }

      if (typeVerified) {
        this.fileContext.debug(`...verified the '${typeName}' type.`);
      }
    }

    return typeVerified;
  }

  verifyVariable(variable) {
    let  variableVerified = false;

    const variableString = variable.getString();

    this.fileContext.trace(`Verifying the '${variableString}' variable...`);

    const variableName = variable.getName(),
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
          typeNode = typeNodeQuery(variableDeclarationNode),
          variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, fileContext),
          string = stringFromVariableAndTypeNode(variable, typeNode),
          variableDeclaration = new VariableDeclaration(fileContext, string, variable);

    return variableDeclaration;
  }
});

function stringFromVariableAndTypeNode(variable, typeNode) {
  let string;

  const variableString = variable.getString();

  if (typeNode === null) {
    string = variableString;  ///
  } else {
    const typeName = typeNameFromTypeNode(typeNode);

    string = `${variableString}:${typeName}`;
  }

  return string;
}
