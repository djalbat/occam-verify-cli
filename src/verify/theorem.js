"use strict";

import Theorem from "../theorem";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifySupposition from "./supposition";
import verifyConsequence from "./consequence";

import { first } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/theorem/proof!"),
      labelNodesQuery = nodesQuery("/theorem/label"),
      consequenceNodeQuery = nodeQuery("/theorem/consequence!"),
      suppositionsNodeQuery = nodesQuery("/theorem/supposition");

export default function verifyTheorem(theoremNode, fileContext) {
  let theoremVerified = false;

  fileContext.begin(theoremNode);

  const labelNodes = labelNodesQuery(theoremNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' theorem...`);

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
          const theorem = Theorem.fromLabelsSuppositionsAndConsequence(labels, suppositions, consequence);

          fileContext.addTheorem(theorem);

          theoremVerified = true;
        }
      }
    }
  }

  if (theoremVerified) {
    fileContext.info(`Verified the '${labelsString}' theorem.`);
  }

  theoremVerified ?
    fileContext.complete(theoremNode) :
      fileContext.complete(theoremNode);

  return theoremVerified;
}
