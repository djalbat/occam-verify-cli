"use strict";

import verifyFrame from "../verify/frame";
import frameMetaType from "../metaType/frame";

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

    const metavariableNode = metavariableNodeQuery(judgementNode),
          metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

    if (metavariable !== null) {
      const metaType = metavariable.getMetaType();

      if (metaType === frameMetaType) {
        const frameNode = frameNodeQuery(judgementNode);

        if (frameNode !== null) {
          const frameVerified = verifyFrame(frameNode, derived, localMetaContext);

          statedJudgementVerified = frameVerified;  ///
        } else {
          localMetaContext.debug(`The right hand side of the '${judgementString}' judgement must be a frame.`, judgementNode);
        }
      } else {
        const frameMetaTypeName = frameMetaType.getName(),
              metavariableString = localMetaContext.nodeAsString(metavariableNode),
              metaTypeString = metaType.asString();

        localMetaContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, judgementNode);
      }
    }

    if (statedJudgementVerified) {
      localMetaContext.debug(`...verified the '${judgementString}' stated judgement.`, judgementNode);
    }
  }

  return statedJudgementVerified;
}