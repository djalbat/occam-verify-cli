"use strict";

import Frame from "../frame";
import frameMetaType from "../metaType/frame";
import verifyDeclaration from "../verify/declaration";

import { push } from "../utilities/array";
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

  const metavariableString = localMetaContext.nodeAsString(metavariableNode);

  localMetaContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariable = localMetaContext.findMetavariableByMetavariableNode(metavariableNode, localMetaContext);

  if (metavariable !== null) {
    const metaType = metavariable.getMetaType();

    if (metaType === frameMetaType) {
      const judgement = localMetaContext.findJudgementByMetavariableNode(metavariableNode);

      if (judgement !== null) {
        const judgementDeclarations = judgement.getDeclarations();

        push(declarations, judgementDeclarations);

        metavariableVerified = true;
      } else {
        localMetaContext.debug(`There is no judgement for the '${metavariableString}' metavariable.`, metavariableNode);
      }
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