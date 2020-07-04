"use strict";

const necessary = require("necessary");

const contextMixins = require("../mixins/context"),
      grammarUtilities = require("../utilities/grammar"),
      packageUtilities = require("../utilities/package");

const { combinedCustomGrammarFromPackageNames } = packageUtilities,
      { florenceLexerFromNothing, florenceParserFromNothing, florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar } = grammarUtilities;

const { arrayUtilities } = necessary,
      { push } = arrayUtilities;

class PackageContext {
  constructor(globalContext, packageName, fileContexts, florenceLexer, florenceParser) {
    this.globalContext = globalContext;
    this.packageName = packageName;
    this.fileContexts = fileContexts;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
  }

  getGlobalContext() {
    return this.globalContext;
  }

  getFileContexts() {
    return this.fileContexts;
  }

  getPackageName() {
    return this.packageName;
  }

  getFlorenceLexer() {
    return this.florenceLexer;
  }

  getFlorenceParser() {
    return this.florenceParser;
  }

  getTypes(bubble = true) {
    const types = [];

    if (bubble) {
      const globalContextTypes = this.globalContext.getTypes();

      push(types, globalContextTypes);
    }

    this.fileContexts.forEach((fileContext) => {
      const fileContextTypes = fileContext.getTypes(bubble);

      push(types, fileContextTypes);
    });

    return types;
  }

  getAxioms(bubble = true) {
    const axioms = [];

    if (bubble) {
      const globalContextAxioms = this.globalContext.getAxioms();

      push(axioms, globalContextAxioms);
    }

    this.fileContexts.forEach((fileContext) => {
      const fileContextAxioms = fileContext.getAxioms(bubble);

      push(axioms, fileContextAxioms);
    });

    return axioms;
  }

  getOperators(bubble = true) {
    const operators = [];

    if (bubble) {
      const globalContextOperators = this.globalContext.getOperators();

      push(operators, globalContextOperators);
    }

    this.fileContexts.forEach((fileContext) => {
      const fileContextOperators = fileContext.getOperators(bubble);

      push(operators, fileContextOperators);
    });

    return operators;
  }

  getConstructors(bubble = true) {
    const constructors = [];

    if (bubble) {
      const globalContextConstructors = this.globalContext.getConstructors();

      push(constructors, globalContextConstructors);
    }

    this.fileContexts.forEach((fileContext) => {
      const fileContextConstructors = fileContext.getConstructors(bubble);

      push(constructors, fileContextConstructors);
    });

    return constructors;
  }

  findRuleByRuleName(ruleName) {
    const ruleMap = this.florenceParser.getRuleMap(),
          rule = ruleMap[ruleName];

    return rule;
  }

  tokenise(content) { return this.florenceLexer.tokenise(content); }

  parse(tokens) { return this.florenceParser.parse(tokens); }

  addFileContext(fileContext) {
    this.fileContexts.push(fileContext);
  }

  static fromGlobalContext(globalContext) {
    const fileContexts = [],
          packageName = undefined,
          florenceLexer = florenceLexerFromNothing(),
          florenceParser = florenceParserFromNothing(),
          packageContext = new PackageContext(globalContext, fileContexts, packageName, florenceLexer, florenceParser);

    return packageContext;
  }

  static fromGlobalContextPackageNameAndPackageNames(globalContext, packageName, packageNames) {
    packageNames = [ ...packageNames, packageName ];  ///

    const combinedCustomGrammar = combinedCustomGrammarFromPackageNames(packageNames),
          fileContexts = [],
          florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
          florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
          packageContext = new PackageContext(globalContext, packageName, fileContexts, florenceLexer, florenceParser);

    return packageContext;
  }
}

Object.assign(PackageContext.prototype, contextMixins);

module.exports = PackageContext;
