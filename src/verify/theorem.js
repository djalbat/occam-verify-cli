"use strict";

import Theorem from "../theorem";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifySupposition from "./supposition";
import verifyConsequence from "./consequence";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";
import proof from "../context/proof";

const proofNodeQuery = nodeQuery("/theorem/proof!"),
      labelNodesQuery = nodesQuery("/theorem/label"),
      consequenceNodeQuery = nodeQuery("/theorem/consequence!"),
      suppositionsNodeQuery = nodesQuery("/theorem/supposition");

export default function verifyTheorem(theoremNode, fileContext) {
  let theoremVerified = false;

  const labelNodes = labelNodesQuery(theoremNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' theorem...`, theoremNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(theoremNode),
          suppositionsVerified = suppositionNodes.every((suppositionNode) => {
            const suppositionVerified = verifySupposition(suppositionNode, suppositions, proofContext);

            if (suppositionVerified) {
              return true;
            }
          });

    if (suppositionsVerified) {
      const consequences = [],
            consequenceNode = consequenceNodeQuery(theoremNode),
            consequenceVerified = verifyConsequence(consequenceNode, consequences, proofContext);

      if (consequenceVerified) {
        const proofNode = proofNodeQuery(theoremNode),
              firstConsequence = first(consequences),
              consequence = firstConsequence, ///
              proofVerified = verifyProof(proofNode, consequence, proofContext);

        if (proofVerified) {
          const theorem = Theorem.fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext);

          fileContext.addTheorem(theorem);

          theoremVerified = true;
        }
      }
    }
  }

  if (theoremVerified) {
    fileContext.info(`Verified the '${labelsString}' theorem.`, theoremNode);
  }

  return theoremVerified;
}
