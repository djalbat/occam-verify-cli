"use strict";

import verifyTermGivenType from "../verify/termGivenType";

export default function unifyTermWithType(termNode, typeNode, localContext) {
  let termUnifiedWithType;

  const type = localContext.findTypeByTypeNode(typeNode),
        termVerifiedGivenType = verifyTermGivenType(termNode, type, localContext);

  termUnifiedWithType = termVerifiedGivenType;  ///

  return termUnifiedWithType;
}
