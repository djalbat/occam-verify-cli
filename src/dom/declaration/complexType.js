"use strict";

import dom from "../../dom";

import { objectType } from "../type";
import { domAssigned } from "../../dom";
import { stringFromTypeNameNameAndSuperTypes } from "../../utilities/type";

export default domAssigned(class ComplexTypeDeclaration {
  constructor(context, string, type) {
    this.context = context;
    this.string = string;
    this.type = type;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  getReleaseContext() { return this.context.getReleaseContext(); }

  getReleaseTypes() {
    const includeDependencies = false,
          includeRelease = false,
          releaseContext = this.getReleaseContext(),
          contextTypes = this.context.getTypes(includeRelease),
          releaseContextTypes = releaseContext.getTypes(includeDependencies),
          releaseTypes = [
            ...contextTypes,
            ...releaseContextTypes
          ];

    return releaseTypes;
  }

  verify() {
    let verifies = false;

    const complexTypeDeclarationString = this.getString();

    this.context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);

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

    if (verifies) {
      this.context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`);
    }

    return verifies;
  }

  verifyType() {
    let typeVerifies = false;

    const complexTypeString = this.type.getString();

    this.context.trace(`Verifying the '${complexTypeString}' complex type...`);

    const typeName = this.type.getName(),
          releaseTypes = this.getReleaseTypes(),
          typePresent = releaseTypes.some((releaseType) => {
            const releaseTypeNameMatches = releaseType.matchTypeName(typeName);

            if (releaseTypeNameMatches) {
              return true;
            }
          });

    if (typePresent) {
      this.context.debug(`The type '${complexTypeString}' is already present in the package.`);
    } else {
      typeVerifies = true;
    }

    if (typeVerifies) {
      this.context.debug(`...verified the '${complexTypeString}' complex type.`);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const superTypeString = superType.getString();

    this.context.trace(`Verifying the '${superTypeString}' super-type...`);

    const superTypeName = superType.getName(),
          superTypePresent = this.context.isTypePresentByTypeName(superTypeName);

    if (superTypePresent) {
      superTypeVerifies = true;
    }

    if (superTypeVerifies) {
      this.context.debug(`...verified the '${superTypeString}' super-type.`);
    }

    return superTypeVerifies;
  }

  verifySuperTypes() {
    let superTypesVerify = false;

    this.context.trace(`Verifying the super-types...`);

    let superTypes;

    superTypes = this.type.getSuperTypes();

    const typeName = this.type.getName(),
          superTypesLength = superTypes.length;

    if (superTypesLength === 0) {
      const type = this.context.findTypeByTypeName(typeName);

      if (type === null) {
        const superType = objectType; ///

        superTypes.push(superType);
      }
    }

    const typeBasic = this.type.isBasic(),
          typeString = this.type.getString();

    if (typeBasic) {
      superTypesVerify = true;

      this.context.trace(`The '${typeString}' type is basic.`)
    } else {
      const superTypeNames = superTypes.map((superType) => {
              const superTypeName = superType.getName();

              return superTypeName;
            }),
            superTypeNamesIncludesTypeName = superTypeNames.includes(typeName);

      if (superTypeNamesIncludesTypeName) {
        this.context.trace(`The '${typeName}' type cannot be a super-type `);
      } else {
        if (superTypesLength === 0) {
          const type = this.context.findTypeByTypeName(typeName),
                superType = type; ///

          superTypes.push(superType);
        }

        superTypesVerify = superTypes.every((superType) => {
          const superTypeVerifies = this.verifySuperType(superType);

          if (superTypeVerifies) {
            return true;
          }
        });

        if (superTypesVerify) {
          superTypes = superTypes.map((superType) => {
            const superTypeName = superType.getName();

            superType = this.context.findTypeByTypeName(superTypeName);

            return superType;
          });

          const typeName = this.type.getName(),
            string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes);

          this.type.setString(string);

          this.type.setSuperTypes(superTypes);
        }
      }
    }

    if (superTypesVerify) {
      this.context.debug(`...verified the super-types.`);
    }

    return superTypesVerify;
  }

  verifyProperty(property, properties, superTypeProperties) {
    let propertyVerifies = false;

    const propertyString = property.getString();

    this.context.trace(`Verifying the '${propertyString}' property...`);

    const propertyName = property.getName(),
          count = properties.reduce((count, property) => {
            const propertyNameMatches = property.matchPropertyName(propertyName);

            if (propertyNameMatches) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      this.context.debug(`The '${propertyString}' property appears more than once.`);
    } else {
      const superTypeProperty = superTypeProperties.find((superTypeProperty) => {
        const propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);

        if (propertyNameMatches) {
          return true;
        }
      }) || null;

      if (superTypeProperty !== null) {
        const superTypePropertyString = superTypeProperty.getString();

        this.context.debug(`The '${propertyString}' property matches the super-type's '${superTypePropertyString}' property.`);
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
            typeNameMatches = property.matchTypeName(typeName);

      if (typeNameMatches) {
        property.setType(this.type);
      }

      this.context.debug(`verifies the '${propertyString}' property.`);
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

      this.context.trace(`Verifying the '${propertyTypeString}' property type...`);

      const propertyTypeName = propertyType.getName(),
            propertyTypePresent = this.context.isTypePresentByTypeName(propertyTypeName);

      if (!propertyTypePresent) {
        const propertyTypeString = propertyType.getString();

        this.context.debug(`The '${propertyTypeString}' property type is not present.`);
      } else {
        propertyTypeVerifies = true;
      }

      if (propertyTypeVerifies) {
        this.context.debug(`...verified the '${propertyTypeString}' property type.`);
      }
    }

    return propertyTypeVerifies;
  }

  static name = "ComplexTypeDeclaration";

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const { Type } = dom,
          type = Type.fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
          typeName = type.getName(),
          superTypes = type.getSuperTypes(),
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          complexTypeDeclaration = new ComplexTypeDeclaration(context, string, type);

    return complexTypeDeclaration;
  }
});
