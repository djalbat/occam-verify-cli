"use strict";

import verifyDeclaration from "../verify/declaration";

import { nodesQuery } from "../utilities/query";

const declarationNodesQuery = nodesQuery("/frame/declaration");

export default function verifyFrame(frameNode, derived, localMetaContext) {
  let frameVerified;

  const frameString = localMetaContext.nodeAsString(frameNode);

  localMetaContext.trace(`Verifying the '${frameString}' frame...`, frameNode);

  const declarationNodes = declarationNodesQuery(frameNode),
        declarationsVerified = declarationNodes.every((declarationNode) => {
          const declarationVerified = verifyDeclaration(declarationNode, derived, localMetaContext);

          return declarationVerified;
        });

  frameVerified = declarationsVerified; ///

  if (frameVerified) {
    localMetaContext.debug(`...verified the '${frameString}' frame.`, frameNode);
  }

  return frameVerified;
}