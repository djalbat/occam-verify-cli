"use strict";

import Type, {objectType} from "../type";
import Variable from "../variable";

import { nodeQuery } from "../utilities/query";

const typeNodeQuery = nodeQuery("/variableDeclaration/type");

export default class VariableDeclaration {
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

    const variableVerifiedAtTopLevel = this.variable.verifyAtTopLevel(this.fileContext);

    if (variableVerifiedAtTopLevel) {
      this.fileContext.addVariable(this.variable);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${variableDeclarationString}' variable declaration.`);
    }

    return verified;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const typeNode = typeNodeQuery(variableDeclarationNode),
          type = (typeNode === null) ?
                   objectType :
                     Type.fromTypeNode(typeNode, fileContext),
          variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, fileContext),
          string = stringFromVariableAndType(variable, type),
          variableDeclaration = new VariableDeclaration(fileContext, string, variable);

    return variableDeclaration;
  }
}

function stringFromVariableAndType(variable, type) {
  let string;

  const variableString = variable.getString();

  if (type === null) {
    string = variableString;  ///
  } else {
    const typeString = type.getString();

    string = `${variableString}:${typeString}`;
  }

  return string;
}
