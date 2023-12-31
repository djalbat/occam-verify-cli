"use strict";

export default class Collection {
  constructor(terms) {
    this.terms = terms;
  }

  getTerms() {
    return this.terms;
  }

  setTerms(terms) {
    this.terms = terms;
  }

  addTerm(term) {
    this.terms.push(term);
  }

  getType() {
    const type = this.terms.reduce((type, term) => {
      const termType = term.getType();

      if (type === null) {
        type = termType;  ///
      } else {
        const termTypeSubTypeOfType = termType.isSubTypeOf(type);

        if (termTypeSubTypeOfType) {
          type = termType;  ///
        }
      }

      return type;
    }, null);

    return type;
  }

  matchType(type) {
    const typeA = type; ///

    type = this.getType();

    const typeB = type; ///

    const typeMatches = (typeA === typeB);  ///

    return typeMatches;
  }

  matchTerm(term) {
    const termA = term, ///
          termMatches = this.terms.some((term) => {
            const termB = term, ///
                  termAMatchesTermB = termA.match(termB);

            if (termAMatchesTermB) {
              return true;
            }
          });

    return termMatches;
  }

  matchTerms(terms) {
    const termsMatch = terms.every((term) => {
      const termMatches = this.matchTerm(term);

      if (termMatches) {
        return true;
      }
    })

    return termsMatch;
  }

  static fromEquality(equality) {
    const leftTerm = equality.getLeftTerm(),
          rightTerm = equality.getRightTerm(),
          terms = [
            leftTerm,
            rightTerm
          ],
          collection = new Collection(terms);

    return collection;
  }

  static fromCollections(collectionA, collectionB) {
    const collectionATerms = collectionA.getTerms(),
          collectionBTerms = collectionB.getTerms(),
          terms = [
            ...collectionATerms,
            ...collectionBTerms
          ],
          collection = new Collection(terms);

    return collection;
  }
}
