"use strict";

import Theorem from "../theorem";
import verifyProof from "../verify/proof";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyConditionalIndicative from "../verify/conditinalIndicative";
import verifyUnconditionalIndicative from "../verify/unconditionalIndicative";

import { first } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/theorem/proof!"),
      labelNodesQuery = nodesQuery("/theorem/label"),
      conditionalIndicativeNodeQuery = nodeQuery("/theorem/conditionalIndicative!"),
      unconditionalIndicativeNodeQuery = nodeQuery("/theorem/unconditionalIndicative!");

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
          consequents = [],
          conditionalIndicativeNode = conditionalIndicativeNodeQuery(theoremNode),
          unconditionalIndicativeNode = unconditionalIndicativeNodeQuery(theoremNode);

    let conditionalIndicativeVerified = false,
        unconditionalIndicativeVerified = false;

    if (conditionalIndicativeNode !== null) {
      conditionalIndicativeVerified = verifyConditionalIndicative(conditionalIndicativeNode, antecedents, consequents, proofContext);
    }

    if (unconditionalIndicativeNode !== null) {
      unconditionalIndicativeVerified = verifyUnconditionalIndicative(unconditionalIndicativeNode, consequents, proofContext);
    }

    if (conditionalIndicativeVerified || unconditionalIndicativeVerified) {
      const proofNode = proofNodeQuery(theoremNode),
            firstConsequent = first(consequents),
            consequent = firstConsequent, ///
            proofVerified = verifyProof(proofNode, consequent, proofContext);

      if (proofVerified) {
        const theorem = Theorem.fromLabelsPremisesAndConsequent(labels, antecedents, consequent);

        fileContext.addTheorem(theorem);

        theoremVerified = true;
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
