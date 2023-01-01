"use strict";

import verifyConsequent from "../verify/consequent";

import { nodeQuery } from "../utilities/query";

const consequentNodeQuery = nodeQuery("/unconditionalIndicative/consequent!");

export default function verifyUnconditionalIndicative(conditionalIndicativeNode, consequents, proofContext) {
  let unconditionalIndicativeVerified;

  proofContext.begin(conditionalIndicativeNode);

  const consequentNode = consequentNodeQuery(conditionalIndicativeNode),
        consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

  unconditionalIndicativeVerified = consequentVerified;  ///

  unconditionalIndicativeVerified ?
    proofContext.complete(conditionalIndicativeNode) :
      proofContext.halt(conditionalIndicativeNode);

  return unconditionalIndicativeVerified;
}
