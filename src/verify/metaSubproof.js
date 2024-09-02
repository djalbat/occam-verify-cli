"use strict";

import MetaLevelLocalContext from "../context/local/metaLevel";
import verifyMetaSuppositions from "../verify/metaSuppositions";
import verifyMetaSubDerivation from "../verify/metaSubDerivation";

import { nodeQuery, nodesQuery } from "../utilities/query";

const suppositionNodesQuery = nodesQuery("/metaSubproof/supposition"),
      metaSubDerivationNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation");

export default function verifyMetaSubproof(metaSubproofNode, substitutions, localContext) {
  let metaSubproofVerified = false;

  const metaLevelLocalContext = MetaLevelLocalContext.fromLocalContext(localContext);

  localContext = metaLevelLocalContext; ///

  const metaSuppositions = [],
        suppositionNodes = suppositionNodesQuery(metaSubproofNode),
        metaSuppositionsVerified = verifyMetaSuppositions(suppositionNodes, metaSuppositions, localContext);

  if (metaSuppositionsVerified) {
    const metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode),
          metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, substitutions, localContext);

    if (metaSubDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}

