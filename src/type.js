"use strict";

import shim from "./shim";

import { nodeQuery } from "./utilities/query";
import { OBJECT_TYPE_NAME } from "./typeNames";
import { typeNameFromTypeNode } from "./utilities/name";

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
    let subTypeOf = false;

    let superType = this.superType;

    while (superType !== null) {
      if (superType === type) {
        subTypeOf = true;

        break;
      }

      superType = superType.getSuperType();
    }

    return subTypeOf;
  }

  isSuperTypeOf(type) {
    let superTypeOf = false;

    let superType = type.getSuperType();

    while (superType !== null) {
      if (superType === this) {
        superTypeOf = true;

        break;
      }

      superType = superType.getSuperType();
    }

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

  verify(fileContext) {
    let verified = false;

    const typeString = this.string; ///

    fileContext.trace(`Verifying the '${typeString}' type...`);

    const typePresent = fileContext.isTypePresentByTypeName(this.name);

    if (typePresent) {
      verified = true;
    } else {
      fileContext.debug(`The type '${typeString}' is not present.`);
    }

    if (verified) {
      fileContext.debug(`...verified the '${typeString}' type.`);
    }

    return verified;
  }

  verifyAtTopLevel(fileContext) {
    let verifiedAtTopLevel = false;

    const typeString = this.string; ///

    fileContext.trace(`Verifying the '${typeString}' type at top level...`);

    const typePresent = fileContext.isTypePresentByTypeName(this.name);

    if (typePresent) {
      fileContext.debug(`The type '${typeString}' is already present.`);
    } else {
      const superTypeName = this.superType.getName(),
            superType = fileContext.isTypePresentByTypeName(superTypeName);

      if (superType === null) {
        const superTypeString = this.superType.getString();

        fileContext.debug(`The super-type '${superTypeString}' is not present.`);
      } else {
        this.superType = superType;

        verifiedAtTopLevel = true;
      }
    }

    if (verifiedAtTopLevel) {
      fileContext.debug(`...verified the '${typeString}' type at top level.`);
    }

    return verifiedAtTopLevel;
  }

  toJSON() {
    const superTypeJSON = (this.superType !== null) ?
                            this.superType.toJSON() :
                              null,
          name = this.name,
          superType = superTypeJSON,  ///
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
    const typeName = typeNameFromTypeNode(typeNode),
          name = typeName,  ///
          string = name,  ///
          superType = null,
          type = new Type(string, name, superType);

    return type;
  }

  static fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
    const typeNode = typeNodeQuery(typeDeclarationNode),
          superTypeNode = superTypeNodeQuery(typeDeclarationNode),
          typeName = typeNameFromTypeNode(typeNode),
          superType = (superTypeNode === null) ?
                        objectType :
                          Type.fromTypeNode(superTypeNode),
          string = stringFromTypeNameAndSuperType(typeName, superType),
          name = typeName,  ///
          type = new Type(string, name, superType);

    return type;
  }
}

function stringFromTypeNameAndSuperType(typeName, superType) {
  let string = typeName;  ///

  if (superType !== null) {
    const typeString = string,  ///
          superTypeString = superType.getString();

    string = `${typeString}:${superTypeString}`;
  }

  return string;
}

Object.assign(shim, {
  Type
});

export default Type;

class ObjectType extends Type {
  static fromNothing() {
    const name = OBJECT_TYPE_NAME,
          string = name,  //
          superType = null,
          objectType = new ObjectType(string, name, superType);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();

function superTypeFromJSON(json, fileContext) {
  let { superType } = json;

  const superTypeJSON = superType;  ///

  json = superTypeJSON; ///

  const { name } = json,
        typeName = name,  ///
        type = fileContext.findTypeByTypeName(typeName);

  superType = type; ///

  return superType;
}
