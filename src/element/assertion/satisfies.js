"use strict";

import Assertion from "../assertion";

import { define } from "../../elements";
import { instantiate } from "../../utilities/context";
import { instantiateSatisfiesAssertion } from "../../process/instantiate";
import { signatureFromJSatisfiesAssertionNode, referenceFromJSatisfiesAssertionNode, satisfiesAssertionFromStatementNode } from "../../utilities/element";

export default define(class SatisfiesAssertion extends Assertion {
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

  getSatisfiesAssertionNode() {
    const node = this.getNode(),
          satisfiesAssertionNode = node;  ///

    return satisfiesAssertionNode;
  }

  compareSubstitutions(substitutions, context) { return this.signature.compareSubstitutions(substitutions, context); }

  correlateSubstitutions(substitutions, context) { return this.signature.correlateSubstitutions(substitutions, context); }

  validate(context) {
    let satisfiesAssertion = null;

    const satisfiesAssertionString = this.getString(); ///

    context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion) {
      satisfiesAssertion = validAssertion; ///

      context.debug(`...the '${satisfiesAssertionString}' satisfies satisfiesAssertion is already valid.`);
    } else {
      let validates = true;

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

        satisfiesAssertion = assertion; ///

        context.addAssertion(satisfiesAssertion);

        context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertion.`);
      }
    }

    return satisfiesAssertion;
  }

  validateSignature(context) {
    let signatureValidates = false;

    const signature = this.signature.validate(context);

    if (signature !== null) {
      signatureValidates = true;
    }

    return signatureValidates;
  }

  validateReference(context) {
    let referenceVerifies = false;

    const referenceString = this.reference.getString(),
          satisfiesAssertionString = this.getString();  ///

    context.trace(`Validating the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference...`);

    const axiom = context.findAxiomByReference(this.reference);

    if (axiom !== null) {
      const axiomSatisfiable = axiom.isSatisfiable();

      if (axiomSatisfiable) {
        referenceVerifies = true;
      }
    }

    if (referenceVerifies) {
      context.debug(`...validated the '${satisfiesAssertionString}' satisfies assertino's '${referenceString}' reference.`);
    }

    return referenceVerifies;
  }

  unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context) {
    let stepAndSubproofOrProofAssertionsUnify = false;

    const steptString = step.getString(),
          satisfiesAssertionString = this.getString(); ///

    context.trace(`Unifying the '${steptString}' step with the '${satisfiesAssertionString}' satisfies assertion...`);

    this.signature.validate(context);

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
      context.debug(`...unified the '${steptString}' step with the '${satisfiesAssertionString}' satisfies assertion.`);
    }

    return stepAndSubproofOrProofAssertionsUnify;
  }

  static name = "SatisfiesAssertion";

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
    let satisfiesAssertion = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string, lineIndex } = json,
              definedAssertionNode = instantiateSatisfiesAssertion(string, context),
              node = definedAssertionNode,  ///
              signature = signatureFromJSatisfiesAssertionNode(definedAssertionNode, context),
              reference = referenceFromJSatisfiesAssertionNode(definedAssertionNode, context);

        context = null;

        satisfiesAssertion = new SatisfiesAssertion(context, string, node, lineIndex, signature, reference);
      }, context);
    }

    return satisfiesAssertion;
  }

  static fromStep(step, context) {
    const statementNode = step.getStatementNode(),
      satisfiesAssertion = satisfiesAssertionFromStatementNode(statementNode, context);

    return satisfiesAssertion;
  }

  static fromStatement(statement, context) {
    const statementNode = statement.getNode(),
          satisfiesAssertion = satisfiesAssertionFromStatementNode(statementNode, context);

    return satisfiesAssertion;
  }
});
