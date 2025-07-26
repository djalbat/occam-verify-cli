"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { superTypesStringFromSuperTypes } from "../../utilities/type";
import { stringFromTypeNameNameAndSuperTypes } from "../../utilities/type";

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
      const superTypesVerified = this.verifySuperTypes();

      if (superTypesVerified) {
        this.fileContext.addType(this.type);

        verified = true;
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${typeDeclarationString}' type declaration.`);
    }

    return verified;
  }

  verifyType() {
    let typeVerified = false;

    const typeName = this.type.getName(),
          typeString = this.type.getString();

    this.fileContext.trace(`Verifying the '${typeString}' type...`);

    const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.fileContext.debug(`The type '${typeString}' is already present.`);
    } else {
      typeVerified = true;
    }

    if (typeVerified) {
      this.fileContext.debug(`...verified the '${typeString}' type.`);
    }

    return typeVerified;
  }

  verifySuperType(superType) {
    let superTypeVerified;

    const superTypeString = superType.getString();

    this.fileContext.trace(`Verifying the '${superTypeString}' super-type...`);

    const superTypeName = superType.getName(),
          superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);

    superTypeVerified = superTypePresent; ///

    if (superTypeVerified) {
      this.fileContext.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerified;
  }

  verifySuperTypes() {
    let superTypesVerified;

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerified = true;
    } else {
      let superTypes;

      superTypes = this.type.getSuperTypes();

      const superTypesString = superTypesStringFromSuperTypes(superTypes);

      this.fileContext.trace(`Verifying the ${superTypesString} super-types...`);

      superTypesVerified = superTypes.every((superType) => {
        const superTypeVerified = this.verifySuperType(superType);

        if (superTypeVerified) {
          return true;
        }
      });

      if (superTypesVerified) {
        superTypes = superTypes.map((superType) => {
          const superTypeName = superType.getName();

          superType = this.fileContext.findTypeByTypeName(superTypeName);

          return superType;
        });

        this.type.setSuperTypes(superTypes);

        this.fileContext.debug(`...verified the ${superTypesString} super-types.`);
      }
    }

    return superTypesVerified;
  }

  static name = "TypeDeclaration";

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext),
          typeName = type.getName(),
          superTypes = type.getSuperTypes(),
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          typeDeclaration = new TypeDeclaration(fileContext, string, type);

    return typeDeclaration;
  }
});
