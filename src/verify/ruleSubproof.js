"use strict";

import verifyPremises from "../verify/premises";
import LocalMetaContext from "../context/localMeta";
import verifyRuleSubDerivation from "../verify/ruleSubDerivation";

import { nodeQuery, nodesQuery } from "../utilities/query";

const premiseNodesQuery = nodesQuery("/ruleSubproof/premise"),
      ruleSubDerivationNodeQuery = nodeQuery("/ruleSubproof/ruleSubDerivation");

export default function verifyRuleSubproof(ruleSubproofNode, localMetaContext) {
  let ruleSubproofVerified = false;

  localMetaContext = LocalMetaContext.fromLocalMetaContext(localMetaContext); ///

  const premises = [],
        premiseNodes = premiseNodesQuery(ruleSubproofNode),
        premisesVerified = verifyPremises(premiseNodes, premises, localMetaContext);

  if (premisesVerified) {
    const ruleSubDerivationNode = ruleSubDerivationNodeQuery(ruleSubproofNode),
          ruleSubDerivationVerified = verifyRuleSubDerivation(ruleSubDerivationNode, localMetaContext);

    if (ruleSubDerivationVerified) {
      ruleSubproofVerified = true;
    }
  }

  return ruleSubproofVerified;
}

