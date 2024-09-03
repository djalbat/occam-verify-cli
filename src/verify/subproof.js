"use strict";

import LocalContext from "../context/local";
import verifySuppositions from "../verify/suppositions";
import verifySubDerivation from "../verify/subDerivation";

import { nodeQuery, nodesQuery } from "../utilities/query";

const suppositionNodesQuery = nodesQuery("/subproof/supposition"),
      subDerivationNodeQuery = nodeQuery("/subproof/subDerivation");

export default function verifySubproof(subproofNode, localContext) {
  let subproofVerified = false;

  localContext = LocalContext.fromLocalContext(localContext);  ///

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

