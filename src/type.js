"use strict";

import { TYPE_KIND } from "./kinds";
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
    const equalToType = this.isEqualTo(type),
          subTypeOfType = this.isSubTypeOf(type),
          equalToTypeOrSubTypeOf = (equalToType || subTypeOfType);

    return equalToTypeOrSubTypeOf;
  }

  isEqualToOrSuperTypeOf(type) {
    const equalToType = this.isEqualTo(type),
          superTypeOfType = this.isSuperTypeOf(type),
          equalToTypeOrSuperTypeOf = (equalToType || superTypeOfType);

    return equalToTypeOrSuperTypeOf;
  }

  match(type) {
    const equalToType = this.isEqualTo(type),
          subTypeOfType = this.isSubTypeOf(type),
          superTypeOfType = this.isSuperTypeOf(type),
          matches = (equalToType || subTypeOfType || superTypeOfType);

    return matches;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  matchTypeName(typeName) {
    const matchesTypeName = (this.name === typeName);

    return matchesTypeName;
  }

  asString(noSuperType = (this.superType === null)) {
    let string;

    if (noSuperType) {
      string = `${this.name}`;
    } else {
      const superTypeName = this.superType.getName();

      string = `${this.name}:${superTypeName}`;
    }

    return string;
  }

  toJSON() {
    const superTypeJSON = (this.superType === null) ?
                            null :
                              this.superType.toJSON(),
          kind = TYPE_KIND,
          name = this.name,
          superType = superTypeJSON,  ///
          json = {
            kind,
            name,
            superType
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { name } = json;

    let { superType } = json;

    if (superType !== null) {
      const superTypeJSON = superType;  ///

      json = superTypeJSON; ///

      superType = Type.fromJSON(json, releaseContext);

      const superTypeName = superType.getName();

      superType = releaseContext.findTypeByTypeName(superTypeName); ///
    }

    const type = new Type(name, superType);

    return type;
  }

  static fromTypeName(typeName) {
    const name = typeName,  ///
          superType = objectType, ///
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
  static fromNothing() {
    const name = OBJECT_TYPE_NAME,
          superType = null,
          objectType = new ObjectType(name, superType);

    return objectType;
  }
}

export const objectType = ObjectType.fromNothing();
