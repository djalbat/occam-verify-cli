'use strict';

class Context {
  constructor(types) {
    this.types = types;
  }

  addType(type) {
    this.types.push(type);
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

  static fromNothing() {
    const types = [],
          context = new Context(types);

    return context;
  }
}

module.exports = Context;
