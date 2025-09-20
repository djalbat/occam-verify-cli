"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";
import { OBJECT_TYPE_NAME } from "../constants";
import { typeFromTypeNode } from "../utilities/node";
import { stringFromTypeNameNameAndSuperTypes } from "../utilities/type";
import { superTypesFromJSON, propertiesFromJSON, superTypesToSuperTypesJSON, propertiesToPropertiesJSON } from "../utilities/json";

const { push, first } = arrayUtilities;

class Type {
  constructor(string, name, superTypes, properties, provisional) {
    this.string = string;
    this.name = name;
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

  setString(string) {
    this.string = string;
  }

  setName(name) {
    this.name = name;
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

  isBasic() {
    let basic = false;

    const superTypesLength = this.superTypes.length;

    if (superTypesLength === 1) {
      const firstSuperType = first(this.superTypes),
            superType = firstSuperType; ///

      if (superType === objectType) {
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

    if (this === objectType) {
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
    const typeNameMatches = (this.name === typeName);

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

  toJSON() {
    const propertiesJSON = propertiesToPropertiesJSON(this.properties),
          superTypesJSON = superTypesToSuperTypesJSON(this.superTypes),
          provisional = this.provisional,
          properties = propertiesJSON,  ///
          superTypes = superTypesJSON,  ///
          name = this.name,
          json = {
            name,
            superTypes,
            properties,
            provisional
          };

    return json;
  }

  static name = "Type";

  static fromJSON(json, context) {
    const { name, provisional } = json,
          properties = propertiesFromJSON(json, context),
          superTypes = superTypesFromJSON(json, context),
          typeName = name,  ///
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }

  static fromTypeNode(typeNode, context) {
    const type = typeFromTypeNode(typeNode, context);

    return type;
  }

  static fromTypeAssertionNode(typeAssertionNode, context) {
    const typeNode = typeAssertionNode.getTypeNode(),
          type = typeFromTypeNode(typeNode, context);

    return type;
  }

  static fromTypeAndProvisional(type, provisional) {
    const name = type.getName(),
          superType = type, ///
          typeName = name,  ///
          superTypes = [
            superType
          ],
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          properties = type.getProperties();

    type = new Type(string, name, superTypes, properties, provisional);  ///

    return type;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, context) {
    const typeNode = propertyDeclarationNode.getTypeNode(),
          type = typeFromTypeNode(typeNode, context);

    return type;
  }

  static fromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
    const properties = [],
          provisional = simpleTypeDeclarationNode.isProvisional(),
          typeName = simpleTypeDeclarationNode.getTypeName(),
          name = typeName,  ///
          superTypes = superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context),
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
    const provisional = complexTypeDeclarationNode.isProvisional(),
          typeName = complexTypeDeclarationNode.getTypeName(),
          name = typeName,
          superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
          properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context),
          string = stringFromTypeNameNameAndSuperTypes(typeName, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, context) {
    let type;

    const typeNode = constructorDeclarationNode.getTypeNode();

    if (typeNode === null) {
      type = objectType;
    } else {
      const provisional = constructorDeclarationNode.isProvisional();

      type = typeFromTypeNode(typeNode, context);

      type.setProvisional(provisional);
    }

    return type;
  }
}

export default domAssigned(Type);

function superTypesFromSimpleTypeDeclarationNode(simpleTypeDeclarationNode, context) {
  const superTypeNodes = simpleTypeDeclarationNode.getSuperTypeNodes(),
        superTypes = superTypeNodes.map((superTypeNode) => {
          const superType = Type.fromTypeNode(superTypeNode, context);

          return superType;
        });

  return superTypes;
}

function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const superTypeNodes = complexTypeDeclarationNode.getSuperTypeNodes(),
        superTypes = superTypeNodes.map((superTypeNode) => {
          const superType = Type.fromTypeNode(superTypeNode, context);

          return superType;
        });

  return superTypes;
}

function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, context) {
  const { Property } = dom,
        propertyDeclarationNodes = complexTypeDeclarationNode.getPropertyDeclarationNodes(),
        properties = propertyDeclarationNodes.map((propertyDeclarationNode) => {
          const property = Property.fromPropertyDeclarationNode(propertyDeclarationNode, context);

          return property;
        });

  return properties;
}

class ObjectType extends Type {
  static fromNothing() {
    const name = OBJECT_TYPE_NAME,
          string = name,  ///
          superTypes = [],
          properties = [],
          provisional = false,
          objectType = new ObjectType(string, name, superTypes, properties, provisional);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();
