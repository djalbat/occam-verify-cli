"use strict";

import { nodeAsString } from "./utilities/string";
import { labelNameFromLabelNode } from "./utilities/query";
import { labelNodeFromLabelString } from "./utilities/node";

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

  asString(tokens) {
    const string = nodeAsString(this.node, tokens);

    return string;
  }

  toJSON(tokens) {
    const string = nodeAsString(this.node, tokens),
          json = string;  ///

    return json;
  }

  static fromLabelNode(labelNode) {
    const node = labelNode, ///
          variable = new Label(node);

    return variable;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const labelString = json, ///
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          labelNode = labelNodeFromLabelString(labelString, lexer, parser),
          node = labelNode, ///
          label = new Label(node);

    return label;
  }
}
