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

  getTypePrefixName() {
    let typePrefixName = null;

    this.someChildNode((childNode, index) => {
      if (index === 2) {
        const typeTerminalNode = childNode, ///
              content = typeTerminalNode.getContent();

        typePrefixName = content; ///

        return true;
      }
    });

    return typePrefixName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence); }
}
