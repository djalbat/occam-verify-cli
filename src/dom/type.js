"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { typeNameFromTypeNode } from "../utilities/name";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { PROVISIONAL, PROVISIONALLY } from "../constants";
import { superTypesStringFromSuperTypes } from "../utilities/type";
import { superTypesFromJSON, propertiesFromJSON, superTypesToSuperTypesJSON, propertiesToPropertiesJSON } from "../utilities/json";

const { push, first } = arrayUtilities;

const typeAssertionTypeNodeQuery = nodeQuery("/typeAssertion/type"),
      typeDeclarationTypeNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/type"),
      propertyDeclarationNodesQuery = nodesQuery("/complexTypeDeclaration/propertyDeclaration"),
      propertyDeclarationTypeNodeQuery = nodeQuery("/propertyDeclaration/type"),
      variableDeclarationTypeNodeQuery = nodeQuery("/variableDeclaration/type"),
      typeDeclarationSuperTypeNodesQuery = nodesQuery("/typeDeclaration|complexTypeDeclaration/types/type"),
      constructorDeclarationSuperTypeNodeQuery = nodeQuery("/constructorDeclaration/type"),
      firstTypeDeclarationPrimaryKeywordTerminalNodeQuery = nodeQuery("/typeDeclaration|complexTypeDeclaration/@primary-keyword[0]"),
      lastVariableDeclarationSecondaryKeywordTerminalNodeQuery = nodeQuery("/variableDeclaration/@secondary-keyword[-1]");

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
    const basic = basicFromSuperTypes(this.superTypes);

    return basic;
  }

  isEqualTo(type) {
    let equalTo = false;

    if (this.type === type) {
      equalTo = true;
    } else {
      if (type.name === null) {

      }
    }

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

  static fromJSON(json, fileContext) {
    const { name, provisional } = json,
          properties = propertiesFromJSON(json, fileContext),
          superTypes = superTypesFromJSON(json, fileContext),
          string = stringFromNameAndSuperTypes(name, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }

  static fromTypeNode(typeNode, fileContext) {
    const type = typeFromTypeNode(typeNode, fileContext);

    return type;
  }

  static fromTypeAssertionNode(typeAssertionNode, fileContext) {
    const typeAssertionTypeNode = typeAssertionTypeNodeQuery(typeAssertionNode),
          typeNode = typeAssertionTypeNode, ///
          type = typeFromTypeNode(typeNode, fileContext);

    return type;
  }

  static fromTypeAndProvisional(type, provisional) {
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
    const properties = [],
          provisional = provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          superTypes = superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          name = nameFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          string = stringFromNameAndSuperTypes(name, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }

  static fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
    const propertyDeclarationTypeNode = propertyDeclarationTypeNodeQuery(propertyDeclarationNode),
          typeNode = propertyDeclarationTypeNode, ///
          type = typeFromTypeNode(typeNode, fileContext);

    return type;
  }

  static fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
    const properties = null,
          superTypes = null,
          provisional = provisionalFromVariableDeclarationNode(variableDeclarationNode, fileContext),
          name = nameFromVariableDeclarationNode(variableDeclarationNode, fileContext),
          string = stringFromName(name),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }

  static fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
    const constructorDeclarationSuperTypeNode = constructorDeclarationSuperTypeNodeQuery(constructorDeclarationNode),
          typeNode = constructorDeclarationSuperTypeNode, ///
          type = typeFromTypeNode(typeNode, fileContext);

    return type;
  }

  static fromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
    const properties = propertiesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          provisional = provisionalFromTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          superTypes = superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext),
          name = nameFromComplexTypeDeclaration(complexTypeDeclarationNode, fileContext),
          string = stringFromNameAndSuperTypes(name, superTypes),
          type = new Type(string, name, superTypes, properties, provisional);

    return type;
  }
}

export default domAssigned(Type);

function stringFromName(name) {
  const string = (name !== null) ?
                   name :
                     OBJECT_TYPE_NAME;

  return string;
}

function typeFromTypeNode(typeNode, fileContext) {
  let type;

  if (typeNode === null) {
    type = objectType;
  } else {
    const { Type } = dom,
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

function basicFromSuperTypes(superTypes) {
  let basic = false;

  const superTypesLength = superTypes.length;

  if (superTypesLength === 1) {
    const firstSuperType = first(superTypes),
          superType = firstSuperType; ///

    if (superType === objectType) {
      basic = true;
    }
  }

  return basic;
}

function stringFromNameAndSuperTypes(name, superTypes) {
  let string;

  if (name === null) {
    string = OBJECT_TYPE_NAME;  ///
  } else {
    const superTypesString = superTypesStringFromSuperTypes(superTypes);

    string = (superTypesString !== null) ?
               `${name}:${superTypesString}` :
                  name; ///
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

function nameFromComplexTypeDeclaration(complexTypeDeclarationNode, fileContext) {
  const typeDeclarationTypeNode = typeDeclarationTypeNodeQuery(complexTypeDeclarationNode),
        typeNode = typeDeclarationTypeNode, ///
        typeName = typeNameFromTypeNode(typeNode),
        name = typeName;  ///

  return name;
}

function nameFromVariableDeclarationNode(variableDeclarationNode, fileContext) {
  let name = null;

  const variableDeclarationTypeNode = variableDeclarationTypeNodeQuery(variableDeclarationNode);

  if (variableDeclarationTypeNode !== null) {
    const typeNode = variableDeclarationTypeNode, ///
          typeName = typeNameFromTypeNode(typeNode);

    name = typeName;  ///
  }

  return name;
}

function superTypesFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(typeDeclarationNode),
        superTypes = typeDeclarationSuperTypeNodes.map((typeDeclarationSuperTypeNode) => {
          const superTypeNode = typeDeclarationSuperTypeNode, ///
                superType = Type.fromTypeNode(superTypeNode, fileContext);

          return superType;
        }),
        superTypesLength = superTypes.length;

  if (superTypesLength === 0) {
    superTypes.push(objectType);
  }

  return superTypes;
}

function provisionalFromTypeDeclarationNode(typeDeclarationNode, fileContext) {
  const firstTypeDeclarationPrimaryKeywordTerminalNode = firstTypeDeclarationPrimaryKeywordTerminalNodeQuery(typeDeclarationNode),
        content = firstTypeDeclarationPrimaryKeywordTerminalNode.getContent(),
        contentProvisional = (content === PROVISIONAL),
        provisional = contentProvisional; ///

  return provisional;
}

function provisionalFromVariableDeclarationNode(variableDeclarationNode, fileContext) {
  let provisional = false;

  const lastVariableDeclarationSecondaryKeywordTerminalNode = lastVariableDeclarationSecondaryKeywordTerminalNodeQuery(variableDeclarationNode);

  if (lastVariableDeclarationSecondaryKeywordTerminalNode !== null) {
    const content = lastVariableDeclarationSecondaryKeywordTerminalNode.getContent(),
          contentProvisional = (content === PROVISIONALLY);

    provisional = contentProvisional; ///
  }

  return provisional;
}

function superTypesFromComplexTypeDeclarationNode(complexTypeDeclarationNode, fileContext) {
  const typeDeclarationSuperTypeNodes = typeDeclarationSuperTypeNodesQuery(complexTypeDeclarationNode),
        superTypes = typeDeclarationSuperTypeNodes.map((typeDeclarationSuperTypeNode) => {
          const superTypeNode = typeDeclarationSuperTypeNode, ///
                superType = Type.fromTypeNode(superTypeNode, fileContext);

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

  // matchName(name) {
  //   const nameMatches = ((name === null) || (name === OBJECT_TYPE_NAME));
  //
  //   return nameMatches;
  // }
  //
  // matchTypeName(typeName) {
  //   const typeNameMatches = ((typeName === null) || (typeName === OBJECT_TYPE_NAME));
  //
  //   return typeNameMatches;
  // }

  static fromNothing() {
    const name = null,
          string = OBJECT_TYPE_NAME,  ///
          superTypes = [],
          properties = [],
          provisional = false,
          objectType = new ObjectType(string, name, superTypes, properties, provisional);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();
