"use strict";

import { Context } from "occam-languages";

class NominalContext extends Context {
  static fromNothing() { return Context.fromNothing(NominalContext); }
}

const nominalContext = NominalContext.fromNothing();

export default nominalContext;
