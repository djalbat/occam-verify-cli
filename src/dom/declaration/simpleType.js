"use strict";

import dom from "../../dom";

import { objectType } from "../type";
import { domAssigned } from "../../dom";
import { stringFromTypeNameNameAndSuperTypes } from "../../utilities/type";

export default domAssigned(class SimpleTypeDeclaration {
  constructor(context, string, type) {
    this.context = context;
    this.string = string;
    this.type = type;
  }

  getContext() {
    return this.context;
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

    this.context.trace(`Verifying the '${typeDeclarationString}' type declaration...`);

    const typeVerifies = this.verifyType();

    if (typeVerifies) {
      const superTypesVerify = this.verifySuperTypes();

      if (superTypesVerify) {
        this.context.addType(this.type);

        verifies = true;
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${typeDeclarationString}' type declaration.`);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const typeString = this.type.getString();

    this.context.trace(`Verifying the '${typeString}' type...`);

    const typeName = this.type.getName(),
          typePresent = this.context.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.context.debug(`The type '${typeString}' is already present.`);
    } else {
      typeVerifies = true;
    }

    if (typeVerifies) {
      this.context.debug(`...verified the '${typeString}' type.`);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const superTypeString = superType.getString();

    this.context.trace(`Verifying the '${superTypeString}' super-type...`);

    const superTypeName = superType.getName(),
          superTypePresent = this.context.isTypePresentByTypeName(superTypeName);

    if (superTypePresent) {
      superTypeVerifies = true;
    }

    if (superTypeVerifies) {
      this.context.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify = false;

    this.context.trace(`Verifying the super-types...`);

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

      this.context.trace(`The '${typeString}' type is basic.`)
    } else  {
      const superTypeNames = superTypes.map((superType) => {
              const superTypeName = superType.getName();

              return superTypeName;
            }),
            superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);

      if (superTypeNamesIncludesTypeName) {
        this.context.trace(`The '${typeName}' type cannot be a super-type `);
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

            superType = this.context.findTypeByTypeName(superTypeName);

            return superType;
          });

          const string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes);

          this.type.setString(string);

          this.type.setSuperTypes(superTypes);
        }
      }
    }

    if (superTypesVerify) {
      this.context.debug(`...verified the super-types.`);
    }

    return superTypesVerify;
  }

  static name = "SimpleTypeDeclaration";

  static fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const { Type } = dom,
          type = Type.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
          typeName = type.getName(),
          superTypes = type.getSuperTypes(),
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          simpleTypeDeclaration = new SimpleTypeDeclaration(context, string, type);

    return simpleTypeDeclaration;
  }
});
