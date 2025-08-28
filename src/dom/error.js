"use strict";

import { domAssigned } from "../dom";

export default domAssigned(class Error {
  constructor(context, string) {
    this.context = context;
    this.string = string;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  verify() {
    let verifies = false;

    const errorString = this.string;  ///

    this.context.warning(`The '${errorString}' error cannot be verified.`);

    return verifies;
  }

  static name = "Error";

  static fromErrorNode(errorNode, context) {
    const node = errorNode, ///
          string = context.nodeAsString(node),
          error = new Error(context, string);

    return error;
  }
});
