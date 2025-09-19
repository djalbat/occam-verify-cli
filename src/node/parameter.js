"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class ParameterNode extends NonTerminalNode {
  getParameterValue() {
    let parameterValue;

    this.someChildNode((childNode, index) => {
      const terminalNode = childNode, ///
            content = terminalNode.getContent();

      parameterValue = content;  ///

      if (index === 0) {
        return true;
      }
    });

    return parameterValue;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParameterNode, ruleName, childNodes, opacity, precedence); }
}
