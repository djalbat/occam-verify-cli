"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import elements from "../elements";

import { define } from "../elements";
import { instantiate } from "../utilities/context";
import { instantiateSignature } from "../process/instantiate";
import { termsFromSignatureNode } from "../utilities/element";

const { match, compare, correlate } = arrayUtilities;

export default define(class Signature extends Element {
  constructor(context, string, node, lineIndex, terms) {
    super(context, string, node, lineIndex);

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
    let verifies = false;

    const signatureString = this.getString();  ///

    context.trace(`Verifying the '${signatureString}' signature...`);

    const signature = this.validate(context);

    if (signature !== null) {
      verifies = true;
    }

    if (verifies) {
      context.debug(`...verified the '${signatureString}' signature.`);
    }

    return verifies;
  }

  validate(context) {
    let signature = null;

    const signatureString = this.getString();  ///

    context.trace(`Validating the '${signatureString}' signature...`);

    const terms = [],
          termsValidate = this.validateTerms(terms, context);

    if (termsValidate) {
      this.terms = terms;

      signature = this; ///
    }

    if (signature) {
      context.debug(`...validated the '${signatureString}' signature.`);
    }

    return signature
  }

  validateTerm(term, terms, context) {
    let termValidates = false;

    const termString = term.getString(),
          signatureString = this.getString();  ///

    context.trace(`Validating the '${signatureString}' signature's '${termString}' term...`);

    term = term.validate(context, (term) => { ///
      const validatesForwards = true;

      return validatesForwards;
    });

    if (term !== null) {
      terms.push(term);

      termValidates = true;
    }

    if (termValidates) {
      context.debug(`...validated the '${signatureString}' signature's '${termString}' term.`);
    }

    return termValidates
  }

  validateTerms(terms, context) {
    let termsValidate;

    const signatureString = this.getString();  ///

    context.trace(`Validating the '${signatureString}' signature's terms...`);

    termsValidate = terms.every((term) => {
      const termValidates = this.validateTerm(term, terms, context);

      if (termValidates) {
        return true;
      }
    })

    if (termsValidate){
      context.debug(`...validated the '${signatureString}' signature's terms.`);
    }

    return termsValidate
  }

  compareSignature(signature, substitutions, generalContext, specificContext) {
    const terms = signature.getTerms(),
          termsA = this.terms,  ///
          termsB = terms, ///
          matches = match(termsA, termsB, (termA, termB) => {
            const { Variable } = elements,
                  term = termB, ///
                  context = generalContext, ///
                  variable = Variable.fromTerm(term, context);

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
          comparesToSignature = matches; ///

    return comparesToSignature;
  }

  compareSubstitutions(substitutions, context) {
    let substitutionsCompares = false;

    const signatureString = this.getString(),  ///
          substitutionsString = substitutions.asString();

    context.trace(`Comparing the '${substitutionsString}' substitutions against the '${signatureString}' signature...`);

    const array = substitutions.getArray(),
          compares = compare(this.terms, array, (term, substitution) => {
            const substitutionTerm = substitution.getTerm(),
                  substitutionTermComparesToTerm = substitutionTerm.compareTerm(term);

            if (substitutionTermComparesToTerm) {
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
                  substitutionTermComparesToTerm = substitutionTerm.compareTerm(term);

            if (substitutionTermComparesToTerm) {
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

  static name = "Signature";

  toJSON() {
    const string = this.getString(),
          lineIndex = this.getLineIndex(),
          json = {
            string,
            lineIndex
          };

    return json;
  }

  static fromJSON(json, context) {
    return instantiate((context) => {
      const { string, lineIndex } = json,
            signatureNode = instantiateSignature(string, context),
            node = signatureNode,  ///
            terms = termsFromSignatureNode(signatureNode, context),
            signature = new Signature(context, string, node, lineIndex, terms);

      return signature;
    }, context);
  }
});
