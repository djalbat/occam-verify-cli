"use strict";

import Frame from "../frame";
import frameMetaType from "../metaType/frame";
import verifyDeclaration from "../verify/declaration";
import verifyMetavariableGivenMetaType from "./metavariableGivenMetaType";

import { nodeQuery, nodesQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/name";

const metavariableNodeQuery = nodeQuery("/frame/metavariable"),
      declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable");

const verifyFrameFunctions = [
  verifyDerivedFrame,
  verifyStatedFrame
];

export default function verifyFrame(frameNode, frames, stated, localContext) {
  let frameVerified;

  const frameString = localContext.nodeAsString(frameNode);

  localContext.trace(`Verifying the '${frameString}' frame...`, frameNode);

  frameVerified = verifyFrameFunctions.some((verifyFrameFunction) => {
    const frameVerified = verifyFrameFunction(frameNode, frames, stated, localContext);

    if (frameVerified) {
      return true;
    }
  });

  if (frameVerified) {
    localContext.debug(`...verified the '${frameString}' frame.`, frameNode);
  }

  return frameVerified;
}

function verifyDerivedFrame(frameNode, frames, stated, localContext) {
  let derivedFrameVerified;

  if (!stated) {
    const frameString = localContext.nodeAsString(frameNode);

    localContext.trace(`Verifying the '${frameString}' derived frame...`, frameNode);

    const declarations = [],
          declarationNodes = declarationNodesQuery(frameNode),
          declarationsVerified = declarationNodes.every((declarationNode) => {
            const declarationVerified = verifyDeclaration(declarationNode, declarations, stated, localContext);

            if (declarationVerified) {
              return true;
            }
          });

    if (declarationsVerified) {
      const metavariableNodes = metavariableNodesQuery(frameNode),
            metavariablesVerified = metavariableNodes.every((metavariableNode) => {
              const metavariableVerified = verifyMetavariable(metavariableNode, declarations, localContext);

              if (metavariableVerified) {
                return true;
              }
            });

      if (metavariablesVerified) {
        const frame = Frame.fromDeclarations(declarations);

        frames.push(frame);

        derivedFrameVerified = true; ///
      }
    }

    if (derivedFrameVerified) {
      localContext.debug(`...verified the '${frameString}' derived frame.`, frameNode);
    }
  }

  return derivedFrameVerified;
}

function verifyStatedFrame(frameNode, frames, stated, localContext) {
  let statedFrameVerified;

  if (stated) {
    const frameString = localContext.nodeAsString(frameNode);

    localContext.trace(`Verifying the '${frameString}' stated frame...`, frameNode);

    const declarationNodes = declarationNodesQuery(frameNode),
          declarationNodesLength = declarationNodes.length;

    if (declarationNodesLength === 0) {
      const metavariableNode = metavariableNodeQuery(frameNode);

      if (metavariableNode !== null) {
        const metaType = frameMetaType, ///
              metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, localContext);

        if (metavariableVerifiedGivenMetaType) {
          const frame = Frame.fromMetavariableNode(metavariableNode);

          frames.push(frame);

          statedFrameVerified = true;
        }
      } else {
        localContext.trace(`The '${frameString}' stated frame cannot have more than one metavariable.`, frameNode);
      }
    } else {
      localContext.trace(`The '${frameString}' stated frame cannot have declarations.`, frameNode);
    }

    if (statedFrameVerified) {
      localContext.debug(`...verified the '${frameString}' stated frame.`, frameNode);
    }
  }

  return statedFrameVerified;
}

function verifyMetavariable(metavariableNode, declarations, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metaType = frameMetaType, ///
        metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, localContext);

  if (metavariableVerifiedGivenMetaType) {
    const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          judgement = localContext.findJudgementByMetavariableName(metavariableName);

    if (judgement !== null) {
      const declaration = judgement.getDeclaration();

      declarations.push(declaration);

      metavariableVerified = true;
    } else {
      localContext.trace(`There is no judgement for the '${metavariableString}' metavariable.`, metavariableNode);
    }
  }

  if (metavariableVerified) {
    localContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}