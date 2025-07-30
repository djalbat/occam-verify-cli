"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class TypeNode extends NonTerminalNode {
  getTypeName() {
    let typeName;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              content = terminalNode.getContent();

        typeName = content; ///

        return true;
      }
    });

    return typeName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence); }
}
