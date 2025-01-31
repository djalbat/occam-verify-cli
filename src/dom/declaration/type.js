"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";

export default domAssigned(class TypeDeclaration {
  constructor(fileContext, string, type) {
    this.fileContext = fileContext;
    this.string = string;
    this.type = type;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  verify() {
    let verified = false;

    const typeDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${typeDeclarationString}' type declaration...`);

    const typeVerified = this.verifyType();

    if (typeVerified) {
      this.fileContext.addType(this.type);

      verified = true;
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${typeDeclarationString}' type declaration.`);
    }

    return verified;
  }

  verifyType() {
    let typeVerified = false;

    const typeName = this.type.getName();

    this.fileContext.trace(`Verifying the '${typeName}' type...`);

    const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.fileContext.debug(`The type '${typeName}' is not present.`);
    } else {
      const superTypes = this.type.getSuperTypes();

      this.type.resetSuperTypes();

      typeVerified = superTypes.every((superType) => {
        const superTypeName = superTypes.getName();

        superType = this.fileContext.findTypeByTypeName(superTypeName);

        if (superType === null) {
          this.fileContext.debug(`The super-type '${superTypeName}' is not present.`);
        } else {
          this.type.addSuperType(superType);

          return true;
        }
      });
    }

    if (typeVerified) {
      this.fileContext.debug(`...typeVerified the '${typeName}' type.`);
    }

    return typeVerified;
  }

  static name = "TypeDeclaration";

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
          node = typeDeclarationNode, ///
          string = fileContext.nodeAsString(node),
          typeDeclaration = new TypeDeclaration(fileContext, string, type);

    return typeDeclaration;
  }
});
