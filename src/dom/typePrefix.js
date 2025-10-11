"use strict";

import { domAssigned } from "../dom";

class TypePrefix {
  constructor(string, prefix) {
    this.string = string;
    this.prefix = prefix;
  }

  getString() {
    return this.string;
  }

  getPrefix() {
    return this.prefix;
  }

  toJSON() {
    const prefix = this.prefix,
          json = {
            prefix
          };

    return json;
  }

  static name = "TypePrefix";

  static fromJSON(json, context) {
    const { prefix } = json,
          string = prefix,  ///
          typePrefix = new TypePrefix(string, prefix);

    return typePrefix;
  }
}

export default domAssigned(TypePrefix);
