"use strict";

import FileContext from "./file";
import topLevelVerifier from "../verifier/topLevel";

import { filePathUtilities } from "occam-entities";
import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";

import { objectType } from "../type";
import { tail, push, leftDifference } from "../utilities/array";
import { customGrammarFromNameAndEntries, combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";

const { isFilePathNominalFilePath } = filePathUtilities,
      { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

export default class ReleaseContext {
  constructor(log, name, json, entries, lexer, parser, verified, initialised, fileContexts, customGrammar, dependencyReleaseContexts) {
    this.log = log;
    this.name = name;
    this.json = json;
    this.entries = entries;
    this.lexer = lexer;
    this.parser = parser;
    this.verified = verified;
    this.initialised = initialised;
    this.fileContexts = fileContexts;
    this.customGrammar = customGrammar;
    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }

  getLog() {
    return log;
  }

  getName() {
    return this.name;
  }

  getJSON() {
    return this.json;
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

  isInitialised() {
    return this.initialised;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getCustomGrammar() {
    return this.customGrammar;
  }

  getDependencyReleaseContexts() {
    return this.dependencyReleaseContexts;
  }

  setLog(log) {
    this.log = log;
  }

  setName(name) {
    this.name = name;
  }

  setEntries(entries) {
    this.entries = entries;
  }

  setLexer(lexer) {
    this.lexer = lexer;
  }

  setParser(parser) {
    this.parser = parser;
  }

  setVerified(verified) {
    this.verified = verified;
  }

  setInitialised(initialised) {
    return this.initialised = initialised;
  }

  setFileContexts(fileContexts) {
    this.fileContexts = fileContexts;
  }

  setCustomGrammar(customGrammar) {
    this.customGrammar = customGrammar;
  }

  setDependencyReleaseContexts(dependencyReleaseContexts) {
    this.dependencyReleaseContexts = dependencyReleaseContexts;
  }

  findFileContext(filePath) {
    const fileContext = this.fileContexts.find((fileContext) => {
      const fileContextFilePath = fileContext.getFilePath();

      if (fileContextFilePath === filePath) {
        return true;
      }
    });

    return fileContext;
  }

  isReleased() {
    const released = (this.json !== null);

    return released;
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
      const typeNameMatches = type.matchTypeName(typeName);

      if (typeNameMatches) {
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

  getFile(filePath) { return this.entries.getFile(filePath); }

  getVersion() { return this.entries.getVersion(); }

  getFilePaths() { return this.entries.getFilePaths(); }

  getDependencies() { return this.entries.getDependencies(); }

  matchShortenedVersion(shortenedVersion) { return this.entries.matchShortenedVersion(shortenedVersion); }

  trace(message, filePath = null) { this.log.trace(message, filePath); }

  debug(message, filePath = null) { this.log.debug(message, filePath); }

  info(message, filePath = null) { this.log.info(message, filePath); }

  warning(message, filePath = null) { this.log.warning(message, filePath); }

  error(message, filePath = null) { this.log.error(message, filePath); }

  initialise(releaseContexts) {
    const combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts),
          nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar),
          nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar),
          releaseContext = this,  ///
          released = this.isReleased();

    this.dependencyReleaseContexts = tail(releaseContexts); ///

    this.lexer = nominalLexer; ///

    this.parser = nominalParser; ///

    this.fileContexts = released ?
                          fileContextsFromJSONEntriesAndReleaseContext(this.json, this.entries, releaseContext) :
                            fileContextsFromEntriesAndReleaseContext(this.entries, releaseContext);

    this.initialised = true;
  }

  verify() {
    let verified = false;

    const fileContextsVerified = verifyFileContexts(this.fileContexts);

    if (fileContextsVerified) {
      this.verified = true;

      verified = true;
    }

    return verified;
  }

  toJSON() {
    const fileContextsJSON = this.fileContexts.map((fileContext) => {
            const fileContextJSON = fileContext.toJSON();

            return fileContextJSON;
          }),
          json = fileContextsJSON;  ///

    return json;
  }

  static fromLogNameJSONAndEntries(log, name, json, entries) {
    const lexer = null,
          parser = null,
          verified = false,
          initialised = false,
          fileContexts = null,
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          dependencyReleaseContexts = null,
          releaseContext = new ReleaseContext(log, name, json, entries, lexer, parser, verified, initialised, fileContexts, customGrammar, dependencyReleaseContexts);

    return releaseContext;
  }
}

function fileContextsFromJSONEntriesAndReleaseContext(json, entries, releaseContext) {
  const fileContexts = [];

  entries.forEachFile((file) => {
    const filePath = file.getPath(),
          filePathNominalFilePath = isFilePathNominalFilePath(filePath);

    if (filePathNominalFilePath) {
      const fileContext = FileContext.fromFileAndReleaseContext(file, releaseContext),
            filePath = fileContext.getFilePath();

      fileContexts.push(fileContext);

      const fileContextJSON = findFileContextJSON(json, filePath);

      fileContext.initialise(fileContextJSON);
    }
  });

  return fileContexts;
}

function fileContextsFromEntriesAndReleaseContext(entries, releaseContext) {
  const fileContexts = [];

  entries.forEachFile((file) => {
    const filePath = file.getPath(),
          filePathNominalFilePath = isFilePathNominalFilePath(filePath);

    if (filePathNominalFilePath) {
      const fileContext = FileContext.fromFileAndReleaseContext(file, releaseContext);

      fileContexts.push(fileContext);
    }
  });

  return fileContexts;
}

function findFileContextJSON(json, filePath) {
  const fileContextsJSON = json,  ///
        fileContextJSON = fileContextsJSON.find((fileContextJSON) => {
          const { filePath: fileContextFilePath } = fileContextJSON;

          if (fileContextFilePath === filePath) {
            return true;
          }
        });

  return fileContextJSON;
}

function verifyFileContexts(fileContexts) {
  let fileContextsVerified;

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
      const fileContextVerified = verifyFileContext(fileContext);

      if (fileContextVerified) {
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

  const fileContextsLength = fileContexts.length;

  fileContextsVerified = (fileContextsLength === 0);

  return fileContextsVerified;
}

function verifyFileContext(fileContext) {
  let fileContextVerified = false;

  const tokens = fileContext.getTokens();

  if (tokens === null) {
    const filePath = fileContext.getFilePath(),
          file = fileContext.getFile(filePath),
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          content = file.getContent(),
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens);

    fileContext.setTokens(tokens);

    fileContext.setNode(node);
  }

  const node = fileContext.getNode();

  if (node !== null) {
    fileContext.reset();

    fileContextVerified = topLevelVerifier.verify(node, fileContext);
  }

  return fileContextVerified;
}
