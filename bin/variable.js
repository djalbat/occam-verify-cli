'use strict';

class Variable {
  constructor(name, typeName) {
    this.name = name;
    this.typeName = typeName;
  }

  getName() {
    return this.name;
  }

  getTypeName() {
    return this.typeName;
  }

  matchVariableName(variableName) {
    return (this.name === variableName);
  }

  asString() {
    const string = (this.typeName === undefined) ?
                    `${this.name}` :
                      `${this.name}:${this.typeName}`;

    return string;
  }

  static fromVariableName(variableName) {
    const name = variableName,  ///
          typeName = undefined,
          variable = new Variable(name, typeName);

    return variable;
  }

  static fromVariableNameAndTypeName(variableName, typeName) {
    const name = variableName,  ///
          variable = new Variable(name, typeName);

    return variable;
  }
}

module.exports = Variable;
