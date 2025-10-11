"use strict";

import NonTerminalNode from "../node/nonTerminal";

export default class TypeNode extends NonTerminalNode {
  isPrefixed() {
    const multiplicity = this.getMultiplicity(),
          prefixed = (multiplicity > 1);

    return prefixed;
  }

  getTypeName() {
    let typeName;

    const prefixed = this.isPrefixed(),
          nameIndex = prefixed ? 2 : 0;

    this.someChildNode((childNode, index) => {
      if (index === nameIndex) {
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

    const prefixed = this.isPrefixed();

    if (prefixed) {
      const prefixIndex = 0;

      this.someChildNode((childNode, index) => {
        if (index === prefixIndex) {
          const typeTerminalNode = childNode, ///
                content = typeTerminalNode.getContent();

          typePrefixName = content; ///

          return true;
        }
      });
    }

    return typePrefixName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TypeNode, ruleName, childNodes, opacity, precedence); }
}
