"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { customGrammarFromRelease, combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, verified, callbacks, customGrammar, florenceLexer, florenceParser, releaseContexts) {
    this.log = log;
    this.verified = verified;
    this.callbacks = callbacks;
    this.customGrammar = customGrammar;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
    this.releaseContexts = releaseContexts;
  }

  getLog() {
    return this.log;
  }

  isVerified() {
    return this.verified;
  }

  getCallbacks() {
    return this.callbacks;
  }

  getCustomGrammar() {
    return this.customGrammar;
  }

  getFlorenceLexer() {
    return this.florenceLexer;
  }

  getFlorenceParser() {
    return this.florenceParser;
  }

  getReleaseContexts() {
    return this.releaseContexts;
  }

  setVerified(verified) {
    this.verified = verified;
  }

  tokenise(content) { return this.florenceLexer.tokenise(content); }

  parse(tokens) { return this.florenceParser.parse(tokens); }

  trace(message) { this.log.trace(message); }

  debug(message) { this.log.debug(message); }

  info(message) { this.log.info(message); }

  warning(message) { this.log.warning(message); }

  error(message) { this.log.error(message); }

  fatal(message) { this.log.fatal(message); }

  halt(filePath, leastLineIndex, greatestLineIndex) { this.callbacks.halt(filePath, leastLineIndex, greatestLineIndex); }

  begin(filePath, leastLineIndex, greatestLineIndex) { this.callbacks.begin(filePath, leastLineIndex, greatestLineIndex); }

  complete(filePath, leastLineIndex, greatestLineIndex) { this.callbacks.complete(filePath, leastLineIndex, greatestLineIndex); }

  initialise(releaseContexts, dependencyReleaseContexts) {
    const releaseContext = this;  ///

    releaseContexts = [ releaseContext, ...dependencyReleaseContexts ]; ///

    const combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts);

    this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

    this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

    this.releaseContexts = releaseContexts;
  }

  static fromLogReleaseAndCallbacks(log, release, callbacks, ...remainingArguments) {
    const verified = false,
          customGrammar = customGrammarFromRelease(release),
          fileContexts = [],
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = null,
          releaseContext = new ReleaseContext(log, release, callbacks, verified, customGrammar, fileContexts, florenceLexer, florenceParser, releaseContexts, ...remainingArguments);

    return releaseContext;
  }
}
