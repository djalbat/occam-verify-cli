"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { instantiate } from "../../utilities/context";
import { instantiateSignatureAssertion } from "../../process/instantiate";
import { signatureFromSignatureAssertionNode, referenceFromSignatureAssertionNode, signatureAssertionFromStatementNode } from "../../utilities/element";

export default define(class SignatureAssertion extends Assertion {
  constructor(context, string, node, lineIndex, signature, reference) {
    super(context, string, node, lineIndex);

    this.signature = signature;
    this.reference = reference;
  }

  getSignature() {
    return this.signature;
  }

  getReference() {
    return this.reference;
  }

  getSignatureAssertionNode() {
    const node = this.getNode(),
          signatureAssertionNode = node;  ///

    return signatureAssertionNode;
  }

  compareSubstitutions(substitutions, context) { return this.signature.compareSubstitutions(substitutions, context); }

  correlateSubstitutions(substitutions, context) { return this.signature.correlateSubstitutions(substitutions, context); }

  validate(context) {
    let signatureAssertion = null;

    const signatureAssertionString = this.getString(); ///

    context.trace(`Validating the '${signatureAssertionString}' signature assertion...`);

    let validates = true;

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion) {
      validates = true;

      signatureAssertion = validAssertion; ///

      context.debug(`...the '${signatureAssertionString}' signature assertion is already valid.`);
    } else {
      const signatureVerifies = this.validateSignature(context);

      if (signatureVerifies) {
        const referenceVerifies = this.validateReference(context);

        if (referenceVerifies) {
          validates = true;
        }

        validates = true;
      }

      if (validates) {
        const assertion = this; ///

        signatureAssertion = assertion; ///

        context.addAssertion(signatureAssertion);
      }
    }

    if (validates) {
      context.debug(`...validated the '${signatureAssertionString}' signature assertion.`);
    }

    return signatureAssertion;
  }

  validateSignature(context) {
    let signatureValidates = false;

    const signatureAssertionString = this.getString(); ///

    context.trace(`Validating the '${signatureAssertionString}' signature assertion's signature...`);

    const signature = this.signature.validate(context);

    if (signature !== null) {
      this.signature = signature;

      signatureValidates = true;
    }

    if (signatureValidates) {
      context.debug(`...validated the '${signatureAssertionString}' signature assertion's signature.`);
    }

    return signatureValidates;
  }

  validateReference(context) {
    let referenceVerifies = false;

    const signatureAssertionString = this.getString();  ///

    context.trace(`Validating the '${signatureAssertionString}' signature assertion's reference...`);

    const reference = this.reference.validate(context);

    if (reference !== null) {
      const axiom = context.findAxiomByReference(reference);

      if (axiom !== null) {
        const satisfiable = axiom.isSatisfiable();

        if (satisfiable) {
          const signatureUnifies = axiom.unifySignature(this.signature, context);

          if (signatureUnifies) {
            this.reference = reference;

            referenceVerifies = true;
          }
        } else {
          const axiomString = axiom.getString();

          context.debug(`The '${axiomString}' axiom is not satisfiable.`);
        }

      } else {
        const referencdString = reference.getString();

        context.debug(`There is no axiom for the '${referencdString}' reference.`);
      }
    }

    if (referenceVerifies) {
      context.debug(`...validated the '${signatureAssertionString}' signature assertion's reference.`);
    }

    return referenceVerifies;
  }

  unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context) {
    let stepAndSubproofOrProofAssertionsUnify = false;

    const steptString = step.getString(),
          signatureAssertionString = this.getString(); ///

    context.trace(`Unifying the '${steptString}' step with the '${signatureAssertionString}' signature assertion...`);

    const axiom = context.findAxiomByReference(this.reference),
          satisfiable = axiom.isSatisfiable();

    if (satisfiable) {
      const axiomComparesToSignature = axiom.compareSignature(this.signature, context);

      if (axiomComparesToSignature) {
        const substitutionsB = substitutions; ///

        stepAndSubproofOrProofAssertionsUnify = unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context);

        if (stepAndSubproofOrProofAssertionsUnify) {
          const substitutionsA = substitutions, ///
                substitutionsCorrelate = substitutionsA.correlateSubstitutions(substitutionsB);

          if (!substitutionsCorrelate) {
            const substitutionsAString = substitutionsA.asString(),
                  substitutionsBString = substitutionsB.asString();

            context.trace(`THe signature's ${substitutionsBString} substitutions do not correlate with the unification's ${substitutionsAString} substitutions.`);

            stepAndSubproofOrProofAssertionsUnify = false;
          }
        }
      }
    }

    if (stepAndSubproofOrProofAssertionsUnify) {
      context.debug(`...unified the '${steptString}' step with the '${signatureAssertionString}' signature assertion.`);
    }

    return stepAndSubproofOrProofAssertionsUnify;
  }

  static name = "SignatureAssertion";

  static fromJSON(json, context) {
    let signatureAssertion = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string, lineIndex } = json,
              definedAssertionNode = instantiateSignatureAssertion(string, context),
              node = definedAssertionNode,  ///
              signature = signatureFromSignatureAssertionNode(definedAssertionNode, context),
              reference = referenceFromSignatureAssertionNode(definedAssertionNode, context);

        context = null;

        signatureAssertion = new SignatureAssertion(context, string, node, lineIndex, signature, reference);
      }, context);
    }

    return signatureAssertion;
  }

  static fromStep(step, context) {
    const statementNode = step.getStatementNode(),
          signatureAssertion = signatureAssertionFromStatementNode(statementNode, context);

    return signatureAssertion;
  }

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          signatureAssertion = signatureAssertionFromStatementNode(statementNode, context);

    return signatureAssertion;
  }
});
