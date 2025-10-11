"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { stringFromTypeNameTypePrefixNameAndSuperTypes } from "../../utilities/type";

export default domAssigned(class ComplexTypeDeclaration {
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

  getReleaseContext() { return this.context.getReleaseContext(); }

  verify() {
    let verifies = false;

    const complexTypeDeclarationString = this.string; ///

    this.context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`, this.node);

    if (this.prefixed) {
      const typeString = this.type.getString();

      this.context.trace(`The '${typeString}' type is prefixed.`);
    } else {
      const typeVerifies = this.verifyType();

      if (typeVerifies) {
        const superTypesVerify = this.verifySuperTypes();

        if (superTypesVerify) {
          const propertiesVerify = this.verifyProperties();

          if (propertiesVerify) {
            this.context.addType(this.type);

            verifies = true;
          }
        }
      }
    }

    if (verifies) {
      this.context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`, this.node);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const typeString = this.type.getString();

    this.context.trace(`Verifying the '${typeString}' complex type...`, this.node);

    const typeName = this.type.getName(),
          typePresent = this.context.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.context.debug(`The '${typeString}' type is already present in the package.`, this.node);
    } else {
      typeVerifies = true;
    }

    if (typeVerifies) {
      this.context.debug(`...verified the '${typeString}' complex type.`, this.node);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const superTypeString = superType.getString();

    this.context.trace(`Verifying the '${superTypeString}' super-type...`, this.node);

    const typeName = this.type.getName(),
          superTypeName = superTypeString,  ///
          typeNameMatches = (typeName === superTypeName);

    if (typeNameMatches) {
      this.context.trace(`The super-type's name matches the ${typeName}' complex type's name.`, this.node);
    } else {
      const oldSuperType = superType; ///

      superType = this.context.findTypeByTypeName(superTypeName);

      const superTypePresent = (superType !== null);

      if (superTypePresent) {
        const newSuperType = superType; ///

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

    this.context.trace(`Verifying the super-types of the '${typeString}' complex type...`, this.node);

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;

      this.context.trace(`The '${typeString}' complex type is basic.`, this.node)
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
      this.context.debug(`...verified the super-types of the '${typeString}' complex type.`, this.node);
    }

    return superTypesVerify;
  }

  verifyProperty(property, properties, superTypeProperties) {
    let propertyVerifies = false;

    const propertyString = property.getString();

    this.context.trace(`Verifying the '${propertyString}' property...`, this.node);

    const propertyName = property.getName(),
          count = properties.reduce((count, property) => {
            const propertyNameMatches = property.matchPropertyName(propertyName);

            if (propertyNameMatches) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      this.context.debug(`The '${propertyString}' property appears more than once.`, this.node);
    } else {
      const superTypeProperty = superTypeProperties.find((superTypeProperty) => {
        const propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);

        if (propertyNameMatches) {
          return true;
        }
      }) || null;

      if (superTypeProperty !== null) {
        const superTypePropertyString = superTypeProperty.getString();

        this.context.debug(`The '${propertyString}' property matches the super-type's '${superTypePropertyString}' property.`, this.node);
      } else {
        let propertyType;

        propertyType = property.getType();

        const propertyTypeVerifies = this.verifyPropertyType(propertyType);

        if (propertyTypeVerifies) {
          const propertyTypeName = propertyType.getName();

          propertyType = this.context.findTypeByTypeName(propertyTypeName);

          const type = propertyType;  ///

          property.setType(type);

          propertyVerifies = true;
        }
      }
    }

    if (propertyVerifies) {
      const typeName = this.type.getName(),
            prefixed = true,
            typeNameMatches = property.matchTypeName(typeName, prefixed, this.context);

      if (typeNameMatches) {
        property.setType(this.type);
      }

      this.context.debug(`verifies the '${propertyString}' property.`, this.node);
    }

    return propertyVerifies;
  }

  verifyProperties() {
    let propertiesVerify;

    const includeSuperTypes = false,
          properties = this.type.getProperties(includeSuperTypes),
          superTypes = this.type.getSuperTypes()

    propertiesVerify = superTypes.every((superType) => {
      const superTypeProperties = superType.getProperties(),
            propertiesVerify = properties.every((property) => {
              const propertyVerifies = this.verifyProperty(property, properties, superTypeProperties);

              if (propertyVerifies) {
                return true;
              }
            });

      if (propertiesVerify) {
        return true;
      }
    });

    return propertiesVerify;
  }

  verifyPropertyType(propertyType) {
    let propertyTypeVerifies = false;

    const typeEqualToPropertyType = this.type.isEqualTo(propertyType);

    if (typeEqualToPropertyType) {
      propertyTypeVerifies = true;
    } else  {
      const propertyTypeString = propertyType.getString(); ///

      this.context.trace(`Verifying the '${propertyTypeString}' property type...`, this.node);

      const propertyTypeName = propertyType.getName(),
            propertyTypePresent = this.context.isTypePresentByTypeName(propertyTypeName);

      if (!propertyTypePresent) {
        const propertyTypeString = propertyType.getString();

        this.context.debug(`The '${propertyTypeString}' property type is not present.`, this.node);
      } else {
        propertyTypeVerifies = true;
      }

      if (propertyTypeVerifies) {
        this.context.debug(`...verified the '${propertyTypeString}' property type.`, this.node);
      }
    }

    return propertyTypeVerifies;
  }

  static name = "ComplexTypeDeclaration";

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const { Type } = dom,
          type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
          node = complexTypeDeclarationNode,  ///
          prefixed = complexTypeDeclarationNode.isPrefixed(),
          typePrefixName = complexTypeDeclarationNode.getTypePrefixName(),
          typeName = type.getName(),
          superTypes = type.getSuperTypes(),
          string = stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes),
          complexTypeDeclaration = new ComplexTypeDeclaration(context, node, string, type, prefixed);

    return complexTypeDeclaration;
  }
});
