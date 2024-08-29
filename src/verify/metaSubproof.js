"use strict";

import LocalMetaContext from "../context/localMeta";
import verifyMetaSuppositions from "../verify/metaSuppositions";
import verifyMetaSubDerivation from "../verify/metaSubDerivation";

import { nodeQuery, nodesQuery } from "../utilities/query";

const suppositionNodesQuery = nodesQuery("/metaSubproof/supposition"),
      metaSubDerivationNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation");

export default function verifyMetaSubproof(metaSubproofNode, localMetaContext) {
  let metaSubproofVerified = false;

  localMetaContext = LocalMetaContext.fromLocalMetaContext(localMetaContext); ///

  const metaSuppositions = [],
        suppositionNodes = suppositionNodesQuery(metaSubproofNode),
        metaSuppositionsVerified = verifyMetaSuppositions(suppositionNodes, metaSuppositions, localMetaContext);

  if (metaSuppositionsVerified) {
    const metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode),
          metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, localMetaContext);

    if (metaSubDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}

