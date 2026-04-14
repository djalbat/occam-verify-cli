"use strict";

import TopLevelAssertion from "../topLevelAssertion";

import { define } from "../../elements";
import supposition from "../proofAssertion/supposition";

export default define(class Axiom extends TopLevelAssertion {
  getAxiomNode() {
    const node = this.getNode(),
          axiomNode = node; ///

    return axiomNode;
  }

  isSatisfiable() {
    const signature = this.getSignature(),
          satisfiable = (signature !== null);

    return satisfiable;
  }

  async verify(context) {
    let verifies;

    await this.break(context);

    const axiomString = this.getString(); ///

    context.trace(`Verifying the '${axiomString}' axiom...`);

    const signatureVerifies = this.verifySignature(context);

    if (signatureVerifies) {
      verifies = await super.verify(context);
    }

    if (verifies) {
      const axiom = this; ///

      context.addAxiom(axiom);

      context.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verifies;
  }

  verifySignature(context) {
    let signatureVerifies;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const axiomString = this.getString(); ///

      context.trace(`Verifying the '${axiomString}' axiom's signature...`);

      const signature = this.getSignature();

      signatureVerifies = signature.verify(context);

      if (signatureVerifies) {
        context.trace(`...verified the '${axiomString}' axiom's signature.`);
      }
    } else {
      signatureVerifies = true
    }

    return signatureVerifies;
  }

  unifySignature(signature, context) {
    let signatureUnifies;

    const axiomString = this.getString(), ///
          signatureString = signature.getString();

    context.trace(`Unifying the '${signatureString}' signature with the '${axiomString}' axiom...`);

    const specificSignature = signature;  ///

    signature = this.getSignature();

    const generalSignature = signature, ///
          specificContext = context,  ///
          generalContext = null;

    signatureUnifies = generalSignature.unifySignature(specificSignature, generalContext, specificContext);

    if (signatureUnifies) {
      context.debug(`...unified the '${signatureString}' signature with the '${axiomString}' axiom.`);
    }

    return signatureUnifies;
  }

  async unifyDeduction(deduction, context) {
    let deductionUnifies;

    await this.break(context);

    const asiomString = this.getString(), ///,
          deductionString = deduction.getString();

    context.trace(`Unifying the '${deductionString}' deduction with the '${asiomString}' axiom's deduction...`);

    deductionUnifies = this.deduction.unifyDeduction(deduction, context);

    if (deductionUnifies) {
      context.debug(`...unified the '${deductionString}' deduction with the '${asiomString}' axiom's deduction.`);
    }

    return deductionUnifies;
  }

  async unifyTopLevelAssertion(topLevelAssertion, context) {
    let topLevelAssertionUnifies = false;

    const deduction = topLevelAssertion.getDeduction(),
          deductionUnifies = await this.unifyDeduction(deduction, context);

    if (deductionUnifies) {
      const suppositions = topLevelAssertion.getSuppositions(),
            suppositionsUnify = await this.unifySuppositions(suppositions, context);

      if (suppositionsUnify) {
        topLevelAssertionUnifies = true;
      }
    }

    return topLevelAssertionUnifies;
  }

  static name = "Axiom";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Axiom, json, context); }
});
