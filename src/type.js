"use strict";

import { OBJECT_TYPE_NAME } from "./typeNames";

export default class Type {
  constructor(name, superType) {
    this.name = name;
    this.superType = superType;
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
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  matchTypeName(typeName) {
    const typeNameMatches = (this.name === typeName);

    return typeNameMatches;
  }

  asString(tokens, noSuperType) {
    let string;

    if (noSuperType) {
      string = `${this.name}`;
    } else {
      const superTypeName = this.superType.getName();

      string = `${this.name}:${superTypeName}`;
    }

    return string;
  }

  toJSON(tokens) {
    const superTypeJSON = this.superType.toJSON(tokens),
          name = this.name,
          superType = superTypeJSON,  ///
          json = {
            name,
            superType
          };

    return json;
  }

  static fromTypeName(typeName) {
    const name = typeName,  ///
          superType = objectType, ///
          type = new Type(name, superType);

    return type;
  }

  static fromJSONAndFileContext(json, fileContext) {
    let type;

    let { superType } = json;

    const superTypeJSON = superType;  ///

    superType = superTypeFromSuperTypeJSONAndFileContext(superTypeJSON, fileContext);

    const { name } = json;

    type = new Type(name, superType);

    return type;
  }

  static fromTypeNameAndSuperType(typeName, superType) {
    const name = typeName,  ///
          type = new Type(name, superType);

    return type;
  }
}

class ObjectType extends Type {
  toJSON(tokens) {
    const name = this.name,
          superType = null,  ///
          json = {
            name,
            superType
          };

    return json;
  }

  static fromNothing() {
    const name = OBJECT_TYPE_NAME,
          superType = null,
          objectType = new ObjectType(name, superType);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();

function superTypeFromSuperTypeJSONAndFileContext(superTypeJSON, fileContext) {
  let superType = null;

  if (superTypeJSON !== null) {
    const json = superTypeJSON, ///
          { name } = json,
          typeName = name,  ///
          type = fileContext.findTypeByTypeName(typeName);

      superType = (type !== null) ?
                    type :  ///
                      Type.fromJSONAndFileContext(json, fileContext);  ///
  }

  return superType;
}
