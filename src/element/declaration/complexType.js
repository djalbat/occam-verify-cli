"use strict";

import Declaration from "../declaration";

import { define } from "../../elements";

export default define(class ComplexTypeDeclaration extends Declaration {
  constructor(context, string, node, type, prefixed) {
    super(context, string, node);

    this.type = type;
    this.prefixed = prefixed;
  }

  getType() {
    return this.type;
  }

  isPrefixed() {
    return this.prefixed;
  }

  verifyType() {
    let typeVerifies = false;

    const context = this.getContext(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' complex type...`);

    const typeName = this.type.getName(),
          includeRelease = true,
          includeDependencies = false,
          typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);

    if (typePresent) {
      context.trace(`The '${typeString}' type is already present.`);
    } else {
      const prefixedTypeName = typeName, ///
            typePresent = context.isTypePresentByPrefixedTypeName(prefixedTypeName);

      if (typePresent) {
        context.trace(`The '${typeString}' type is already present.`);
      } else {
        typeVerifies = true;
      }
    }

    if (typeVerifies) {
      context.trace(`...verified the '${typeString}' complex type.`);
    }

    return typeVerifies;
  }

  verifySuperType(superType) {
    let superTypeVerifies = false;

    const context = this.getContext(),
          superTypeString = superType.getString();

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

  verifySuperTypes() {
    let superTypesVerify;

    const context = this.getContext(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' complex type's super-types...`);

    const typeBasic = this.type.isBasic();

    if (typeBasic) {
      superTypesVerify = true;

      context.trace(`The '${typeString}' complex type is basic.`)
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
      context.debug(`...verified the '${typeString}' complex type's super-types.`);
    }

    return superTypesVerify;
  }

  verifyProperty(property, properties) {
    let propertyVerifies = false;

    const context = this.getContext(),
          propertyString = property.getString();

    context.trace(`Verifying the '${propertyString}' property...`);

    const propertyNameVerifies = this.verifyPropertyName(property, properties);

    if (propertyNameVerifies) {
      const propertyNominalTypeNameVerifies = this.verifyPropertyNominalTypeName(property, properties);

      if (propertyNominalTypeNameVerifies) {
        propertyVerifies = true;
      }
    }

    if (propertyVerifies) {
      context.debug(`...verified the '${propertyString}' property.`);
    }

    return propertyVerifies;
  }

  verifyProperties() {
    let propertiesVerify;

    const node = this.getNode(),
          context = this.getContext(),
          typeString = this.type.getString();

    context.trace(`Verifying the '${typeString}' complex type's properties...`, node);

    const includeSuperTypes = false,
          properties = this.type.getProperties(includeSuperTypes);

    propertiesVerify = properties.every((property) => {
      const propertyVerifies = this.verifyProperty(property, properties);

      if (propertyVerifies) {
        return true;
      }
    });

    if (propertiesVerify) {
      context.debug(`...verified the '${typeString}' complex type's properties.`, node);
    }

    return propertiesVerify;
  }

  verifyPropertyName(property, properties) {
    let propertyNameVerifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          propertyString = property.getString();

    context.trace(`Verifying the '${propertyString}' property's name...`, node);

    const propertyName = property.getName(),
          count = properties.reduce((count, property) => {
            const propertyComparesToPropertyName = property.comparePropertyName(propertyName);

            if (propertyComparesToPropertyName) {
              count++;
            }

            return count;
          }, 0);

    if (count > 1) {
      context.debug(`The '${propertyString}' property appears more than once.`, node);
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

        context.debug(`The '${superTypeString}' super-type has the same property.`, node);
      } else {
        propertyNameVerifies = true;
      }
    }

    if (propertyNameVerifies) {
      context.debug(`...verified the '${propertyString}' property's name.`, node);
    }

    return propertyNameVerifies;
  }

  verifyPropertyNominalTypeName(property) {
    let propertyNominalTypeNameVerifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          propertyString = property.getString(),
          nominalTypeName = property.getNominalTypeName();

    context.trace(`Verifying the '${propertyString}' property's '${nominalTypeName}' nominal type name...`, node);

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
      context.debug(`...verifies the '${propertyString}' property's '${nominalTypeName}' nominal type name.`, node);
    }

    return propertyNominalTypeNameVerifies;
  }

  async verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          complexTypeDeclarationString = this.getString(); ///

    context.trace(`Verifying the '${complexTypeDeclarationString}' complex type declaration...`, node);

    if (this.prefixed) {
      const typeString = this.type.getString();

      context.trace(`The '${typeString}' type is prefixed.`);
    } else {
      const typeVerifies = this.verifyType();

      if (typeVerifies) {
        const superTypesVerify = this.verifySuperTypes();

        if (superTypesVerify) {
          const propertiesVerify = this.verifyProperties();

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
      context.debug(`...verified the '${complexTypeDeclarationString}' complex type declaration.`, node);
    }

    return verifies;
  }

  static name = "ComplexTypeDeclaration";
});
