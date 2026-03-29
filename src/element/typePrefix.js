"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateTypePrefix } from "../process/instantiate";
import { nameFromTypePrefixNode } from "../utilities/element";

export default define(class TypePrefix extends Element {
  constructor(context, string, node, lineIndex, name) {
    super(context, string, node, lineIndex);

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
    const string = this.getString(),
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex
          };

    return json;
  }

  static name = "TypePrefix";

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string, lineIndex } = json,
            typePrefixNode = instantiateTypePrefix(string, context),
            node = typePrefixNode, ///
            name = nameFromTypePrefixNode(typePrefixNode, context);

      context = null; ///

      const typePrefix = new TypePrefix(context, string, node, lineIndex, name);

      return typePrefix;
    }, context);
  }
});
