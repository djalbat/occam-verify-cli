"use strict";

import Context from "../context";

export default class BranchingContext extends Context {
  constructor(context, terms) {
    super(context);

    this.terms = terms;
  }

  getTerms() {
    return this.terms;
  }

  addTerm(term) {
    const termA = term, ///
          context = this, ///
          termString = term.getString();

    context.trace(`Adding the '${termString}' term to the branching context...`);

    const termB = this.terms.find((term) => {
      const termB = term, ///
            termAComparesToTermB = termA.compareTerm(termB);

      if (termAComparesToTermB) {
        return true;
      }
    }) || null;

    if (termB !== null) {
      context.trace(`The '${termString}' term has already been added to the branching context.`);
    } else {
      this.terms.push(term);
    }

    context.debug(`...added the '${termString}' term to the branching context.`);
  }

  addTerms(terms) {
    terms.forEach((term) => {
      this.addTerm(term);
    });
  }

  commit() {
    const context = this.getContext();

    context.addTerms(this.terms);
  }

  static fromNothing(context) {
    const terms = [],
          branchingContext = new BranchingContext(context, terms);

    return branchingContext;
  }
}
