'use strict';

const arrayUtilities = require('./utilities/array');

const { matchArrays } = arrayUtilities;

class Constructor {
  constructor(name, term, typeName, typeNames) {
    this.name = name;
    this.term = term;
    this.typeName = typeName;
    this.typeNames = typeNames
  }

  getName() {
    return this.name;
  }

  getTerm() {
    return this.term;
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

  matchNameAndTypeNames(name, typeNames) {
    return ((this.name === name) && matchArrays(this.typeNames, typeNames));
  }

  asString() {
    let string;

    const nameOrTermString = (this.name !== undefined) ?
                                this.name :
                                  this.term.asString();

    if (this.typeNames === undefined) {
      string = `${nameOrTermString}:${this.typeName}`;
    } else {
      const typeNamesString = typeNamesAsTypeNamesString(this.typeNames);

      string = `${nameOrTermString}(${typeNamesString}):${this.typeName}`;
    }

    return string;
  }

  static fromNameAndTypeName(name, typeName) {
    const term = undefined,
          typeNames = undefined,
          constructor = new Constructor(name, term, typeName, typeNames);

    return constructor;
  }

  static fromNameTypeNameAndTypeNames(name, typeName, typeNames) {
    const term = undefined,
          constructor = new Constructor(name, term, typeName, typeNames);

    return constructor;
  }

  static fromTermTypeNameAndTypeNames(term, typeName, typeNames) {
    const name = undefined,
          constructor = new Constructor(name, term, typeName, typeNames);

    return constructor;
  }
}

module.exports = Constructor;

function typeNamesAsTypeNamesString(typeNames) {
  const typeNamesString = typeNames.reduce((typeNamesString, typeName, index) => {
    typeNamesString = (index === 0) ?
                       typeName : ///
                        `${typeNamesString},${typeName}`;

    return typeNamesString;
  }, '');

  return typeNamesString;
}
