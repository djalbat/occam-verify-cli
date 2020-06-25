"use strict";

const necessary = require("necessary"),
      customgrammars = require("occam-custom-grammars");  ///;;

const contextMixins = require("../mixins/context"),
      grammarUtilities = require("../utilities/grammar"),
      packageUtilities = require("../utilities/package");

const { CombinedCustomGrammar } = customgrammars,
      { customGrammarsFromPackageNames } = packageUtilities,
      { florenceLexerFromNothing, florenceParserFromNothing, florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar } = grammarUtilities;

const { arrayUtilities } = necessary,
      { push, last } = arrayUtilities;

class PackageContext {
  constructor(globalContext, fileContexts, packageName, florenceLexer, florenceParser) {
    this.globalContext = globalContext;
    this.fileContexts = fileContexts;
    this.packageName = packageName;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
  }

  getPackageName() {
    return this.packageName;
  }

  getTypes() {
    const types = [];

    const globalContextTypes = this.globalContext.getTypes();

    push(types, globalContextTypes);

    this.fileContexts.forEach((fileContext) => {
      const fileContextTypes = fileContext.getTypes();

      push(types, fileContextTypes);
    });

    return types;
  }

  getAxioms() {
    const axioms = [];

    const globalContextAxioms = this.globalContext.getAxioms();

    push(axioms, globalContextAxioms);

    this.fileContexts.forEach((fileContext) => {
      const fileContextAxioms = fileContext.getAxioms();

      push(axioms, fileContextAxioms);
    });

    return axioms;
  }

  getConstructors() {
    const constructors = [];

    const globalContextConstructors = this.globalContext.getConstructors();

    push(constructors, globalContextConstructors);

    this.fileContexts.forEach((fileContext) => {
      const fileContextConstructors = fileContext.getConstructors();

      push(constructors, fileContextConstructors);
    });

    return constructors;
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

  static fromGlobalContextAndPackageNames(globalContext, packageNames) {
    const lastPackageName = last(packageNames),
          fileContexts = [],
          packageName = lastPackageName,  ///
          customGrammars = customGrammarsFromPackageNames(packageNames),
          combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars),
          florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar),
          florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar),
          packageContext = new PackageContext(globalContext, fileContexts, packageName, florenceLexer, florenceParser);

    return packageContext;
  }
}

Object.assign(PackageContext.prototype, contextMixins);

module.exports = PackageContext;
