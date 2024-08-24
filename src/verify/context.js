"use strict";

import verifyDeclaration from "../verify/declaration";

import { nodesQuery } from "../utilities/query";

const declarationNodesQuery = nodesQuery("/context/declaration");

export default function verifyContext(contextNode, derived, localMetaContext) {
  let contextVerified;

  const contextString = localMetaContext.nodeAsString(contextNode);

  localMetaContext.trace(`Verifying the '${contextString}' context...`, contextNode);

  const declarationNodes = declarationNodesQuery(contextNode),
        declarationsVerified = declarationNodes.every((declarationNode) => {
          const declarationVerified = verifyDeclaration(declarationNode, derived, localMetaContext);

          return declarationVerified;
        });

  contextVerified = declarationsVerified; ///

  if (contextVerified) {
    localMetaContext.debug(`...verified the '${contextString}' context.`, contextNode);
  }

  return contextVerified;
}