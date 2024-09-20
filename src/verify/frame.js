"use strict";

import Frame from "../frame";
import frameMetaType from "../metaType/frame";
import verifyDeclaration from "../verify/declaration";
import verifyMetavariableGivenMetaType from "../verify/metavariableGivenMetaType";

import { nodesQuery } from "../utilities/query";
import { first, push } from "../utilities/array";

const declarationNodesQuery = nodesQuery("/frame/declaration"),
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

    const declarationNodes = declarationNodesQuery(frameNode),
          declarationNodesLength = declarationNodes.length;

    if (declarationNodesLength === 1) {
      const metavariableNodes = metavariableNodesQuery(frameNode),
            metavariableNodesLength = metavariableNodes.length;

      if (metavariableNodesLength === 0) {
        const firstDeclarationNode = first(declarationNodes),
              declarationNode = firstDeclarationNode, ///
              declarations = [],
              declarationVerified = verifyDeclaration(declarationNode, declarations, stated, localContext);

        if (declarationVerified) {
          const frame = Frame.fromDeclarations(declarations);

          frames.push(frame);

          derivedFrameVerified = true; ///
        }
      } else {
        localContext.debug(`The '${frameString}' derived frame must no spread metavariables.`, frameNode);
      }
    } else {
      localContext.debug(`The '${frameString}' derived frame must have one and only one declaration.`, frameNode);
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

    const declarations = [],
          declarationNodes = declarationNodesQuery(frameNode),
          declarationsVerified = declarationNodes.every((declarationNode) => {
            const declarationVerified = verifyDeclaration(declarationNode, declarations, stated, localContext);

            return declarationVerified;
          });

          if (declarationsVerified) {
            const metavariableNodes = metavariableNodesQuery(frameNode),
                  metavariablesVerified = metavariableNodes.every((metavariableNode) => {
                    const metavariableVerified = verifyMetavariable(metavariableNode, declarations, localContext);

                    return metavariableVerified;
                  });

            if (metavariablesVerified) {
              const frame = Frame.fromDeclarations(declarations);

              frames.push(frame);

              statedFrameVerified = true;
            }
          }

    if (statedFrameVerified) {
      localContext.debug(`...verified the '${frameString}' stated frame.`, frameNode);
    }
  }

  return statedFrameVerified;
}

function verifyMetavariable(metavariableNode, declarations, localContext) {
  let metavariableVerified = false;

  const metaType = frameMetaType, ///
        metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, localContext);

  if (metavariableVerifiedGivenMetaType) {
    const judgement = localContext.findJudgementByMetavariableNode(metavariableNode);

    if (judgement !== null) {
      const judgementDeclarations = judgement.getDeclarations();

      push(declarations, judgementDeclarations);

      metavariableVerified = true;
    }
  }

  return metavariableVerified;
}