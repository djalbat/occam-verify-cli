"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class ComplexTypeDeclaration extends Declaration {
  constructor(context, string, node, lineIndex, type, superTypes) {
    super(context, string, node, lineIndex);

    this.type = type;
    this.superTypes = superTypes;
  }

  getType() {
    return this.type;
  }

  getSuperTypes() {
    return this.superTypes;
  }

  getComplexTypeDeclarationNode() {
    const node = this.getNode(),
          complexTypeDeclarationNode = node;  ///

    return complexTypeDeclarationNode;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const complexTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`);

    if (this.prefixed) {
      const typeString = this.type.getString();

      context.trace(`The '${typeString}' type is prefixed.`);
    } else {
      const typeVerifies = this.verifyType(context);

      if (typeVerifies) {
        const superTypesVerify = this.verifySuperTypes(context);

        if (superTypesVerify) {
          const propertiesVerify = this.verifyProperties(context);

          if (propertiesVerify) {
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
    }

    if (verifies) {
      context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`);
    }

    return verifies;
  }

  verifyType(context) {
    let typeVerifies = false;

    const typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' complex type...`);

    const typeName = this.type.getName(),
          includeRelease = true,
          typePresent = context.isTypePresentByTypeName(typeName, includeRelease);

    if (typePresent) {
      context.debug(`The '${typeString}' type is already present.`);
    } else {
      const prefixedTypeName = typeName, ///
            typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (typePresent) {
        context.debug(`The '${typeString}' type is already present.`);
      } else {
        typeVerifies = true;
      }
    }

    if (typeVerifies) {
      context.debug(`...verified the '${typeString}' complex type.`);
    }

    return typeVerifies;
  }

  verifySuperType(context, superType) {
    let superTypeVerifies = false;

    const superTypeString = superType.getString();

    context.trace(`Verifying the '${superTypeString}' super-type...`);

    const nominalTypeName = superType.getNominalTypeName(),
          typeName = nominalTypeName, ///
          typeComparesToTypeName = this.type.compareTypeName(typeName);

    if (typeComparesToTypeName) {
      context.trace(`The super-type's name compares to the ${typeName}' complex type's name.`);
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

  verifySuperTypes(context) {
    let superTypesVerify;

    const typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' complex type's super-types...`);

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;

      context.trace(`The '${typeString}' complex type is basic.`)
    } else  {
      const superTypes = this.type.getSuperTypes();

      superTypesVerify = superTypes.every((superType) => {
        const superTypeVerifies = this.verifySuperType(context, superType);

        if (superTypeVerifies) {
          return true;
        }
      });
    }

    if (superTypesVerify) {
      context.debug(`...verified the '${typeString}' complex type's super-types.`);
    }

    return superTypesVerify;
  }

  verifyProperty(context, property, properties) {
    let propertyVerifies = false;

    const propertyString = property.getString();

    context.trace(`Verifying the '${propertyString}' property...`);

    const propertyNameVerifies = this.verifyPropertyName(context, property, properties);

    if (propertyNameVerifies) {
      const propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(context, property, properties);

      if (propertyNominalTypeNameVerifies) {
        propertyVerifies = true;
      }
    }

    if (propertyVerifies) {
      context.debug(`...verified the '${propertyString}' property.`);
    }

    return propertyVerifies;
  }

  verifyProperties(context) {
    let propertiesVerify;

    const typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' complex type's properties...`);

    const includeSuperTypes = false,
          properties = this.type.getProperties(includeSuperTypes);

    propertiesVerify = properties.every((property) => {
      const propertyVerifies = this.verifyProperty(context, property, properties);

      if (propertyVerifies) {
        return true;
      }
    });

    if (propertiesVerify) {
      context.debug(`...verified the '${typeString}' complex type's properties.`);
    }

    return propertiesVerify;
  }

  verifyPropertyName(context, property, properties) {
    let propertyNameVerifies = false;

    const propertyString = property.getString();

    context.trace(`Verifying the '${propertyString}' property's name...`);

    const propertyName = property.getName(),
          count = properties.reduce((count, property) => {
            const propertyComparesToPropertyName = property.comparePropertyName(propertyName);

            if (propertyComparesToPropertyName) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      context.debug(`The '${propertyString}' property appears more than once.`);
    } else {
      const superTypes = this.type.getSuperTypes(),
            superType = superTypes.find((superType) => {
              const superTypeProperties = superType.getProperties(),
                    superTypePropertyComparesToPropertyName = superTypeProperties.some((superTypeProperty) => {
                      const superTypePropertyComparesToPropertyName = superTypeProperty.comparePropertyName(propertyName);

                      if (superTypePropertyComparesToPropertyName) {
                        return true;
                      }
                    });

              if (superTypePropertyComparesToPropertyName) {
                return true;
              }
            }) || null;

      if (superType !== null) {
        const superTypeString = superType.getString();

        context.debug(`The '${superTypeString}' super-type has the same property.`);
      } else {
        propertyNameVerifies = true;
      }
    }

    if (propertyNameVerifies) {
      context.debug(`...verified the '${propertyString}' property's name.`);
    }

    return propertyNameVerifies;
  }

  verifyPropertyNominalTypeName(context, property) {
    let propertyNominalTypeNameVerifies = false;

    const propertyString = property.getString(),
          nominalTypeName = property.getNominalTypeName();

    context.trace(`Verifying the '${propertyString}' property's '${nominalTypeName}' nominal type name...`);

    const typeComparesToNominalTypeName = this.type.compareNominalTypeName(nominalTypeName);

    if (typeComparesToNominalTypeName) {
      propertyNominalTypeNameVerifies = true;
    } else {
      const typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);

      if (typePresent) {
        propertyNominalTypeNameVerifies = true;
      }
    }

    if (propertyNominalTypeNameVerifies) {
      context.debug(`...verifies the '${propertyString}' property's '${nominalTypeName}' nominal type name.`);
    }

    return propertyNominalTypeNameVerifies;
  }

  static name = "ComplexTypeDeclaration";
});
