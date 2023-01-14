"use strict";

import Theorem from "../theorem";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyAntecedent from "./antecedent";
import verifyConsequent from "./consequent";

import { first } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/theorem/proof!"),
      labelNodesQuery = nodesQuery("/theorem/label"),
      consequentNodeQuery = nodeQuery("/theorem/consequent!"),
      antecedentsNodeQuery = nodesQuery("/theorem/antecedent");

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
    const antecedents = [],
          antecedentNodes = antecedentsNodeQuery(theoremNode),
          antecedentsVerified = antecedentNodes.every((antecedentNode) => {
            const antecedentVerified = verifyAntecedent(antecedentNode, antecedents, proofContext);

            if (antecedentVerified) {
              return true;
            }
          });

    if (antecedentsVerified) {
      const consequents = [],
            consequentNode = consequentNodeQuery(theoremNode),
            consequentVerified = verifyConsequent(consequentNode, consequents, proofContext);

      if (consequentVerified) {
        const proofNode = proofNodeQuery(theoremNode),
              firstConsequent = first(consequents),
              consequent = firstConsequent, ///
              proofVerified = verifyProof(proofNode, consequent, proofContext);

        if (proofVerified) {
          const theorem = Theorem.fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent);

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
