"use strict";

import dom from "../../dom";

import { objectType } from "../type";
import { domAssigned } from "../../dom";
import { stringFromTypeNameTypePrefixNameAndSuperTypes } from "../../utilities/type";

export default domAssigned(class SimpleTypeDeclaration {
  constructor(context, node, string, type, prefixed) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.type = type;
    this.prefixed = prefixed;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  isPrefixed() {
    return this.prefixed;
  }

  verify() {
    let verifies = false;

    const simpleTypeDeclarationString = this.string;  ///

    this.context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration...`, this.node);

    if (this.prefixed) {
      const typeString = this.type.getString();

      this.context.trace(`The '${typeString}' type is prefixed.`);
    } else {
      const typeVerifies = this.verifyType();

      if (typeVerifies) {
        const superTypesVerify = this.verifySuperTypes();

        if (superTypesVerify) {
          this.context.addType(this.type);

          verifies = true;
        }
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration.`, this.node);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const typeString = this.type.getString();

    this.context.trace(`Verifying the '${typeString}' simple type...`, this.node);

    const typeName = this.type.getName(),
          typePresent = this.context.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.context.trace(`The '${typeString}' type is already present.`, this.node);
    } else {
      typeVerifies = true;
    }

    if (typeVerifies) {
      this.context.trace(`...verified the '${typeString}' simple type.`, this.node);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const superTypeString = superType.getString();

    this.context.trace(`Verifying the '${superTypeString}' super-type...`, this.node);

    const superTypeName = superType.getName(),
          superTypePresent = this.context.isTypePresentByTypeName(superTypeName);

    if (superTypePresent) {
      superTypeVerifies = true;
    }

    if (superTypeVerifies) {
      this.context.debug(`...verified the '${superTypeString}' super-type.`, this.node);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify = false;

    this.context.trace(`Verifying the super-types...`, this.node);

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

      this.context.trace(`The '${typeString}' simple type is basic.`, this.node)
    } else  {
      const superTypeNames = superTypes.map((superType) => {
              const superTypeName = superType.getName();

              return superTypeName;
            }),
            superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);

      if (superTypeNamesIncludesTypeName) {
        this.context.trace(`The '${typeName}' simple type cannot be a super-type `, this.node);
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

          this.type.setSuperTypes(superTypes);
        }
      }
    }

    if (superTypesVerify) {
      this.context.debug(`...verified the super-types.`, this.node);
    }

    return superTypesVerify;
  }

  static name = "SimpleTypeDeclaration";

  static fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const { Type } = dom,
          type = Type.fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
          node = simpleTypeDeclarationNode, ///
          prefixed = simpleTypeDeclarationNode.isPrefixed(),
          typePrefixName = simpleTypeDeclarationNode.getTypePrefixName(),
          typeName = type.getName(),
          superTypes = type.getSuperTypes(),
          string = stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes),
          simpleTypeDeclaration = new SimpleTypeDeclaration(context, node, string, type, prefixed);

    return simpleTypeDeclaration;
  }
});
