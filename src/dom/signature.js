"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { domAssigned } from "../dom";
import { termsFromJSON, termsToTermsJSON } from "../utilities/json";
import { stringFromTerms, variableFromTerm, termsFromTermNodes } from "../utilities/node";

const { match } = arrayUtilities;

export default domAssigned(class Signature {
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
    let verified;

    const signatureString = this.string;

    context.trace(`Verifying the ${signatureString} signature...`);

    verified = this.terms.every((term) => {
      const termVerified = term.verify(context, () => {
        const verifiedAhead = true;

        return verifiedAhead;
      });

      if (termVerified) {
        return true;
      }
    });

    if (verified) {
      context.debug(`...verified the ${signatureString} signature.`);
    }

    return verified;
  }

  match(signature, substitutions, generalContext, specificContext) {
    const terms = signature.getTerms(),
          termsA = this.terms,  ///
          termsB = terms, ///
          matches = match(termsA, termsB, (termA, termB) => {
            const termAType = termA.getType(),
                  termBType = termB.getType(),
                  termATypeEqualToOrSubTypeOfTermB = termAType.isEqualToOrSubTypeOf(termBType);

            if (termATypeEqualToOrSubTypeOfTermB) {
              let context,
                  term;


              context = generalContext; ///

              term = termB; ///

              const variable = variableFromTerm(term, context);

              context = specificContext;  ///

              term = termA; ///

              const { TermSubstitution } = dom,
                    termSubstitution = TermSubstitution.fromTernAndVariable(term, variable, context),
                    substitution = termSubstitution;  ///

              substitutions.addSubstitution(substitution, specificContext);

              return true;
            }
          });

    return matches;
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

  static fromJSON(json, fileContext) {
    const terms = termsFromJSON(json, fileContext),
          string = stringFromTerms(terms),
          signature = new Signature(string, terms);

    return signature;
  }

  static fromSignatureNode(signatureNode, fileContext) {
    const termNodes = signatureNode.getTermNodes(),
          terms = termsFromTermNodes(termNodes, fileContext),
          string = stringFromTerms(terms),
          signature = new Signature(string, terms);

    return signature;
  }
});
