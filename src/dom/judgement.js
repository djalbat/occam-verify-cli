"use strict";

import dom from "../dom";
import JudgementAssignment from "../assignment/judgement";

import { domAssigned } from "../dom";

export default domAssigned(class Judgement {
  constructor(string, frame, declaration) {
    this.string = string;
    this.frame = frame;
    this.declaration = declaration;
  }

  getString() {
    return this.string;
  }

  getFrame() {
    return this.frame;
  }

  getDeclaration() {
    return this.declaration;
  }

  isSimple() { return this.frame.isSimple(); }

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

    const declarationString = this.declaration.getString();

    context.trace(`Verifying the '${declarationString}' declaration...`);

    declarationVerifies = this.declaration.verify(assignments, stated, context);

    if (declarationVerifies) {
      context.debug(`...verified the '${declarationString}' declaration.`);
    }

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

    const reference = this.declaration.getReference(),
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
      const { Frame, Declaration} = dom,
            node = judgementNode, ///
            string = context.nodeAsString(node),
            frame = Frame.fromJudgementNode(judgementNode, context),
            declaration = Declaration.fromJudgementNode(judgementNode, context);

      judgement = new Judgement(string, frame, declaration);
    }

    return judgement;
  }
});
