"use strict";

import dom from "../../dom";

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
          const typePrefix = this.context.getTypePrefix();

          if (typePrefix !== null) {
            const typePrefixName = typePrefix.getName(),
                  prefixName = typePrefixName;  ///

            this.type.setPrefixName(prefixName);
          }

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
          includeRelease = true,
          includeDependencies = false,
          typePresent = this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);

    if (typePresent) {
      this.context.trace(`The '${typeString}' type is already present.`, this.node);
    } else {
      const prefixedTypeName = typeName, ///
            typePresent = this.context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (typePresent) {
        this.context.trace(`The '${typeString}' type is already present.`, this.node);
      } else {
        typeVerifies = true;
      }
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

    const nominalTypeName = superType.getNominalTypeName(),
          typeName = nominalTypeName, ///
          typeNameMatches = this.type.matchTypeName(typeName);

    if (typeNameMatches) {
      this.context.trace(`The super-type's name matches the ${typeName}' simple type's name.`, this.node);
    } else {
      const oldSuperType = superType;

      superType = this.context.findTypeByNominalTypeName(nominalTypeName);

      const superTypePresent = (superType !== null);

      if (superTypePresent) {
        this.type.replaceSuperType(oldSuperType, newSuperType);

        superTypeVerifies = true;
      }
    }

    if (superTypeVerifies) {
      this.context.debug(`...verified the '${superTypeString}' super-type.`, this.node);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify;

    const typeString = this.type.getString();

    this.context.trace(`Verifying the '${typeString}' simple type's super-types...`, this.node);

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;

      this.context.trace(`The '${typeString}' simple type is basic.`, this.node)
    } else  {
      const superTypes = this.type.getSuperTypes();

      superTypesVerify = superTypes.every((superType) => {
        const superTypeVerifies = this.verifySuperType(superType);

        if (superTypeVerifies) {
          return true;
        }
      });
    }

    if (superTypesVerify) {
      this.context.debug(`...verified the '${typeString}' simple type's super-types.`, this.node);
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
