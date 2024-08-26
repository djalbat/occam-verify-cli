"use strict";

import { nodeAsString } from "./utilities/string";
import { metavariableNodeFromMetavariableString } from "./utilities/node";

export default class Label {
  constructor(metavariableNode) {
    this.metavariableNode = metavariableNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  matchMetavariableNode(metavariableNode) {
    const matches = this.metavariableNode.match(metavariableNode);

    return matches;
  }

  asString(tokens) {
    const string = nodeAsString(this.metavariableNode, tokens);

    return string;
  }

  toJSON(tokens) {
    const string = nodeAsString(this.metavariableNode, tokens),
          json = string;  ///

    return json;
  }

  static fromMetavariableNode(metavariableNode) {
    const label = new Label(metavariableNode);

    return label;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const metavariableString = json, ///
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metavariableNode = metavariableNodeFromMetavariableString(metavariableString, lexer, parser),
          label = new Label(metavariableNode);

    return label;
  }
}
