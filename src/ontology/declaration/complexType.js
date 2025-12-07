"use strict";

import ontology from "../../ontology";

import { define } from "../../ontology";
import { stringFromTypeNameTypePrefixNameAndSuperTypes } from "../../utilities/type";

export default define(class ComplexTypeDeclaration {
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

    const propertyNameVerifies = this.verifyPropertyName(property, properties);

    if (propertyNameVerifies) {
      const propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(property, properties);

      if (propertyNominalTypeNameVerifies) {
        propertyVerifies = true;
      }
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

  verifyPropertyName(property, properties) {
    let propertyNameVerifies = false;

    const propertyString = property.getString();

    this.context.trace(`Verifying the '${propertyString}' property's name...`, this.node);

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
      const superTypes = this.type.getSuperTypes(),
            superType = superTypes.find((superType) => {
              const superTypeProperties = superType.getProperties(),
                    propertyNameMatches = superTypeProperties.some((superTypeProperty) => {
                      const propertyNameMatches = superTypeProperty.matchPropertyName(propertyName);

                      if (propertyNameMatches) {
                        return true;
                      }
                    });

              if (propertyNameMatches) {
                return true;
              }
            }) || null;

      if (superType !== null) {
        const superTypeString = superType.getString();

        this.context.debug(`The '${superTypeString}' super-type has the same property.`, this.node);
      } else {
        propertyNameVerifies = true;
      }
    }

    if (propertyNameVerifies) {
      this.context.debug(`...verified the '${propertyString}' property's name.`, this.node);
    }

    return propertyNameVerifies;
  }

  verifyPropertyNominalTypeName(property) {
    let propertyNominalTypeNameVerifies = false;

    const propertyString = property.getString(),
          nominalTypeName = property.getNominalTypeName();

    this.context.trace(`Verifying the '${propertyString}' property's '${nominalTypeName}' nominal type name...`, this.node);

    const nominalTypeNameMatches = this.type.matchNominalTypeName(nominalTypeName);

    if (nominalTypeNameMatches) {
      propertyNominalTypeNameVerifies = true;
    } else {
      const typePresent = this.context.isTypePresentByNominalTypeName(nominalTypeName);

      if (typePresent) {
        propertyNominalTypeNameVerifies = true;
      }
    }

    if (propertyNominalTypeNameVerifies) {
      this.context.debug(`...verifies the '${propertyString}' property's '${nominalTypeName}' nominal type name.`, this.node);
    }

    return propertyNominalTypeNameVerifies;
  }

  static name = "ComplexTypeDeclaration";

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const { Type } = ontology,
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
