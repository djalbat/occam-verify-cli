"use strict";

import { arrayUtilities } from "necessary";

import { filePathUtilities } from "occam-model";
import { lexersUtilities, parsersUtilities } from "occam-custom-grammars";
import { FurtleFileContext, asynchronousUtilities } from "occam-furtle";

import NominalLexer from "../nominal/lexer";
import NominalParser from "../nominal/parser";
import NominalFileContext from "../context/file/nominal";

import { getMetaTypes } from "../metaTypes";
import { customGrammarFromNameAndEntries, combinedCustomGrammarFromReleaseContexts } from "../utilities/customGrammar";
import { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, BREAK_MESSAGE } from "../constants";

const { asyncResolve } = asynchronousUtilities,
      { tail, push, first, filter, compress } = arrayUtilities,
      { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromCombinedCustomGrammar } = parsersUtilities,
      { isFilePathFurtleFilePath, isFilePathNominalFilePath } = filePathUtilities;

export default class ReleaseContext {
  constructor(log, name, json, entries, callback, lexer, parser, verified, initialised, fileContexts, customGrammar, dependencyReleaseContexts) {
    this.log = log;
    this.name = name;
    this.json = json;
    this.entries = entries;
    this.callback = callback;
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

  getCallback() {
    return this.callback;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getMetaTypes() {
    const metaTypes = getMetaTypes();

    return metaTypes;
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

  getReleaaseContext() {
    const releaseContext = this;  ///

    return releaseContext;
  }

  isReleased() {
    const released = (this.json !== null);

    return released;
  }

  findFile(filePath) { return this.entries.findFile(filePath); }

  findFileContext(filePath) {
    const fileContext = this.fileContexts.find((fileContext) => {
      const fileContextFilePath = fileContext.getFilePath();

      if (fileContextFilePath === filePath) {
        return true;
      }
    });

    return fileContext;
  }

  getTypePrefix() {
    let typePrefix = null;

    const includeDependencies = false,
          typePrefixes = this.getTypePrefixes(includeDependencies),
          typePrefixesLength = typePrefixes.length;

    if (typePrefixesLength === 1) {
      const firstTypePrefix = first(typePrefixes);

      typePrefix = firstTypePrefix; ///
    }

    return typePrefix;
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

  getProcedures(includeDependencies = true) {
    const procedures = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextProcedures = fileContext.getProcedures(includeRelease);

      push(procedures, fileContextProcedures);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
          releaseContextProcedures = releaseContext.getProcedures(includeDependencies);

        push(procedures, releaseContextProcedures);
      });
    }

    return procedures;
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

  getTypePrefixes(includeDependencies = true) {
    const typePrefixes = [];

    this.fileContexts.forEach((fileContext) => {
      const includeRelease = false,
            fileContextTypePrefixes = fileContext.getTypePrefixes(includeRelease);

      push(typePrefixes, fileContextTypePrefixes);
    });

    if (includeDependencies) {
      const dependencyReleaseContexts = this.getDependencyReleaseContexts();

      dependencyReleaseContexts.forEach((releaseContext) => {
        const includeDependencies = false,
              releaseContextTypePrefixes = releaseContext.getTypePrefixes(includeDependencies);

        push(typePrefixes, releaseContextTypePrefixes);
      });
    }

    return typePrefixes;
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

  trace(message) {
    const level = TRACE_LEVEL;

    this.writeToLog(level, message);
  }

  debug(message) {
    const level = DEBUG_LEVEL;

    this.writeToLog(level, message);
  }

  info(message) {
    const level = INFO_LEVEL;

    this.writeToLog(level, message);
  }

  warning(message) {
    const level = WARNING_LEVEL;

    this.writeToLog(level, message);
  }

  error(message) {
    const level = ERROR_LEVEL;

    this.writeToLog(level, message);
  }

  writeToLog(level, message, filePath = null, lineIndex = null) {
    this.log.write(level, message, filePath, lineIndex);
  }

  getDepth() {
    const depth = 0;

    return depth;
  }

  initialise(releaseContexts) {
    const combinedCustomGrammar = combinedCustomGrammarFromReleaseContexts(releaseContexts),
          nominalLexer = nominalLexerFromCombinedCustomGrammar(NominalLexer, combinedCustomGrammar),
          nominalParser = nominalParserFromCombinedCustomGrammar(NominalParser, combinedCustomGrammar),
          releaseContext = this,  ///
          released = this.isReleased();

    this.dependencyReleaseContexts = tail(releaseContexts); ///

    this.lexer = nominalLexer; ///

    this.parser = nominalParser; ///

    released ?
      fileContextsFromJSON(this.json, this.fileContexts, releaseContext) :
        fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);

    this.initialised = true;
  }

  async verify() {
    let verifies = false;

    const typePrefixes = this.getTypePrefixes(),
          releaseContext = this, ///
          typePrefixesVerify = verifyTypePrefixes(typePrefixes, releaseContext);

    if (typePrefixesVerify) {
      const verifiedFileContexts = [],
            fileContextsVerify = await verifyFileContexts(this.fileContexts, verifiedFileContexts);

      if (fileContextsVerify) {
        this.fileContexts = verifiedFileContexts; ///

        this.verified = true;

        verifies = true;
      }
    }

    return verifies;
  }

  toJSON() {
    const fileContextsJSON = this.fileContexts.map((fileContext) => {
            const fileContextJSON = fileContext.toJSON();

            return fileContextJSON;
          }),
          json = fileContextsJSON;  ///

    return json;
  }

  async break(filePath, lineIndex) {
    const level = TRACE_LEVEL,
          message = BREAK_MESSAGE;

    this.writeToLog(level, message, filePath, lineIndex);

    const context = this; ///

    await this.callback(context, filePath, lineIndex);
  }

  static fromLogNameJSONEntriesAndCallback(log, name, json, entries, callback) {
    const lexer = null,
          parser = null,
          verifies = false,
          initialised = false,
          fileContexts = [],
          customGrammar = customGrammarFromNameAndEntries(name, entries),
          dependencyReleaseContexts = null,
          releaseContext = new ReleaseContext(log, name, json, entries, callback, lexer, parser, verifies, initialised, fileContexts, customGrammar, dependencyReleaseContexts);

    return releaseContext;
  }
}

function verifyTypePrefixes(typePrefixes, releaseContext) {
  let typePrefixesVerify = true;

  const typePrefixesLength = typePrefixes.length,
        compressedTypePrefixes = [  ///
          ...typePrefixes,
        ];

  compress(compressedTypePrefixes, (typePrefixA, typePrefixB) => {
    const typePrefixAName = typePrefixA.getName(),
          typePrefixBName = typePrefixB.getName();

    if (typePrefixAName !== typePrefixBName) {
      return true;
    }
  });

  const compressTypePrefixesLength = compressedTypePrefixes.length;

  if (typePrefixesLength > compressTypePrefixesLength) {
    filter(compressedTypePrefixes, (typePrefix) => {
      const typePrefixesIncludesTypePrefix = typePrefixes.includes(typePrefix);

      if (!typePrefixesIncludesTypePrefix) {
        return true;
      }
    });

    const firstTypePrefix = first(typePrefixes),
          typePrefix = firstTypePrefix, ///
          typePrefixString = typePrefix.getString();

    releaseContext.info(`The '${typePrefixString}' type prefix is duplicated at least once, possibly among others.`)

    typePrefixesVerify = false;
  }

  return typePrefixesVerify;
}

async function verifyFileContexts(fileContexts, verifiedFileContexts) {
  const resolved = asyncResolve(fileContexts, verifiedFileContexts, async (fileContext) => {
          const fileContextVerifies = await fileContext.verify();

          if (fileContextVerifies) {
            return true;
          }
        }),
        fileContextsVerify = resolved;  ///

  return fileContextsVerify;
}

function fileContextsFromJSON(json,fileContexts, releaseContext) {
  const fileContextsJSON = json;  ///

  fileContextsJSON.forEach((fileContextJSON) => {
    const { filePath } = fileContextJSON,
          json = fileContextJSON, ///
          filePathFurtleFilePath = isFilePathFurtleFilePath(filePath),
          filePathNominalFilePath = isFilePathNominalFilePath(filePath);

    if (filePathFurtleFilePath) {
      const furtleFileContext = FurtleFileContext.fromFilePath(filePath, releaseContext),
            fileContext = furtleFileContext;  ///

      fileContexts.push(fileContext);

      fileContext.initialise(json);
    }

    if (filePathNominalFilePath) {
      const context = releaseContext, ///
            fileContext = NominalFileContext.fromFilePath(filePath, context);

      fileContexts.push(fileContext);

      fileContext.initialise(json);
    }
  });
}

function fileContextsFromEntries(entries, fileContexts, releaseContext) {
  const context = releaseContext; ///

  entries.forEachFile((file) => {
    const filePath = file.getPath(),
          filePathFurtleFilePath = isFilePathFurtleFilePath(filePath),
          filePathNominalFilePath = isFilePathNominalFilePath(filePath);

    if (filePathFurtleFilePath) {
      const furtleFileContext = FurtleFileContext.fromFile(file, context),
            fileContext = furtleFileContext;  ///

      fileContexts.push(fileContext);
    }

    if (filePathNominalFilePath) {
      const nominalFileContext = NominalFileContext.fromFile(file, context),
            fileContext = nominalFileContext; ///

      fileContexts.push(fileContext);
    }
  });
}
