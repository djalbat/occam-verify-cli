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

  matchName(name) {
    return (this.name === name);
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

  static fromNameAndTypeName(name, typeName) {
    const typeNames = undefined,
          constructor = new Constructor(name, typeName, typeNames);

    return constructor;
  }

  static fromNameTypeNameAndTypeNames(name, typeName, typeNames) {
    const constructor = new Constructor(name, typeName, typeNames);

    return constructor;
  }
}

module.exports = Constructor;
