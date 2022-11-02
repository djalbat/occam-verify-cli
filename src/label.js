"use strict";

import { nodeAsString } from "./utilities/string";
import { labelNameFromLabelNode } from "./utilities/query";

export default class Label {
  constructor(node) {
    this.node = node;
  }

  getNode() {
    return this.node;
  }

  matchName(name) {
    const labelNode = this.node,
          labelName = labelNameFromLabelNode(labelNode),
          matchesName = (labelName === name);

    return matchesName;
  }

  asString() {
    const string = nodeAsString(this.node);

    return string;
  }

  asJSON() {
    const string = nodeAsString(this.node),
          json = string; ///

    return json;
  }

  static fromLabelNode(labelNode) {
    const node = labelNode, ///
          variable = new Label(node);

    return variable;
  }
}
