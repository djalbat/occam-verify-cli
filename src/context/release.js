"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import FileContext from "./file";

import { push } from "../utilities/array";
import { objectType } from "../type";
import { customGrammarFromNameAndEntries, combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, json, name, entries, lexer, parser, verified, customGrammar, fileContexts, dependencyReleaseContexts) {
    this.log = log;
    this.json = json;
    this.name = name;
    this.entries = entries;
    this.lexer = lexer;
    this.parser = parser;
    this.verified = verified;
    this.customGrammar = customGrammar;
    this.fileContexts = fileContexts;
    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }

  getLog() {
    return log;
  }

  getJSON() {
    return this.json;
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

  getFileContexts() {
    return this.fileContexts;
  }

  getDependencyReleaseContexts() {
    return this.dependencyReleaseContexts;
  }

  getLabels(includeDependencies = true) {
    const labels = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextLabels = fileContext.getLabels(includeRelease);

      push(labels, fileContextLabels);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextLabels = releaseContext.getLabels(includeDependencies);

        push(labels, releaseContextLabels);
      });
    }

    return labels;
  }

  getTypes(includeDependencies = true) {
    const types = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextTypes = fileContext.getTypes(includeRelease);

      push(types, fileContextTypes);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTypes = releaseContext.getTypes(includeDependencies);

        push(types, releaseContextTypes);
      });
    }

    return types;
  }

  getRules(includeDependencies = true) {
    const rules = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextRules = fileContext.getRules(includeRelease);

      push(rules, fileContextRules);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextRules = releaseContext.getRules(includeDependencies);

        push(rules, releaseContextRules);
      });
    }

    return rules;
  }

  getAxioms(includeDependencies = true) {
    const axioms = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextAxioms = fileContext.getAxioms(includeRelease);

      push(axioms, fileContextAxioms);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextAxioms = releaseContext.getAxioms(includeDependencies);

        push(axioms, releaseContextAxioms);
      });
    }

    return axioms;
  }

  getLemmas(includeDependencies = true) {
    const lemmas = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextLemmas = fileContext.getLemmas(includeRelease);

      push(lemmas, fileContextLemmas);
    });

    return lemmas;
  }

  getTheorems(includeDependencies = true) {
    const theorems = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextTheorems = fileContext.getTheorems(includeRelease);

      push(theorems, fileContextTheorems);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTheorems = releaseContext.getTheorems(includeDependencies);

        push(theorems, releaseContextTheorems);
      });
    }

    return theorems;
  }

  getConjectures(includeDependencies = true) {
    const conjectures = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextConjectures = fileContext.getConjectures(includeRelease);

      push(conjectures, fileContextConjectures);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextConjectures = releaseContext.getConjectures(includeDependencies);

        push(conjectures, releaseContextConjectures);
      });
    }

    return conjectures;
  }

  getCombinators(includeDependencies = true) {
    const combinators = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextCombinators = fileContext.getCombinators(includeRelease);

      push(combinators, fileContextCombinators);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextCombinators = releaseContext.getCombinators(includeDependencies);

        push(combinators, releaseContextCombinators);
      });
    }

    return combinators;
  }

  getConstructors(includeDependencies = true) {
    const constructors = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextConstructors = fileContext.getConstructors(includeRelease);

      push(constructors, fileContextConstructors);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextConstructors = releaseContext.getConstructors(includeDependencies);

        push(constructors, releaseContextConstructors);
      });
    }

    return constructors;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  findTypeByTypeName(typeName) {
    let types = this.getTypes();

    types.push(objectType);

    const type = types.find((type) => {
      const matches = type.matchTypeName(typeName);

      if (matches) {
        return true;
      }
    }) || null;

    return type;
  }

  isReleased() {
    const released = (this.json !== null);

    return released;
  }

  isInitialised() {
    const initialised = (this.dependencyReleaseContexts !== null);  ///

    return initialised;
  }

  getReleaseName() {
    const name = this.getName(),
          releaseName = name; ///

    return releaseName;
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

  initialise(releaseContexts) {
    releaseContexts = releaseContexts.slice();  ///

    const combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts),
          releaseContext = releaseContexts.shift(),
          dependencyReleaseContexts = releaseContexts;  ///

    const florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
          florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);

    this.lexer = florenceLexer; ///

    this.parser = florenceParser; ///

    this.dependencyReleaseContexts = dependencyReleaseContexts;

    if (this.json !== null) {
      const fileContextsJSON = this.json; ///

      fileContextsJSON.forEach((fileContextJSON) => {
        const json = fileContextJSON, ///
              { filePath } = json,
              fileContext = FileContext.fromFilePathAndReleaseContext(filePath, releaseContext);

        fileContext.initialise(json);

        this.fileContexts.push(fileContext);
      });

      this.verified = true;
    }
  }

  toJSON() {
    const fileContextsJSON = this.fileContexts.map((fileContext) => {
            const fileContextJSON = fileContext.toJSON();

            return fileContextJSON;
          }),
          json = fileContextsJSON;  ///

    return json;
  }

  static fromLogJSONNameAndEntries(log, json, name, entries) {
    const lexer = null,
          parser = null,
          verified = false,
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          fileContexts = [],
          dependencyReleaseContexts = null,
          releaseContext = new ReleaseContext(log, json, name, entries, lexer, parser, verified, customGrammar, fileContexts, dependencyReleaseContexts);

    return releaseContext;
  }
}
