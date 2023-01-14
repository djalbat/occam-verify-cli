"use strict";

import Axiom from "../axiom";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyAntecedent from "../verify/antecedent";
import verifyConsequent from "../verify/consequent";

import { first } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      consequentNodeQuery = nodeQuery("/axiom/consequent!"),
      antecedentsNodeQuery = nodesQuery("/axiom/antecedent");

export default function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  fileContext.begin(axiomNode);

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext);

  fileContext.debug(`Verifying the '${labelsString}' axiom...`);

  const labels = [],
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    const antecedents = [],
          antecedentNodes = antecedentsNodeQuery(axiomNode),
          antecedentsVerified = antecedentNodes.every((antecedentNode) => {
            const antecedentVerified = verifyAntecedent(antecedentNode, antecedents, proofContext);

            if (antecedentVerified) {
              return true;
            }
          });

    if (antecedentsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(axiomNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

      if (consequentVerified) {
        const firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              axiom = Axiom.fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent);

        fileContext.addAxiom(axiom);

        axiomVerified = true;
      }
    }
  }

  if (axiomVerified) {
    fileContext.info(`Verified the '${labelsString}' axiom.`);
  }

  axiomVerified ?
    fileContext.complete(axiomNode) :
      fileContext.complete(axiomNode);

  return axiomVerified;
}
