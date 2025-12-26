"use strict";

import { arrayUtilities } from "necessary";

import ontology from "../ontology";

import { define } from "../ontology";
import { termsFromJSON, termsToTermsJSON } from "../utilities/json";
import { stringFromTerms, variableFromTerm, termsFromTermNodes } from "../utilities/node";

const { match, compare, correlate } = arrayUtilities;

export default define(class Signature {
  constructor(string, terms) {
    this.string = string;
    this.terms = terms;
  }

  getString() {
    return this.string;
  }

  getTerms() {
    return this.terms;
  }

  verify(context) {
    let verifies;

    const signatureString = this.string;  ///

    context.trace(`Verifying the ${signatureString} signature...`);

    verifies = this.terms.every((term) => {
      const termVerifies = term.verify(context, () => {
        const verifiesAhead = true;

        return verifiesAhead;
      });

      if (termVerifies) {
        return true;
      }
    });

    if (verifies) {
      context.debug(`...verified the ${signatureString} signature.`);
    }

    return verifies;
  }

  match(signature, substitutions, generalContext, specificContext) {
    const terms = signature.getTerms(),
          termsA = this.terms,  ///
          termsB = terms, ///
          matches = match(termsA, termsB, (termA, termB) => {
            const term = termB, ///
                  context = generalContext, ///
                  variable = variableFromTerm(term, context);

            if (variable !== null) {
              const term = termA, ///
                    termType = term.getType(),
                    variableType = variable.getType(),
                    termTypeEqualToOrSubTypeOfVariableType = termType.isEqualToOrSubTypeOf(variableType);

              if (termTypeEqualToOrSubTypeOfVariableType) {
                const { TermSubstitution } = ontology,
                      context = specificContext,  ///
                      termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context),
                      substitution = termSubstitution;  ///

                substitutions.addSubstitution(substitution, context);

                return true;
              }
            }
          });

    return matches;
  }

  compareSubstitutions(substitutions, context) {
    let substitutionsCompares = false;

    const signatureString = this.string,  ///
          substitutionsString = substitutions.asString();

    context.trace(`Comparing the '${substitutionsString}' substitutions against the ${signatureString} signature...`);

    const array = substitutions.getArray(),
          compares = compare(this.terms, array, (term, substitution) => {
            const substitutionTerm = substitution.getTerm(),
                  substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);

            if (substitutionTermEqualToTerm) {
              return true;
            }
          });

    if (compares) {
      substitutionsCompares = true;
    }

    if (substitutionsCompares) {
      context.debug(`...compared the '${substitutionsString}' substitutions against the ${signatureString} signature.`);
    }

    return substitutionsCompares;
  }

  correlateSubstitutions(substitutions, context) {
    let substitutionsCorrelates = false;

    const signatureString = this.string,  ///
          substitutionsString = substitutions.asString();

    context.trace(`Correlating the '${substitutionsString}' substitutions against the ${signatureString} signature...`);

    const array = substitutions.getArray(),
          correlates = correlate(this.terms, array, (term, substitution) => {
            const substitutionTerm = substitution.getTerm(),
                  substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);

            if (substitutionTermEqualToTerm) {
              return true;
            }
          });

    if (correlates) {
      substitutionsCorrelates = true;
    }

    if (substitutionsCorrelates) {
      context.debug(`...correlated the '${substitutionsString}' substitutions against the ${signatureString} signature.`);
    }

    return substitutionsCorrelates;
  }

  toJSON() {
    const termsJSON = termsToTermsJSON(this.terms),
          terms = termsJSON,  ///
          json = {
            terms
          };

    return json;
  }

  static name = "Signature";

  static fromJSON(json, context) {
    const terms = termsFromJSON(json, context),
          string = stringFromTerms(terms),
          signature = new Signature(string, terms);

    return signature;
  }

  static fromSignatureNode(signatureNode, context) {
    const termNodes = signatureNode.getTermNodes(),
          terms = termsFromTermNodes(termNodes, context),
          string = stringFromTerms(terms),
          signature = new Signature(string, terms);

    return signature;
  }
});
