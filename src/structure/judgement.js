"use strict";

import structure from "../structure";
import JudgementAssignment from "../assignment/judgement";

import { define } from "../structure";

export default define(class Judgement {
  constructor(string, node, frame, assumption) {
    this.string = string;
    this.node = node;
    this.frame = frame;
    this.assumption = assumption;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
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
    let verifiesWhenDerived;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' derived judgement...`);

    const metavariable = this.assumption.getMetavariable(),
          reference = referenceFromMetavariable(metavariable, context),
          metaLemmaMetatheorem = context.findMetaLemmaMetatheoremByReference(reference),
          substitutions = metaLemmaMetatheorem.getSubstitutions(),
          substitutionsMatch = this.frame.matchSubstitutions(substitutions, context);

    verifiesWhenDerived = substitutionsMatch;

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
          judgementAssignment = JudgementAssignment.fromJudgement(judgement),
          assignment = judgementAssignment;

    assignments.push(assignment);
  }

  static name = "Judgement";

  static fromStatementNode(statementNode, context) {
    let judgement = null;

    const judgementNode = statementNode.getJudgementNode();

    if (judgementNode !== null) {
      const { Frame, Assumption } = structure,
            node = judgementNode, ///
            string = context.nodeAsString(node),
            frame = Frame.fromJudgementNode(judgementNode, context),
            assumption = Assumption.fromJudgementNode(judgementNode, context);

      judgement = new Judgement(string, node, frame, assumption);
    }

    return judgement;
  }
});

function referenceFromMetavariable(metavariable, context) {
  const { Reference } = structure,
        metavariableNode = metavariable.getNode(),
        reference = Reference.fromMetavariableNode(metavariableNode, context);

  return reference;
}

