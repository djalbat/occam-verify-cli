'use strict';

class Context {
  constructor(types, constructors) {
    this.types = types;
    this.constructors = constructors
  }

  addType(type) {
    this.types.push(type);
  }

  addConstructor(constructor) {
    this.constructors.push(constructor);
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

  isSubTypeMissingBySubTypeName(subTypeName) {
    const subTypeMissing = this.types.every((type) => {
      const typeNamesMatch = type.matchTypeName(subTypeName);

      if (!typeNamesMatch) {
        return true;
      }
    });

    return subTypeMissing;
  }

  isConstructorPresentByConstructorName(constructorName) {
    const constructorPresent = this.constructors.some((constructor) => {
      const constructorNamesMatch = constructor.matchConstructorName(constructorName);

      if (constructorNamesMatch) {
        return true;
      }
    });

    return constructorPresent;
  }

  static fromNothing() {
    const types = [],
          constructors = [],
          context = new Context(types, constructors);

    return context;
  }
}

module.exports = Context;
