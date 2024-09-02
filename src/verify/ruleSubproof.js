"use strict";

import verifyPremises from "../verify/premises";
import MetaLevelLocalContext from "../context/local/metaLevel";
import verifyRuleSubDerivation from "../verify/ruleSubDerivation";

import { nodeQuery, nodesQuery } from "../utilities/query";

const premiseNodesQuery = nodesQuery("/ruleSubproof/premise"),
      ruleSubDerivationNodeQuery = nodeQuery("/ruleSubproof/ruleSubDerivation");

export default function verifyRuleSubproof(ruleSubproofNode, localContext) {
  let ruleSubproofVerified = false;

  const metaLevelLocalContext = MetaLevelLocalContext.fromLocalContext(localContext);

  localContext = metaLevelLocalContext; ///

  const premises = [],
        premiseNodes = premiseNodesQuery(ruleSubproofNode),
        premisesVerified = verifyPremises(premiseNodes, premises, localContext);

  if (premisesVerified) {
    const ruleSubDerivationNode = ruleSubDerivationNodeQuery(ruleSubproofNode),
          ruleSubDerivationVerified = verifyRuleSubDerivation(ruleSubDerivationNode, localContext);

    if (ruleSubDerivationVerified) {
      ruleSubproofVerified = true;
    }
  }

  return ruleSubproofVerified;
}

