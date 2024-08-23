"use strict";

import MetaLemma from "../metaLemma";
import verifyLabels from "../verify/labels";
import verifyMetaproof from "../verify/metaproof";
import LocalMetaContext from "../context/localMeta";
import verifyMetaConsequent from "../verify/metaConsequent";
import verifyMetaSuppositions from "../verify/metaSuppositions";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelsNodeQuery = nodeQuery("/metaLemma/labels!"),
      metaproofNodeQuery = nodeQuery("/metaLemma/metaproof!"),
      metaConsequentNodeQuery = nodeQuery("/metaLemma/metaConsequent!"),
      metaSuppositionsNodeQuery = nodesQuery("/metaLemma/metaSupposition");

export default function verifyMetaLemma(metaLemmaNode, fileContext) {
  let metaLemmaVerified = false;

  const labelsNode = labelsNodeQuery(metaLemmaNode),
        labelsString = fileContext.nodeAsString(labelsNode),
        localMetaContext = LocalMetaContext.fromFileContext(fileContext);

  (labelsString === EMPTY_STRING) ?
    fileContext.trace(`Verifying a meta-lLemma...`, metaLemmaNode) :
      fileContext.trace(`Verifying the '${labelsString}' meta-lLemma...`, metaLemmaNode);

  const labels = [],
        labelsVerified = verifyLabels(labelsNode, labels, fileContext);

  if (labelsVerified) {
    const metaSuppositions = [],
          metaSuppositionNodes = metaSuppositionsNodeQuery(metaLemmaNode),
          metaSuppositionsVerified = verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, localMetaContext);

    if (metaSuppositionsVerified) {
      const metaConsequents = [],
            metaConsequentNode = metaConsequentNodeQuery(metaLemmaNode),
            metaConsequentVerified = verifyMetaConsequent(metaConsequentNode, metaConsequents, localMetaContext);

      if (metaConsequentVerified) {
        const metaproofNode = metaproofNodeQuery(metaLemmaNode),
              firstMetaConsequent = first(metaConsequents),
              metaConsequent = firstMetaConsequent, ///
              metaproofVerified = verifyMetaproof(metaproofNode, metaConsequent, localMetaContext);

        if (metaproofVerified) {
          const metaLemma = MetaLemma.fromLabelsMetaSuppositionsMetaConsequentAndLocalMetaContext(labels, metaSuppositions, metaConsequent, localMetaContext);

          fileContext.addMetaLemma(metaLemma);

          metaLemmaVerified = true;
        }
      }
    }
  }

  if (metaLemmaVerified) {
    (labelsString === EMPTY_STRING) ?
      fileContext.debug(`...verified the meta-lemma.`, metaLemmaNode) :
        fileContext.debug(`...verified the '${labelsString}' meta-lemma.`, metaLemmaNode);
  }

  return metaLemmaVerified;
}
