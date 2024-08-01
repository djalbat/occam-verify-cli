"use strict";

import { nodeQuery } from "./utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!");

export default class Equivalence {
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

  getType(context) {
    const type = this.terms.reduce((type, term) => {
      const termType = termTypeFromTerm(term, context);

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

  matchType(type, context) {
    const typeA = type; ///

    type = this.getType(context);

    const typeB = type; ///

    const typeAEqualToTypeB = typeA.isEqualTo(typeB),
          typeMatches = typeAEqualToTypeB;  ///

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

  matchTermNode(termNode) {
    const termNodeA = termNode, ///
          termNodeMatches = this.terms.some((term) => {
            const termNode = term.getNode(),
                  termNodeB = termNode, ///
                  termNodeAMatchesTermB = termNodeA.match(termNodeB);

            if (termNodeAMatchesTermB) {
              return true;
            }
          });

    return termNodeMatches;
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

  matchTermNodes(termNodes) {
    const termNodesMatch = termNodes.every((termNode) => {
      const termNodeMatches = this.matchTermNode(termNode);

      if (termNodeMatches) {
        return true;
      }
    })

    return termNodesMatch;
  }

  static merge(leftEquivalence, rightEquivalence) {
    const leftEquivalenceTerms = leftEquivalence.getTerms(),
          rightEquivalenceTerms = rightEquivalence.getTerms(),
          terms = [
            ...leftEquivalenceTerms,
            ...rightEquivalenceTerms
          ],
          equivalence = new Equivalence(terms);

    return equivalence;
  }

  static fromEquality(equality) {
    const leftTerm = equality.getLeftTerm(),
          rightTerm = equality.getRightTerm(),
          terms = [
            leftTerm,
            rightTerm
          ],
          equivalence = new Equivalence(terms);

    return equivalence;
  }

  static fromEquivalences(equivalenceA, equivalenceB) {
    const equivalenceATerms = equivalenceA.getTerms(),
          equivalenceBTerms = equivalenceB.getTerms(),
          terms = [
            ...equivalenceATerms,
            ...equivalenceBTerms
          ],
          equivalence = new Equivalence(terms);

    return equivalence;
  }
}

function termTypeFromTerm(term, context) {
  let termType;

  const termNode = term.getNode(),
        variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variable = context.findVariableByVariableNode(variableNode),
          variableType = variable.getType();

    termType = variableType;  ///
  } else {
    termType = term.getType();
  }

  return termType;
}