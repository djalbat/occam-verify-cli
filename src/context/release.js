"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import logMixins from "../mixins/log";

import { push } from "../utilities/array";
import { customGrammarFromRelease, combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

class ReleaseContext {
  constructor(log, release, verified, customGrammar, fileContexts, florenceLexer, florenceParser, releaseContexts) {
    this.log = log;
    this.release = release;
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

  getName() { return this.release.getName(); }

  getVersion() { return this.release.getVersion(); }

  getFilePaths() { return this.release.getFilePaths(); }

  getDependencies() { return this.release.getDependencies(); }

  matchShortenedVersion(shortenedVersion) { return this.release.matchShortenedVersion(shortenedVersion); }

  getRules(releaseNames = []) {
    const name = this.getName(),
          rules = [],
          releaseName = name, ///
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
    const name = this.getName(),
          types = [],
          releaseName = name, ///
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
    const name = this.getName(),
          axioms = [],
          releaseName = name, ///
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

  getCombinators(releaseNames = []) {
    const name = this.getName(),
          combinators = [],
          releaseName = name, ///
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
    const name = this.getName(),
          constructors = [],
          releaseName = name, ///
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

  tokenise(content) { return this.florenceLexer.tokenise(content); }

  parse(tokens) { return this.florenceParser.parse(tokens); }

  initialise(releaseContexts, dependencyReleaseContexts) {
    const releaseContext = this;  ///

    releaseContexts = [ releaseContext, ...dependencyReleaseContexts ]; ///

    const combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts);

    this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

    this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

    this.releaseContexts = releaseContexts;
  }

  static fromLogAndRelease(log, release, ...remainingArguments) {
    const verified = false,
          customGrammar = customGrammarFromRelease(release),
          fileContexts = [],
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = [],
          releaseContext = new ReleaseContext(log, release, verified, customGrammar, fileContexts, florenceLexer, florenceParser, releaseContexts, ...remainingArguments);

    return releaseContext;
  }
}

Object.assign(ReleaseContext.prototype, logMixins);

export default ReleaseContext;
