"use strict";

import Frame from "./frame";
import Declaration from "./declaration";
import JudgementAssignment from "./assignment/judgement";

import { nodeQuery } from "./utilities/query";

const frameNodeQuery = nodeQuery("/judgement/frame"),
      declarationNodeQuery = nodeQuery("/judgement/declaration");

export default class Judgement {
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

  matchMetavariableName(metavariableName) { return this.frame.matchMetavariableName(metavariableName); }

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

    const metavariableNode = this.declaration.getMetavariableNode(),
          metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode),
          metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode),
          metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

    if (metaLemmaMetatheorem !== null) {
      const metaLemmaMetatheoremUnified = this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);

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
      const frameNode = frameNodeQuery(judgementNode),
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
