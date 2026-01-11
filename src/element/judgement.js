"use strict";

import Element from "../element";
import elements from "../elements";

import { define } from "../elements";
import { judgementAssignmentFromJudgement } from "../process/assign";

export default define(class Judgement extends Element {
  constructor(context, string, node, frame, assumption) {
    super(context, string, node);

    this.frame = frame;
    this.assumption = assumption;
  }

  getFrame() {
    return this.frame;
  }

  getDeclaration() {
    return this.assumption;
  }

  isSingular() { return this.node.isSingular(); }

  getMetavariable() { return this.frame.getMetavariable(); }

  verify(assignments, stated, context) {
    let verifies = false;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' judgement...`);

    const frameVerifies = this.verifyFrame(assignments, stated, context);

    if (frameVerifies) {
      const declarationVerifies = this.verifyDeclaration(assignments, stated, context);

      if (declarationVerifies) {
        let verifiesWhenStated = false,
            verifiesWhenDerived = false;

        if (stated) {
          verifiesWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiesWhenDerived = this.verifyWhenDerived(context);
        }

        if (verifiesWhenStated || verifiesWhenDerived) {
          verifies = true;
        }
      }
    }

    if (verifies) {
      if (stated) {
        this.assign(assignments, context);
      }
    }

    if (verifies) {
      context.debug(`...verified the '${judgementString}' judgement.`);
    }

    return verifies;
  }

  verifyFrame(assignments, stated, context) {
    let frameVerifies;

    const frameString = this.frame.getString();

    context.trace(`Verifying the '${frameString}' frame...`);

    frameVerifies = this.frame.verify(assignments, stated, context);

    if (frameVerifies) {
      context.debug(`...verified the '${frameString}' frame.`);
    }

    return frameVerifies;
  }

  verifyDeclaration(assignments, stated, context) {
    let declarationVerifies;

    declarationVerifies = this.assumption.verify(assignments, stated, context);

    return declarationVerifies;
  }

  verifyWhenStated(assignments, context) {
    let verifiesWhenStated;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' stated judgement...`);

    verifiesWhenStated = true;

    if (verifiesWhenStated) {
      context.debug(`...verified the '${judgementString}' stated judgement.`);
    }

    return verifiesWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiesWhenDerived = false;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' derived judgement...`);

    const metavariable = this.assumption.getMetavariable(),
          reference = referenceFromMetavariable(metavariable, context),
          metaLemmaMetatheorem = context.findMetaLemmaMetatheoremByReference(reference),
          substitutions = metaLemmaMetatheorem.getSubstitutions(),
          frameComparesToSubstitutions = this.frame.matchSubstitutions(substitutions, context);

    if (frameComparesToSubstitutions) {
      verifiesWhenDerived = true;

    }

    if (verifiesWhenDerived) {
      context.debug(`...verified the '${judgementString}' derived judgement.`);
    }

    return verifiesWhenDerived;
  }

  assign(assignments, context) {
    if (assignments === null) {
      return;
    }

    const judgement = this, ///
          judgementAssignment = judgementAssignmentFromJudgement(judgement),
          assignment = judgementAssignment; ///

    assignments.push(assignment);
  }

  static name = "Judgement";
});

function referenceFromMetavariable(metavariable, context) {
  const { Reference } = elements,
        metavariableNode = metavariable.getNode(),
        reference = Reference.fromMetavariableNode(metavariableNode, context);

  return reference;
}

