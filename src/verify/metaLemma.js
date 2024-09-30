"use strict";

import MetaLemma from "../metaLemma";
import verifyProof from "../verify/proof";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";
import verifyConsequent from "../verify/consequent";
import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/metaLemma/proof!"),
      labelNodesQuery = nodesQuery("/metaLemma/label"),
      consequentNodeQuery = nodeQuery("/metaLemma/consequent!"),
      suppositionsNodeQuery = nodesQuery("/metaLemma/supposition");

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
    const localContext = LocalContext.fromFileContext(fileContext),
          suppositions = [],
          suppositionNodes = suppositionsNodeQuery(metaLemmaNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(metaLemmaNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(metaLemmaNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              statementNode = consequent.getStatementNode(),
              substitutions = Substitutions.fromNothing(),
              proofVerified = verifyProof(proofNode, statementNode, substitutions, localContext);

        if (proofVerified) {
          const metaLemma = MetaLemma.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext);

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
