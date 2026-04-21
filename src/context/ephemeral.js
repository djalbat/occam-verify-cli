"use strict";

import Context from "../context";

export default class EphemeralContext extends Context {
  constructor(context, stated) {
    super(context);

    this.stated = stated;
  }

  isStated() {
    return this.stated;
  }

  static fromStated(stated, context) {
    const ephemeralContext = new EphemeralContext(context, stated);

    return ephemeralContext;
  }
}