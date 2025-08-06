"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";
import LocalContext from "../context/local";

import { domAssigned } from "../dom";
import { termFromTermNode } from "../utilities/node";
import { termsFromJSON, termsToTermsJSON } from "../utilities/json";

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

  match(signature, substitutions, context) {
    const terms = signature.getTerms(),
          termsA = this.terms,  ///
          termsB = terms, ///
          matches = match(termsA, termsB, (termA, termB) => {
            const termAType = termA.getType(),
                  termBType = termB.getType(),
                  termATypeEqualToOrSubTypeOfTermB = termAType.isEqualToOrSubTypeOf(termBType);

            if (termATypeEqualToOrSubTypeOfTermB) {
              const { TermSubstitution } = dom,
                    termSubstitution = TermSubstitution.fromTerms

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

function termsFromTermNodes(termNodes, fileContext) {
  const localContext = LocalContext.fromContext(fileContext),
        context = localContext, ///
        terms = termNodes.map((termNode) => {
          const term = termFromTermNode(termNode, context);

          return term;
        });

  return terms;
}

function stringFromTerms(terms) {
  const termsString = terms.reduce((termsString, term) => {
          const termString = term.getString();

          termsString = (termsString !== null) ?
                          `${termsString}, ${termString}` :
                            termString;

          return termsString;
        }, null),
        string = `[${termsString}]`;

  return string;
}
