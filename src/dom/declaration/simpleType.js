"use strict";

import dom from "../../dom";

import { objectType } from "../type";
import { domAssigned } from "../../dom";
import { stringFromTypeNameNameAndSuperTypes } from "../../utilities/type";

export default domAssigned(class SimpleTypeDeclaration {
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

    const typeString = this.type.getString();

    this.fileContext.trace(`Verifying the '${typeString}' type...`);

    const typeName = this.type.getName(),
          typePresent = this.fileContext.isTypePresentByTypeName(typeName);

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
    let superTypeVerifies = false;

    const superTypeString = superType.getString();

    this.fileContext.trace(`Verifying the '${superTypeString}' super-type...`);

    const superTypeName = superType.getName(),
          superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);

    if (superTypePresent) {
      superTypeVerifies = true;
    }

    if (superTypeVerifies) {
      this.fileContext.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify = false;

    this.fileContext.trace(`Verifying the super-types...`);

    let superTypes;

    superTypes = this.type.getSuperTypes();

    const superTypesLength = superTypes.length;

    if (superTypesLength === 0) {
      const superType = objectType; ///

      superTypes.push(superType);
    }

    const typeName = this.type.getName(),
          typeBasic = this.type.isBasic(),
          typeString = this.type.getString();

    if (typeBasic) {
      superTypesVerify = true;

      this.fileContext.trace(`The '${typeString}' type is basic.`)
    } else  {
      const superTypeNames = superTypes.map((superType) => {
              const superTypeName = superType.getName();

              return superTypeName;
            }),
            superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);

      if (superTypeNamesIncludesTypeName) {
        this.fileContext.trace(`The '${typeName}' type cannot be a super-type `);
      } else {
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

          const string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes);

          this.type.setString(string);

          this.type.setSuperTypes(superTypes);
        }
      }
    }

    if (superTypesVerify) {
      this.fileContext.debug(`...verified the super-types.`);
    }

    return superTypesVerify;
  }

  static name = "SimpleTypeDeclaration";

  static fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, fileContext),
          typeName = type.getName(),
          superTypes = type.getSuperTypes(),
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          simpleTypeDeclaration = new SimpleTypeDeclaration(fileContext, string, type);

    return simpleTypeDeclaration;
  }
});
