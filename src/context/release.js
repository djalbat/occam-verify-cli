"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, name, entries, lexer, parser, verified, customGrammar, dependencyReleaseContexts) {
    this.log = log;
    this.name = name;
    this.entries = entries;
    this.lexer = lexer;
    this.parser = parser;
    this.verified = verified;
    this.customGrammar = customGrammar;
    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }

  getLog() {
    return log;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  isVerified() {
    return this.verified;
  }

  getCustomGrammar() {
    return this.customGrammar;
  }

  getDependencyReleaseContexts() {
    return this.dependencyReleaseContexts;
  }

  findTypeByTypeName(typeName) {
    const types = this.getTypes(),
          type = types.find((type) => {
            const matches = type.matchTypeName(typeName);

            if (matches) {
              return true;
            }
          }) || null;

    return type;
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

  tokenise(content) { return this.lexer.tokenise(content); }

  parse(tokens) { return this.parser.parse(tokens); }

  trace(message, node = null, tokens = null, filePath = null) { this.log.trace(message, node, tokens, filePath); }

  debug(message, node = null, tokens = null, filePath = null) { this.log.debug(message, node, tokens, filePath); }

  info(message, node = null, tokens = null, filePath = null) { this.log.info(message, node, tokens, filePath); }

  warning(message, node = null, tokens = null, filePath = null) { this.log.warning(message, node, tokens, filePath); }

  error(message, node = null, tokens = null, filePath = null) { this.log.error(message, node, tokens, filePath); }

  fatal(message, node = null, tokens = null, filePath = null) { this.log.fatal(message, node, tokens, filePath); }

  initialise(dependencyReleaseContexts) {
    const releaseContext = this,  ///
          releaseContexts = [
            releaseContext,
            ...dependencyReleaseContexts
          ],
          combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts),
          florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
          florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

    this.lexer = florenceLexer; ///

    this.parser = florenceParser; ///

    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }
}
