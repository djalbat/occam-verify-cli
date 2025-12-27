"use strict";

import ontology from "../../ontology";
import Declaration from "../declaration";

import { define } from "../../ontology";
import { stringFromTypeNameTypePrefixNameAndSuperTypes } from "../../utilities/type";

export default define(class SimpleTypeDeclaration extends Declaration {
  constructor(context, node, string, type, prefixed) {
    super(context, node, string);

    this.type = type;
    this.prefixed = prefixed;
  }

  getType() {
    return this.type;
  }

  isPrefixed() {
    return this.prefixed;
  }

  verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          simpleTypeDeclarationString = this.getString();  ///

    context.trace(`Verifying the '${simpleTypeDeclarationString}' simple type declaration...`, node);

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
      context.debug(`...verified the '${simpleTypeDeclarationString}' simple type declaration.`, node);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' simple type...`, node);

    const typeName = this.type.getName(),
          includeRelease = true,
          includeDependencies = false,
          typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);

    if (typePresent) {
      context.trace(`The '${typeString}' type is already present.`, node);
    } else {
      const prefixedTypeName = typeName, ///
            typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (typePresent) {
        context.trace(`The '${typeString}' type is already present.`, node);
      } else {
        typeVerifies = true;
      }
    }

    if (typeVerifies) {
      context.trace(`...verified the '${typeString}' simple type.`, node);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          superTypeString = superType.getString();

    context.trace(`Verifying the '${superTypeString}' super-type...`, node);

    const nominalTypeName = superType.getNominalTypeName(),
          typeName = nominalTypeName, ///
          typeNameMatches = this.type.matchTypeName(typeName);

    if (typeNameMatches) {
      context.trace(`The super-type's name matches the ${typeName}' simple type's name.`, node);
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
      context.debug(`...verified the '${superTypeString}' super-type.`, node);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify;

    const node = this.getNode(),
          context = this.getContext(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' simple type's super-types...`, node);

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;

      context.trace(`The '${typeString}' simple type is basic.`, node)
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
      context.debug(`...verified the '${typeString}' simple type's super-types.`, node);
    }

    return superTypesVerify;
  }

  static name = "SimpleTypeDeclaration";

  static fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const { Type } = ontology,
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
