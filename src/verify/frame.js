"use strict";

import Frame from "../frame";
import frameMetaType from "../metaType/frame";
import verifyDeclaration from "../verify/declaration";
import verifyMetavariableGivenMetaType from "./metavariableGivenMetaType";

import { first } from "../utilities/array";
import { nodesQuery } from "../utilities/query";

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
      const metavariableNodes = metavariableNodesQuery(frameNode),
            metavariableNodesLength = metavariableNodes.length;

      if (metavariableNodesLength === 1) {
        const firstMetavariableNode = first(metavariableNodes),
              metavariableNode = firstMetavariableNode,
              metaType = frameMetaType, ///
              metavariables = [],
              metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, metavariables, localContext);

        if (metavariableVerifiedGivenMetaType) {
          const firstMetavariable = first(metavariables),
                metavariable = firstMetavariable,

          frame = Frame.fromMetavariable(metavariable);

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
        metavariables = [],
        metavariableVerifiedGivenMetaType = verifyMetavariableGivenMetaType(metavariableNode, metaType, metavariables, localContext);

  if (metavariableVerifiedGivenMetaType) {
    const firstMetavariable = first(metavariables),
          metavariable = firstMetavariable, ///
          metavariableName = metavariable.getName(),
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