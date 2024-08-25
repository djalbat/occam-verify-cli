"use strict";

import Judgement from "../judgement";
import verifyFrame from "../verify/frame";
import frameMetaType from "../metaType/frame";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import JudgementAssignment from "../assignment/judgement";

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
    // const judgementString = localMetaContext.nodeAsString(judgementNode);
    //
    // localMetaContext.trace(`Verifying the '${judgementString}' derived judgement...`, judgementNode);
    //
    // const metavariableNode = metavariableNodeQuery(judgementNode),
    //       metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);
    //
    // if (metavariable !== null) {
    //   const metaType = metavariable.getMetaType();
    //
    //   if (metaType === frameMetaType) {
    //     const frameNode = frameNodeQuery(judgementNode);
    //
    //     if (frameNode !== null) {
    //       const frameVerified = verifyFrame(frameNode, derived, localMetaContext);
    //
    //       derivedJudgementVerified = frameVerified;  ///
    //     } else {
    //       localMetaContext.debug(`The right hand side of the '${judgementString}' judgement must be a frame.`, judgementNode);
    //     }
    //   } else {
    //     const frameMetaTypeName = frameMetaType.getName(),
    //       metavariableString = localMetaContext.nodeAsString(metavariableNode),
    //       metaTypeString = metaType.asString();
    //
    //     localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, judgementNode);
    //   }
    // }
    //
    // if (derivedJudgementVerified) {
    //   localMetaContext.debug(`...verified the '${judgementString}' derived judgement.`, judgementNode);
    // }
  }

  return derivedJudgementVerified;
}

function verifyStatedJudgement(judgementNode, assignments, derived, localMetaContext) {
  let statedJudgementVerified = false;

  if (!derived) {
    const judgementString = localMetaContext.nodeAsString(judgementNode);

    localMetaContext.trace(`Verifying the '${judgementString}' stated judgement...`, judgementNode);

    const metavariables = [],
          metavariableNode = metavariableNodeQuery(judgementNode),
          metavariableVerified = verifyMetavariable(metavariableNode, metavariables, localMetaContext);

    if (metavariableVerified) {
      const firstMetavariable = first(metavariables),
            metavariable = firstMetavariable, ///
            judgementPresent = localMetaContext.isJudgementPresentByMetavariable(metavariable);

      if (!judgementPresent) {
        const frameNode = frameNodeQuery(judgementNode),
              frames = [],
              frameVerified = verifyFrame(frameNode, frames, derived, localMetaContext);

        if (frameVerified) {
          const firstFrame = first(frames),
                frame = firstFrame, ///
                judgement = Judgement.fromJudgementNodeFrameAndMetavariable(judgementNode, frame, metavariable),
                judgementAssignment = JudgementAssignment.fromJudgement(judgement),
                assignment = judgementAssignment;

          assignments.push(assignment);

          statedJudgementVerified = true;
        }
      } else {
        const metavariableString = localMetaContext.nodeAsString(metavariable);

        localMetaContext.debug(`There is already a judgement present for the '${metavariableString}' metavariable.`, judgementNode);
      }
    }

    if (statedJudgementVerified) {
      localMetaContext.debug(`...verified the '${judgementString}' stated judgement.`, judgementNode);
    }
  }

  return statedJudgementVerified;
}

function verifyMetavariable(metavariableNode, metavariables, localMetaContext) {
  let metavariableVerified = false;

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === frameMetaType) {
      metavariables.push(metavariable);

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
