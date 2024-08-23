"use strict";

import { nodeAsString } from "./utilities/string";
import { metavariableNodeFromMetavariableString } from "./utilities/node";

export default class Label {
  constructor(node) {
    this.node = node;
  }

  getNode() {
    return this.node;
  }

  matchNode(node) {
    const matches = this.node.match(node);

    return matches;
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

  static fromMetavariableNode(metavariableNode) {
    const node = metavariableNode, ///
          variable = new Label(node);

    return variable;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const metavariableString = json, ///
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metavariableNode = metavariableNodeFromMetavariableString(metavariableString, lexer, parser),
          node = metavariableNode, ///
          label = new Label(node);

    return label;
  }
}
