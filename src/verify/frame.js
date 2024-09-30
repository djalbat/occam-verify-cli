"use strict";

import shim from "../shim";
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

function verifyFrame(frameNode, frames, stated, localContext) {
  let frameVerified;

  const frameString = localContext.nodeAsString(frameNode);

  localContext.trace(`Verifying the '${frameString}' frame...`);

  frameVerified = verifyFrameFunctions.some((verifyFrameFunction) => {
    const frameVerified = verifyFrameFunction(frameNode, frames, stated, localContext);

    if (frameVerified) {
      return true;
    }
  });

  if (frameVerified) {
    localContext.debug(`...verified the '${frameString}' frame.`);
  }

  return frameVerified;
}

Object.assign(shim, {
  verifyFrame
});

export default verifyFrame;

function verifyDerivedFrame(frameNode, frames, stated, localContext) {
  let derivedFrameVerified;

  if (!stated) {
    const frameString = localContext.nodeAsString(frameNode);

    localContext.trace(`Verifying the '${frameString}' derived frame...`);

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
      localContext.debug(`...verified the '${frameString}' derived frame.`);
    }
  }

  return derivedFrameVerified;
}

function verifyStatedFrame(frameNode, frames, stated, localContext) {
  let statedFrameVerified;

  if (stated) {
    const frameString = localContext.nodeAsString(frameNode);

    localContext.trace(`Verifying the '${frameString}' stated frame...`);

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
        localContext.trace(`The '${frameString}' stated frame cannot have more than one metavariable.`);
      }
    } else {
      localContext.trace(`The '${frameString}' stated frame cannot have declarations.`);
    }

    if (statedFrameVerified) {
      localContext.debug(`...verified the '${frameString}' stated frame.`);
    }
  }

  return statedFrameVerified;
}

function verifyMetavariable(metavariableNode, declarations, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`);

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
      localContext.trace(`There is no judgement for the '${metavariableString}' metavariable.`);
    }
  }

  if (metavariableVerified) {
    localContext.debug(`...verified the '${metavariableString}' metavariable.`);
  }

  return metavariableVerified;
}