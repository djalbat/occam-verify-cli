"use strict";

const necessary = require("necessary");

const contextMixins = require("../mixins/context");

const { arrayUtilities } = necessary,
      { push } = arrayUtilities;

class GlobalContext {
  constructor(packageContexts) {
    this.packageContexts = packageContexts;
  }

  getTypes() {
    const types = [];

    this.packageContexts.forEach((packageContext) => {
      const packageContextTypes = packageContext.getTypes();

      push(types, packageContextTypes);
    });

    return types;
  }

  getAxioms() {
    const axioms = [];

    this.packageContexts.forEach((packageContext) => {
      const packageContextAxioms = packageContext.getAxioms();

      push(axioms, packageContextAxioms);
    });

    return axioms;
  }

  getConstructors() {
    const constructors = [];

    this.packageContexts.forEach((packageContext) => {
      const packageContextConstructors = packageContext.getConstructors();

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
