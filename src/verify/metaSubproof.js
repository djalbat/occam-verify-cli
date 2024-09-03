"use strict";

import LocalContext from "../context/local";
import verifyMetaSuppositions from "../verify/metaSuppositions";
import verifyMetaSubDerivation from "../verify/metaSubDerivation";

import { nodeQuery, nodesQuery } from "../utilities/query";

const metaSuppositionNodesQuery = nodesQuery("/metaSubproof/metaSupposition"),
      metaSubDerivationNodeQuery = nodeQuery("/metaSubproof/metaSubDerivation");

export default function verifyMetaSubproof(metaSubproofNode, substitutions, localContext) {
  let metaSubproofVerified = false;

  localContext = LocalContext.fromLocalContext(localContext); ///

  const metaSuppositions = [],
        metaSuppositionNodes = metaSuppositionNodesQuery(metaSubproofNode),
        metaSuppositionsVerified = verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, substitutions, localContext);

  if (metaSuppositionsVerified) {
    const metaSubDerivationNode = metaSubDerivationNodeQuery(metaSubproofNode),
          metaSubDerivationVerified = verifyMetaSubDerivation(metaSubDerivationNode, substitutions, localContext);

    if (metaSubDerivationVerified) {
      metaSubproofVerified = true;
    }
  }

  return metaSubproofVerified;
}

