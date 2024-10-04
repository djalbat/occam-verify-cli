"use strict";

export default class Error {
  constructor(fileContext, string) {
    this.fileContext = fileContext;
    this.string = string;
  }

  getFileContext() {
    return this.fileContext;
  }

  getString() {
    return this.string;
  }

  verify(errorNode) {
    let verified = false;

    const errorString = this.string;  ///

    this.fileContext.debug(`The '${errorString}' error cannot be verified.`, errorNode);

    return verified;
  }

  static fromErrorNode(errorNode, fileContext) {
    const node = errorNode, ///
          string = fileContext.nodeAsString(node),
          error = new Error(fileContext, string);

    return error;
  }
}

