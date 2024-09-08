"use strict";

export default function verifyType(typeNode, localContext, verifyAhead) {
  let typeVerified = false;

  const typeString = localContext.nodeAsString(typeNode);

  localContext.trace(`Verifying the '${typeString}' type...`, typeNode);

  const typePresent = localContext.isTypePresentByTypeNode(typeNode);

  if (typePresent) {
    const verifiedAhead = verifyAhead();

    typeVerified = verifiedAhead; ///
  }

  if (typeVerified) {
    localContext.debug(`...verified the '${typeString}' type.`, typeNode);
  }

  return typeVerified;
}
