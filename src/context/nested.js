"use strict";

import Context from "../context";

export default class NestedContext extends Context {
  isNested() {
    const nested = true;

    return nested;
  }

  static fromNothing(context) {
    const nestedContext = new NestedContext(context);

    return nestedContext;
  }
}
