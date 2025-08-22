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
    let verifies = false;

    const typeDeclarationString = this.getString(); ///

    this.fileContext.trace(`Verifying the '${typeDeclarationString}' type declaration...`);

    const typeVerifies = this.verifyType();

    if (typeVerifies) {
      const superTypesVerify = this.verifySuperTypes();

      if (superTypesVerify) {
        this.fileContext.addType(this.type);

        verifies = true;
      }
    }

    if (verifies) {
      this.fileContext.debug(`...verified the '${typeDeclarationString}' type declaration.`);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const typeName = this.type.getName(),
          typeString = this.type.getString();

    this.fileContext.trace(`Verifying the '${typeString}' type...`);

    const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.fileContext.debug(`The type '${typeString}' is already present.`);
    } else {
      typeVerifies = true;
    }

    if (typeVerifies) {
      this.fileContext.debug(`...verified the '${typeString}' type.`);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies;

    const superTypeString = superType.getString();

    this.fileContext.trace(`Verifying the '${superTypeString}' super-type...`);

    const superTypeName = superType.getName(),
          superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);

    superTypeVerifies = superTypePresent; ///

    if (superTypeVerifies) {
      this.fileContext.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify;

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;
    } else {
      let superTypes;

      superTypes = this.type.getSuperTypes();

      const superTypesString = superTypesStringFromSuperTypes(superTypes);

      this.fileContext.trace(`Verifying the ${superTypesString} super-types...`);

      superTypesVerify = superTypes.every((superType) => {
        const superTypeVerifies = this.verifySuperType(superType);

        if (superTypeVerifies) {
          return true;
        }
      });

      if (superTypesVerify) {
        superTypes = superTypes.map((superType) => {
          const superTypeName = superType.getName();

          superType = this.fileContext.findTypeByTypeName(superTypeName);

          return superType;
        });

        this.type.setSuperTypes(superTypes);

        this.fileContext.debug(`...verified the ${superTypesString} super-types.`);
      }
    }

    return superTypesVerify;
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
