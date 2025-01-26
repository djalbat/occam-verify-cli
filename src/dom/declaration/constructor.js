"use strict";

import dom from "../../dom";

import { objectType } from "../type";
import { domAssigned } from "../../dom";

import constructorVerifier from "../../verifier/constructor";

export default domAssigned(class ConstructorDeclaration {
  constructor(fileContext, string, constructor) {
    this.fileContext = fileContext;
    this.string = string;
    this.constructor = constructor;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  getConstructor() {
    return this.constructor;
  }

  verify() {
    let verified;

    const constructorDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${constructorDeclarationString}' constructor declaration...`);

    const term = this.constructor.getTerm(),
          termVerified = this.verifyTerm(term);

    if (termVerified) {
      let type = this.constructor.getType();

      const typeVerified = this.verifyType(type);

      if (typeVerified) {
        const typeName = type.getName();

        type = this.fileContext.findTypeByTypeName(typeName);

        term.setType(type);

        this.fileContext.addConstructor(this.constructor);

        verified = true;
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${constructorDeclarationString}' constructor declaration.`);
    }

    return verified;
  }

  verifyTerm(term) {
    let termVerified;

    const termString = term.getString(); ///

    this.fileContext.trace(`Verifying the '${termString}' term...`);

    const termNode = term.getNode();

    termVerified = constructorVerifier.verifyTerm(termNode, this.fileContext);

    if (termVerified) {
      this.fileContext.debug(`...verified the '${termString}' term.`);
    }

    return termVerified;
  }

  verifyType(type) {
    let typeVerified;

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

  static name = "ConstructorDeclaration";

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const { Constructor } = dom,
          node = constructorDeclarationNode,  ///
          string = fileContext.nodeAsString(node),
          constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext),
          constructorDeclaration = new ConstructorDeclaration(fileContext, string, constructor);

    return constructorDeclaration;
  }
});
