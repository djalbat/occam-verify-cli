"use strict";

import { NonTerminalNode } from "occam-parsers";

import nodeMixins from "./mixins/node";

class Node extends NonTerminalNode {
  static fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity) {
    if (opacity === undefined) {
      opacity = childNodes; ///

      childNodes = ruleName;  ///

      ruleName = Class; ///

      Class = Node; ///
    }

    const node = NonTerminalNode.fromRuleNameChildNodesAndOpacity(Class, ruleName, childNodes, opacity);

    return node;
  }
}

Object.assign(Node.prototype, nodeMixins);

export default Node;
