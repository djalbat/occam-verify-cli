"use strict";

import Frame from "../frame";
import verifyDeclaration from "../verify/declaration";

import { nodesQuery } from "../utilities/query";

const declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable");

export default function verifyFrame(frameNode, frames, derived, localMetaContext) {
  let frameVerified;

  const frameString = localMetaContext.nodeAsString(frameNode);

  localMetaContext.trace(`Verifying the '${frameString}' frame...`, frameNode);

  const declarations = [],
        declarationNodes = declarationNodesQuery(frameNode),
        declarationsVerified = declarationNodes.every((declarationNode) => {
          const declarationVerified = verifyDeclaration(declarationNode, declarations, localMetaContext);

          return declarationVerified;
        });

  if (declarationsVerified) {
    const metavariableNodes = metavariableNodesQuery(frameNode),
          metavariablesVerified = metavariableNodes.every((metavariableNode) => {
            const metavariableVerified = verifyMetavariable(metavariableNode, declarations, localMetaContext);

            return metavariableVerified;
          });

    if (metavariablesVerified) {
      const frame = Frame.fromDeclarations(declarations);

      frames.push(frame);

      frameVerified = true;
    }
  }

  if (frameVerified) {
    localMetaContext.debug(`...verified the '${frameString}' frame.`, frameNode);
  }

  return frameVerified;
}

function verifyMetavariable(metavariableNode, declarations, localMetaContext) {
  let metavariableVerified = false;

  debugger

  return metavariableVerified;
}