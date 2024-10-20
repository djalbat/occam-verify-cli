"use strict";

import shim from "./shim";

import { nodeQuery } from "./utilities/query";
import { OBJECT_TYPE_NAME } from "./typeNames";
import { typeNameFromTypeNode } from "./utilities/name";
import { superTypeFromJSON, superTypeToSuperTypeJSON } from "./utilities/json";

const typeNodeQuery = nodeQuery("/typeDeclaration/type[0]"),
      superTypeNodeQuery = nodeQuery("/typeDeclaration/type[1]");

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

  match(type) {
    const matches = (type === this);  ///

    return matches;
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
    let verifiedAtTopLevel = false;

    const typeString = this.string; ///

    fileContext.trace(`Verifying the '${typeString}' type when declared...`);

    const typePresent = fileContext.isTypePresentByTypeName(this.name);

    if (typePresent) {
      fileContext.debug(`The type '${typeString}' is already present.`);
    } else {
      const superTypeName = this.superType.getName(),
            superType = fileContext.findTypeByTypeName(superTypeName);

      if (superType === null) {
        const superTypeString = this.superType.getString();

        fileContext.debug(`The super-type '${superTypeString}' is not present.`);
      } else {
        this.superType = superType;

        verifiedAtTopLevel = true;
      }
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${typeString}' type when declared.`);
    }

    return verifiedAtTopLevel;
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
    const typeNode = typeNodeQuery(typeDeclarationNode),
          superTypeNode = superTypeNodeQuery(typeDeclarationNode),
          typeName = typeNameFromTypeNode(typeNode),
          superType = Type.fromTypeNode(superTypeNode),
          string = stringFromTypeNameAndSuperType(typeName, superType),
          name = typeName,  ///
          type = new Type(string, name, superType);

    return type;
  }
}

function stringFromTypeNameAndSuperType(typeName, superType) {
  let string = typeName;  ///

  if ((superType !== null) && (superType !== objectType)) {
    const typeString = string,  ///
          superTypeName = superType.getName();

    string = `${typeString}:${superTypeName}`;
  }

  return string;
}

Object.assign(shim, {
  Type
});

export default Type;

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
