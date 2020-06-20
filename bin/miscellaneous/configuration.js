"use strict";

class Configuration {
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

  static fromSignificantToken(significantToken) {
    const nextSignificantToken = significantToken,  ///
          configuration = new Configuration(nextSignificantToken);

    return configuration;
  }
}

module.exports = Configuration;
