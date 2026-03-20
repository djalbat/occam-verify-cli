"use strict";

import Context from "../context";

export default class NestedContext extends Context {
  addAssignment(assignment) {
    ///
  }

  static fromNothing(context) {
    const nestedContext = new NestedContext(context);

    return nestedContext;
  }
}
