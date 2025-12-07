"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";

import { define } from "../ontology";
import { BASE_TYPE_SYMBOL } from "../constants";
import { typeFromTypeNode } from "../utilities/node";
import { stringFromTypeNameTypePrefixNameAndSuperTypes } from "../utilities/type";
import { superTypesFromJSON, propertiesFromJSON, superTypesToSuperTypesJSON, propertiesToPropertiesJSON } from "../utilities/json";

const { push, first } = arrayUtilities;

class Type {
  constructor(string, name, prefixName, superTypes, properties, provisional) {
    this.string = string;
    this.name = name;
    this.prefixName = prefixName;
    this.superTypes = superTypes;
    this.properties = properties;
    this.provisional = provisional;
  }

  getString() {
    return this.string;
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

  replaceSuperType(oldSuperType, newSuperType) {
    const index = this.superTypes.indexOf(oldSuperType),
          start = index,
          deleteCount = 1;

    this.superTypes.splice(start, deleteCount, newSuperType);
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
            superType = firstSuperType; ///

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

  matchTypeName(typeName) {
    const name = this.getName(),
          typeNameMatches = (name === typeName);

    return typeNameMatches;
  }

  matchProvisional(provisional) {
    let provisionalMatches;

    const provisionalA = provisional; ///

    provisional = this.isProvisional();

    const provisionalB = provisional; ///

    provisionalMatches = (provisionalA === provisionalB);

    return provisionalMatches;
  }

  matchPrefixedTypeName(prefixedTypeName) {
    let prefixedTypeNameMatches = false;

    const prefixed = this.isPrefixed();

    if (prefixed) {
      const prefixedName = this.getPrefixedName();

      prefixedTypeNameMatches = (prefixedTypeName === prefixedName);
    }

    return prefixedTypeNameMatches;
  }

  matchNominalTypeName(nominalTypeName) {
    let nominalTypeNameMatches = false;

    if (!nominalTypeNameMatches) {
      const name = this.getName();

      nominalTypeNameMatches = (nominalTypeName === name);
    }

    if (!nominalTypeNameMatches) {
      const prefixed = this.isPrefixed();

      if (prefixed) {
        const prefixedName = this.getPrefixedName();

        nominalTypeNameMatches = (nominalTypeName === prefixedName);
      }
    }

    return nominalTypeNameMatches;
  }

  toJSON() {
    const propertiesJSON = propertiesToPropertiesJSON(this.properties),
          superTypesJSON = superTypesToSuperTypesJSON(this.superTypes),
          provisional = this.provisional,
          properties = propertiesJSON,  ///
          superTypes = superTypesJSON,  ///
          name = this.name,
          prefixName = this.prefixName,
          json = {
            name,
            prefixName,
            superTypes,
            properties,
            provisional
          };

    return json;
  }

  static name = "Type";

  static fromJSON(json, context) {
    const { name, prefixName, provisional } = json,
          properties = propertiesFromJSON(json, context),
          superTypes = superTypesFromJSON(json, context),
          typeName = name,  ///
          typePrefixName = null,
          string = stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes),
          type = new Type(string, name, prefixName, superTypes, properties, provisional);

    return type;
  }

  static fromTypeNode(typeNode, context) {
    const type = typeFromTypeNode(typeNode, context);

    return type;
  }

  static fromSuperTypeNode(superTypeNode, context) {
    context = null; ///

    const typeNode = superTypeNode, ///
          type = typeFromTypeNode(typeNode, context);

    return type;
  }

  static fromTypeAssertionNode(typeAssertionNode, context) {
    const typeNode = typeAssertionNode.getTypeNode(),
          type = typeFromTypeNode(typeNode, context);

    return type;
  }

  static fromTypeAndProvisional(type, provisional) {
    const name = type.getName(),
          prefixName = type.getPrefixName(),
          superType = type, ///
          typeName = name,  ///
          typePrefixName = prefixName,  ///
          superTypes = [
            superType
          ],
          string = stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes),
          properties = type.getProperties();

    type = new Type(string, name, prefixName, superTypes, properties, provisional);  ///

    return type;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, context) {
    const typeNode = propertyDeclarationNode.getTypeNode(),
          type = typeFromTypeNode(typeNode, context);

    return type;
  }

  static fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const typeName = simpleTypeDeclarationNode.getTypeName(),
          provisional = simpleTypeDeclarationNode.isProvisional(),
          typePrefixName = simpleTypeDeclarationNode.getTypePrefixName(),
          superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
          name = typeName,  ///
          prefixName = typePrefixName,  ///
          properties = [],
          string = stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes),
          type = new Type(string, name, prefixName, superTypes, properties, provisional);

    return type;
  }

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const typeName = complexTypeDeclarationNode.getTypeName(),
          provisional = complexTypeDeclarationNode.isProvisional(),
          typePrefixName = complexTypeDeclarationNode.getTypePrefixName(),
          superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
          name = typeName,  ///
          prefixName = typePrefixName,  ///
          properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
          string = stringFromTypeNameTypePrefixNameAndSuperTypes(typeName, typePrefixName, superTypes),
          type = new Type(string, name, prefixName, superTypes, properties, provisional);

    return type;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    let type;

    const typeNode = constructorDeclarationNode.getTypeNode();

    if (typeNode === null) {
      type = baseType;
    } else {
      const provisional = constructorDeclarationNode.isProvisional();

      type = typeFromTypeNode(typeNode, context);

      type.setProvisional(provisional);
    }

    return type;
  }
}

export default define(Type);

function superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const superTypeNodes = simpleTypeDeclarationNode.getSuperTypeNodes(),
        superTypes = superTypeNodes.map((superTypeNode) => {
          const superType = Type.fromSuperTypeNode(superTypeNode, context);

          return superType;
        }),
        superTypesLength = superTypes.length;

  if (superTypesLength === 0) {
    const superType = baseType; ///

    superTypes.push(superType);
  }

  return superTypes;
}

function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(),
        superTypes = superTypeNodes.map((superTypeNode) => {
          const superType = Type.fromSuperTypeNode(superTypeNode, context);

          return superType;
        }),
        superTypesLength = superTypes.length;

  if (superTypesLength === 0) {
    const superType = baseType; ///

    superTypes.push(superType);
  }

  return superTypes;
}

function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const { Property } = ontology,
        propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(),
        properties = propertyDeclarationNodes.map((propertyDeclarationNode) => {
          const property = Property.fromPropertyDeclarationNode(propertyDeclarationNode, context);

          return property;
        });

  return properties;
}

class BaseType extends Type {
  static fromNothing() {
    const name = BASE_TYPE_SYMBOL,  ///
          string = name,  ///
          prefixName = null,
          superTypes = [],
          properties = [],
          provisional = false,
          baseType = new BaseType(string, name, prefixName, superTypes, properties, provisional);

    return baseType;
  }
}

export const baseType = BaseType.fromNothing();
