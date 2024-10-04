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

  verify() {
    let verified;

    const constructorDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const constructorVerified = this.constructor.verify(this.fileContext);

    if (constructorVerified) {
      this.fileContext.addConstructor(this.constructor);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verified;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
          constructorDeclaration = new ConstructorDeclaration(fileContext, constructor);

    return constructorDeclaration;
  }
}