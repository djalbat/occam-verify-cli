"use strict";

export default function verifyError(errorNode, fileContext) {
  let errorVerified = false;

  const errorString = fileContext.nodeAsString(errorNode)

  fileContext.debug(`The '${errorString}' cannot be verified.`, errorNode);

  return errorVerified;
}
