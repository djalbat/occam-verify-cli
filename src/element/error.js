"use strict";

import Element from "../element";

import { define } from "../elements";

export default define(class Error extends Element {
  constructor(context, string, node) {
    super(context, string, node);
  }

  verify() {
    let verifies = false;

    const errorString = this.string;  ///

    this.context.warning(`The '${errorString}' error cannot be verified.`, this.node);

    return verifies;
  }

  static name = "Error";
});
