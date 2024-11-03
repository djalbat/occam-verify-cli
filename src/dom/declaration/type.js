"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class TypeDeclaration {
  constructor(fileContext, type) {
    this.fileContext = fileContext;
    this.type = type;
  }

  getFileContext() {
    return this.fileContext;
  }

  getType() {
    return this.type;
  }

  getString() { return this.type.getString(); }

  verify() {
    let verified = false;

    const typeDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${typeDeclarationString}' type declaration...`);

    const typeVerifiedWhenDeclared = this.type.verifyWhenDeclared(this.fileContext);

    if (typeVerifiedWhenDeclared) {
      this.fileContext.addType(this.type);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${typeDeclarationString}' type declaration.`);
    }

    return verified;
  }

  static name = "TypeDeclaration";

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
          typeDeclaration = new TypeDeclaration(fileContext, type);

    return typeDeclaration;
  }
});
