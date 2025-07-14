"use strict";

import { nodeQuery } from "./utilities/query";
import { stripBracketsFromTermNode } from "./utilities/brackets";

const variableNodeQuery = nodeQuery("/term/variable!");

export default class Equivalence {
  constructor(terms) {
    this.terms = terms;
  }

  getTerms() {
    return this.terms;
  }

  addTerm(term, context) {
    const termString = term.getString(),
          equivalenceString = this.asString(); ///

    context.trace(`Adding the '${termString}' term to the '${equivalenceString}' equivalence.`);

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

    const typeAEqualToTypeB = typeA.isEqualTo(typeB),
          typeMatches = typeAEqualToTypeB;  ///

    return typeMatches;
  }

  equateTerm(term) {
    const termA = term, ///
          termEquates = this.someTerm((term) => {
            const termB = term, ///
                  termAEqualToTermB = termA.isEqualTo(termB);

            if (termAEqualToTermB) {
              return true;
            }
          });

    return termEquates;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTermNode(termNode); ///

    const termNodeMatches = this.someTerm((term) => {
      const termNodeMatches = term.matchTermNode(termNode);

      if (termNodeMatches) {
        return true;
      }
    });

    return termNodeMatches;
  }

  matchTermNodes(termNodes) {
    const termNodesMatch = termNodes.every((termNode) => {
      const termNodeMatches = this.matchTermNode(termNode);

      if (termNodeMatches) {
        return true;
      }
    });

    return termNodesMatch;
  }

  matchVariableNode(variableNode) {
    const variableNodeA = variableNode, ///
          variableNodeMatches = this.someTerm((term) => {
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

    return variableNodeMatches;
  }

  someTerm(callback) { return this.terms.some(callback); }

  someOtherTerm(term, callback) {
    const termA = term, ///
          terms = this.terms.filter((term) => {
            const termB = term, ///
                  termAEqualToTermB = termA.isEqualTo(termB);

            if (!termAEqualToTermB) {
              return true;
            }
          }),
          result = terms.some(callback);

    return result;
  }

  getGroundedTerms(definedVariables, groundedTerms, context) {
    this.terms.forEach((term) => {
      const termGrounded = term.isGrounded(definedVariables, context);

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

  isInitiallyGrounded(context) {
    const initiallyGroundedTerms = this.getInitiallyGroundedTerms(context),
          initiallyGroundedTermsLength = initiallyGroundedTerms.length,
          initiallyGrounded = (initiallyGroundedTermsLength > 0);

    return initiallyGrounded;
  }

  isImplicitlyGrounded(definedVariables, context) {
    const implicitlyGroundedTerms = this.getImplicitlyGroundedTerms(definedVariables, context),
          implicitlyGroundedTermsLength = implicitlyGroundedTerms.length,
          implicitlyGrounded = (implicitlyGroundedTermsLength > 0);

    return implicitlyGrounded;
  }

  getInitiallyGroundedTerms(context) {
    const initiallyGroundedTerms = this.terms.reduce((initiallyGroundedTerms, term) => {
      const termInitiallyGrounded = term.isInitiallyGrounded(context);

      if (termInitiallyGrounded) {
        const initiallyGroundedTerm = term; ///

        initiallyGroundedTerms.push(initiallyGroundedTerm);
      }

      return initiallyGroundedTerms;
    }, []);

    return initiallyGroundedTerms;
  }

  getImplicitlyGroundedTerms(definedVariables, context) {
    const implicitlyGroundedTerms = this.terms.reduce((implicitlyGroundedTerms, term) => {
      const termImplicitlyGrounded = term.isImplicitlyGrounded(definedVariables, context);

      if (termImplicitlyGrounded) {
        const implicitlyGroundedTerm = term; ///

        implicitlyGroundedTerms.push(implicitlyGroundedTerm);
      }

      return implicitlyGroundedTerms;
    }, []);

    return implicitlyGroundedTerms;
  }

  asString() {
    let string;

    string = this.terms.reduce((string, term) => {
      const termString = term.getString();

      string = (string === null) ?
                 termString :
                    `${string} = ${termString}`;

      return string;
    }, null);

    const type = this.getType(),
          typeString = type.getString();

    string = `${string}:${typeString}`;

    return string;
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
