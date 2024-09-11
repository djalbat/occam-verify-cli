"use strict";

import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import FileContext from "./file";

import { objectType } from "../type";
import { tail, push, leftDifference } from "../utilities/array";
import { customGrammarFromNameAndEntries, combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, json, name, lexer, parser, entries, verified, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts) {
    this.log = log;
    this.json = json;
    this.name = name;
    this.lexer = lexer;
    this.parser = parser;
    this.entries = entries;
    this.verified = verified;
    this.fileContexts = fileContexts;
    this.customGrammar = customGrammar;
    this.loggingDisabled = loggingDisabled;
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

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getEntries() {
    return this.entries;
  }

  isVerified() {
    return this.verified;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getCustomGrammar() {
    return this.customGrammar;
  }

  isLoggingDisabled() {
    return this.loggingDisabled;
  }

  getDependencyReleaseContexts() {
    return this.dependencyReleaseContexts;
  }

  setLog(log) {
    this.log = log;
  }

  setJSON(json) {
    this.json = json;
  }

  setName(name) {
    this.name = name;
  }

  setLexer(lexer) {
    this.lexer = lexer;
  }

  setParser(parser) {
    this.parser = parser;
  }

  setEntries(entries) {
    this.entries = entries;
  }

  setVerified(verified) {
    this.verified = verified;
  }

  setFileContexts(fileContexts) {
    this.fileContexts = fileContexts;
  }

  setCustomGrammar(customGrammar) {
    this.customGrammar = customGrammar;
  }

  setLoggingDisabled(loggingDisabled) {
    this.loggingDisabled = loggingDisabled;
  }

  setDependencyReleaseContexts(dependencyReleaseContexts) {
    this.dependencyReleaseContexts = dependencyReleaseContexts;
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

  getMetaLemmas(includeDependencies = true) {
    const metaLemmas = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextMetaLemmas = fileContext.getMetaLemmas(includeRelease);

      push(metaLemmas, fileContextMetaLemmas);
    });

    return metaLemmas;
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

  getMetatheorems(includeDependencies = true) {
    const metatheorems = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextMetatheorems = fileContext.getMetatheorems(includeRelease);

      push(metatheorems, fileContextMetatheorems);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextMetatheorems = releaseContext.getMetatheorems(includeDependencies);

        push(metatheorems, releaseContextMetatheorems);
      });
    }

    return metatheorems;
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

  disableLogging() {
    const loggingDisabled = true;

    this.setLoggingDisabled(loggingDisabled);
  }

  enableLogging() {
    const loggingDisabled = false;

    this.setLoggingDisabled(loggingDisabled);
  }

  trace(message, node = null, tokens = null, filePath = null) {
    if (this.loggingDisabled) {
      return;
    }

    this.log.trace(message, node, tokens, filePath);
  }

  debug(message, node = null, tokens = null, filePath = null) {
    if (this.loggingDisabled) {
      return;
    }

    this.log.debug(message, node, tokens, filePath);
  }

  info(message, node = null, tokens = null, filePath = null) {
    if (this.loggingDisabled) {
      return;
    }

    this.log.info(message, node, tokens, filePath);
  }

  warning(message, node = null, tokens = null, filePath = null) {
    if (this.loggingDisabled) {
      return;
    }

    this.log.warning(message, node, tokens, filePath);
  }

  error(message, node = null, tokens = null, filePath = null) {
    if (this.loggingDisabled) {
      return;
    }

    this.log.error(message, node, tokens, filePath);
  }

  fatal(message, node = null, tokens = null, filePath = null) {
    if (this.loggingDisabled) {
      return;
    }

    this.log.fatal(message, node, tokens, filePath);
  }

  verify(releaseContexts) {
    const combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts),
          florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
          florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

    this.lexer = florenceLexer; ///

    this.parser = florenceParser; ///

    this.dependencyReleaseContexts = tail(releaseContexts)

    if (this.json !== null) {
      const releaseContext = this;

      releaseContext.disableLogging();

      this.fileContexts = fileContextsFromJSON(this.json, releaseContext);

      verifyFileContexts(this.fileContexts, releaseContext);

      releaseContext.enableLogging();

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
          fileContexts = [],
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          loggingDisabled = false,
          dependencyReleaseContexts = null,
          releaseContext = new ReleaseContext(log, json, name, lexer, parser, entries, verified, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts);

    return releaseContext;
  }
}

function verifyFileContexts(fileContexts, releaseContext) {
  fileContexts = [  ///
    ...fileContexts
  ];

  for (;;) {
    const fileContextsLength = fileContexts.length;

    if (fileContextsLength === 0) {
      break;
    }

    const verifiedFileContexts = [];

    fileContexts.forEach((fileContext) => {
      const verified = fileContext.verify(releaseContext);

      if (verified) {
        const verifiedFileContext = fileContext;  ///

        verifiedFileContexts.push(verifiedFileContext);
      }
    });

    const verifiedFileContextsLength = verifiedFileContexts.length,
          fileVerified = (verifiedFileContextsLength > 0);

    if (!fileVerified) {
      break;
    }

    leftDifference(fileContexts, verifiedFileContexts);
  }
}

function fileContextsFromJSON(json, releaseContext) {
  const fileContextsJSON = json, ///
        fileContexts = fileContextsJSON.map((fileContextJSON) => {
          const json = fileContextJSON, ///
                fileContext = FileContext.fromJSONAndReleaseContext(json, releaseContext);

          return fileContext;
        });

  return fileContexts;
}
