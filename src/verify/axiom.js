"use strict";

import Axiom from "../axiom";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyConsequent from "../verify/consequent";
import verifySupposition from "../verify/supposition";

import { first } from "../utilities/array";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/labels/label"),
      consequentNodeQuery = nodeQuery("/axiom/consequent!"),
      suppositionsNodeQuery = nodesQuery("/axiom/supposition");

export default function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = fileContext.nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.trace(`Verifying the '${labelsString}' axiom...`, axiomNode);

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
      const consequents = [],
            consequentNode = consequentNodeQuery(axiomNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

      if (consequentVerified) {
        const firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              axiom = Axiom.fromLabelsSuppositionsConsequentAndProofContext(labels, suppositions, consequent, proofContext);

        fileContext.addAxiom(axiom);

        axiomVerified = true;
      }
    }
  }

  if (axiomVerified) {
    fileContext.debug(`...verified the '${labelsString}' axiom.`, axiomNode);
  }

  return axiomVerified;
}
