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

  verify(assignments, stated, context) {
    let verified;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' judgement...`);

    const frameVerified = this.frame.verify(assignments, stated, context);

    if (frameVerified) {
      const declarationVerified = this.declaration.verify(assignments, stated, context);

      if (declarationVerified) {
        let verifiedWhenStated = false,
            verifiedWhenDerived = false;

        if (stated) {
          verifiedWhenStated = this.verifyWhenStated(assignments, context);
        } else {
          verifiedWhenDerived = this.verifyWhenDerived(assignments, context);
        }

        if (verifiedWhenStated || verifiedWhenDerived) {
          verified = true;
        }
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

    context.trace(`Verifying the '${judgementString}' judgement when stated...`);

    if (assignments !== null) {
      const judgement = this, ///
            judgementAssignment = JudgementAssignment.fromJudgement(judgement),
            assignment = judgementAssignment;

      assignments.push(assignment);
    }

    verifiedWhenStated = true;

    if (verifiedWhenStated) {
      context.debug(`...verified the '${judgementString}' judgement when stated.`);
    }

    return verifiedWhenStated;
  }

  verifyWhenDerived(assignments, context) {
    let verifiedWhenDerived = false;

    const judgementString = this.string;  ///

    context.trace(`Verifying the '${judgementString}' judgement when derived...`);

    if (!verifiedWhenDerived) {
      const reference = this.declaration.getReference(),
            metaLemma = context.findMetaLemmaByReference(reference),
            metatheorem = context.findMetatheoremByReference(reference),
            metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

      if (metaLemmaMetatheorem !== null) {
        const metaLemmaMetatheoremUnified = this.frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem, context);

        verifiedWhenDerived = metaLemmaMetatheoremUnified; ///
      }
    }

    if (!verifiedWhenDerived) {
      const reference = this.declaration.getReference(),
            axiom = context.findAxiomByReference(reference),
            lemma = context.findLemmaByReference(reference),
            theorem = context.findTheoremByReference(reference),
            conjecture = context.findConjectureByReference(reference),
            axiomLemmaTheoremOrConjecture = (axiom || lemma || theorem || conjecture);

      if (axiomLemmaTheoremOrConjecture !== null) {
        const axiomLemmaTheoremOrConjectureUnified = this.frame.unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, context);

        verifiedWhenDerived = axiomLemmaTheoremOrConjectureUnified; ///
      }
    }

    if (verifiedWhenDerived) {
      context.debug(`...verified the '${judgementString}' judgement when derived.`);
    }

    return verifiedWhenDerived;
  }

  static fromJudgementNode(judgementNode, context) {
    let judgement = null;

    if (judgementNode !== null) {
      const { Frame, Declaration } = shim,
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
}

Object.assign(shim, {
  Judgement
});

export default Judgement;