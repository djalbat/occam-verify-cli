"use strict";

import shim from "./shim";
import JudgementAssignment from "./assignment/judgement";

import { nodeQuery } from "./utilities/query";

const frameNodeQuery = nodeQuery("/judgement/frame"),
      declarationNodeQuery = nodeQuery("/judgement/declaration");

class Judgement {
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

  getMetavariableNode() { return this.frame.getMetavariableNode(); }

  matchMetavariableNode(metavariableNode) { return this.frame.matchMetavariableNode(metavariableNode); }

  verify(assignments, stated, localContext) {
    let verified;

    const judgementString = this.string;  ///

    localContext.trace(`Verifying the '${judgementString}' judgement...`);

    const frameVerified = this.frame.verify(assignments, stated, localContext),
          declarationVerified = this.declaration.verify(assignments, stated, localContext);

    if (frameVerified && declarationVerified) {
      let verifiedWhenStated = false,
          verifiedWhenDerived = false;

      if (stated) {
        verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
      } else {
        verifiedWhenDerived = this.verifyWhenDerived(assignments, localContext);
      }

      if (verifiedWhenStated || verifiedWhenDerived) {
        verified = true;
      }
    }

    if (verified) {
      localContext.debug(`...verified the '${judgementString}' judgement.`);
    }

    return verified;
  }

  verifyWhenStated(assignments, localContext) {
    let verifiedWhenStated;

    const judgementString = this.string;  ///

    localContext.trace(`Verifying the '${judgementString}' judgement when stated...`);

    if (assignments !== null) {
      const judgement = this, ///
            judgementAssignment = JudgementAssignment.fromJudgement(judgement),
            assignment = judgementAssignment;

      assignments.push(assignment);
    }

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      localContext.debug(`...verified the '${judgementString}' judgement when stated.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(assignments, localContext) {
    let verifiedWhenDerived;

    const judgementString = this.string;  ///

    localContext.trace(`Verifying the '${judgementString}' judgement when derived...`);

    const reference = this.declaration.getReference(),
          metaLemma = localContext.findMetaLemmaByReference(reference),
          metatheorem = localContext.findMetatheoremByReference(reference),
          metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

    if (metaLemmaMetatheorem !== null) {
      const metaLemmaMetatheoremUnified = this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem, localContext);

      verifiedWhenDerived = metaLemmaMetatheoremUnified; ///
    }

    if (verifiedWhenDerived) {
      localContext.debug(`...verified the '${judgementString}' judgement when derived.`);
    }

    return verifiedWhenDerived;
  }

  static fromJudgementNode(judgementNode, localContext) {
    let judgement = null;

    if (judgementNode !== null) {
      const { Frame, Declaration } = shim,
            frameNode = frameNodeQuery(judgementNode),
            declarationNode = declarationNodeQuery(judgementNode),
            node = judgementNode, ///
            string = localContext.nodeAsString(node),
            frame = Frame.fromFrameNode(frameNode, localContext),
            declaration = Declaration.fromDeclarationNode(declarationNode, localContext);

      judgement = new Judgement(string, frame, declaration);
    }

    return judgement;
  }
}

Object.assign(shim, {
  Judgement
});

export default Judgement;