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
    return (this.name === name);
  }

  matchTypeName(typeName) {
    return (this.name === typeName);
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
