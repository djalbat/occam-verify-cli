"use strict";

import Type from "../type";

export default class TypeDeclaration {
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

    const typeVerified = this.type.verify(this.fileContext);

    if (typeVerified) {
      this.fileContext.addType(this.type);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${typeDeclarationString}' type declaration.`);
    }

    return verified;
  }

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
          typeDeclaration = new TypeDeclaration(fileContext, type);

    return typeDeclaration;
  }
}
