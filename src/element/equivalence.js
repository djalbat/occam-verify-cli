"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";

import { define } from "../elements";
import { termsStringFromTerms } from "../utilities/string";
import { instantiateEquivalence } from "../process/instantiate";
import { stripBracketsFromTermNode } from "../utilities/brackets";
import { equalivanceFromEquivalenceNode } from "../utilities/element";

const { compress } = arrayUtilities;

export default define(class Equivalence extends Element {
  constructor(context, string, node, terms) {
    super(context, string, node);
    this.terms = terms;
  }

  getTerms() {
    return this.terms;
  }

  addTerm(term, context) {
    const termString = term.getString(),
          equivalenceString = this.asString(); ///

    context.trace(`Adding the '${termString}' term to the '${equivalenceString}' equivalence....`);

    const termA = term, ///
          termPresent = this.someTerm((term) => {
            const termB = term, ///
                  termAEqualToTermB = termA.isEqualTo(termB);

            if (termAEqualToTermB) {
              return true;
            }
          });

    if (!termPresent) {
      this.terms.push(term);

      const termsString = termsStringFromTerms(this.terms),
            string = termsString,  ///
            equalivanceNode = instantiateEquivalence(string, context),
            equalivance = equalivanceFromEquivalenceNode(equalivanceNode, context);

      this.node = equalivance.getNode();

      this.string = equalivance.getString();

      const equivalenceString = this.string; ///

      context.debug(`...added the '${termString}' term to the '${equivalenceString}' equivalence.`);
    }
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

  isDisjointFrom(equivalence) {
    const disjointFrom = equivalence.everyTerm((term) => {
      const termEquates = this.equateTerm(term);

      if (!termEquates) {
        return true;
      }
    });

    return disjointFrom;
  }

  mergedWith(equivalence) {
    const equivalenceA = this,
          equivalenceB = equivalence, ///
          equivalenceATerms = equivalenceA.getTerms(),
          equivalenceTermsB = equivalenceB.getTerms(),
          terms = [
            ...equivalenceATerms,
            ...equivalenceTermsB
          ];

    compress(terms, (termA, termB) => {
      const termAEqualToTermB = termA.isEqualTo(termB);

      if (!termAEqualToTermB) {
        return true;
      }
    });

    equivalence = new Equivalence(terms);

    return equivalence;
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

  static fromEquality(equality, context) {
    const terms = equality.getTerms(),
          termsString = termsStringFromTerms(terms),
          string = termsString,  ///
          equalivanceNode = instantiateEquivalence(string, context),
          equalivance = equalivanceFromEquivalenceNode(equalivanceNode, context);

    return equalivance;
  }
});
