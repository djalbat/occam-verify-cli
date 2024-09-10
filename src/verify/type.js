"use strict";

export default function verifyType(typeNode, localContext) {
  let typeVerified;

  const typeString = localContext.nodeAsString(typeNode);

  localContext.trace(`Verifying the '${typeString}' type...`, typeNode);

  const typePresent = localContext.isTypePresentByTypeNode(typeNode);

  typeVerified = typePresent; ///

  if (typeVerified) {
    localContext.debug(`...verified the '${typeString}' type.`, typeNode);
  }

  return typeVerified;
}
