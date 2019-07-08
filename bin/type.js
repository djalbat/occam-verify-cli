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

  matchTypeName(typeName) {
    return (this.name === typeName);
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
