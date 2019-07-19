'use strict';

class Type {
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

  matchType(type) {
    let matchesType = false;

    if (type === this) {
      matchesType = true;
    } else {
      if (this.superType !== undefined) {
        matchesType = this.superType.matchType(type);
      }
    }

    return matchesType;
  }

  matchName(name) {
    const matchesName = (this.name === name);

    return matchesName;
  }

  matchTypeName(typeName) {
    const matchesTypeName = (this.name === typeName);

    return matchesTypeName;
  }

  asString() {
    let string;

    if (this.superType === undefined) {
      string = `${this.name}`;
    } else {
      const superTypeName = this.superType.getName();

      string = `${this.name}:${superTypeName}`;
    }

    return string;
  }

  static fromTypeName(typeName) {
    const name = typeName,  ///
          superType = undefined,
          type = new Type(name, superType);

    return type;
  }

  static fromTypeNameAndSuperType(typeName, superType) {
    const name = typeName,  ///
          type = new Type(name, superType);

    return type;
  }
}

module.exports = Type;
