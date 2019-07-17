'use strict';

class Context {
  constructor(types, variables, constructors) {
    this.types = types;
    this.variables = variables;
    this.constructors = constructors
  }

  getTypes() {
    return this.types;
  }

  getVariables() {
    return this.variables;
  }

  getConstructors() {
    return this.constructors;
  }

  getTypeByTypeName(typeName) {
    const type = this.types.find((type) => {
      const name = type.getName();

      if (name === typeName) {
        return true;
      }
    });

    return type;
  }

  addType(type) {
    const typeString = type.asString();

    this.types.push(type);

    console.log(`Added the '${typeString}' type to the context.`);
  }

  addVariable(variable) {
    const variableString = variable.asString();

    this.variables.push(variable);

    console.log(`Added the '${variableString}' variable to the context.`);
  }

  addConstructor(constructor) {
    const constructorString = constructor.asString();

    this.constructors.push(constructor);

    console.log(`Added the '${constructorString}' constructor to the context.`);
  }

  retrieveTypeByName(name) {
    let retrievedType = undefined;

    this.types.some((type) => {
      const typeMatchesName = type.matchName(name);

      if (typeMatchesName) {
        retrievedType = type;

        return true;
      }
    });

    const type = retrievedType; ///

    return type;

  }

  retrieveVariableByName(name) {
    let retrievedVariable = undefined;

    this.variables.some((variable) => {
      const variableMatchesName = variable.matchName(name);

      if (variableMatchesName) {
        retrievedVariable = variable;

        return true;
      }
    });

    const variable = retrievedVariable; ///

    return variable;
  }

  isVariablePresentByName(name) {
    const variable = this.retrieveVariableByName(name),
          variablePresent = (variable !== undefined);

    return variablePresent;
  }

  isConstructorPresent(constructor) {
    const constructorString = constructor.asString(),
          constructorPresent = this.constructors.some((constructor) => {
            const constructorMatchesConstructorString = constructor.matchConstructorString(constructorString);

            if (constructorMatchesConstructorString) {
              return true;
            }
          });

    return constructorPresent;
  }

  isTypePresentByName(name) {
    const type = this.retrieveTypeByName(name),
          typePresent = (type !== undefined);

    return typePresent;
  }

  isTypePresentByTypeName(typeName) {
    const typePresent = this.types.some((type) => {
      const typeMatchesTypeName = type.matchTypeName(typeName);

      if (typeMatchesTypeName) {
        return true;
      }
    });

    return typePresent;
  }

  isTypeMissingByTypeName(typeName) {
    const typePresent = this.isTypePresentByTypeName(typeName),
          typeMissing = !typePresent;

    return typeMissing;
  }

  isTypeOrVariablePresentByName(name) {
    const typePresent = this.isTypePresentByName(name),
          variablePresent = this.isVariablePresentByName(name),
          typeOrVariablePresent = typePresent || variablePresent;

    return typeOrVariablePresent;
  }

  isSubTypeMissingBySubTypeName(subTypeName) {
    const typeName = subTypeName, ///
          subTypeMissing = this.types.every((type) => {
            const typeMatchesTypeName = type.matchTypeName(typeName);

            if (!typeMatchesTypeName) {
              return true;
            }
          });

    return subTypeMissing;
  }

  static fromNothing() {
    const types = [],
          variables = [],
          constructors = [],
          context = new Context(types, variables, constructors);

    return context;
  }
}

module.exports = Context;
