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

    const typeVerified = this.verifyType(this.type);

    if (typeVerified) {
      this.fileContext.addType(this.type);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${typeDeclarationString}' type declaration.`);
    }

    return verified;
  }

  verifyType(type) {
    let typeVerified = false;

    const typeString = type.getString(); ///

    this.fileContext.trace(`Verifying the '${typeString}' type...`);

    const typeName = type.getName(),
      typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      const typeString = this.type.getString();

      this.fileContext.debug(`The type '${typeString}' is not present.`);
    } else {
      let superType;

      superType = type.getSuperType();

      const superTypeName = superType.getName();

      superType = this.fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        const superTypeString = superType.getString();

        this.fileContext.debug(`The super-type '${superTypeString}' is not present.`);
      } else {
        type.setSuperType(superType);

        typeVerified = true;
      }
    }

    if (typeVerified) {
      this.fileContext.debug(`...typeVerified the '${typeString}' type.`);
    }

    return typeVerified;
  }

  static name = "TypeDeclaration";

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
          typeDeclaration = new TypeDeclaration(fileContext, type);

    return typeDeclaration;
  }
});
