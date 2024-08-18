"use strict";

export default function verifyGivenType(typeNode, types, localContext, verifyAhead) {
  let givenTypeVerified = false;

  const typeString = localContext.nodeAsString(typeNode);

  localContext.trace(`Verifying the given '${typeString}' type...`, typeNode);

  const type = localContext.findTypeByTypeNode(typeNode);

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
    localContext.debug(`...verified the given '${typeString}' type.`, typeNode);
  }

  return givenTypeVerified;
}
