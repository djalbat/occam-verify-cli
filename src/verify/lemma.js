"use strict";

import Lemma from "../lemma";
// import verifyProof from "../verify/proof";
import LocalContext from "../context/local";
import Substitutions from "../substitutions";
import verifyConsequent from "../verify/consequent";
// import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { EMPTY_STRING } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/lemma/proof!"),
      labelNodesQuery = nodesQuery("/lemma/label"),
      consequentNodeQuery = nodeQuery("/lemma/consequent!"),
      suppositionsNodeQuery = nodesQuery("/lemma/supposition");

export default function verifyLemma(lemmaNode, fileContext) {
  let lemmaVerified = false;

  const labelNodes = labelNodesQuery(lemmaNode),
        labelsString = fileContext.nodesAsString(labelNodes);

  (labelsString === EMPTY_STRING) ?
    fileContext.trace(`Verifying a lemma...`, lemmaNode) :
      fileContext.trace(`Verifying the '${labelsString}' lemma...`, lemmaNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const localContext = LocalContext.fromFileContext(fileContext),
          suppositions = [],
          suppositionNodes = suppositionsNodeQuery(lemmaNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(lemmaNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(lemmaNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              statementNode = consequent.getStatementNode(),
              substitutions = Substitutions.fromNothing(),
              proofVerified = verifyProof(proofNode, statementNode, substitutions, localContext);

        if (proofVerified) {
          const substitutions = Substitutions.fromNothing(),
                lemma = Lemma.fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(labels, suppositions, consequent, substitutions, fileContext);

          fileContext.addLemma(lemma);

          lemmaVerified = true;
        }
      }
    }
  }

  if (lemmaVerified) {
    (labelsString === EMPTY_STRING) ?
      fileContext.debug(`...verified the lemma.`, lemmaNode) :
        fileContext.debug(`...verified the '${labelsString}' lemma.`, lemmaNode);
  }

  return lemmaVerified;
}
