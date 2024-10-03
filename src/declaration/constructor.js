"use strict";

import Constructor from "../constructor";

export default class ConstructorDeclaration {
  constructor(fileContext, constructor) {
    this.fileContext = fileContext;
    this.constructor = constructor;
  }

  getFileContext() {
    return this.fileContext;
  }

  getConstructor() {
    return this.constructor;
  }

  getString() { return this.constructor.getString(); }

  verify(fileContext) {
    let verified;

    const constructorDeclarationString = this.getString(); ///

    fileContext.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const constructorVerified = this.constructor.verify(fileContext);

    if (constructorVerified) {
      fileContext.addConstructor(this.constructor);

      verified = true;
    }

    if (verified) {
      fileContext.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verified;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
          constructorDeclaration = new ConstructorDeclaration(fileContext, constructor);

    return constructorDeclaration;
  }
}