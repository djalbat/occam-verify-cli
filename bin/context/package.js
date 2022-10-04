"use strict";

const { CustomGrammar, lexersUtilities, parsersUtilities, CombinedCustomGrammar } = require("occam-custom-grammars");

const { push } = require("../utilities/array");

const { florenceLexerFromCombinedCustomGrammar } = lexersUtilities,
      { florenceParserFromCombinedCustomGrammar } = parsersUtilities;

class PackageContext {
  constructor(packageName, fileContexts, florenceLexer, florenceParser, packageContexts, packageVerified) {
    this.packageName = packageName;
    this.fileContexts = fileContexts;
    this.florenceLexer = florenceLexer;
    this.florenceParser = florenceParser;
    this.packageContexts = packageContexts;
    this.packageVerified = packageVerified;
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

  isPackageVerified() {
    return this.packageVerified;
  }

  getRules(packageNames = []) {
    const rules = [],
          packageNamesIncludesPackageName = packageNames.includes(this.packageName);

    if (!packageNamesIncludesPackageName) {
      packageNames.push(this.packageName);

      const bubble = false;

      this.fileContexts.forEach((fileContext) => {
        const fileContextRules = fileContext.getRules(bubble);

        push(rules, fileContextRules);
      });

      this.packageContexts.forEach((packageContext) => {
        const packageContextRules = packageContext.getRules(packageNames);

        push(rules, packageContextRules);
      });
    }

    return rules;
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

  getCustomGrammar() {
    const name = this.packageName, ///
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

  initialise(packageContexts, dependencyPackageContexts) {
    this.packageContexts = packageContexts;

    const packageContext = this;  ///

    packageContexts = [ packageContext, ...dependencyPackageContexts ]; ///

    const customGrammars = packageContexts.map((packageContext) => {
            const customGrammar = packageContext.getCustomGrammar();

            return customGrammar;
          }),
          combinedCustomGrammar = CombinedCustomGrammar.fromCustomGrammars(customGrammars);

    this.florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);

    this.florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
  }

  static fromPackageName(Class, packageName, ...remainingArguments) {
    const fileContexts = [],
          florenceLexer = null,
          florenceParser = null,
          packageContexts = [],
          packageVerified = false,
          packageContext = new Class(packageName, fileContexts, florenceLexer, florenceParser, packageContexts, packageVerified, ...remainingArguments);

    return packageContext;
  }
}

module.exports = PackageContext;
