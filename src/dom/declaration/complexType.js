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
            const propertyTypesVerify = this.verifyPropertyTypes();

            if (propertyTypesVerify) {
              const typePrefix = this.context.getTypePrefix();

              if (typePrefix !== null) {
                const typePrefixName = typePrefix.getName(),
                      prefixName = typePrefixName;  ///

                this.type.setPrefixName(prefixName);
              }

              this.context.addType(this.type);

              verifies = true;
            }
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
          includeRelease = true,
          includeDependencies = false,
          typePresent = this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);

    if (typePresent) {
      this.context.trace(`The '${typeString}' type is already present.`, this.node);
    } else {
      const prefixedTypeName = typeName, ///
            typePresent = this.context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (typePresent) {
        this.context.trace(`The '${typeString}' type is already present.`, this.node);
      } else {
        typeVerifies = true;
      }
    }

    if (typeVerifies) {
      this.context.trace(`...verified the '${typeString}' complex type.`, this.node);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const superTypeString = superType.getString();

    this.context.trace(`Verifying the '${superTypeString}' super-type...`, this.node);

    const nominalTypeName = superType.getNominalTypeName(),
          typeName = nominalTypeName, ///
          typeNameMatches = this.type.matchTypeName(typeName);

    if (typeNameMatches) {
      this.context.trace(`The super-type's name matches the ${typeName}' complex type's name.`, this.node);
    } else {
      const oldSuperType = superType;

      superType = this.context.findTypeByNominalTypeName(nominalTypeName);

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

    this.context.trace(`Verifying the '${typeString}' complex type's super-types...`, this.node);

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
      this.context.debug(`...verified the '${typeString}' complex type's super-types.`, this.node);
    }

    return superTypesVerify;
  }

  verifyProperty(property, properties) {
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
      const superTypes = this.type.getSuperTypes();

      propertyVerifies = superTypes.every((superType) => {
        const superTypeProperties = superType.getProperties(),
              superTypeProperty = superTypeProperties.find((superTypeProperty) => {
                const propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);

                if (propertyNameMatches) {
                  return true;
                }
              }) || null;

        if (superTypeProperty !== null) {
          const superTypePropertyString = superTypeProperty.getString();

          this.context.debug(`The '${propertyString}' property matches the super-type's '${superTypePropertyString}' property.`, this.node);
        } else {
          return true;
        }
      });
    }

    if (propertyVerifies) {
      this.context.debug(`...verified the '${propertyString}' property.`, this.node);
    }

    return propertyVerifies;
  }

  verifyProperties() {
    let propertiesVerify;

    const typeString = this.type.getString();

    this.context.trace(`Verifying the '${typeString}' complex type's properties...`, this.node);

    const includeSuperTypes = false,
          properties = this.type.getProperties(includeSuperTypes);

    propertiesVerify = properties.every((property) => {
      const propertyVerifies = this.verifyProperty(property, properties);

      if (propertyVerifies) {
        return true;
      }
    });

    if (propertiesVerify) {
      this.context.debug(`...verified the '${typeString}' complex type's properties.`, this.node);
    }

    return propertiesVerify;
  }

  verifyPropertyType(property) {
    let propertyTypeVerifies = false;

    let propertyType = property.getType();

    const propertyTypeString = propertyType.getString();

    this.context.trace(`Verifying the '${propertyTypeString}' property type...`, this.node);

    const typeName = this.type.getName(),
          typeNameMatches = propertyType.matchTypeName(typeName);

    if (typeNameMatches) {
      propertyTypeVerifies = true;

      property.setType(this.type);
    } else {
      const nominalTypeName = propertyType.getNominalTypeName();

      propertyType = this.context.findTypeByNominalTypeName(nominalTypeName);

      const propertyTypePresent = (propertyType !== null);

      if (propertyTypePresent) {
        const type = propertyType;  ///

        property.setType(type);

        propertyTypeVerifies = true;
      }
    }

    if (propertyTypeVerifies) {
      this.context.debug(`...verified the '${propertyTypeString}' property type.`, this.node);
    }

    return propertyTypeVerifies;
  }

  verifyPropertyTypes() {
    let propertyTypesVerify;

    const typeString = this.type.getString();

    this.context.trace(`Verifying the '${typeString}' complex type's property types...`, this.node);

    const includeSuperTypes = false,
          properties = this.type.getProperties(includeSuperTypes);

    propertyTypesVerify = properties.every((property) => {
      const propertyVerifies = this.verifyPropertyType(property);

      if (propertyVerifies) {
        return true;
      }
    });

    if (propertyTypesVerify) {
      this.context.debug(`...verified the '${typeString}' complex type's property types.`, this.node);
    }

    return propertyTypesVerify;
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
