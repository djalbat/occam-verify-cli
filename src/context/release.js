"use strict";

import { levels } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities,
      { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

export default class ReleaseContext {
  constructor(name, entries, messages, lexer, parser, verified, customGrammar, dependencyReleaseContexts) {
    this.name = name;
    this.entries = entries;
    this.messages = messages;
    this.lexer = lexer;
    this.parser = parser;
    this.verified = verified;
    this.customGrammar = customGrammar;
    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getMessages() {
    return messages;
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

  trace(message) {
    const level = TRACE_LEVEL;

    this.log(level, message);
  }

  debug(message) {
    const level = DEBUG_LEVEL;

    this.log(level, message);
  }

  info(message) {
    const level = INFO_LEVEL;

    this.log(level, message);
  }

  warning(message) {
    const level = WARNING_LEVEL;

    this.log(level, message);
  }

  error(message) {
    const level = ERROR_LEVEL;

    this.log(level, message);
  }

  fatal(message) {
    const level = FATAL_LEVEL;

    this.log(level, message);
  }

  log(level, message, filePath = null, leastLineIndex = null, greatestLineIndex = null) {
    message = formatMessage(message, filePath, leastLineIndex, greatestLineIndex);

    this.messages.addMessage(level, message);
  }

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

function formatMessage(message, filePath, leastLineIndex, greatestLineIndex) {
  if (filePath === null) {
    message = `${message}`;
  } else if (leastLineIndex === greatestLineIndex) {
    const lineIndex = leastLineIndex; ///

    message = `${filePath} (${lineIndex}) - ${message}`;
  } else {
    message = `${filePath} (${leastLineIndex}-${greatestLineIndex}) - ${message}`;
  }

  return message;
}
