"use strict";

import { arrayUtilities } from "necessary";
import { Element, elements } from "occam-furtle";

import { literally } from "../utilities/context";
import { termsStringFromTerms } from "../utilities/string";
import { instantiateEquivalence } from "../process/instantiate";
import { stripBracketsFromTermNode } from "../utilities/brackets";
import { equivalenceFromEquivalenceNode } from "../utilities/element";

const { define } = elements,
      { compress } = arrayUtilities;

export default define(class Equivalence extends Element {
  constructor(context, string, node, terms) {
    super(context, string, node);
    this.terms = terms;
  }

  getTerms() {
    return this.terms;
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

  getGroundedTerms(definedVariables, groundedTerms, context) {
    this.terms.forEach((term) => {
      const termGrounded = term.isGrounded(definedVariables, context);

      if (termGrounded) {
        const termMatchesGroundedTerm = groundedTerms.some((groundedTerm) => {
          const groundedTermNode = groundedTerm.getNode(),
                groundedTermNodeMatches = term.matchNode(groundedTermNode);

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

  isDisjointFrom(equivalence) {
    const disjointFrom = equivalence.everyTerm((term) => {
      const comparesToTerm = this.compareTerm(term);

      if (!comparesToTerm) {
        return true;
      }
    });

    return disjointFrom;
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

  compareTerm(term) {
    const termA = term, ///
          comparesToTerm = this.someTerm((term) => {
            const termB = term, ///
                  termAEqualToTermB = termA.isEqualTo(termB);

            if (termAEqualToTermB) {
              return true;
            }
          });

    return comparesToTerm;
  }

  matchTermNode(termNode) {
    termNode = stripBracketsFromTermNode(termNode); ///

    const termNodeMatches = this.someTerm((term) => {
      const termNodeMatches = term.matchNode(termNode);

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
                  singularVariableNode = termNode.getSingularVariableNode();

            if (singularVariableNode !== null) {
              const variableNodeB = singularVariableNode, ///
                    variableNodeAMatchesVariableNodeB = variableNodeA.match(variableNodeB);

              if (variableNodeAMatchesVariableNodeB) {
                return true;
              }
            }
          });

    return variableNodeMatches;
  }

  someTerm(callback) { return this.terms.some(callback); }

  everyTerm(callback) { return this.terms.every(callback); }

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

  combineTerms(terms) {
    const combinedTerms = [
      ...this.terms,
      ...terms
    ];

    compress(combinedTerms, (combinedTermA, combinedTermB) => {
      const combinedTermAEqualToCombinedTermB = combinedTermA.isEqualTo(combinedTermB);

      if (!combinedTermAEqualToCombinedTermB) {
        return true;
      }
    });

    return combinedTerms;
  }

  mergedWith(equivalence, context) {
    const terms = equivalence.getTerms(),
          combinedTerms = this.combineTerms(terms);

    return literally((context) => {
      const terms = combinedTerms,  ///
            termsString = termsStringFromTerms(terms),
            string = termsString,  ///
            equivalenceNode = instantiateEquivalence(string, context),
            equivalence = equivalenceFromEquivalenceNode(equivalenceNode, context);

      return equivalence;
    }, context);
  }

  static name = "Equivalence";

  static fromEquality(equality, context) {
    return literally((context) => {
      const terms = equality.getTerms(),
            termsString = termsStringFromTerms(terms),
            string = termsString,  ///
            equivalenceNode = instantiateEquivalence(string, context),
            equivalence = equivalenceFromEquivalenceNode(equivalenceNode, context);

      return equivalence;
    }, context);
  }
});
