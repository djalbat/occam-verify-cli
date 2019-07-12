'use strict';

class CompoundTerm {
  constructor(name, terms, typeName) {
    this.name = name;
    this.terms = terms;
    this.typeName = typeName;
  }

  getName() {
    return this.name;
  }

  getTerms() {
    return this.terms;
  }

  getTypeName() {
    return this.typeName;
  }

  asString() {
    const termsString = termsAsTermsString(this.terms),
          string = `${this.name}(${termsString})`;

    return string;
  }

  static fromNameAndTypeName(name, typeName) {
    const terms = [],
          term = new CompoundTerm(name, terms, typeName);

    return term;
  }

  static fromNameTermsAndTypeName(name, terms, typeName) {
    const term = new CompoundTerm(name, terms, typeName);

    return term;
  }
}

module.exports = CompoundTerm;

function termsAsTermsString(terms) {
  const termsString = terms.reduce((termsString, term, index) => {
    const termString = term.asString();

    termsString = (index === 0) ?
                    termString : ///
                      `${termsString},${termString}`;

    return termsString;
  }, '');

  return termsString;
}
