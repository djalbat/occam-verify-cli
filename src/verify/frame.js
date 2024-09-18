"use strict";

import Frame from "../frame";
import frameMetaType from "../metaType/frame";
import verifyDeclaration from "../verify/declaration";

import { push } from "../utilities/array";
import { nodesQuery } from "../utilities/query";

const declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable");

const verifyFrameFunctions = [
  verifyDerivedFrame,
  verifyStatedFrame
];

export default function verifyFrame(frameNode, assignments, stated, localContext) {
  let frameVerified;

  const frameString = localContext.nodeAsString(frameNode);

  localContext.trace(`Verifying the '${frameString}' frame...`, frameNode);

  frameVerified = verifyFrameFunctions.some((verifyFrameFunction) => {
    const frameVerified = verifyFrameFunction(frameNode, assignments, stated, localContext);

    if (frameVerified) {
      return true;
    }
  });

  if (frameVerified) {
    localContext.debug(`...verified the '${frameString}' frame.`, frameNode);
  }

  return frameVerified;
}

function verifyDerivedFrame(frameNode, frames, assignments, stated, localContext) {
  let derivedFrameVerified;

  const frameString = localContext.nodeAsString(frameNode);

  localContext.trace(`Verifying the '${frameString}' derived frame...`, frameNode);

  debugger

  if (derivedFrameVerified) {
    localContext.debug(`...verified the '${frameString}' derived frame.`, frameNode);
  }

  return derivedFrameVerified;
}

function verifyStatedFrame(frameNode, frames, assignments, stated, localContext) {
  let statedFrameVerified;

  const frameString = localContext.nodeAsString(frameNode);

  localContext.trace(`Verifying the '${frameString}' stated frame...`, frameNode);

  const declarations = [],
        declarationNodes = declarationNodesQuery(frameNode),
        metavariableNodes = metavariableNodesQuery(frameNode),
        declarationsVerified = declarationNodes.every((declarationNode) => {
          const declarationVerified = verifyDeclaration(declarationNode, declarations, localContext);

          return declarationVerified;
        }),
        metavariablesVerified = metavariableNodes.every((metavariableNode) => {
          const metavariableVerified = verifyMetavariable(metavariableNode, declarations, localContext);

          return metavariableVerified;
        });

  if (declarationsVerified && metavariablesVerified) {
    const frame = Frame.fromDeclarations(declarations);

    frames.push(frame);

    statedFrameVerified = true;
  }

  if (statedFrameVerified) {
    localContext.debug(`...verified the '${frameString}' stated frame.`, frameNode);
  }

  return statedFrameVerified;
}

function verifyMetavariable(metavariableNode, declarations, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === frameMetaType) {
      const judgement = localContext.findJudgementByMetavariableNode(metavariableNode);

      if (judgement !== null) {
        const judgementDeclarations = judgement.getDeclarations();

        push(declarations, judgementDeclarations);

        metavariableVerified = true;
      } else {
        localContext.debug(`There is no judgement for the '${metavariableString}' metavariable.`, metavariableNode);
      }
    } else {
      const frameMetaTypeName = frameMetaType.getName(),
            metaTypeString = metaType.asString();

      localContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metaTypeString}' when it should be '${frameMetaTypeName}'.`, metavariableNode);
    }
  } else {
    localContext.debug(`The '${metavariableString}' metavariable is not present'.`, metavariableNode);
  }

  if (metavariableVerified) {
    localContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}