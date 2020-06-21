"use strict";

class ParserConfiguration {
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
          configuration = new ParserConfiguration(nextSignificantToken);

    return configuration;
  }
}

module.exports = ParserConfiguration;
