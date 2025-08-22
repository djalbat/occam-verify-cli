"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { superTypesStringFromSuperTypes, stringFromTypeNameNameAndSuperTypes } from "../../utilities/type";

export default domAssigned(class ComplexTypeDeclaration {
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

    const complexTypeDeclarationString = this.getString();

    this.fileContext.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);

    const typeVerifies = this.verifyType();

    if (typeVerifies) {
      const superTypesVerify = this.verifySuperTypes();

      if (superTypesVerify) {
        const propertiesVerify = this.verifyProperties();

        if (propertiesVerify) {
          this.fileContext.addType(this.type);

          verifies = true;
        }
      }
    }

    if (verifies) {
      this.fileContext.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const typeName = this.type.getName(),
          complexTypeString = this.type.getString();

    this.fileContext.trace(`Verifying the '${complexTypeString}' complex type...`);

    const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.fileContext.debug(`The type '${complexTypeString}' is already present.`);
    } else {
      typeVerifies = true;
    }

    if (typeVerifies) {
      this.fileContext.debug(`...verified the '${complexTypeString}' complex type.`);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies;

    const superTypeString = superType.getString();

    this.fileContext.trace(`Verifying the '${superTypeString}' super-type...`);

    const superTypeName = superType.getName(),
          superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);

    superTypeVerifies = superTypePresent; ///

    if (superTypeVerifies) {
      this.fileContext.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify;

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;
    } else {
      let superTypes;

      superTypes = this.type.getSuperTypes();

      const superTypesString = superTypesStringFromSuperTypes(superTypes);

      this.fileContext.trace(`Verifying the '${superTypesString} super-types...`);

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

        this.type.setSuperTypes(superTypes);

        this.fileContext.debug(`...verified the' '${superTypesString} super-types.`);
      }
    }

    return superTypesVerify;
  }

  verifyProperty(property, properties, superTypeProperties) {
    let propertyVerifies = false;

    const propertyString = property.getString();

    this.fileContext.trace(`Verifying the '${propertyString}' property...`);

    const propertyName = property.getName(),
          count = properties.reduce((count, property) => {
            const propertyNameMatches = property.matchPropertyName(propertyName);

            if (propertyNameMatches) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      this.fileContext.debug(`The '${propertyString}' property appears more than once.`);
    } else {
      const superTypeProperty = superTypeProperties.find((superTypeProperty) => {
        const propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);

        if (propertyNameMatches) {
          return true;
        }
      }) || null;

      if (superTypeProperty !== null) {
        const superTypePropertyString = superTypeProperty.getString();

        this.fileContext.debug(`The '${propertyString}' property matches the super-type's '${superTypePropertyString}' property.`);
      } else {
        let propertyType;

        propertyType = property.getType();

        const propertyTypeVerifies = this.verifyPropertyType(propertyType);

        if (propertyTypeVerifies) {
          const propertyTypeName = propertyType.getName();

          propertyType = this.fileContext.findTypeByTypeName(propertyTypeName);

          const type = propertyType;  ///

          property.setType(type);

          propertyVerifies = true;
        }
      }
    }

    if (propertyVerifies) {
      this.fileContext.debug(`verifies the '${propertyString}' property.`);
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

      this.fileContext.trace(`Verifying the '${propertyTypeString}' property type...`);

      const propertyTypeName = propertyType.getName(),
            propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);

      if (!propertyTypePresent) {
        const propertyTypeString = propertyType.getString();

        this.fileContext.debug(`The '${propertyTypeString}' property type is not present.`);
      } else {
        propertyTypeVerifies = true;
      }

      if (propertyTypeVerifies) {
        this.fileContext.debug(`...verified the '${propertyTypeString}' property type.`);
      }
    }

    return propertyTypeVerifies;
  }

  static name = "ComplexTypeDeclaration";

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    const { Type } = dom,
          type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          typeName = type.getName(),
          superTypes = type.getSuperTypes(),
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, string, type);

    return complexTypeDeclaration;
  }
});
