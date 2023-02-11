"use strict";

import Axiom from "../axiom";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifySupposition from "../verify/supposition";
import verifyConsequence from "../verify/consequence";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      consequenceNodeQuery = nodeQuery("/axiom/consequence!"),
      suppositionsNodeQuery = nodesQuery("/axiom/supposition");

export default function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' axiom...`, axiomNode);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const suppositions = [],
          suppositionNodes = suppositionsNodeQuery(axiomNode),
          suppositionsVerified = suppositionNodes.every((suppositionNode) => {
            const suppositionVerified = verifySupposition(suppositionNode, suppositions, proofContext);

            if (suppositionVerified) {
              return true;
            }
          });

    if (suppositionsVerified) {
      const consequences = [],
            consequenceNode = consequenceNodeQuery(axiomNode),
            consequenceVerified = verifyConsequence(consequenceNode, consequences, proofContext);

      if (consequenceVerified) {
        const firstConsequence = first(consequences),
              consequence = firstConsequence, ///
              axiom = Axiom.fromLabelsSuppositionsConsequenceAndProofContext(labels, suppositions, consequence, proofContext);

        fileContext.addAxiom(axiom);

        axiomVerified = true;
      }
    }
  }

  if (axiomVerified) {
    fileContext.info(`Verified the '${labelsString}' axiom.`, axiomNode);
  }

  return axiomVerified;
}
