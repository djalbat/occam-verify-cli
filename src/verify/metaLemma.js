"use strict";

import MetaLemma from "../metaLemma";
import verifyLabels from "../verify/labels";
import verifyMetaproof from "../verify/metaproof";
import verifyMetaConsequent from "../verify/metaConsequent";
import MetaLevelLocalContext from "../context/local/metaLevel";
import verifyMetaSuppositions from "../verify/metaSuppositions";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/metaLemma/label"),
      metaproofNodeQuery = nodeQuery("/metaLemma/metaproof!"),
      metaConsequentNodeQuery = nodeQuery("/metaLemma/metaConsequent!"),
      metaSuppositionsNodeQuery = nodesQuery("/metaLemma/metaSupposition");

export default function verifyMetaLemma(metaLemmaNode, fileContext) {
  let metaLemmaVerified = false;

  const labelNodes = labelNodesQuery(metaLemmaNode),
        labelsString = fileContext.nodesAsString(labelNodes);

  (labelsString === EMPTY_STRING) ?
    fileContext.trace(`Verifying a meta-lLemma...`, metaLemmaNode) :
      fileContext.trace(`Verifying the '${labelsString}' meta-lLemma...`, metaLemmaNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const metaLevelLocalContext = MetaLevelLocalContext.fromFileContext(fileContext),
          localContext = metaLevelLocalContext, ///
          substitutions = [],
          metaSuppositions = [],
          metaSuppositionNodes = metaSuppositionsNodeQuery(metaLemmaNode),
          metaSuppositionsVerified = verifyMetaSuppositions(metaSuppositionNodes, metaSuppositions, substitutions, localContext);

    if (metaSuppositionsVerified) {
      const metaConsequents = [],
            metaConsequentNode = metaConsequentNodeQuery(metaLemmaNode),
            metaConsequentVerified = verifyMetaConsequent(metaConsequentNode, metaConsequents, substitutions, localContext);

      if (metaConsequentVerified) {
        const metaproofNode = metaproofNodeQuery(metaLemmaNode),
              firstMetaConsequent = first(metaConsequents),
              metaConsequent = firstMetaConsequent, ///
              metastatementNode = metaConsequent.getMetastatementNode(),
              metaproofVerified = verifyMetaproof(metaproofNode, metastatementNode, substitutions, localContext);

        if (metaproofVerified) {
          const metaLemma = MetaLemma.fromLabelsMetaSuppositionsMetaConsequentSubstitutionsAndFileContext(labels, metaSuppositions, metaConsequent, substitutions, fileContext);

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
