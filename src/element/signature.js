"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import elements from "../elements";

import { define } from "../elements";
import { instantiateSignature } from "../process/instantiate";
import { termsFromSignatureNode } from "../utilities/element";
import { attempt, serialise, unserialise, instantiate } from "../utilities/context";

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

  findValidSignature(context) {
    const signatureNode = this.getSignatureNode(),
          signature = context.findSignatureBySignatureNode(signatureNode),
          validSignature = signature;  ///

    return validSignature;
  }

  validate(context) {
    let signature = null;

    const signatureString = this.getString();  ///

    context.trace(`Validating the '${signatureString}' signature...`);

    let validates = false;

    const validSignature = this.findValidSignature(context);

    if (validSignature) {
      signature = validSignature;  ///

      context.debug(`...the '${signatureString}' signature is already valid.`);
    } else {
      const specificContext = context;  ///

      context = this.getContext();

      attempt((context) => {
        const termsValidate = this.validateTerms(context);

        if (termsValidate !== null) {
          validates = true;
        }

        if (validates) {
          this.commit(context);
        }
      }, context);

      context = specificContext;  ///

      if (validates) {
        signature = this; ///

        context.addSignature(context);
      }
    }

    if (validates) {
      context.debug(`...validated the '${signatureString}' signature.`);
    }

    return signature;
  }

  validateTerms(context) {
    let termsValidate;

    const signatureString = this.getString();  ///

    context.trace(`Validating the '${signatureString}' signature's terms...`);

    const terms = [];

    termsValidate = this.terms.every((term) => {
      term = term.validate(context, (term) => { ///
        const validatesForwards = true;

        return validatesForwards;
      });

      if (term !== null) {
        terms.push(term);

        return true;
      }
    });

    if (termsValidate) {
      this.terms = terms;
    }

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

  static name = "Signature";

  toJSON() {
    const context = this.getContext();

    return serialise((context) => {
      const string = this.getString(),
            lineIndex = this.getLineIndex(),
            json = {
              context,
              string,
              lineIndex
            };

      return json;
    }, context);
  }

  static fromJSON(json, context) {
    let signature;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string, lineIndex } = json,
              signatureNode = instantiateSignature(string, context),
              node = signatureNode,  ///
              terms = termsFromSignatureNode(signatureNode, context);

        signature = new Signature(context, string, node, lineIndex, terms);
      }, context);
    }, json, context);

    return signature;
  }
});
