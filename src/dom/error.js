"use strict";

import { domAssigned } from "../dom";

export default domAssigned(class Error {
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

  verify() {
    let verifies = false;

    const errorString = this.string;  ///

    this.fileContext.warning(`The '${errorString}' error cannot be verified.`);

    return verifies;
  }

  static name = "Error";

  static fromErrorNode(errorNode, fileContext) {
    const node = errorNode, ///
          string = fileContext.nodeAsString(node),
          error = new Error(fileContext, string);

    return error;
  }
});
