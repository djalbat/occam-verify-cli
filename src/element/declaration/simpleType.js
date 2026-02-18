"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class SimpleTypeDeclaration extends Declaration {
  constructor(context, string, node, type, prefixed) {
    super(context, string, node);

    this.type = type;
    this.prefixed = prefixed;
  }

  getType() {
    return this.type;
  }

  getSimpleTypeDeclarationNode() {
    const node = this.getNode(),
          simpleTypeDeclarationNode = node; ///

    return simpleTypeDeclarationNode;
  }

  isPrefixed() {
    return this.prefixed;
  }

  verifyType() {
    let typeVerifies = false;

    const context = this.getContext(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' simple type...`);

    const typeName = this.type.getName(),
          includeRelease = true,
          includeDependencies = false,
          typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);

    if (typePresent) {
      context.trace(`The '${typeString}' type is already present.`);
    } else {
      const prefixedTypeName = typeName, ///
            typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (typePresent) {
        context.trace(`The '${typeString}' type is already present.`);
      } else {
        typeVerifies = true;
      }
    }

    if (typeVerifies) {
      context.trace(`...verified the '${typeString}' simple type.`);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const context = this.getContext(),
          superTypeString = superType.getString();

    context.trace(`Verifying the '${superTypeString}' super-type...`);

    const nominalTypeName = superType.getNominalTypeName(),
          typeName = nominalTypeName, ///
          typeComparesToTypeName = this.type.compareTypeName(typeName);

    if (typeComparesToTypeName) {
      context.trace(`The super-type's name compares to the ${typeName}' simple type's name.`);
    } else {
      const oldSuperType = superType;

      superType = context.findTypeByNominalTypeName(nominalTypeName);

      const superTypePresent = (superType !== null);

      if (superTypePresent) {
        const newSuperType = superType; ///

        this.type.replaceSuperType(oldSuperType, newSuperType);

        superTypeVerifies = true;
      }
    }

    if (superTypeVerifies) {
      context.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify;

    const context = this.getContext(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' simple type's super-types...`);

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;

      context.trace(`The '${typeString}' simple type is basic.`)
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
      context.debug(`...verified the '${typeString}' simple type's super-types.`);
    }

    return superTypesVerify;
  }

  async verify() {
    let verifies = false;

    const context = this.getContext(),
          simpleTypeDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration...`);

    if (this.prefixed) {
      const typeString = this.type.getString();

      context.trace(`The '${typeString}' type is prefixed.`);
    } else {
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
    }

    if (verifies) {
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration.`);
    }

    return verifies;
  }

  static name = "SimpleTypeDeclaration";
});
