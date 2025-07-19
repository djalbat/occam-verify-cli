"use strict";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { superTypesStringFromSuperTypes } from "../../utilities/type";

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
    let verified = false;

    const complexTypeDeclarationString = this.getString();

    this.fileContext.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);

    const typeVerified = this.verifyType();

    if (typeVerified) {
      const superTypesVerified = this.verifySuperTypes();

      if (superTypesVerified) {
        const propertiesVerified = this.verifyProperties();

        if (propertiesVerified) {
          this.fileContext.addType(this.type);

          verified = true;
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`);
    }

    return verified;
  }

  verifyType() {
    let typeVerified = false;

    const typeName = this.type.getName(),
          complexTypeString = this.type.getString();

    this.fileContext.trace(`Verifying the '${complexTypeString}' complex type...`);

    const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      this.fileContext.debug(`The type '${complexTypeString}' is already present.`);
    } else {
      typeVerified = true;
    }

    if (typeVerified) {
      this.fileContext.debug(`...verified the '${complexTypeString}' complex type.`);
    }

    return typeVerified;
  }

  verifySuperType(superType) {
    let superTypeVerified;

    const superTypeString = superType.getString();

    this.fileContext.trace(`Verifying the '${superTypeString}' super-type...`);

    const superTypeName = superType.getName(),
          superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);

    superTypeVerified = superTypePresent; ///

    if (superTypeVerified) {
      this.fileContext.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerified;
  }

  verifySuperTypes() {
    let superTypesVerified;

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerified = true;
    } else {
      let superTypes;

      superTypes = this.type.getSuperTypes();

      const superTypesString = superTypesStringFromSuperTypes(superTypes);

      this.fileContext.trace(`Verifying the '${superTypesString} super-types...`);

      superTypesVerified = superTypes.every((superType) => {
        const superTypeVerified = this.verifySuperType(superType);

        if (superTypeVerified) {
          return true;
        }
      });

      if (superTypesVerified) {
        superTypes = superTypes.map((superType) => {
          const superTypeName = superType.getName();

          superType = this.fileContext.findTypeByTypeName(superTypeName);

          return superType;
        });

        this.type.setSuperTypes(superTypes);

        this.fileContext.debug(`...verified the' '${superTypesString} super-types.`);
      }
    }

    return superTypesVerified;
  }

  verifyProperty(property, properties, superTypeProperties) {
    let propertyVerified = false;

    const propertyString = property.getString();

    this.fileContext.trace(`Verifying the '${propertyString}' property...`);

    const propertyNames = property.getNames(),
          count = properties.reduce((count, property) => {
            const propertyNamesMatch = property.matchPropertyNames(propertyNames);

            if (propertyNamesMatch) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      this.fileContext.debug(`The '${propertyString}' property appears more than once.`);
    } else {
      const superTypeProperty = superTypeProperties.find((superTypeProperty) => {
        const propertyNameMatches = superTypeProperty.matchPropertyNames(propertyNames);

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

        const propertyTypeVerified = this.verifyPropertyType(propertyType);

        if (propertyTypeVerified) {
          const propertyTypeName = propertyType.getName();

          propertyType = this.fileContext.findTypeByTypeName(propertyTypeName);

          const type = propertyType;  ///

          property.setType(type);

          propertyVerified = true;
        }
      }
    }

    if (propertyVerified) {
      this.fileContext.debug(`verified the '${propertyString}' property.`);
    }

    return propertyVerified;
  }

  verifyProperties() {
    let propertiesVerified;

    const includeSuperTypes = false,
          properties = this.type.getProperties(includeSuperTypes),
          superTypes = this.type.getSuperTypes()

    propertiesVerified = superTypes.every((superType) => {
      const superTypeProperties = superType.getProperties(),
            propertiesVerified = properties.every((property) => {
              const propertyVerified = this.verifyProperty(property, properties, superTypeProperties);

              if (propertyVerified) {
                return true;
              }
            });

      if (propertiesVerified) {
        return true;
      }
    });

    return propertiesVerified;
  }

  verifyPropertyType(propertyType) {
    let propertyTypeVerified = false;

    const typeEqualToPropertyType = this.type.isEqualTo(propertyType);

    if (typeEqualToPropertyType) {
      propertyTypeVerified = true;
    } else  {
      const propertyTypeString = propertyType.getString(); ///

      this.fileContext.trace(`Verifying the '${propertyTypeString}' property type...`);

      const propertyTypeName = propertyType.getName(),
            propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);

      if (!propertyTypePresent) {
        const propertyTypeString = propertyType.getString();

        this.fileContext.debug(`The '${propertyTypeString}' property type is not present.`);
      } else {
        propertyTypeVerified = true;
      }

      if (propertyTypeVerified) {
        this.fileContext.debug(`...verified the '${propertyTypeString}' property type.`);
      }
    }

    return propertyTypeVerified;
  }

  static name = "ComplexTypeDeclaration";

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    const { Type } = dom,
          node = complexTypeDeclarationNode,  ///
          string = fileContext.nodeAsString(node),
          type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          complexTypeDeclaration = new ComplexTypeDeclaration(fileContext, string, type);

    return complexTypeDeclaration;
  }
});
