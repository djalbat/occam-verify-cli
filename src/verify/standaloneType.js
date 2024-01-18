"use strict";

import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyStandaloneType(typeNode, types, context, verifyAhead) {
  let standaloneTypeVerified = false;

  const typeString = context.nodeAsString(typeNode);

  context.trace(`Verifying the standalone '${typeString}' type...`, typeNode);

  const typeName = typeNameFromTypeNode(typeNode),
        type = context.findTypeByTypeName(typeName);

  if (type !== null) {
    let verifiedAhead;

    types.push(type)

    verifiedAhead = verifyAhead();

    if (!verifiedAhead) {
      types.pop();
    }

    standaloneTypeVerified = verifiedAhead; ///
  }

  if (standaloneTypeVerified) {
    context.debug(`...verified the standalone '${typeString}' type.`, typeNode);
  }

  return standaloneTypeVerified;
}
