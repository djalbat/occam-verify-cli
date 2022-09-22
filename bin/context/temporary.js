"use strict";

class TemporaryContext {
  constructor(variables, fileContext) {
    this.variables = variables;
    this.fileContext = fileContext;
  }

  getVariables() {
    return this.variables;
  }

  getFileContext() {
    return this.fileContext;
  }

  getTypes() { return this.fileContext.getTypes(); }

  getAxioms() { return this.fileContext.getAxioms(); }

  getCombinators() { return this.fileContext.getCombinators(); }

  getConstructors() { return this.fileContext.getConstructors(); }

  findTypeByTypeName(typeName) { return this.fileContext.findTypeByTypeName(typeName); }

  findVariableByVariableName(variableName) {
    const name = variableName,  ///
          variable = this.variables.find((variable) => {
            const matches = variable.matchName(name);

            if (matches) {
              return true;
            }
          }) || this.fileContext.findVariableByVariableName(variableName);  ///

    return variable;
  }

  isLabelPresent(label) { return this.fileContext.isLabelPresent(label); }

  isTypePresentByTypeName(typeName) { return this.fileContext.isTypePresentByTypeName(typeName); }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  addVariable(variable) {
    this.variables.push(variable);
  }

  static fromFileContext(fileContext) {
    const variables = [],
          temporaryContext = new TemporaryContext(variables, fileContext);

    return temporaryContext;
  }
}

module.exports = TemporaryContext;
