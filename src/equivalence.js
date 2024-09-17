"use strict";

import { nodeQuery } from "./utilities/query";
import { stripBracketsFromTerm } from "./utilities/brackets";

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

  getType(localContext) {
    const type = this.terms.reduce((type, term) => {
      const termType = termTypeFromTerm(term, localContext);

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

  matchType(type, localContext) {
    const typeA = type; ///

    type = this.getType(localContext);

    const typeB = type; ///

    const typeAEqualToTypeB = typeA.isEqualTo(typeB),
          matchesType = typeAEqualToTypeB;  ///

    return matchesType;
  }

  matchTerm(term) {
    const termA = term, ///
          matchesTerm = this.terms.some((term) => {
            const termB = term, ///
                  termAMatchesTermB = termA.match(termB);

            if (termAMatchesTermB) {
              return true;
            }
          });

    return matchesTerm;
  }

  matchTerms(terms) {
    const matchesTerms = terms.every((term) => {
      const matchesTerm = this.matchTerm(term);

      if (matchesTerm) {
        return true;
      }
    })

    return matchesTerms;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTerm(termNode); ///

    const termNodeMatches = this.terms.some((term) => {
      const termNodeMatches = term.matchTermNode(termNode);

      if (termNodeMatches) {
        return true;
      }
    });

    return termNodeMatches;
  }

  matchVariableNode(variableNode) {
    const variableNodeA = variableNode, ///
          matchesVariableNode = this.terms.some((term) => {
            const termNode = term.getNode(),
                  variableNode = variableNodeQuery(termNode);

            if (variableNode !== null) {
              const variableNodeB = variableNode, ///
                    variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);

              if (variableNodeAMatchesVariableNodeB) {
                return true;
              }
            }
          });

    return matchesVariableNode;
  }

  matchTermNodes(termNodes) {
    const matchesTermNodes = termNodes.every((termNode) => {
      const matchesTermNode = this.matchTermNode(termNode);

      if (matchesTermNode) {
        return true;
      }
    });

    return matchesTermNodes;
  }

  getGroundedTerms(definedVariables, groundedTerms, localContext) {
    this.terms.forEach((term) => {
      const termGrounded = term.isGrounded(definedVariables, localContext);

      if (termGrounded) {
        const termMatchesGroundedTerm = groundedTerms.some((groundedTerm) => {
          const groundedTermNode = groundedTerm.getNode(),
                groundedTermNodeMatches = term.matchTermNode(groundedTermNode);

          if (groundedTermNodeMatches) {
            return true;
          }
        })

        if (!termMatchesGroundedTerm) {
          const groundedTerm = term;

          groundedTerms.push(groundedTerm);
        }
      }
    });
  }

  isInitiallyGrounded(localContext) {
    const initiallyGroundedTerms = this.getInitiallyGroundedTerms(localContext),
          initiallyGroundedTermsLength = initiallyGroundedTerms.length,
          initiallyGrounded = (initiallyGroundedTermsLength > 0);

    return initiallyGrounded;
  }

  isImplicitlyGrounded(definedVariables, localContext) {
    const implicitlyGroundedTerms = this.getImplicitlyGroundedTerms(definedVariables, localContext),
          implicitlyGroundedTermsLength = implicitlyGroundedTerms.length,
          implicitlyGrounded = (implicitlyGroundedTermsLength > 0);

    return implicitlyGrounded;
  }

  getInitiallyGroundedTerms(localContext) {
    const initiallyGroundedTerms = this.terms.reduce((initiallyGroundedTerms, term) => {
      const termInitiallyGrounded = term.isInitiallyGrounded(localContext);

      if (termInitiallyGrounded) {
        const initiallyGroundedTerm = term; ///

        initiallyGroundedTerms.push(initiallyGroundedTerm);
      }

      return initiallyGroundedTerms;
    }, []);

    return initiallyGroundedTerms;
  }

  getImplicitlyGroundedTerms(definedVariables, localContext) {
    const implicitlyGroundedTerms = this.terms.reduce((implicitlyGroundedTerms, term) => {
      const termImplicitlyGrounded = term.isImplicitlyGrounded(definedVariables, localContext);

      if (termImplicitlyGrounded) {
        const implicitlyGroundedTerm = term; ///

        implicitlyGroundedTerms.push(implicitlyGroundedTerm);
      }

      return implicitlyGroundedTerms;
    }, []);

    return implicitlyGroundedTerms;
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

  static fromLeftTermAndRightTerm(leftTerm, rightTerm) {
    const terms = [
            leftTerm,
            rightTerm
          ],
          equivalence = new Equivalence(terms);

    return equivalence;
  }
}

function termTypeFromTerm(term, localContext) {
  let termType;

  const termNode = term.getNode(),
        variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    const variable = localContext.findVariableByVariableNode(variableNode),
          variableType = variable.getType();

    termType = variableType;  ///
  } else {
    termType = term.getType();
  }

  return termType;
}