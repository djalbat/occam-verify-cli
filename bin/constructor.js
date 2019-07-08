'use strict';

class Constructor {
  constructor(name, typeName, typeNames) {
    this.name = name;
    this.typeName = typeName;
    this.typeNames = typeNames
  }

  getName() {
    return this.name;
  }

  getTypeName() {
    return this.typeName;
  }

  getTypeNames() {
    return this.typeNames;
  }

  matchConstructorName(constructorName) {
    return (this.name === constructorName);
  }

  asString() {
    const string = `${this.name}:${this.typeName}`;

    return string;
  }

  static fromConstructorNameAndTypeName(constructorName, typeName) {
    const name = constructorName,  ///
          typeNames = undefined,
          type = new Constructor(name, typeName, typeNames);

    return type;
  }
}

module.exports = Constructor;
