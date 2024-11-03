"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class ConstructorDeclaration {
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

    const constructorVerifiedWhenDeclared = this.constructor.verifyWhenDeclared(this.fileContext);

    if (constructorVerifiedWhenDeclared) {
      this.fileContext.addConstructor(this.constructor);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verified;
  }

  static name = "ConstructorDeclaration";

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const { Constructor } = dom,
          constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
          constructorDeclaration = new ConstructorDeclaration(fileContext, constructor);

    return constructorDeclaration;
  }
});
