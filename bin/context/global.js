"use strict";

const necessary = require("necessary");

const contextMixins = require("../mixins/context");

const { arrayUtilities } = necessary,
      { push } = arrayUtilities;

class GlobalContext {
  constructor(packageContexts) {
    this.packageContexts = packageContexts;
  }

  getPackageContexts() {
    return this.packageContexts;
  }

  getTypes() {
    const types = [],
          bubble = false;

    this.packageContexts.forEach((packageContext) => {
      const packageContextTypes = packageContext.getTypes(bubble);

      push(types, packageContextTypes);
    });

    return types;
  }

  getAxioms() {
    const axioms = [],
          bubble = false;

    this.packageContexts.forEach((packageContext) => {
      const packageContextAxioms = packageContext.getAxioms(bubble);

      push(axioms, packageContextAxioms);
    });

    return axioms;
  }

  getOperators() {
    const operatorss = [],
          bubble = false;

    this.packageContexts.forEach((packageContext) => {
      const packageContextOperators = packageContext.getOperators(bubble);

      push(operatorss, packageContextOperators);
    });

    return operatorss;
  }

  getConstructors() {
    const constructors = [],
          bubble = false;

    this.packageContexts.forEach((packageContext) => {
      const packageContextConstructors = packageContext.getConstructors(bubble);

      push(constructors, packageContextConstructors);
    });

    return constructors;
  }

  isPackageMissingByPackageName(packageName) {
    const packageNames = this.packageContexts.map((packageContext) => packageContext.getPackageName()),
          packageNamesIncludesPackageName = packageNames.includes(packageName),
          packageMissing = !packageNamesIncludesPackageName;

    return packageMissing;
  }

  addPackageContext(packageContext) {
    this.packageContexts.push(packageContext);
  }

  static fromNothing() {
    const packageContexts = [],
          context = new GlobalContext(packageContexts);

    return context;
  }
}

Object.assign(GlobalContext.prototype, contextMixins);

module.exports = GlobalContext;
