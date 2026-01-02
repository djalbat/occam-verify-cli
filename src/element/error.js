"use strict";

import { define } from "../elements";

export default define(class Error {
  constructor(context, node, string) {
    this.context = context;
    this.node = node;
    this.string = string;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  verify() {
    let verifies = false;

    const errorString = this.string;  ///

    this.context.warning(`The '${errorString}' error cannot be verified.`, this.node);

    return verifies;
  }

  static name = "Error";

  static fromErrorNode(errorNode, context) {
    const node = errorNode, ///
          string = context.nodeAsString(node),
          error = new Error(context, node, string);

    return error;
  }
});
