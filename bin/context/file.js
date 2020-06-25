"use strict";

const necessary = require("necessary");

const contextMixins = require("../mixins/context");

const { arrayUtilities, fileSystemUtilities } = necessary,
      { readFile } = fileSystemUtilities,
      { push } = arrayUtilities;

class FileContext {
  constructor(packageContext, tokens, node, types, axioms, variables, operators, constructors) {
    this.packageContext = packageContext;
    this.tokens = tokens;
    this.node = node;
    this.types = types;
    this.axioms = axioms;
    this.operators = operators;
    this.variables = variables;
    this.constructors = constructors;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  getTypes() {
    const types = [],
          packageContextTypes = this.packageContext.getTypes();

    push(types, this.types);

    push(types, packageContextTypes);

    return types;
  }

  getAxioms() {
    const axioms = [],
          packageContextAxioms = this.packageContext.getAxioms();

    push(axioms, this.axioms);

    push(axioms, packageContextAxioms);

    return axioms;
  }

  getOperators() {
    const operators = [],
          packageContextOperators = this.packageContext.getOperators();

    push(operators, this.operators);

    push(operators, packageContextOperators);

    return operators;
  }

  getVariables() {
    return this.variables;
  }

  getConstructors() {
    const constructors = [],
          packageContextConstructors = this.packageContext.getConstructors();

    push(constructors, this.constructors);

    push(constructors, packageContextConstructors);

    return constructors;
  }

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
          node = packageContext.parse(tokens),
          types = [],
          axioms = [],
          variables = [],
          operators = [],
          constructors = [],
          fileContext = new FileContext(packageContext, tokens, node, types, axioms, variables, operators, constructors);

    return fileContext;
  }
}

Object.assign(FileContext.prototype, contextMixins);

module.exports = FileContext;
