"use strict";

import { CustomGrammar, lexersUtilities, parsersUtilities, CombinedCustomGrammar } from "occam-custom-grammars";

import { push } from "../utilities/array";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, release, verified, fileContexts, florenceLexer, florenceParser, releaseContexts) {
    this.log = log;
    this.release = release;
    this.verified = verified;
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

  getReleaseName() {
    const releaseName = this.release.getName();

    return releaseName;
  }

  getVersion() { return this.release.getVersion(); }

  getFilePaths() { return this.release.getFilePatns(); }

  getFileContent(filePath) { return this.release.getFileContent(filePath); }

  getDependencies() { return this.release.getDependencies(); }

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
          releaseName = this.getReleaesName(),
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
    const releaseName = this.getReleaseName(),
          constructors = [],
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

  getCustomGrammar() {
    const releaseName = this.getReleaseName(),
          name = releaseName, ///
          termBNF = this.release.getTermBNF(),
          statementBNF = this.release.getStatementBNF(),
          metastatementBNF = this.release.getMetastatementBNF(),
          typePattern = this.release.getTypePattern(),
          symbolPattern = this.release.getSymbolPattern(),
          operatorPattern = this.release.getOperatorPattern(),
          customGrammar = CustomGrammar.fromNameTermBNFStatementBNFMetastatementBNFTypePatternSymbolPatternAndOperatorPattern(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);

    return customGrammar;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  tokenise(content) { return this.florenceLexer.tokenise(content); }

  parse(tokens) { return this.florenceParser.parse(tokens); }

  trace(message) { this.log.trace(message); }

  debug(message) { this.log.debug(message); }

  info(message) { this.log.info(message); }

  warning(message) { this.log.warning(message); }

  error(message) { this.log.error(message); }

  fatal(message) { this.log.fatal(message); }

  initialise(releaseContexts, dependencyReleaseContexts) {
    this.releaseContexts = releaseContexts;

    const releaseContext = this;  ///

    releaseContexts = [ releaseContext, ...dependencyReleaseContexts ]; ///

    const customGrammars = releaseContexts.map((releaseContext) => {
            const customGrammar = releaseContext.getCustomGrammar();

            return customGrammar;
          }),
          combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

    this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

    this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
  }

  static fromLogAndRelease(log, release, ...remainingArguments) {
    const verified = false,
          fileContexts = [],
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = [],
          releaseContext = new ReleaseContext(log, release, verified, fileContexts, florenceLexer, florenceParser, releaseContexts, ...remainingArguments);

    return releaseContext;
  }
}
