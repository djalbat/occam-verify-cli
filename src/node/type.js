"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class TypeNode extends NonTerminalNode {
  getTypeName() {
    let typeName;

    this.someChildNode((childNode, index) => {
      if (index === 0) {
        const typeTerminalNode = childNode, ///
              content = typeTerminalNode.getContent();

        typeName = content; ///

        return true;
      }
    });

    return typeName;
  }

  getTypePrefix() {
    let typePrefix = null;

    this.someChildNode((childNode, index) => {
      if (index === 2) {
        const typeTerminalNode = childNode, ///
              content = typeTerminalNode.getContent();

        typePrefix = content; ///

        return true;
      }
    });

    return typePrefix;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence); }
}
