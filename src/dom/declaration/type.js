"use strict";

import dom from "../../dom";

import { objectType } from "../type";
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
      const superTypesVerified = this.verifySuperTypes();

      if (superTypesVerified) {
        let superTypes;

        superTypes = this.type.getSuperTypes();

        superTypes = superTypes.map((superType) => {
          const superTypeName = superType.getName();

          superType = this.fileContext.findTypeByTypeName(superTypeName);

          return superType;
        });

        this.type.setSuperTypes(superTypes);

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

    const typeName = this.type.getName();

    this.fileContext.trace(`Verifying the '${typeName}' type...`);

    const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (!typePresent) {
      typeVerified = true;
    }

    if (typeVerified) {
      this.fileContext.debug(`...verified the '${typeName}' type.`);
    }

    return typeVerified;
  }

  verifySuperTypes() {
    let superTypesVerified;

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerified = true;
    } else {
      const typeName = this.type.getName(),
            superTypes = this.type.getSuperTypes(),
            superTypesString = superTypesStringFromSuperTypes(superTypes);

      this.fileContext.trace(`Verifying the '${typeName}' type's ${superTypesString} super-types...`);

      superTypesVerified = superTypes.every((superType) => {
        const superTypeVerified = this.verifySuperType(superType);

        if (superTypeVerified) {
          return true;
        }
      });

      if (superTypesVerified) {
        this.fileContext.debug(`...verified the '${typeName}' type's ${superTypesString} super-types.`);
      }
    }

    return superTypesVerified;
  }

  verifySuperType(superType) {
    let superTypeVerified;

    const superTypeObjectType = (superType === objectType);

    if (superTypeObjectType) {
      superTypeVerified = true;
    } else {
      const typeName = this.type.getString(),
            superTypeString = superTypeStringFromSuperType(superType);

      this.fileContext.trace(`Verifying the '${typeName}' type's '${superTypeString}' super-type...`);

      const superTypeName = superType.getName(),
            superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);

      superTypeVerified = superTypePresent; ///

      if (superTypeVerified) {
        this.fileContext.debug(`...verified the '${typeName}' type's '${superTypeString}' super-type.`);
      }
    }

    return superTypeVerified;
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

export function superTypeStringFromSuperType(superType) {
  const superTypeName = superType.getName(),
        superTypeString = superTypeName;  ///

  return superTypeString;
}

export function superTypesStringFromSuperTypes(superTypes) {
  const superTypesString = superTypes.reduce((superTypesString, superType) => {
    const superTypeString = superTypeStringFromSuperType(superType);

    superTypesString = (superTypesString === null) ?
                        `'${superTypeString}'` :
                          `${superTypesString}, '${superTypeString}'`;

    return superTypesString;
  }, null);

  return superTypesString;
}

