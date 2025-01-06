"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { typeNameFromTypeNode } from "../utilities/name";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { superTypeFromJSON, propertiesFromJSON, superTypeToSuperTypeJSON, propertiesToPropertiesJSON } from "../utilities/json";

const typeDeclarationTypeNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/type[0]"),
      propertyDeclarationNodesQuery = nodesQuery("/complexTypeDeclaration/propertyDeclaration"),
      typeDeclarationSuperTypeNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/type[1]");

class Type {
  constructor(string, name, superType, properties) {
    this.string = string;
    this.name = name;
    this.superType = superType;
    this.properties = properties;
  }

  getString() {
    return this.string;
  }

  getName() {
    return this.name;
  }

  getSuperType() {
    return this.superType;
  }

  getProperties() {
    return this.properties;
  }

  setString(string) {
    this.string = string;
  }

  setName(name) {
    this.name = name;
  }

  setSuperType(superType) {
    this.superType = superType;
  }

  setProperties(properties) {
    this.properties = properties;
  }

  isEqualTo(type) {
    const equalTo = (this === type);

    return equalTo;
  }

  isSubTypeOf(type) {
    let subTypeOf;

    if (false) {
      ///
    } else if (this === objectType) {
      subTypeOf = false;
    } else if (this.superType === type) {
      subTypeOf = true;
    } else {
      subTypeOf = this.superType.isSubTypeOf(type);
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

  matchName(name) {
    const nodeMatches = (this.name === name);

    return nodeMatches;
  }

  matchTypeName(typeName) {
    const typeNameMatches = (this.name === typeName);

    return typeNameMatches;
  }

  matchTypeNode(typeNode) {
    const typeName = typeNameFromTypeNode(typeNode),
          typeNameMatches = this.matchTypeName(typeName),
          typeNodeMatches = typeNameMatches;  ///

    return typeNodeMatches;
  }

  toJSON() {
    const propertiesJSON = propertiesToPropertiesJSON(this.properties),
          superTypeJSON = superTypeToSuperTypeJSON(this.superType),
          properties = propertiesJSON,  ///
          superType = superTypeJSON,  ///
          name = this.name,
          json = {
            name,
            superType,
            properties
          };

    return json;
  }

  static name = "Type";

  static fromJSON(json, fileContext) {
    const { name } = json,
          typeName = name,  ///
          properties = propertiesFromJSON(json, fileContext),
          superType = superTypeFromJSON(json, fileContext),
          string = stringFromTypeNameAndSuperType(typeName, superType),
          type = new Type(string, name, superType, properties);

    return type;
  }

  static fromTypeNode(typeNode) {
    let type;

    if (typeNode === null) {
      type = objectType;
    } else {
      const typeName = typeNameFromTypeNode(typeNode),
            name = typeName,  ///
            string = name,  ///
            superType = null,
            properties = null;

      type = new Type(string, name, superType, properties);
    }

    return type;
  }

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const superType = superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          typeName = typeNameFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          string = stringFromTypeNameAndSuperType(typeName, superType),
          name = typeName,  ///
          properties = [],
          type = new Type(string, name, superType, properties);

    return type;
  }

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    const properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          superType = superTypeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          typeName = typeNameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          string = stringFromTypeNameAndSuperType(typeName, superType),
          name = typeName,  ///
          type = new Type(string, name, superType, properties);

    return type;
  }
}

export default domAssigned(Type);

function stringFromTypeNameAndSuperType(typeName, superType) {
  let string = typeName;  ///

  if ((superType !== null) && (superType !== objectType)) {
    const typeString = string,  ///
          superTypeName = superType.getName();

    string = `${typeString}:${superTypeName}`;
  }

  return string;
}

function typeNameFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(typeDeclarationNode),
        typeNode = typeDeclarationTypeNode, ///
        typeName = typeNameFromTypeNode(typeNode);

  return typeName;
}

function superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const typeDeclarationSuperTypeNode = typeDeclarationSuperTypeNodeQuery(typeDeclarationNode),
        superTypeNode = typeDeclarationSuperTypeNode, ///
        superType = Type.fromTypeNode(superTypeNode);

  return superType;
}

function typeNameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
  const typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode),
        typeNode = typeDeclarationTypeNode, ///
        typeName = typeNameFromTypeNode(typeNode);

  return typeName;
}

function superTypeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
  const typeDeclarationSuperTypeNode = typeDeclarationSuperTypeNodeQuery(complexTypeDeclarationNode),
        superTypeNode = typeDeclarationSuperTypeNode, ///
        superType = Type.fromTypeNode(superTypeNode);

  return superType;
}

function propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
  const propertyDeclarationNodes = propertyDeclarationNodesQuery(complexTypeDeclarationNode),
        properties = propertyDeclarationNodes.map((propertyDeclarationNode) => {
          const { Property } = dom,
                property = Property.fromPropertyDeclarationNode(propertyDeclarationNode, fileContext);

          return property;
        });

  return properties;
}

class ObjectType extends Type {
  toJSON() {
    const superType = null,
          name = this.name,
          json = {
            name,
            superType
          };

    return json;
  }

  static fromNothing() {
    const name = OBJECT_TYPE_NAME,
          string = name,  //
          superType = null,
          objectType = new ObjectType(string, name, superType);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();
