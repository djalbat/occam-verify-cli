"use strict";

import verifyConsequent from "../verify/consequent";
import verifyAntecedent from "../verify/antecedent";

import { nodeQuery, nodesQuery } from "../utilities/query";

const consequentNodeQuery = nodeQuery("/conditionalIndicative/consequent!"),
      antecedentsNodeQuery = nodesQuery("/conditionalIndicative/antecedent");

export default function verifyConditionalIndicative(conditionalIndicativeNode, antecedents, consequents, proofContext) {
  let conditionalIndicativeVerified = false;

  proofContext.begin(conditionalIndicativeNode);

  const consequentNode = consequentNodeQuery(conditionalIndicativeNode),
        antecedentNodes = antecedentsNodeQuery(conditionalIndicativeNode),
        antecedentsVerified = antecedentNodes.every((antecedentNode) => {
          const antecedentVerified = verifyAntecedent(antecedentNode, antecedents, proofContext);

          if (antecedentVerified) {
            return true;
          }
        });

  if (antecedentsVerified) {
    const consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

    conditionalIndicativeVerified = consequentVerified;  ///
  }

  conditionalIndicativeVerified ?
    proofContext.complete(conditionalIndicativeNode) :
      proofContext.halt(conditionalIndicativeNode);

  return conditionalIndicativeVerified;
}
