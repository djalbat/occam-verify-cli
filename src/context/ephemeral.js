"use strict";

import Context from "../context";

export default class EphemeralContext extends Context {
  isStated() {
    const stated = true;

    return stated;
  }

  static fromNothing(context) {
    const ephemeralContext = new EphemeralContext(context);

    return ephemeralContext;
  }
}