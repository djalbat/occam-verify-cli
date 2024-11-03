"use strict";

import dom from "../../dom";

import { nodeQuery } from "../../utilities/query";
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
    let verified;

    const variableDeclarationString = this.string; ///

    this.fileContext.trace(`Verifying the '${variableDeclarationString}' variable declaration...`);

    const variableVerifiedWhenDeclared = this.variable.verifyWhenDeclared(this.fileContext);

    if (variableVerifiedWhenDeclared) {
      this.fileContext.addVariable(this.variable);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verified;
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
