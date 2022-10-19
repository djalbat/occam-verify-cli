"use strict";

import { CustomGrammar, lexersUtilities, parsersUtilities, CombinedCustomGrammar } from "occam-custom-grammars";

import { push } from "../utilities/array";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(releaseName, fileContexts, florenceLexer, florenceParser, releaseContexts, releaseVerified) {
    this.releaseName = releaseName;
    this.fileContexts = fileContexts;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
    this.releaseContexts = releaseContexts;
    this.releaseVerified = releaseVerified;
  }

  getReleaseName() {
    return this.releaseName;
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

  isReleaseVerified() {
    return this.releaseVerified;
  }

  getRules(releaseNames = []) {
    const rules = [],
          releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(this.releaseName);

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
          releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(this.releaseName);

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
          releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(this.releaseName);

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
          releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(this.releaseName);

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
          releaseNamesIncludesReleaseName = releaseNames.includes(this.releaseName);

    if (!releaseNamesIncludesReleaseName) {
      releaseNames.push(this.releaseName);

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
    const name = this.releaseName, ///
          termBNF = this.getTermBNF(),
          statementBNF = this.getStatementBNF(),
          metastatementBNF = this.getMetastatementBNF(),
          typePattern = this.getTypePattern(),
          symbolPattern = this.getSymbolPattern(),
          operatorPattern = this.getOperatorPattern(),
          customGrammar = new CustomGrammar(name, termBNF, statementBNF, metastatementBNF, typePattern, symbolPattern, operatorPattern);

    return customGrammar;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  tokenise(content) { return this.florenceLexer.tokenise(content); }

  parse(tokens) { return this.florenceParser.parse(tokens); }

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

  static fromReleaseName(Class, releaseName, ...remainingArguments) {
    const fileContexts = [],
          florenceLexer = null,
          florenceParser = null,
          releaseContexts = [],
          releaseVerified = false,
          releaseContext = new Class(releaseName, fileContexts, florenceLexer, florenceParser, releaseContexts, releaseVerified, ...remainingArguments);

    return releaseContext;
  }
}
