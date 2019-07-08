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
    let string;

    if (this.typeNames === undefined) {
      string = `${this.name}:${this.typeName}`;
    } else {
      const typeNames = this.typeNames.reduce((typeNames, typeName, index) => {
        typeNames = (index === 0) ?
                      typeName : ///
                        `${typeNames},${typeName}`;

        return typeNames;
      }, '');

      string = `${this.name}(${typeNames}):${this.typeName}`;
    }

    return string;
  }

  static fromConstructorNameAndTypeName(constructorName, typeName) {
    const name = constructorName,  ///
          typeNames = undefined,
          constructor = new Constructor(name, typeName, typeNames);

    return constructor;
  }

  static fromConstructorNameTypeNameAndTypeNames(constructorName, typeName, typeNames) {
    const name = constructorName,  ///
          constructor = new Constructor(name, typeName, typeNames);

    return constructor;
  }
}

module.exports = Constructor;
