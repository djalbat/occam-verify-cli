"use strict";

class ParserContext {
  constructor(nextSignificantToken) {
    this.nextSignificantToken = nextSignificantToken;
  }

  getNextSignificantToken() {
    return this.nextSignificantToken;
  }

  getSavedIndex() {
    ///
  }

  backtrack() {
    ///
  }

  static fromTerminalNode(terminalNode) {
    const significantToken = terminalNode.getSignificantToken(),
          nextSignificantToken = significantToken,  ///
          parserContext = new ParserContext(nextSignificantToken);

    return parserContext;
  }
}

module.exports = ParserContext;
