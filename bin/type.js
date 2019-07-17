'use strict';

class Type {
  constructor(name, subTypeName) {
    this.name = name;
    this.subTypeName = subTypeName;
  }

  getName() {
    return this.name;
  }

  getSubTypeName() {
    return this.subTypeName;
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
    const string = (this.subTypeName === undefined) ?
                    `${this.name}` :
                      `${this.name}:${this.subTypeName}`;

    return string;
  }

  static fromTypeName(typeName) {
    const name = typeName,  ///
          subTypeName = undefined,
          type = new Type(name, subTypeName);

    return type;
  }

  static fromTypeNameAndSubTypeName(typeName, subTypeName) {
    const name = typeName,  ///
          type = new Type(name, subTypeName);

    return type;
  }
}

module.exports = Type;
