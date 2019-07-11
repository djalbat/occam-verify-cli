'use strict';

class Context {
  constructor(types, variables, constructors) {
    this.types = types;
    this.variables = variables;
    this.constructors = constructors
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

  retrieveVariableByName(name) {
    let retrievedVariable = undefined;

    this.variables.some((variable) => {
      const variableNamesMatch = variable.matchName(name);

      if (variableNamesMatch) {
        retrievedVariable = variable;

        return true;
      }
    });

    const variable = retrievedVariable; ///

    return variable;
  }

  retrieveConstructorByName(name) {
    let retrievedConstructor = undefined;

    this.constructors.some((constructor) => {
      const constructorNamesMatch = constructor.matchName(name);

      if (constructorNamesMatch) {
        retrievedConstructor = constructor;

        return true;
      }
    });

    const constructor = retrievedConstructor; ///

    return constructor;
  }

  retrieveConstructorByNameAndTypeNames(name, typeNames) {
    let retrievedConstructor = undefined;

    this.constructors.some((constructor) => {
      const constructorNamesMatch = constructor.matchNameAndTypeNames(name, typeNames);

      if (constructorNamesMatch) {
        retrievedConstructor = constructor;

        return true;
      }
    });

    const constructor = retrievedConstructor; ///

    return constructor;
  }

  isVariablePresentByName(name) {
    const variable = this.retrieveVariableByName(name),
          variablePresent = (variable !== undefined);

    return variablePresent;
  }

  isConstructorPresentByName(name) {
    const constructor = this.retrieveConstructorByName(name),
          constructorPresent = (constructor !== undefined);

    return constructorPresent;
  }

  isConstructorPresentByNameAndTypeNames(name, typeNames) {
    const constructor = this.retrieveConstructorByNameAndTypeNames(name, typeNames),
          constructorPresent = (constructor !== undefined);

    return constructorPresent;
  }

  isTypePresentByTypeName(typeName) {
    const typePresent = this.types.some((type) => {
      const typeNamesMatch = type.matchTypeName(typeName);

      if (typeNamesMatch) {
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

  isSubTypeMissingBySubTypeName(subTypeName) {
    const typeName = subTypeName, ///
          subTypeMissing = this.types.every((type) => {
            const typeNamesMatch = type.matchTypeName(typeName);

            if (!typeNamesMatch) {
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
