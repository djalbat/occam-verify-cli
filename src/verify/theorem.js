"use strict";

import Theorem from "../theorem";
import verifyProof from "../verify/proof";
import LocalContext from "../context/local";
import verifyLabels from "../verify/labels";
import verifyConsequent from "../verify/consequent";
import verifySuppositions from "../verify/suppositions";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/theorem/proof!"),
      labelsNodeQuery = nodeQuery("/theorem/labels!"),
      consequentNodeQuery = nodeQuery("/theorem/consequent!"),
      suppositionsNodeQuery = nodesQuery("/theorem/supposition");

export default function verifyTheorem(theoremNode, fileContext) {
  let theoremVerified = false;

  const labelsNode = labelsNodeQuery(theoremNode),
        labelsString = fileContext.nodeAsString(labelsNode),
        localContext = LocalContext.fromFileContext(fileContext);

  fileContext.trace(`Verifying the '${labelsString}' theorem...`, theoremNode);

  const labels = [],
        labelsVerified = verifyLabels(labelsNode, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(theoremNode),
          suppositionsVerified = verifySuppositions(suppositionNodes, suppositions, localContext);

    if (suppositionsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(theoremNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, localContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(theoremNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              proofVerified = verifyProof(proofNode, consequent, localContext);

        if (proofVerified) {
          const theorem = Theorem.fromLabelsSuppositionsConsequentAndLocalContext(labels, suppositions, consequent, localContext);

          fileContext.addTheorem(theorem);

          theoremVerified = true;
        }
      }
    }
  }

  if (theoremVerified) {
    fileContext.debug(`...verified the '${labelsString}' theorem.`, theoremNode);
  }

  return theoremVerified;
}
