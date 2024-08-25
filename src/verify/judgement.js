"use strict";

import Judgement from "../judgement";
import verifyFrame from "../verify/frame";
import frameMetaType from "../metaType/frame";
import JudgementAssignment from "../assignment/judgement";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/judgement/frame!"),
      metavariableNodeQuery = nodeQuery("/judgement/metavariable!");

export default function verifyJudgement(judgementNode, assignments, derived, localMetaContext) {
  let judgementVerified;

  const judgementString = localMetaContext.nodeAsString(judgementNode);

  localMetaContext.trace(`Verifying the '${judgementString}' judgement...`, judgementNode);

  const verifyJudgementFunctions = [
    verifyDerivedJudgement,
    verifyStatedJudgement
  ];

  judgementVerified = verifyJudgementFunctions.some((verifyJudgementFunction) => {
    const judgementVerified = verifyJudgementFunction(judgementNode, assignments, derived, localMetaContext);

    if (judgementVerified) {
      return true;
    }
  });

  if (judgementVerified) {
    localMetaContext.debug(`...verified the '${judgementString}' judgement.`, judgementNode);
  }

  return judgementVerified;
}

function verifyDerivedJudgement(judgementNode, assignments, derived, localMetaContext) {
  let derivedJudgementVerified = false;

  if (derived) {
    const judgementString = localMetaContext.nodeAsString(judgementNode);

    localMetaContext.trace(`Verifying the '${judgementString}' derived judgement...`, judgementNode);

    const metavariableNode = metavariableNodeQuery(judgementNode),
          metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext);

    if (metavariableVerified) {
      const judgement = localMetaContext.findJudgementByMetavariableNode(metavariableNode);

      if (judgement !== null) {
        const frames = [],
              frameNode = frameNodeQuery(judgementNode),
              frameVerified = verifyFrame(frameNode, frames, derived, localMetaContext);

        if (frameVerified) {
          const firstFrame = first(frames),
                frame = firstFrame, ///
                frameSingular = frame.isSingular();

          if (frameSingular) {
            const declaration = frame.getDeclaration(),
                  metavariableNode = declaration.getMetavariableNode(),
                  metaLemma = localMetaContext.findMetaLemmaByMetavariableNode(metavariableNode),
                  metatheorem = localMetaContext.findMetatheoremByMetavariableNode(metavariableNode);

            if ((metaLemma !== null) || (metatheorem !== null)) {

              debugger

            } else {
              const metavariableString = localMetaContext.nodeAsString(metavariableNode);

              localMetaContext.debug(`There are no meta-lemmas or metatheorems corresponding to the '${metavariableString}' metavariable.`, judgementNode);
            }
          } else {
            const frameString = localMetaContext.nodeAsString(frameNode);

            localMetaContext.debug(`The '${frameString}' is not singular.`, judgementNode);
          }
        }
      } else {
        const metavariableString = localMetaContext.nodeAsString(metavariable);

        localMetaContext.debug(`There is no judgement present for the '${metavariableString}' metavariable.`, judgementNode);
      }
    }
  }

  return derivedJudgementVerified;
}

function verifyStatedJudgement(judgementNode, assignments, derived, localMetaContext) {
  let statedJudgementVerified = false;

  if (!derived) {
    const judgementString = localMetaContext.nodeAsString(judgementNode);

    localMetaContext.trace(`Verifying the '${judgementString}' stated judgement...`, judgementNode);

    const metavariableNode = metavariableNodeQuery(judgementNode),
          metavariableVerified = verifyMetavariable(metavariableNode, localMetaContext);

    if (metavariableVerified) {
      const judgementPresent = localMetaContext.isJudgementPresentByMetavariableNode(metavariableNode);

      if (!judgementPresent) {
        const frames = [],
              frameNode = frameNodeQuery(judgementNode),
              frameVerified = verifyFrame(frameNode, frames, derived, localMetaContext);

        if (frameVerified) {
          const firstFrame = first(frames),
                frame = firstFrame, ///
                judgement = Judgement.fromJudgementNodeFrameAndMetavariableNode(judgementNode, frame, metavariableNode),
                judgementAssignment = JudgementAssignment.fromJudgement(judgement),
                assignment = judgementAssignment;

          assignments.push(assignment);

          statedJudgementVerified = true;
        }
      } else {
        const metavariableString = localMetaContext.nodeAsString(metavariableNode);

        localMetaContext.debug(`There is already a judgement present for the '${metavariableString}' metavariable.`, judgementNode);
      }
    }

    if (statedJudgementVerified) {
      localMetaContext.debug(`...verified the '${judgementString}' stated judgement.`, judgementNode);
    }
  }

  return statedJudgementVerified;
}

function verifyMetavariable(metavariableNode, localMetaContext) {
  let metavariableVerified = false;

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === frameMetaType) {
      metavariableVerified = true;
    } else {
      const frameMetaTypeName = frameMetaType.getName(),
            metaTypeString = metaType.asString();

      localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, metavariableNode);
    }
  } else {
    localMetaContext.debug(`The '${metavariableString}' metavariable is not present'.`, metavariableNode);
  }

  if (metavariableVerified) {
    localMetaContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
