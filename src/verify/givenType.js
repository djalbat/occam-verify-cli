"use strict";

import { typeNameFromTypeNode } from "../utilities/query";

export default function verifyGivenType(typeNode, types, context, verifyAhead) {
  let givenTypeVerified = false;

  const typeString = context.nodeAsString(typeNode);

  context.trace(`Verifying the given '${typeString}' type...`, typeNode);

  const typeName = typeNameFromTypeNode(typeNode),
        type = context.findTypeByTypeName(typeName);

  if (type !== null) {
    let verifiedAhead;

    types.push(type)

    verifiedAhead = verifyAhead();

    if (!verifiedAhead) {
      types.pop();
    }

    givenTypeVerified = verifiedAhead; ///
  }

  if (givenTypeVerified) {
    context.debug(`...verified the given '${typeString}' type.`, typeNode);
  }

  return givenTypeVerified;
}
