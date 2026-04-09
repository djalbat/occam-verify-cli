"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";
import { baseTypeFromNothing } from "../../utilities/type";
import { superTypesStringFromSuperTypes } from "../../utilities/string";

export default define(class ComplexTypeDeclaration extends Declaration {
  constructor(context, string, node, lineIndex, type, superTypes, provisional, propertyDeclarations) {
    super(context, string, node, lineIndex);

    this.type = type;
    this.superTypes = superTypes;
    this.provisional = provisional;
    this.propertyDeclarations = propertyDeclarations;
  }

  getType() {
    return this.type;
  }

  getSuperTypes() {
    return this.superTypes;
  }

  isProvisional() {
    return this.provisional;
  }

  getPropertyDeclarations() {
    return this.propertyDeclarations;
  }

  getComplexTypeDeclarationNode() {
    const node = this.getNode(),
          complexTypeDeclarationNode = node; ///

    return complexTypeDeclarationNode;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const complexTypeDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);

    const typeVerifies = this.verifyType(context);

    if (typeVerifies) {
      const superTypesVerify = this.verifySuperTypes(context);

      if (superTypesVerify) {
        const typePrefixVerifies = this.verifyTypePrefix(context);

        if (typePrefixVerifies) {
          const propertiesVerifies = this.verifyProperties(context);

          if (propertiesVerifies) {
            context.addType(this.type);

            verifies = true;
          }
        }
      }
    }

    if (verifies) {
      context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`);
    }

    return verifies;
  }

  verifyType(context) {
    let typeVerifies = false;

    const typeString = this.type.getString(),
          complexTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type...`);

    const typeName = this.type.getName(),
          includeRelease = true,
          typePresent = context.isTypePresentByTypeName(typeName, includeRelease);

    if (!typePresent) {
      const prefixedTypeName = typeName, ///
            typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (!typePresent) {
        this.type.setProvisional(this.provisional);

        typeVerifies = true;
      } else {
        context.debug(`The '${typeString}' type is already present.`);
      }
    } else {
      context.debug(`The '${typeString}' type is already present.`);
    }

    if (typeVerifies) {
      context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type`);
    }

    return typeVerifies;
  }

  verifySuperType(context, superType, superTypes) {
    let superTypeVerifies = false;

    const superTypeString = superType.getString(),
          complexTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${superTypeString}' super-type...`);

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
      context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes(context) {
    let superTypesVerify;

    const superTypes = [],
          superTypesString = superTypesStringFromSuperTypes(this.superTypes),
          complexTypeDeclarationString = this.getString(); ///

    (superTypesString !== null) ?
      context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${superTypesString}' super-types...`) :
        context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's super-types...`);

    superTypesVerify = this.superTypes.every((superType) => {
      const superTypeVerifies = this.verifySuperType(context, superType, superTypes);

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
        context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${superTypesString}' super-types.`) :
          context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's super-types.`);
    }

    return superTypesVerify;
  }

  verifyTypePrefix(context) {
    let typePrefixVerifies = false;

    const typeString = this.type.getString(),
          complexTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's prefix...`);

    const typePrefixed = this.type.isPrefixed();

    if (!typePrefixed) {
      typePrefixVerifies = true;
    } else {
      context.debug(`The '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type is prefixed.`);
    }

    if (typePrefixVerifies) {
      context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's prefix.`);
    }

    return typePrefixVerifies;
  }

  verifyProperties(context) {
    let propertiesVerify;

    const typeString = this.type.getString(),
          complexTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's properties...`);

    const properties = this.type.getProperties();

    propertiesVerify = properties.every((property) => {
      const propertyVerifes = property.verify(properties, context);

      if (propertyVerifes) {
        return true;
      }
    });

    if (propertiesVerify) {
      context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration's '${typeString}' type's properties.`);
    }

    return propertiesVerify;
  }

  static name = "ComplexTypeDeclaration";
});
