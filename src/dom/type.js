"use strict";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { typeNameFromTypeNode } from "../utilities/name";
import { superTypeFromJSON, superTypeToSuperTypeJSON } from "../utilities/json";

const typeDeclarationTypeNodeQuery = nodeQuery("/typeDeclaration/type[0]"),
      typeDeclarationSuperTypeNodeQuery = nodeQuery("/typeDeclaration/type[1]"),
      metavariableDeclarationTypeNodeQuery = nodeQuery("/metavariableDeclaration/metavariable/type");

class Type {
  constructor(string, name, superType) {
    this.string = string;
    this.name = name;
    this.superType = superType;
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

  verifyWhenDeclared(fileContext) {
    let verifiedWhenDeclared = false;

    const typeString = this.string; ///

    fileContext.trace(`Verifying the '${typeString}' type when declared...`);

    const typeDeclared = fileContext.isTypeDeclaredByTypeName(this.name);

    if (typeDeclared) {
      fileContext.debug(`The type '${typeString}' has already been declared.`);
    } else {
      const superTypeName = this.superType.getName(),
            superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        const superTypeString = this.superType.getString();

        fileContext.debug(`The super-type '${superTypeString}' is not present.`);
      } else {
        this.superType = superType;

        verifiedWhenDeclared = true;
      }
    }

    if (verifiedWhenDeclared) {
      fileContext.debug(`...verified the '${typeString}' type when declared.`);
    }

    return verifiedWhenDeclared;
  }

  toJSON() {
    const superTypeJSON = superTypeToSuperTypeJSON(this.superType),
          superType = superTypeJSON,  ///
          name = this.name,
          json = {
            name,
            superType
          };

    return json;
  }

  static name = "Type";

  static fromJSON(json, fileContext) {
    const { name } = json,
          typeName = name,  ///
          superType = superTypeFromJSON(json, fileContext),
          string = stringFromTypeNameAndSuperType(typeName, superType),
          type = new Type(string, name, superType);

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
            superType = null;

      type = new Type(string, name, superType);
    }

    return type;
  }

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const typeName = typeNameFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          superType = superTypeFromTypeDeclarationNode(typeDeclarationNode, fileContext),
          string = stringFromTypeNameAndSuperType(typeName, superType),
          name = typeName,  ///
          type = new Type(string, name, superType);

    return type;
  }

  static fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    let type = null;

    const metavariableDeclarationTypeNode = metavariableDeclarationTypeNodeQuery(metavariableDeclarationNode);

    if (metavariableDeclarationTypeNode !== null) {
      const typeNode = metavariableDeclarationTypeNode, ///
            typeName = typeNameFromTypeNode(typeNode);

      type = fileContext.findTypeByTypeName(typeName);
    }

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
