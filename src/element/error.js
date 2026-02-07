"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class Error extends Element {
  constructor(context, string, node) {
    super(context, string, node);
  }

  async verify() {
    let verifies = false;

    const node = this.getNode(),
          context = this.getContext(),
          errorString = this.getString();  ///

    context.warning(`The '${errorString}' error cannot be verified.`, node);

    return verifies;
  }

  static name = "Error";
});
