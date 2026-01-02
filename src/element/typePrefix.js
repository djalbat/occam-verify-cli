"use strict";

import { define } from "../elements";

export default define(class TypePrefix {
  constructor(string, node, name) {
    this.string = string;
    this.node = node;
    this.name = name;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
  }

  matchTypePrefixName(typePrefixName) {
    const typePrefixNameMatches = (this.name === typePrefixName);

    return typePrefixNameMatches;
  }

  toJSON() {
    const name = this.name,
          json = {
            name
          };

    return json;
  }

  static name = "TypePrefix";

  static fromJSON(json, context) {
    const { name } = json,
          string = name,  ///
          typePrefix = new TypePrefix(string, name);

    return typePrefix;
  }
});
