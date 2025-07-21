"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "./mixins/node";

class Node extends NonTerminalNode {
  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) {
    if (precedence === undefined) {
      precedence = opacity; ///

      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = Node; ///
    }

    const node = NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence);

    return node;
  }
}

Object.assign(Node.prototype, nodeMixins);

export default Node;
