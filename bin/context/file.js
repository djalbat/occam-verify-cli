"use strict";

const { rewriteNodes } = require("occam-grammar-utilities"),
      { fileSystemUtilities } = require("necessary");

const contextMixins = require("../mixins/context");

const { readFile } = fileSystemUtilities;

class FileContext {
  constructor(packageContext, filePath, tokens, node, types, axioms, variables, combinators, constructors) {
    this.packageContext = packageContext;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.types = types;
    this.axioms = axioms;
    this.variables = variables;
    this.combinators = combinators;
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
    const packageContextTypes = bubble ?
                                  this.packageContext.getTypes() :
                                    [],
          types = [
            ...this.types,
            ...packageContextTypes
          ];

    return types;
  }

  getAxioms(bubble = true) {
    const packageContextAxioms = bubble ?
                                   this.packageContext.getAxioms() :
                                     [],
          axioms = [
              ...this.axioms,
              ...packageContextAxioms
          ];

    return axioms;
  }

  getVariables() {
    return this.variables;
  }

  getCombinators(bubble = true) {
    const packageContextCombinators = bubble ?
                                        this.packageContext.getCombinators() :
                                          [],
          combinators = [
            ...this.combinators,
            ...packageContextCombinators
          ];

    return combinators;
  }

  getConstructors(bubble = true) {
    const packageContextConstructors = bubble ?
                                         this.packageContext.getConstructors() :
                                           [],
          constructors = [
            ...this.constructors,
            ...packageContextConstructors
          ];

    return constructors;
  }

  findRuleByRuleName(ruleName) { return this.packageContext.findRuleByRuleName(ruleName); }

  findTypeByTypeName(typeName) { return this.packageContext.findTypeByTypeName(typeName); }

  findVariableByVariableName(variableName) {
    const name = variableName,  ///
          variable = this.variables.find((variable) => variable.matchName(name));

    return variable;
  }

  isTypePresentByTypeName(typeName) {
    const type = this.findTypeByTypeName(typeName),
          typePresent = (type !== null);

    return typePresent;
  }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
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

  addCombinator(combinator) {
    this.combinators.push(combinator);
  }

  addConstructor(constructor) {
    this.constructors.push(constructor);
  }

  static fromPackageContextAndFilePath(packageContext, filePath) {
    const fileContent = readFile(filePath),
          content = fileContent,  ///
          tokens = packageContext.tokenise(content),
          node = packageContext.parse(tokens);

    rewriteNodes(node);

    const types = [],
          axioms = [],
          variables = [],
          combinators = [],
          constructors = [],
          fileContext = new FileContext(packageContext, filePath, tokens, node, types, axioms, variables, combinators, constructors);

    return fileContext;
  }
}

Object.assign(FileContext.prototype, contextMixins);

module.exports = FileContext;
