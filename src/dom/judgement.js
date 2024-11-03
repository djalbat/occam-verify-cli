"use strict";

import dom from "../dom";
import JudgementAssignment from "../assignment/judgement";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const frameNodeQuery = nodeQuery("/judgement/frame"),
      judgementNodeQuery = nodeQuery("/statement/judgement"),
      declarationNodeQuery = nodeQuery("/judgement/declaration");

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

  getMetavariable() { return this.frame.getMetavariable(); }

  verify(assignments, stated, context) {
    let verified = false;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' judgement...`);

    const frameVerified = this.frame.verify(assignments, stated, context);

    if (frameVerified) {
      const declarationVerified = this.declaration.verify(this.frame, assignments, stated, context);

      if (declarationVerified) {
        let verifiedWhenStated = false,
            verifiedWhenDerived = false;

        if (stated) {
          verifiedWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiedWhenDerived = this.verifyWhenDerived(context);
        }

        verified = (verifiedWhenStated || verifiedWhenDerived);
      }
    }

    if (verified) {
      context.debug(`...verified the '${judgementString}' judgement.`);
    }

    return verified;
  }

  verifyWhenStated(assignments, context) {
    let verifiedWhenStated;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' stated judgement...`);

    if (assignments !== null) {
      const judgement = this, ///
            judgementAssignment = JudgementAssignment.fromJudgement(judgement),
            assignment = judgementAssignment;

      assignments.push(assignment);
    }

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${judgementString}' stated judgement.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(context) {
    let verifiedWhenDerived ;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' derived judgement...`);

    verifiedWhenDerived = true;

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${judgementString}' derived judgement.`);
    }

    return verifiedWhenDerived;
  }

  static name = "Judgement";

  static fromStatementNode(statementNode, context) {
    let judgement = null;

    const judgementNode = judgementNodeQuery(statementNode);

    if (judgementNode !== null) {
      const { Frame, Declaration } = dom,
            frameNode = frameNodeQuery(judgementNode),
            declarationNode = declarationNodeQuery(judgementNode),
            node = judgementNode, ///
            frame = Frame.fromFrameNode(frameNode, context),
            string = context.nodeAsString(node),
            declaration = Declaration.fromDeclarationNode(declarationNode, context);

      judgement = new Judgement(string, frame, declaration);
    }

    return judgement;
  }
});
