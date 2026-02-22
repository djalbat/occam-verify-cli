"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";
import { superTypesStringFromSuperTypes } from "../../utilities/string";

export default define(class SimpleTypeDeclaration extends Declaration {
  constructor(context, string, node, type, prefixed, superTypes) {
    super(context, string, node);

    this.type = type;
    this.prefixed = prefixed;
    this.superTypes = superTypes;
  }

  getType() {
    return this.type;
  }

  isPrefixed() {
    return this.prefixed;
  }

  getSuperTypes() {
    return this.superTypes;
  }

  getSimpleTypeDeclarationNode() {
    const node = this.getNode(),
          simpleTypeDeclarationNode = node; ///

    return simpleTypeDeclarationNode;
  }

  verifyType() {
    let typeVerifies = false;

    const context = this.getContext(),
          typeString = this.type.getString(),
          simpleTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type...`);

    const typeName = this.type.getName(),
          includeRelease = true,
          includeDependencies = false,
          typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);

    if (!typePresent) {
      const prefixedTypeName = typeName, ///
            typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (!typePresent) {
        typeVerifies = true;
      } else {
        context.debug(`The '${typeString}' type is already present.`);
      }
    } else {
      context.debug(`The '${typeString}' type is already present.`);
    }

    if (typeVerifies) {
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type`);
    }

    return typeVerifies;
  }

  verifySuperType(superType, index) {
    let superTypeVerifies = false;

    const context = this.getContext(),
          superTypeString = superType.getString(),
          simpleTypeDeclarationString = this.getString(); ///;

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${superTypeString}' super-types...`);

    const nominalTypeName = superType.getNominalTypeName(),
          typeName = nominalTypeName, ///
          typeComparesToTypeName = this.type.compareTypeName(typeName);

    if (!typeComparesToTypeName) {
      superType = context.findTypeByNominalTypeName(nominalTypeName);

      if (superType !== null) {
        this.type.replaceSuperType(superType, index);

        superTypeVerifies = true;
      } else {
        context.debug(`The '${superTypeString}' super-type is not present.`);
      }
    } else {
      context.debug(`The '${superTypeString}' super-type's name compares to the ${typeName}' type's name.`);
    }

    if (superTypeVerifies) {
      context.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify;

    const superTypesLength = this.superTypes.length;

    if (superTypesLength > 0) {
      const context = this.getContext(),
            superTypesString = superTypesStringFromSuperTypes(this.superTypes),
            simpleTypeDeclarationString = this.getString(); ///;

      context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types...`);

      superTypesVerify = this.superTypes.every((superType, index) => {
        const superTypeVerifies = this.verifySuperType(superType, index);

        if (superTypeVerifies) {
          return true;
        }
      });

      if (superTypesVerify) {
        context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types.`);
      }
    } else {
      superTypesVerify = true;
    }

    return superTypesVerify;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          simpleTypeDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration...`);

    if (!this.prefixed) {
      const typeVerifies = this.verifyType();

      if (typeVerifies) {
        const superTypesVerify = this.verifySuperTypes();

        if (superTypesVerify) {
          const typePrefix = context.getTypePrefix();

          if (typePrefix !== null) {
            const typePrefixName = typePrefix.getName(),
                  prefixName = typePrefixName;  ///

            this.type.setPrefixName(prefixName);
          }

          context.addType(this.type);

          verifies = true;
        }
      }
    } else {
      const typeString = this.type.getString();

      context.trace(`The '${typeString}' type is prefixed.`);
    }

    if (verifies) {
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration.`);
    }

    return verifies;
  }

  static name = "SimpleTypeDeclaration";
});
