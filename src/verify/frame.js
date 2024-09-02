"use strict";

import Frame from "../frame";
import frameMetaType from "../metaType/frame";
import verifyDeclaration from "../verify/declaration";

import { push } from "../utilities/array";
import { nodesQuery } from "../utilities/query";

const declarationNodesQuery = nodesQuery("/frame/declaration"),
      metavariableNodesQuery = nodesQuery("/frame/metavariable");

export default function verifyFrame(frameNode, frames, assignments, derived, localContext) {
  let frameVerified;

  const frameString = localContext.nodeAsString(frameNode);

  localContext.trace(`Verifying the '${frameString}' frame...`, frameNode);

  const declarations = [],
        declarationNodes = declarationNodesQuery(frameNode),
        declarationsVerified = declarationNodes.every((declarationNode) => {
          const declarationVerified = verifyDeclaration(declarationNode, declarations, localContext);

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

      frameVerified = true;
    }
  }

  if (frameVerified) {
    localContext.debug(`...verified the '${frameString}' frame.`, frameNode);
  }

  return frameVerified;
}

function verifyMetavariable(metavariableNode, declarations, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode, localContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === frameMetaType) {
      const frameAssertion = localContext.findFrameAssertionByMetavariableNode(metavariableNode);

      if (frameAssertion !== null) {
        const frameAssertionDeclarations = frameAssertion.getDeclarations();

        push(declarations, frameAssertionDeclarations);

        metavariableVerified = true;
      } else {
        localContext.debug(`There is no frame assertion for the '${metavariableString}' metavariable.`, metavariableNode);
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