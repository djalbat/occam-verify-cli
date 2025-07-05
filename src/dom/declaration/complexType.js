"use strict";

import dom from "../../dom";

import { baseType } from "../type";
import { domAssigned } from "../../dom";
import { superTypeStringFromSuperType, superTypesStringFromSuperTypes } from "../declaration/type";

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
        let superTypes;

        superTypes = this.type.getSuperTypes();

        superTypes = superTypes.map((superType) => {
          const superTypeName = superType.getName();

          superType = this.fileContext.findTypeByTypeName(superTypeName);

          return superType;
        });

        this.type.setSuperTypes(superTypes);

        const includeSuperTypes = false,
              properties = this.type.getProperties(includeSuperTypes),
              propertiesVerified = this.verifyProperties(properties);

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

    const typeName = this.type.getName();

    this.fileContext.trace(`Verifying the '${typeName}' type...`);

    const typePresent = this.fileContext.isTypePresentByTypeName(typeName);

    if (typePresent) {
      const typeRefined = this.type.isRefined();

      if (typeRefined) {
        typeVerified = true;
      } else {
        this.fileContext.debug(`The type '${typeName}' is already present.`);
      }
    } else {
      typeVerified = true;
    }

    if (typeVerified) {
      this.fileContext.debug(`...verified the '${typeName}' type.`);
    }

    return typeVerified;
  }

  verifySuperTypes() {
    let superTypesVerified;

    const typeBasic = this.type.isBasic(),
          typeRefined = this.type.isRefined();

    if (typeBasic || typeRefined) {
      superTypesVerified = true;
    } else {
      const typeName = this.type.getName(),
            superTypes = this.type.getSuperTypes(),
            superTypesString = superTypesStringFromSuperTypes(superTypes);

      this.fileContext.trace(`Verifying the '${typeName}' type's ${superTypesString} super-types...`);

      superTypesVerified = superTypes.every((superType) => {
        const superTypeVerified = this.verifySuperType(superType);

        if (superTypeVerified) {
          return true;
        }
      });

      if (superTypesVerified) {
        this.fileContext.debug(`...verified the '${typeName}' type's ${superTypesString} super-types.`);
      }
    }

    return superTypesVerified;
  }

  verifySuperType(superType) {
    let superTypeVerified;

    const superTypeBaseType = (superType === baseType);

    if (superTypeBaseType) {
      superTypeVerified = true;
    } else {
      const typeName = this.type.getString(),
            superTypeString = superTypeStringFromSuperType(superType);

      this.fileContext.trace(`Verifying the '${typeName}' type's '${superTypeString}' super-type...`);

      const superTypeName = superType.getName(),
            superTypePresent = this.fileContext.isTypePresentByTypeName(superTypeName);

      superTypeVerified = superTypePresent; ///

      if (superTypeVerified) {
        this.fileContext.debug(`...verified the '${typeName}' type's '${superTypeString}' super-type.`);
      }
    }

    return superTypeVerified;
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

  verifyProperties(properties) {
    let propertiesVerified;

    const superTypes = this.type.getSuperTypes();

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

    if (propertyType === baseType) {
      propertyTypeVerified = true;
    } else {
      const typeName = this.type.getName(),
            propertyTypeName = propertyType.getName();

      if (typeName === propertyTypeName) {
        propertyTypeVerified = true;
      } else  {
        const propertyTypeString = propertyType.getString(); ///

        this.fileContext.trace(`Verifying the '${propertyTypeString}' property type...`);

        const propertyTypePresent = this.fileContext.isTypePresentByTypeName(propertyTypeName);

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
