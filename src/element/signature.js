"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { signatureStringFromTerms } from "../utilities/string";
import { termsFromJSON, termsToTermsJSON } from "../utilities/json";

const { match, compare, correlate } = arrayUtilities;

export default define(class Signature extends Element {
  constructor(context, string, node, terms) {
    super(context, string, node);

    this.terms = terms;
  }

  getTerms() {
    return this.terms;
  }

  getSignatureNode() {
    const node = this.getNode(),
          signatureNode = node; ///

    return signatureNode;
  }

  verify(context) {
    let verifies;

    const signatureString = this.getString();  ///

    context.trace(`Verifying the '${signatureString}' signature...`);

    verifies = this.terms.every((term) => {
      const termVerifies = term.verify(context, () => {
        const verifiesForwards = true;

        return verifiesForwards;
      });

      if (termVerifies) {
        return true;
      }
    });

    if (verifies) {
      context.debug(`...verified the '${signatureString}' signature.`);
    }

    return verifies;
  }

  compare(signature, substitutions, generalContext, specificContext) {
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
                debugger

                // synthetically((context) => {
                //   const { TermSubstitution } = elements;
                //
                //   TermSubstitution.fromTermAndVariable(term, variable, context);

                //  validates...
                // });

                return true;
              }
            }
          }),
          compares = matches; ///

    return compares;
  }

  compareSubstitutions(substitutions, context) {
    let substitutionsCompares = false;

    const signatureString = this.getString(),  ///
          substitutionsString = substitutions.asString();

    context.trace(`Comparing the '${substitutionsString}' substitutions against the '${signatureString}' signature...`);

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
      context.debug(`...compared the '${substitutionsString}' substitutions against the '${signatureString}' signature.`);
    }

    return substitutionsCompares;
  }

  correlateSubstitutions(substitutions, context) {
    let substitutionsCorrelates = false;

    const signatureString = this.getString(),  ///
          substitutionsString = substitutions.asString();

    context.trace(`Correlating the '${substitutionsString}' substitutions against the '${signatureString}' signature...`);

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
      context.debug(`...correlated the '${substitutionsString}' substitutions against the '${signatureString}' signature.`);
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
          signatureString = signatureStringFromTerms(terms),
          string = signatureString, ///
          node = null,
          signature = new Signature(context, string, node, terms);

    return signature;
  }
});
