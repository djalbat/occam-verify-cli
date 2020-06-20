"use strict";

class Error {
  constructor(node, message) {
    this.node = node;
    this.message = message;
  }

  getNode() {
    return this.node;
  }

  getMessage() {
    return this.message;
  }
}

module.exports = Error;
