"use strict";

import { nodeAsString } from "./utilities/string";
import { LABEL_RULE_NAME } from "./ruleNames";
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

  toJSON() {
    const string = nodeAsString(this.node),
          json = string;  ///

    return json;
  }

  static fromJSON(json, releaseContext) {
    const content = json, ///
          ruleName = LABEL_RULE_NAME,
          node = releaseContext.nodeFromContentAndRuleName(content, ruleName),
          label = new Label(node);

    return label;
  }

  static fromLabelNode(labelNode) {
    const node = labelNode, ///
          variable = new Label(node);

    return variable;
  }
}
