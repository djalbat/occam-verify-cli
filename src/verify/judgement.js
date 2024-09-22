"use strict";

import Judgement from "../judgement";
import verifyFrame from "../verify/frame";
import verifyDeclaration from "./declaration";
import JudgementAssignment from "../assignment/judgement";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/name";

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

    const declarations = [],
          declarationNode = declarationNodeQuery(judgementNode),
          declarationVerified = verifyDeclaration(declarationNode, declarations, stated, localContext);

    if (declarationVerified) {
      const firstDeclaration = first(declarations),
            declaration = firstDeclaration, ///
            metavariableNode = declaration.getMetavariableNode(),
            metatheorem = localContext.findMetatheoremByMetavariableNode(metavariableNode),
            metaLemma = localContext.findMetaLemmaByMetavariableNode(metavariableNode),
            metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

      if (metaLemmaMetatheorem !== null) {
        const frames = [],
              frameNode = frameNodeQuery(judgementNode),
              frameVerified = verifyFrame(frameNode, frames, stated, localContext);

        if (frameVerified) {
          const firstFrame = first(frames),
                frame = firstFrame, ///
                metaLemmaMetatheoremUnified = frame.unifyMetaLemmaOrMetatheorem(metaLemmaMetatheorem);

          derivedJudgementVerified = metaLemmaMetatheoremUnified; ///
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

    const frames = [],
          frameNode = frameNodeQuery(judgementNode),
          frameVerified = verifyFrame(frameNode, frames, stated, localContext);

    if (frameVerified) {
      const firstFrame = first(frames),
            frame = firstFrame, ///
            metavariable = frame.getMetavariable(),
            metavariableNode = metavariable.getNode(),
            metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            judgementPresent = localContext.isJudgementPresentByMetavariableName(metavariableName);

      if (!judgementPresent) {
        const declarations = [],
              declarationNode = declarationNodeQuery(judgementNode),
              declarationVerified = verifyDeclaration(declarationNode, declarations, stated, localContext);

        if (declarationVerified) {
          if (assignments !== null) {
            const firstDeclaration = first(declarations),
                  declaration = firstDeclaration, ///
                  judgement = Judgement.fromJudgementNodeFrameAndDeclaration(judgementNode, frame, declaration),
                  judgementAssignment = JudgementAssignment.fromJudgement(judgement),
                  assignment = judgementAssignment;

            assignments.push(assignment);
          }

          statedJudgementVerified = true;
        }
      } else {
        localContext.trace(`There is already a judgement for the '${metavariableName}' metavariable.`, judgementNode);
      }
    }

    if (statedJudgementVerified) {
      localContext.debug(`...verified the '${judgementString}' stated judgement.`, judgementNode);
    }
  }

  return statedJudgementVerified;
}
