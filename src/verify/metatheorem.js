"use strict";

import Metatheorem from "../metatheorem";
import verifyLabels from "../verify/labels";
import verifyMetaproof from "../verify/metaproof";
import LocalMetaContext from "../context/localMeta";
import verifyMetaConsequent from "../verify/metaConsequent";
import verifyMetaSuppositions from "../verify/metaSuppositions";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/metatheorem//reference/label"),
      metaproofNodeQuery = nodeQuery("/metatheorem/metaproof!"),
      metaConsequentNodeQuery = nodeQuery("/metatheorem/metaConsequent!"),
      metaSuppositionsNodeQuery = nodesQuery("/metatheorem/metaSupposition");

export default function verifyMetatheorem(metatheoremNode, fileContext) {
  let metatheoremVerified = false;

  const labelNodes = labelNodesQuery(metatheoremNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        localMetaContext = LocalMetaContext.fromFileContext(fileContext);

  fileContext.trace(`Verifying the '${labelsString}' metatheorem...`, metatheoremNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const metaSuppositions = [],
          metaSuppositionNodes = metaSuppositionsNodeQuery(metatheoremNode),
          metaSuppositionsVerified = verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, localMetaContext);

    if (metaSuppositionsVerified) {
      const metaConsequents = [],
            metaConsequentNode = metaConsequentNodeQuery(metatheoremNode),
            metaConsequentVerified = verifyMetaConsequent(metaConsequentNode, metaConsequents, localMetaContext);

      if (metaConsequentVerified) {
        const metaproofNode = metaproofNodeQuery(metatheoremNode),
              firstMetaConsequent = first(metaConsequents),
              metaConsequent = firstMetaConsequent, ///
              metaproofVerified = verifyMetaproof(metaproofNode, metaConsequent, localMetaContext);

        if (metaproofVerified) {
          const metatheorem = Metatheorem.fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(labels, metaSuppositions, metaConsequent, localMetaContext);

          fileContext.addMetatheorem(metatheorem);

          metatheoremVerified = true;
        }
      }
    }
  }

  if (metatheoremVerified) {
    fileContext.debug(`...verified the '${labelsString}' metatheorem.`, metatheoremNode);
  }

  return metatheoremVerified;
}
