"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { SINGLE_SPACE } from "../constants";

export default class PropertyNode extends NonTerminalNode {
  getPropertyIdentifiers() {
    const identifiers = this.getIdentifiers(),
          propertyIdentifiers = identifiers.join(SINGLE_SPACE);

    return propertyIdentifiers;
  }

  getIdentifiers() {
    const identifiers = this.mapChildNode((childNode) => {
      const terminalNode = childNode, ///
            content = terminalNode.getContent(),
            identifier = content; //

      return identifier;
    });

    return identifiers;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyNode, ruleName, childNodes, opacity, precedence); }
}
