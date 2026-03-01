"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { baseTypeFromNothing } from "../utilities/type";
import { nameToNameJSON, superTypesToSuperTypesJSON, propertiesToPropertiesJSON, provisionalToProvisionalJSON } from "../utilities/json";

const { push, first } = arrayUtilities;

export default define(class Type extends Element {
  constructor(context, string, node, name, prefixName, superTypes, properties, provisional) {
    super(context, string, node);
    this.name = name;
    this.prefixName = prefixName;
    this.superTypes = superTypes;
    this.properties = properties;
    this.provisional = provisional;
  }

  getName() {
    return this.name;
  }

  getPrefixName() {
    return this.prefixName;
  }

  getSuperTypes() {
    return this.superTypes;
  }

  getTypeNode() {
    const node = this.getNode(),
          typeNode = node;  ///

    return typeNode;
  }

  getProperties(includeSuperTypes = true) {
    const properties = [];

    push(properties, this.properties);

    if (includeSuperTypes) {
      this.superTypes.forEach((superType) => {
        const superTypeProperties = superType.getProperties();

        push(properties, superTypeProperties);
      });
    }

    return properties;
  }

  isProvisional(includeSuperTypes = true) {
    let provisional = this.provisional;

    if (includeSuperTypes) {
      if (!provisional) {
        provisional = this.superTypes.some((superType) => {
          const superTypeProvisional = superType.isProvisional();

          if (superTypeProvisional) {
            return true;
          }
        });
      }
    }

    return provisional;
  }

  setName(name) {
    this.name = name;
  }

  setPrefixName(prefixName) {
    this.prefixName = prefixName;
  }

  setSuperTypes(superTypes) {
    this.superTypes = superTypes;
  }

  setProperties(properties) {
    this.properties = properties;
  }

  setProvisional(provisional) {
    this.provisional = provisional;
  }

  replaceSuperType(superType, index) {
    const start = index,
          deleteCount = 1;

    this.superTypes.splice(start, deleteCount, superType);
  }

  isPrefixed() {
    const prefixed = (this.prefixName !== null);

    return prefixed;
  }

  getPrefixedName() {
    let prefixedName = null;

    const prefixed = this.isPrefixed();

    if (prefixed) {
      prefixedName = `${this.prefixName}${this.name}`;
    }

    return prefixedName;
  }

  getNominalTypeName() {
    const prefixed = this.isPrefixed(),
          nominalTypeName = prefixed ?
                             `${this.prefixName}${this.name}` :
                                this.name;

    return nominalTypeName;
  }

  isBasic() {
    let basic = false;

    const superTypesLength = this.superTypes.length;

    if (superTypesLength === 1) {
      const firstSuperType = first(this.superTypes),
            superType = firstSuperType, ///
            baseType = baseTypeFromNothing();

      if (superType === baseType) {
        basic = true;
      }
    }

    return basic;
  }

  isRefined() {
    let refined = false;

    const superTypesLength = this.superTypes.length;

    if (superTypesLength === 1) {
      const firstSuperType = first(this.superTypes),
            superType = firstSuperType, ///
            superTypeName = superType.getName();

      if (superTypeName === this.name) {
        refined = true;
      }
    }

    return refined;
  }

  isEqualTo(type) {
    const equalTo = (this === type);

    return equalTo;
  }

  isSubTypeOf(type) {
    let subTypeOf;

    const baseType = baseTypeFromNothing();

    if (this === baseType) {
      subTypeOf = false;
    } else {
      subTypeOf = this.superTypes.some((superType) => { ///
        if (superType === type) {
          return true;
        }

        const superTypeSubTypeOfType = superType.isSubTypeOf(type);

        if (superTypeSubTypeOfType) {
          return true;
        }
      })
    }

    return subTypeOf;
  }

  isSuperTypeOf(type) {
    const subTypeOf = type.isSubTypeOf(this),
          superTypeOf = subTypeOf;  ///

    return superTypeOf;
  }

  isComparableTo(type) {
    const equalTo = this.isEqualTo(type),
          subTypeOf = this.isSubTypeOf(type),
          superTypeOf = this.isSuperTypeOf(type),
          comparableTo = (equalTo || subTypeOf || superTypeOf);

    return comparableTo;
  }

  isEqualToOrSubTypeOf(type) {
    const equalTo = this.isEqualTo(type),
          subTypeOf = this.isSubTypeOf(type),
          equalToOrSubTypeOf = (equalTo || subTypeOf);

    return equalToOrSubTypeOf;
  }

  isEqualToOrSuperTypeOf(type) {
    const equalTo = this.isEqualTo(type),
          superTypeOf = this.isSuperTypeOf(type),
          equalToOrSuperTypeOf = (equalTo || superTypeOf);

    return equalToOrSuperTypeOf;
  }

  compareTypeName(typeName) {
    const name = this.getName(),
          nameTypeName = (name === typeName),
          comparesToTypeName = nameTypeName;  ///

    return comparesToTypeName;
  }

  compareProvisional(provisional, includeSupertypes = true) {
    let comparesToProvisional;

    const provisionalA = provisional; ///

    provisional = this.isProvisional(includeSupertypes);

    const provisionalB = provisional; ///

    comparesToProvisional = (provisionalA === provisionalB);

    return comparesToProvisional;
  }

  comparePrefixedTypeName(prefixedTypeName) {
    let comparesToPrefixedTypeName = false;

    const prefixed = this.isPrefixed();

    if (prefixed) {
      const prefixedName = this.getPrefixedName(),
            prefixedTypeNamePrefixedName = (prefixedTypeName === prefixedName);

      if (prefixedTypeNamePrefixedName) {
        comparesToPrefixedTypeName = true;
      }
    }

    return comparesToPrefixedTypeName;
  }

  compareNominalTypeName(nominalTypeName) {
    let comparesToNominalTypeName = false;

    if (!comparesToNominalTypeName) {
      const name = this.getName(),
            nominalTypeNameName = (nominalTypeName === name);

      if (nominalTypeNameName) {
        comparesToNominalTypeName = true;
      }
    }

    if (!comparesToNominalTypeName) {
      const prefixed = this.isPrefixed();

      if (prefixed) {
        const prefixedName = this.getPrefixedName(),
              nominalTypeNamePrefixedName = (nominalTypeName === prefixedName);

        if (nominalTypeNamePrefixedName) {
          comparesToNominalTypeName = true;
        }
      }
    }

    return comparesToNominalTypeName;
  }

  toJSON() {
    const nameJSON = nameToNameJSON(this.name),
          prefixNameJSON = nameToNameJSON(this.prefixName),
          propertiesJSON = propertiesToPropertiesJSON(this.properties),
          superTypesJSON = superTypesToSuperTypesJSON(this.superTypes),
          provisionalJSON = provisionalToProvisionalJSON(this.provisional),
          name = nameJSON,  ///
          prefixName = prefixNameJSON,  ///
          properties = propertiesJSON,  ///
          superTypes = superTypesJSON,  ///
          provisional = provisionalJSON,  ///
          string = this.getString(),
          json = {
            string,
            name,
            prefixName,
            properties,
            superTypes,
            provisional
          };

    return json;
  }

  static name = "Type";

  static fromJSON(json, context) {
    debugger
  }

  static fromName(name, context) {
    const string = name,  ///
          node = null,
          prefixName = null,
          superTypes = [],
          properties = [],
          provisional = false,
          type = new Type(context, string, node, name, prefixName, superTypes, properties, provisional);

    return type;
  }
});
