"use strict";

import { define } from "../elements";

export default define(class Error {
  constructor(context, string, node) {
    this.context = context;
    this.string = string;
    this.node = node;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  verify() {
    let verifies = false;

    const errorString = this.string;  ///

    this.context.warning(`The '${errorString}' error cannot be verified.`, this.node);

    return verifies;
  }

  static name = "Error";
});
