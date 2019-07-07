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

  static fromNothing() {
    const types = [],
          context = new Context(types);

    return context;
  }
}

module.exports = Context;
