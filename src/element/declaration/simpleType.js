"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";
import { superTypesStringFromSuperTypes } from "../../utilities/string";
import {baseTypeFromNothing} from "../../utilities/type";

export default define(class SimpleTypeDeclaration extends Declaration {
  constructor(context, string, node, type, superTypes) {
    super(context, string, node);

    this.type = type;
    this.superTypes = superTypes;
  }

  getType() {
    return this.type;
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

  verifySuperType(superType, superTypes) {
    let superTypeVerifies = false;

    const context = this.getContext(),
          superTypeString = superType.getString(),
          simpleTypeDeclarationString = this.getString(); ///;

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${superTypeString}' super-type...`);

    const nominalTypeName = superType.getNominalTypeName(),
          typeName = nominalTypeName, ///
          typeComparesToTypeName = this.type.compareTypeName(typeName);

    if (!typeComparesToTypeName) {
      superType = context.findTypeByNominalTypeName(nominalTypeName);

      if (superType !== null) {
        superTypes.push(superType);

        superTypeVerifies = true;
      } else {
        context.debug(`The '${superTypeString}' super-type is not present.`);
      }
    } else {
      context.debug(`The '${superTypeString}' super-type's name compares to the ${typeName}' type's name.`);
    }

    if (superTypeVerifies) {
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify;

    const context = this.getContext(),
          superTypes = [],
          superTypesString = superTypesStringFromSuperTypes(this.superTypes),
          simpleTypeDeclarationString = this.getString(); ///;

    (superTypesString !== null) ?
      context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types...`) :
        context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's super-types...`);

    superTypesVerify = this.superTypes.every((superType) => {
      const superTypeVerifies = this.verifySuperType(superType, superTypes);

      if (superTypeVerifies) {
        return true;
      }
    });

    if (superTypesVerify) {
      const superTypesLength = superTypes.length;

      if (superTypesLength === 0) {
        const baseType = baseTypeFromNothing(),
          superTyupe = baseType;  ///

        superTypes.push(superTyupe);
      }

      this.type.setSuperTypes(superTypes);

      (superTypesString !== null) ?
        context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${superTypesString}' super-types.`) :
          context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's super-types.`);
    }

    return superTypesVerify;
  }

  verifyTypePrefix() {
    let typePrefixVerifies = false;

    const context = this.getContext(),
          typeString = this.type.getString(),
          simpleTypeDeclarationString = this.getString(); ///;

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type's prefix...`);

    const typePrefixed = this.type.isPrefixed();

    if (!typePrefixed) {
      typePrefixVerifies = true;
    } else {
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type is prefixed.`);
    }

    if (typePrefixVerifies) {
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration's '${typeString}' type's prefix.`);
    }

    return typePrefixVerifies;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          simpleTypeDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration...`);

    const typeVerifies = this.verifyType();

    if (typeVerifies) {
      const superTypesVerify = this.verifySuperTypes();

      if (superTypesVerify) {
        const typePrefixVerifies = this.verifyTypePrefix();

        if (typePrefixVerifies) {
          context.addType(this.type);

          verifies = true;
        }
      }
    }

    if (verifies) {
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration.`);
    }

    return verifies;
  }

  static name = "SimpleTypeDeclaration";
});
