"use strict";

import verifyConsequent from "../verify/consequent";
import verifyAntecedentOrAntecedents from "../verify/antecedentOrAntecedents";

import { nodeQuery } from "../utilities/query";

const consequentNodeQuery = nodeQuery("/conditionalIndicative/consequent!"),
      antecedentOrAntecedentsNodeQuery = nodeQuery("/conditionalIndicative/antecedent|antecedents!");

export default function verifyConditionalIndicative(conditionalIndicativeNode, antecedents, consequents, proofContext) {
  let conditionalIndicativeVerified = false;

  proofContext.begin(conditionalIndicativeNode);

  const consequentNode = consequentNodeQuery(conditionalIndicativeNode),
        antecedentOrAntecedentsNode = antecedentOrAntecedentsNodeQuery(conditionalIndicativeNode),
        antecedentOrAntecedentsVerified = verifyAntecedentOrAntecedents(antecedentOrAntecedentsNode, antecedents, proofContext);

  if (antecedentOrAntecedentsVerified) {
    const consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

    conditionalIndicativeVerified = consequentVerified;  ///
  }

  conditionalIndicativeVerified ?
    proofContext.complete(conditionalIndicativeNode) :
      proofContext.halt(conditionalIndicativeNode);

  return conditionalIndicativeVerified;
}
