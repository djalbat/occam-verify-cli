"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";

export default define(class TypePrefix extends Element {
  constructor(context, string, node, name) {
    super(context, string, node);

    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTypePrefixNode() {
    const node = this.getNode(),
          typePrefixNode = node;  ///

    return typePrefixNode;
  }

  compareTypePrefixName(typePrefixName) {
    const comparesToTypePrefixName = (this.name === typePrefixName);

    return comparesToTypePrefixName;
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
          node = null,
          typePrefix = new TypePrefix(context, string, node, name);

    return typePrefix;
  }
});
