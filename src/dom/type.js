"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { PROVISIONAL } from "../constants";
import { domAssigned } from "../dom";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { typeNameFromTypeNode } from "../utilities/name";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { superTypesFromJSON, propertiesFromJSON, superTypesToSuperTypesJSON, propertiesToPropertiesJSON } from "../utilities/json";
import object from "occam-furtle/lib/dom/assignment/object";

const { push } = arrayUtilities;

const typeDeclarationTypeNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/type"),
      propertyDeclarationNodesQuery = nodesQuery("/complexTypeDeclaration/propertyDeclaration"),
      propertyDeclarationTypeNodeQuery = nodeQuery("/propertyDeclaration/type"),
      typeDeclarationSuperTypeNodesQuery = nodesQuery("/typeDeclaration|complexTypeDeclaration/types/type"),
      firstPrimaryKeywordTerminalNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/@primary-keyword[0]"),
      variableDeclarationSuperTypeNodeQuery = nodeQuery("/variableDeclaration/type");

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

  isProvisional() {
    return this.provisional;
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

  static fromJSON(json, fileContext) {
    const { name, provisional } = json,
          properties = propertiesFromJSON(json, fileContext),
          superTypes = superTypesFromJSON(json, fileContext),
          string = stringFromNameAndSuperTypes(name, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

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
            superTypes = null,
            properties = null,
            provisional = null;

      type = new Type(string, name, superTypes, properties, provisional);
    }

    return type;
  }

  static fromTypeAndProvisional(type, provisional, context) {
    const name = type.getName(),
          superType = type, ///
          superTypes = [
            superType
          ],
          string = stringFromNameAndSuperTypes(name, superTypes),
          properties = type.getProperties();

    type = new Type(string, name, superTypes, properties, provisional);  ///

    return type;
  }

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const provisional = provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          superTypes = superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          name = nameFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          string = stringFromNameAndSuperTypes(name, superTypes),
          properties = [],
          type = new Type(string, name, superTypes, properties, provisional);

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
            superTypes = null,
            properties = null,
            provisional = null;

      type = new Type(string, name, superTypes, properties, provisional);
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
            superTypes = null,
            properties = null,
            provisional = null;

      type = new Type(string, name, superTypes, properties, provisional);
    }

    return type;
  }

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    const provisional = provisionalFromTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          name = nameFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          string = stringFromNameAndSuperTypes(name, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }
}

export default domAssigned(Type);

function stringFromNameAndSuperTypes(name, superTypes) {
  let string = name;  ///

  const superTypesString = superTypesStringFromSuperTypes(superTypes);

  if (superTypesString !== null) {
    string = `${string}:${superTypesString}`;
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

function superTypesStringFromSuperTypes(superTypes) {
  const superTypesString = superTypes.reduce((superTypesString, superType) => {
    if (superType !== objectType) {
      const superTypeName = superType.getName();

      superTypesString = (superTypesString === null) ?
                           superTypeName :
                            `${superTypesString}, ${superTypeName}`;
    }

    return superTypesString;
  }, null);

  return superTypesString;
}

function superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(typeDeclarationNode),
        superTypes = typeDeclarationSuperTypeNodes.map((typeDeclarationSuperTypeNode) => {
          const superTypeNode = typeDeclarationSuperTypeNode, ///
                superType = Type.fromTypeNode(superTypeNode);

          return superType;
        });

  return superTypes;
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

function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
  const typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(complexTypeDeclarationNode),
        superTypes = typeDeclarationSuperTypeNodes.map((typeDeclarationSuperTypeNode) => {
          const superTypeNode = typeDeclarationSuperTypeNode, ///
                superType = Type.fromTypeNode(superTypeNode);

          return superType;
        }),
        superTypesLength = superTypes.length;

  if (superTypesLength === 0) {
    superTypes.push(objectType);
  }

  return superTypes;
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
          superTypes = [],
          properties = this.properties,
          provisional = this.provisional,
          json = {
            name,
            superTypes,
            properties,
            provisional
          };

    return json;
  }

  static fromNothing() {
    const name = OBJECT_TYPE_NAME,
          string = name,  //
          superTypes = [],
          properties = [],
          provisional = false,
          objectType = new ObjectType(string, name, superTypes, properties, provisional);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();
