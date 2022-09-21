"use strict";

const { arrayUtilities } = require("necessary");

const contextMixins = require("../mixins/context");

const { combinedCustomGrammarFromPackageNames } = require("../utilities/package"),
      { florenceLexerFromNothing, florenceParserFromNothing, florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar } = require("../utilities/grammar");

const { push } = arrayUtilities;

class PackageContext {
  constructor(packageName, fileContexts, florenceLexer, florenceParser, packageContexts) {
    this.packageName = packageName;
    this.fileContexts = fileContexts;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
    this.packageContexts = packageContexts;
  }

  getPackageName() {
    return this.packageName;
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

  getPackageContexts() {
    return this.packageContexts;
  }

  getTypes(packageNames = []) {
    const types = [],
          packageNamesIncludesPackageName = packageNames.includes(this.packageName);

    if (!packageNamesIncludesPackageName) {
      packageNames.push(this.packageName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextTypes = fileContext.getTypes(bubble);

        push(types, fileContextTypes);
      });

      this.packageContexts.forEach((packageContext) => {
        const packageContextTypes = packageContext.getTypes(packageNames);

        push(types, packageContextTypes);
      });
    }

    return types;
  }

  getAxioms(packageNames = []) {
    const axioms = [],
          packageNamesIncludesPackageName = packageNames.includes(this.packageName);

    if (!packageNamesIncludesPackageName) {
      packageNames.push(this.packageName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextAxioms = fileContext.getAxioms(bubble);

        push(axioms, fileContextAxioms);
      });

      this.packageContexts.forEach((packageContext) => {
        const packageContextAxioms = packageContext.getAxioms(packageNames);

        push(axioms, packageContextAxioms);
      });
    }

    return axioms;
  }

  getCombinators(packageNames = []) {
    const combinators = [],
          packageNamesIncludesPackageName = packageNames.includes(this.packageName);

    if (!packageNamesIncludesPackageName) {
      packageNames.push(this.packageName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextCombinators = fileContext.getCombinators(bubble);

        push(combinators, fileContextCombinators);
      });

      this.packageContexts.forEach((packageContext) => {
        const packageContextCombinators = packageContext.getCombinators(packageNames);

        push(combinators, packageContextCombinators);
      });
    }

    return combinators;
  }

  getConstructors(packageNames = []) {
    const constructors = [],
          packageNamesIncludesPackageName = packageNames.includes(this.packageName);

    if (!packageNamesIncludesPackageName) {
      packageNames.push(this.packageName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextConstructors = fileContext.getConstructors(bubble);

        push(constructors, fileContextConstructors);
      });

      this.packageContexts.forEach((packageContext) => {
        const packageContextConstructors = packageContext.getConstructors(packageNames);

        push(constructors, packageContextConstructors);
      });
    }

    return constructors;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  tokenise(content) { return this.florenceLexer.tokenise(content); }

  parse(tokens) { return this.florenceParser.parse(tokens); }

  static fromNothing() {
    const packageName = null,
          fileContexts = [],
          florenceLexer = florenceLexerFromNothing(),
          florenceParser = florenceParserFromNothing(),
          dependencyPackageContexts = [],
          packageContext = new PackageContext(packageName, fileContexts, florenceLexer, florenceParser, dependencyPackageContexts);

    return packageContext;
  }

  static fromPackageNameAndDependencyPackageContexts(packageName, dependencyPackageContexts) {
    const combinedCustomGrammar = combinedCustomGrammarFromPackageNameAndDependencyPackageContexts(packageName, dependencyPackageContexts),
          fileContexts = [],
          florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
          florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
          packageContexts = dependencyPackageContexts,  ///
          packageContext = new PackageContext(packageName, fileContexts, florenceLexer, florenceParser, packageContexts);

    return packageContext;
  }
}

Object.assign(PackageContext.prototype, contextMixins);

module.exports = PackageContext;

function combinedCustomGrammarFromPackageNameAndDependencyPackageContexts(packageName, dependencyPackageContexts) {
  const packageContexts = dependencyPackageContexts,  ///
        packageNames = packageContexts.map((packageContext) => {
          const packageName = packageContext.getPackageName();

          return packageName;
        });

  packageNames.push(packageName);

  const combinedCustomGrammar = combinedCustomGrammarFromPackageNames(packageNames);

  return combinedCustomGrammar;
}
