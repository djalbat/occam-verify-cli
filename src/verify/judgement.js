"use strict";

import Judgement from "../judgement";
import verifyFrame from "../verify/frame";
import frameMetaType from "../metaType/frame";
import JudgementAssignment from "../assignment/judgement";
import verifyMetavariableGivenMetaType from "../verify/metavariableGivenMetaType";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/judgement/frame!"),
      metavariableNodeQuery = nodeQuery("/judgement/statement/metavariable!");

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

    const metavariableNode = metavariableNodeQuery(judgementNode);

    if (metavariableNode !== null) {
      const metaType = frameMetaType, ///
            metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, localContext);

      if (metavariableVerifiedGivenMetaType) {
        const judgement = localContext.findJudgementByMetavariableNode(metavariableNode);

        if (judgement !== null) {
          const frames = [],
                frameNode = frameNodeQuery(judgementNode),
                frameVerified = verifyFrame(frameNode, frames, stated, localContext);

          if (frameVerified) {
            const firstFrame = first(frames),
                  frame = firstFrame, ///
                  declaration = frame.getDeclaration(),
                  metavariableNode = declaration.getMetavariableNode(),
                  metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode),
                  metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode),
                  metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

            if (metaLemmaMetatheorem !== null) {
              const metaLemmaMetatheoremUnifiedWithJudgement = judgement.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem),
                    metaLemmaMetatheoremUnifiedWithDeclaration = declaration.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);

              derivedJudgementVerified = (metaLemmaMetatheoremUnifiedWithJudgement && metaLemmaMetatheoremUnifiedWithDeclaration);
            }
          }
        } else {
          const metavariableString = localContext.nodeAsString(metavariableNode);

          localContext.debug(`This is no judgement for the '${metavariableString}' metavariable.`, metavariableNode)
        }
      }
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

    const metavariableNode = metavariableNodeQuery(judgementNode);

    if (metavariableNode !== null) {
      const metaType = frameMetaType, ///
            metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, localContext);

      if (metavariableVerifiedGivenMetaType) {
        const frames = [],
              frameNode = frameNodeQuery(judgementNode),
              frameVerified = verifyFrame(frameNode, frames, stated, localContext);

        if (frameVerified) {
          if (assignments !== null) {
            const firstFrame = first(frames),
                  frame = firstFrame, ///
                  judgement = Judgement.fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode),
                  judgementAssignment = JudgementAssignment.fromJudgement(judgement),
                  assignment = judgementAssignment;

            assignments.push(assignment);
          }

          statedJudgementVerified = true;
        }
      }
    }

    if (statedJudgementVerified) {
      localContext.debug(`...verified the '${judgementString}' stated judgement.`, judgementNode);
    }
  }

  return statedJudgementVerified;
}
