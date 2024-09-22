"use strict";

import Frame from "../frame";
import frameMetaType from "../metaType/frame";
import verifyDeclaration from "../verify/declaration";
import verifyMetavariableGivenMetaType from "./metavariableGivenMetaType";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const declarationNodeQuery = nodeQuery("/frame/declaration!"),
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

    const declarationNode = declarationNodeQuery(frameNode);

    if (declarationNode !== null) {

    }
    const declarationNodesLength = declarationNodes.length;

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
              metavariableVerified = verifyMetavariableGivenMetaType(metavariableNode, metaType, metavariables, localContext);

        if (metavariableVerified) {
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
