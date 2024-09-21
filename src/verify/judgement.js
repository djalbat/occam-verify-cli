"use strict";

import Judgement from "../judgement";
import verifyFrame from "../verify/frame";
import JudgementAssignment from "../assignment/judgement";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import verifyDeclaration from "./declaration";

const frameNodeQuery = nodeQuery("/judgement/frame"),
      declarationNodeQuery = nodeQuery("/judgement/declaration");

const verifyJudgementFunctions = [
  verifyDerivedJudgement,
  verifyStatedJudgement
];

export default function verifyJudgement(judgementNode, assignments, stated, localContext) {
  let judgementVerified;

  const judgementString = localContext.nodeAsString(judgementNode);

  localContext.trace(`Verifying the '${judgementString}' judgement...`, judgementNode);

  judgementVerified = verifyJudgementFunctions.some((verifyJudgementFunction) => {
    const judgementVerified = verifyJudgementFunction(judgementNode, assignments, stated, localContext);

    if (judgementVerified) {
      return true;
    }
  });

  if (judgementVerified) {
    localContext.debug(`...verified the '${judgementString}' judgement.`, judgementNode);
  }

  return judgementVerified;
}

function verifyDerivedJudgement(judgementNode, assignments, stated, localContext) {
  let derivedJudgementVerified = false;

  if (!stated) {
    const judgementString = localContext.nodeAsString(judgementNode);

    localContext.trace(`Verifying the '${judgementString}' derived judgement...`, judgementNode);

    const frames = [],
          frameNode = frameNodeQuery(judgementNode),
          frameVerified = verifyFrame(frameNode, frames, stated, localContext);

    if (frameVerified) {
      // const firstFrame = first(frames),
      //       frame = firstFrame, ///
      //       declaration = frame.getDeclaration(),
      //       metavariableNode = declaration.getMetavariableNode(),
      //       metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode),
      //       metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode),
      //       metaLemmaMetatheorem = (metaLemma || metatheorem);  ///
      //
      // if (metaLemmaMetatheorem !== null) {
      //   const metaLemmaMetatheoremUnifiedWithJudgement = judgement.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem),
      //         metaLemmaMetatheoremUnifiedWithDeclaration = declaration.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);
      //
      //   derivedJudgementVerified = (metaLemmaMetatheoremUnifiedWithJudgement && metaLemmaMetatheoremUnifiedWithDeclaration);
      // }
    } else {
      // const metavariableString = localContext.nodeAsString(metavariableNode);
      //
      // localContext.debug(`There is no judgement for the '${metavariableString}' metavariable.`, metavariableNode)
    }

    if (derivedJudgementVerified) {
      localContext.debug(`...verified the '${judgementString}' derived judgement.`, judgementNode);
    }
  }

  return derivedJudgementVerified;
}

function verifyStatedJudgement(judgementNode, assignments, stated, localContext) {
  let statedJudgementVerified = false;

  if (stated) {
    const judgementString = localContext.nodeAsString(judgementNode);

    localContext.trace(`Verifying the '${judgementString}' stated judgement...`, judgementNode);

    const frames = [],
          frameNode = frameNodeQuery(judgementNode),
          frameVerified = verifyFrame(frameNode, frames, stated, localContext);

    if (frameVerified) {
      const declarations = [],
            declarationNode = declarationNodeQuery(judgementNode),
            declarationVerified = verifyDeclaration(declarationNode, declarations, stated, localContext);

      if (declarationVerified) {
        if (assignments !== null) {
          const firstDeclaration = first(declarations),
                declaration = firstDeclaration, ///
                firstFrame = first(frames),
                frame = firstFrame, ///
                judgement = Judgement.fromJudgementNodeFrameAndDeclaration(judgementNode, frame, declaration),
                judgementAssignment = JudgementAssignment.fromJudgement(judgement),
                assignment = judgementAssignment;

          assignments.push(assignment);
        }

        statedJudgementVerified = true;
      }
    }

    if (statedJudgementVerified) {
      localContext.debug(`...verified the '${judgementString}' stated judgement.`, judgementNode);
    }
  }

  return statedJudgementVerified;
}
