"use strict";

const { arrayUtilities } = require("necessary");

const contextMixins = require("../mixins/context");

const { combinedCustomGrammarFromPackageNames } = require("../utilities/package"),
      { florenceLexerFromNothing, florenceParserFromNothing, florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar } = require("../utilities/grammar");

const { push } = arrayUtilities;

class PackageContext {
  constructor(packageName, fileContexts, florenceLexer, florenceParser, dependencyPackageContexts) {
    this.packageName = packageName;
    this.fileContexts = fileContexts;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
    this.dependencyPackageContexts = dependencyPackageContexts;
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

  getPackageDependencyContexts() {
    return this.dependencyPackageContexts;
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

      const packageContexts = this.retrievePackageContexts();

      packageContexts.forEach((packageContext) => {
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

      const packageContexts = this.retrievePackageContexts();

      packageContexts.forEach((packageContext) => {
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

      const packageContexts = this.retrievePackageContexts();

      packageContexts.forEach((packageContext) => {
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

      const packageContexts = this.retrievePackageContexts();

      packageContexts.forEach((packageContext) => {
        const packageContextConstructors = packageContext.getConstructors();

        push(constructors, packageContextConstructors);
      });
    }

    return constructors;
  }

  findRuleByRuleName(ruleName) {
    const ruleMap = this.florenceParser.getRuleMap(),
          rule = ruleMap[ruleName];

    return rule;
  }

  retrievePackageContexts(packageContexts = []) {
    this.dependencyPackageContexts.forEach((dependencyPackageContext) => {
      dependencyPackageContext.retrievePackageContexts(packageContexts);

      const packageContextsIncludesDependencyPackageContext = packageContexts.includes(dependencyPackageContext);

      if (!packageContextsIncludesDependencyPackageContext) {
        const packageContext = dependencyPackageContext;  ///

        packageContexts.push(packageContext);
      }
    });

    return packageContexts;
  }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  tokenise(content) { return this.florenceLexer.tokenise(content); }

  parse(tokens) { return this.florenceParser.parse(tokens); }

  static fromNothing() {
    const packageName = undefined,
          fileContexts = [],
          florenceLexer = florenceLexerFromNothing(),
          florenceParser = florenceParserFromNothing(),
          dependencyPackageContexts = [],
          packageContext = new PackageContext(packageName, fileContexts, florenceLexer, florenceParser, dependencyPackageContexts);

    return packageContext;
  }

  static fromPackageNameAndDependencyPackageContexts(packageName, dependencyPackageContexts) {
    const packageContexts = packageContextsFromDependencyPackageContexts(dependencyPackageContexts),
          packageNames = packageContexts.map((packageContext) => {
            const packageName = packageContext.getPackageName();

            return packageName;
          });

    packageNames.push(packageName);

    const combinedCustomGrammar = combinedCustomGrammarFromPackageNames(packageNames),
          fileContexts = [],
          florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
          florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
          packageContext = new PackageContext(packageName, fileContexts, florenceLexer, florenceParser, dependencyPackageContexts);

    return packageContext;
  }
}

Object.assign(PackageContext.prototype, contextMixins);

module.exports = PackageContext;

function packageContextsFromDependencyPackageContexts(dependencyPackageContexts, packageContexts = []) {
  dependencyPackageContexts.forEach((dependencyPackageContext) => {
    dependencyPackageContext.retrievePackageContexts(packageContexts);

    const packageContextsIncludesDependencyPackageContext = packageContexts.includes(dependencyPackageContext);

    if (!packageContextsIncludesDependencyPackageContext) {
      const packageContext = dependencyPackageContext;  ///

      packageContexts.push(packageContext);
    }
  });

  return packageContexts;
}
