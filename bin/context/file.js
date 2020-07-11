"use strict";

const necessary = require("necessary"),
      grammarUtilities = require("occam-grammar-utilities");

const contextMixins = require("../mixins/context");

const { arrayUtilities, fileSystemUtilities } = necessary,
      { push } = arrayUtilities,
      { readFile } = fileSystemUtilities,
      { removeOrRenameIntermediateNodes } = grammarUtilities;

class FileContext {
  constructor(packageContext, filePath, tokens, node, types, axioms, variables, operators, constructors) {
    this.packageContext = packageContext;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.types = types;
    this.axioms = axioms;
    this.operators = operators;
    this.variables = variables;
    this.constructors = constructors;
  }

  getPackageContext() {
    return this.packageContext;
  }

  getFilePath() {
    return this.filePath;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  getTypes(bubble = true) {
    const types = [];

    if (bubble) {
      const packageContextTypes = this.packageContext.getTypes();

      push(types, packageContextTypes);
    }

    push(types, this.types);

    return types;
  }

  getAxioms(bubble = true) {
    const axioms = [];

    if (bubble) {
      const packageContextAxioms = this.packageContext.getAxioms();

      push(axioms, packageContextAxioms);
    }

    push(axioms, this.axioms);

    return axioms;
  }

  getOperators(bubble = true) {
    const operators = [];

    if (bubble) {
      const packageContextOperators = this.packageContext.getOperators();

      push(operators, packageContextOperators);
    }

    push(operators, this.operators);

    return operators;
  }

  getConstructors(bubble = true) {
    const constructors = [];

    if (bubble) {
      const packageContextConstructors = this.packageContext.getConstructors();

      push(constructors, packageContextConstructors);
    }

    push(constructors, this.constructors);

    return constructors;
  }

  getVariables() {
    return this.variables;
  }

  findRuleByRuleName(ruleName) { return this.packageContext.findRuleByRuleName(ruleName); }

  findVariableByName(name) {
    const variable = this.variables.find((variable) => variable.matchName(name));

    return variable;
  }

  isVariablePresentByName(name) {
    const variable = this.findVariableByName(name),
          variablePresent = (variable !== undefined);

    return variablePresent;
  }

  addType(type) {
    this.types.push(type);
  }

  addAxiom(axiom) {
    this.axioms.push(axiom);
  }

  addVariable(variable) {
    this.variables.push(variable);
  }

  addOperator(operator) {
    this.operators.push(operator);
  }

  addConstructor(constructor) {
    this.constructors.push(constructor);
  }

  static fromPackageContextAndFilePath(packageContext, filePath) {
    const fileContent = readFile(filePath),
          content = fileContent,  ///
          tokens = packageContext.tokenise(content),
          node = packageContext.parse(tokens);

    removeOrRenameIntermediateNodes(node);

    const types = [],
          axioms = [],
          variables = [],
          operators = [],
          constructors = [],
          fileContext = new FileContext(packageContext, filePath, tokens, node, types, axioms, variables, operators, constructors);

    return fileContext;
  }
}

Object.assign(FileContext.prototype, contextMixins);

module.exports = FileContext;
