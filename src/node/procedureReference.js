"use strict";

import NonTerminalNode from "../nonTerminalNode";

export default class ProcedureReferenceNode extends NonTerminalNode {
  getProcedureName() {
    let procedureName;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode, ///
              content = terminalNode.getContent();

        procedureName = content; ///

        return true;
      }
    });

    return procedureName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProcedureReferenceNode, ruleName, childNodes, opacity, precedence); }
}
