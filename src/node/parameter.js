"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class ParameterNode extends NonTerminalNode {
  getParameterName() {
    let parameterName;

    this.someChildNode((childNode, index) => {
      const terminalNode = childNode, ///
            content = terminalNode.getContent();

      parameterName = content;  ///

      if (index === 0) {
        return true;
      }
    });

    return parameterName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParameterNode, ruleName, childNodes, opacity, precedence); }
}
