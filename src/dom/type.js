"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { PROVISIONAL } from "../constants";
import { domAssigned } from "../dom";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { typeNameFromTypeNode } from "../utilities/name";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { superTypeFromJSON, propertiesFromJSON, superTypeToSuperTypeJSON, propertiesToPropertiesJSON } from "../utilities/json";

const { push } = arrayUtilities;

const typeDeclarationTypeNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/type[0]"),
      propertyDeclarationNodesQuery = nodesQuery("/complexTypeDeclaration/propertyDeclaration"),
      propertyDeclarationTypeNodeQuery = nodeQuery("/propertyDeclaration/type"),
      typeDeclarationSuperTypeNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/type[1]"),
      firstPrimaryKeywordTerminalNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/@primary-keyword[0]"),
      variableDeclarationSuperTypeNodeQuery = nodeQuery("/variableDeclaration/type");

class Type {
  constructor(string, name, superType, properties, provisional) {
    this.string = string;
    this.name = name;
    this.superType = superType;
    this.properties = properties;
    this.provisional = provisional;
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

  getProperties(includeSuperType = true) {
    const properties = [];

    push(properties, this.properties);

    if (includeSuperType) {
      const superTypeProperties = this.superType.getProperties();

      push(properties, superTypeProperties);
    }

    return properties;
  }

  isProvisional() {
    return this.provisional;
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

  setProvisional(provisional) {
    this.provisional = provisional;
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

  toJSON() {
    const propertiesJSON = propertiesToPropertiesJSON(this.properties),
          superTypeJSON = superTypeToSuperTypeJSON(this.superType),
          provisional = this.provisional,
          properties = propertiesJSON,  ///
          superType = superTypeJSON,  ///
          name = this.name,
          json = {
            name,
            superType,
            properties,
            provisional
          };

    return json;
  }

  static name = "Type";

  static fromJSON(json, fileContext) {
    const { name, provisional } = json,
          properties = propertiesFromJSON(json, fileContext),
          superType = superTypeFromJSON(json, fileContext),
          string = stringFromNameAndSuperType(name, superType),
          type = new Type(string, name, superType, properties, provisional);

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
            properties = null,
            provisional = null;

      type = new Type(string, name, superType, properties, provisional);
    }

    return type;
  }

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const provisional = provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          superType = superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          name = nameFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          string = stringFromNameAndSuperType(name, superType),
          properties = [],
          type = new Type(string, name, superType, properties, provisional);

    return type;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
    let type;

    const propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode);

    if (propertyDeclarationTypeNode === null) {
      type = objectType;
    } else {
      const typeNode = propertyDeclarationTypeNode, ///
            typeName = typeNameFromTypeNode(typeNode),
            name = typeName,  ///
            string = name,  ///
            superType = null,
            properties = null,
            provisional = null;

      type = new Type(string, name, superType, properties, provisional);
    }

    return type;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    let type;

    const variableDeclarationSuperTypeNode = variableDeclarationSuperTypeNodeQuery(variableDeclarationNode);

    if (variableDeclarationSuperTypeNode === null) {
      type = objectType;
    } else {
      const typeNode = variableDeclarationSuperTypeNode,  ///
            typeName = typeNameFromTypeNode(typeNode),
            name = typeName,  ///
            string = name,  ///
            superType = null,
            properties = null,
            provisional = null;

      type = new Type(string, name, superType, properties, provisional);
    }

    return type;
  }

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    const provisional = provisionalFromTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          superType = superTypeFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          name = nameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          string = stringFromNameAndSuperType(name, superType),
          type = new Type(string, name, superType, properties, provisional);

    return type;
  }
}

export default domAssigned(Type);

function stringFromNameAndSuperType(name, superType) {
  let string = name;  ///

  if ((superType !== null) && (superType !== objectType)) {
    const typeString = string,  ///
          superTypeName = superType.getName();

    string = `${typeString}:${superTypeName}`;
  }

  return string;
}

function nameFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(typeDeclarationNode),
        typeNode = typeDeclarationTypeNode, ///
        typeName = typeNameFromTypeNode(typeNode),
        name = typeName;  ///

  return name;
}

function superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const typeDeclarationSuperTypeNode = typeDeclarationSuperTypeNodeQuery(typeDeclarationNode),
        superTypeNode = typeDeclarationSuperTypeNode, ///
        superType = Type.fromTypeNode(superTypeNode);

  return superType;
}

function provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const firstPrimaryKeywordTerminalNode = firstPrimaryKeywordTerminalNodeQuery(typeDeclarationNode),
        content = firstPrimaryKeywordTerminalNode.getContent(),
        contentProvisional = (content === PROVISIONAL),
        provisional = contentProvisional; ///

  return provisional;
}

function nameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
  const typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode),
        typeNode = typeDeclarationTypeNode, ///
        typeName = typeNameFromTypeNode(typeNode),
        name = typeName;  ///

  return name;
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
  getProperties() {
    const properties = [];

    return properties;
  }

  toJSON() {
    const name = this.name,
          superType = null,
          properties = this.properties,
          provisional = this.provisional,
          json = {
            name,
            superType,
            properties,
            provisional
          };

    return json;
  }

  static fromNothing() {
    const name = OBJECT_TYPE_NAME,
          string = name,  //
          superType = null,
          properties = [],
          provisional = false,
          objectType = new ObjectType(string, name, superType, properties, provisional);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();
