"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, name, entries, callbacks, verified, customGrammar, florenceLexer, florenceParser, dependencyReleaseContexts) {
    this.log = log;
    this.name = name;
    this.entries = entries;
    this.callbacks = callbacks;
    this.verified = verified;
    this.customGrammar = customGrammar;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }

  getLog() {
    return this.log;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getCallbacks() {
    return this.callbacks;
  }

  isVerified() {
    return this.verified;
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

  getDependencyReleaseContexts() {
    return this.dependencyReleaseContexts;
  }

  getReleaseName() {
    const name = this.getName(),
          releaseName = name; ///

    return releaseName;
  }

  isInitialised() {
    const initialised = (this.dependencyReleaseContexts !== null);  ///

    return initialised;
  }

  getFile(filePath) { return this.entries.getFile(filePath); }

  getVersion() { return this.entries.getVersion(); }

  getFilePaths() { return this.entries.getFilePaths(); }

  getDependencies() { return this.entries.getDependencies(); }

  matchShortenedVersion(shortenedVersion) { return this.entries.matchShortenedVersion(shortenedVersion); }

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

  initialise(dependencyReleaseContexts) {
    const releaseContext = this,  ///
          releaseContexts = [
            releaseContext,
            ...dependencyReleaseContexts
          ],
          combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts);

    this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

    this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }
}
