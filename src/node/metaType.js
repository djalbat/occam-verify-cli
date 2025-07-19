"use strict";

import Node from "../node";

export default class MetaTypeNode extends Node {
  getMetaTypeName() {
    const metaTypeName = this.fromFirstChildNode((firstChildNode) => {
      const metaTypeTerminalNode = firstChildNode,  ///
            content = metaTypeTerminalNode.getContent(),
            metaTypeName = content; ///

      return metaTypeName;
    });

    return metaTypeName;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(MetaTypeNode, ruleName, childNodes, opacity); }
}
