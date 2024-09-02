"use strict";

import verifySuppositions from "../verify/suppositions";
import verifySubDerivation from "../verify/subDerivation";
import IntrinsicLevelLocalContext from "../context/local/intrinsicLevel";

import { nodeQuery, nodesQuery } from "../utilities/query";

const suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

export default function verifySubproof(subproofNode, localContext) {
  let subproofVerified = false;

  const intrinsicLevelLocalContext = IntrinsicLevelLocalContext.fromLocalContext(localContext); ///

  localContext = intrinsicLevelLocalContext;  ///

  const suppositions = [],
        suppositionNodes = suppositionNodesQuery(subproofNode),
        suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

  if (suppositionsVerified) {
    const subDerivationNode = subDerivationNodeQuery(subproofNode),
          subDerivationVerified = verifySubDerivation(subDerivationNode, localContext);

    if (subDerivationVerified) {
      subproofVerified = true;
    }
  }

  return subproofVerified;
}

