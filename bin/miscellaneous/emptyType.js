"use strict";

class EmptyType {
  static fromNothing() {
    const emptyType = new EmptyType();

    return emptyType;
  }
}

const emptyType = EmptyType.fromNothing();

module.exports = emptyType;
