"use strict";

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
    const equalToType = (this === type);

    return equalToType;
  }

  isSubTypeOf(type) {
    let subTypeOfType = false;

    if (this.superType === type) {
      subTypeOfType = true;
    } else {
      if (this.superType !== null) {
        subTypeOfType = this.superType.isSubTypeOf(type);
      }
    }

    return subTypeOfType;
  }

  isSuperTypeOf(type) {
    let superTypeOfType = false;

    const superType = type.getSuperType();

    if (superType === this) {
      superTypeOfType = true;
    } else {
      if (superType !== null) {
        superTypeOfType = superType.isSuperTypeOf(this);
      }
    }

    return superTypeOfType;
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

  isEqualToSubTypeOfOrSuperTypeOf(type) {
    const equalToType = this.isEqualTo(type),
          subTypeOfType = this.isSubTypeOf(type),
          superTypeOfType = this.isSuperTypeOf(type),
          equalToTypeSubTypeOfOrSuperTypeOf = (equalToType || subTypeOfType || superTypeOfType);

    return equalToTypeSubTypeOfOrSuperTypeOf;
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

  static fromTypeName(typeName) {
    const name = typeName,  ///
          superType = null,
          type = new Type(name, superType);

    return type;
  }

  static fromTypeNameAndSuperType(typeName, superType) {
    const name = typeName,  ///
          type = new Type(name, superType);

    return type;
  }
}