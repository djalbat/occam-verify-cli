"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { push } from "../utilities/array";
import { customGrammarFromRelease, combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, release, callbacks, verified, customGrammar, fileContexts, florenceLexer, florenceParser, releaseContexts) {
    this.log = log;
    this.release = release;
    this.callbacks = callbacks;
    this.verified = verified;
    this.customGrammar = customGrammar;
    this.fileContexts = fileContexts;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
    this.releaseContexts = releaseContexts;
  }

  getLog() {
    return this.log;
  }

  getRelease() {
    return this.release;
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

  getFileContexts() {
    return this.fileContexts;
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

  getFile(filePath) { return this.release.getFile(filePath); }

  getVersion() { return this.release.getVersion(); }

  getFilePaths() { return this.release.getFilePaths(); }

  getDependencies() { return this.release.getDependencies(); }

  matchShortenedVersion(shortenedVersion) { return this.release.matchShortenedVersion(shortenedVersion); }

  getReleaseName() {
    const releaseName = this.release.getName();

    return releaseName;
  }

  getRules(releaseNames = []) {
    const rules = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextRules = fileContext.getRules(bubble);

        push(rules, fileContextRules);
      });

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextRules = releaseContext.getRules(releaseNames);

        push(rules, releaseContextRules);
      });
    }

    return rules;
  }

  getTypes(releaseNames = []) {
    const types = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextTypes = fileContext.getTypes(bubble);

        push(types, fileContextTypes);
      });

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextTypes = releaseContext.getTypes(releaseNames);

        push(types, releaseContextTypes);
      });
    }

    return types;
  }

  getAxioms(releaseNames = []) {
    const axioms = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextAxioms = fileContext.getAxioms(bubble);

        push(axioms, fileContextAxioms);
      });

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextAxioms = releaseContext.getAxioms(releaseNames);

        push(axioms, releaseContextAxioms);
      });
    }

    return axioms;
  }

  getLabels(releaseNames = []) {
    const labels = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextLabels = fileContext.getLabels(bubble);

        push(labels, fileContextLabels);
      });

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextLabels = releaseContext.getLabels(releaseNames);

        push(labels, releaseContextLabels);
      });
    }

    return labels;
  }

  getCombinators(releaseNames = []) {
    const combinators = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextCombinators = fileContext.getCombinators(bubble);

        push(combinators, fileContextCombinators);
      });

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextCombinators = releaseContext.getCombinators(releaseNames);

        push(combinators, releaseContextCombinators);
      });
    }

    return combinators;
  }

  getConstructors(releaseNames = []) {
    const constructors = [],
          releaseName = this.getReleaseName(),
          releaseNamesIncludesReleaseName = releaseNames.includes(releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(releaseName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextConstructors = fileContext.getConstructors(bubble);

        push(constructors, fileContextConstructors);
      });

      this.releaseContexts.forEach((releaseContext) => {
        const releaseContextConstructors = releaseContext.getConstructors(releaseNames);

        push(constructors, releaseContextConstructors);
      });
    }

    return constructors;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
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

  asJSON() {
    const json = [];

    this.fileContexts.forEach((fileContext) => {
      const fileContextJSON = fileContext.asJSON();

      push(json, fileContextJSON);
    });

    return json;
  }

  static fromLogReleaseAndCallbacks(log, release, callbacks, ...remainingArguments) {
    const verified = false,
          customGrammar = customGrammarFromRelease(release),
          fileContexts = [],
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = [],
          releaseContext = new ReleaseContext(log, release, callbacks, verified, customGrammar, fileContexts, florenceLexer, florenceParser, releaseContexts, ...remainingArguments);

    return releaseContext;
  }
}
