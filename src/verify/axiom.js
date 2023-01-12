"use strict";

import Axiom from "../axiom";
import ProofContext from "../context/proof";
import verifyLabels from "../verify/labels";
import verifyConditionalIndicative from "../verify/conditionalIndicative";
import verifyUnconditionalIndicative from "../verify/unconditionalIndicative";

import { first } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      conditionalIndicativeNodeQuery = nodeQuery("/axiom/conditionalIndicative!"),
      unconditionalIndicativeNodeQuery = nodeQuery("/axiom/unconditionalIndicative!");

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
          consequents = [],
          conditionalIndicativeNode = conditionalIndicativeNodeQuery(axiomNode),
          unconditionalIndicativeNode = unconditionalIndicativeNodeQuery(axiomNode);

    let conditionalIndicativeVerified = false,
        unconditionalIndicativeVerified = false;

    if (conditionalIndicativeNode !== null) {
      conditionalIndicativeVerified = verifyConditionalIndicative(conditionalIndicativeNode, antecedents, consequents, proofContext);
    }

    if (unconditionalIndicativeNode !== null) {
      unconditionalIndicativeVerified = verifyUnconditionalIndicative(unconditionalIndicativeNode, consequents, proofContext);
    }

    if (conditionalIndicativeVerified || unconditionalIndicativeVerified) {
      const firstConsequent = first(consequents),
            consequent = firstConsequent, ///
            axiom = Axiom.fromLabelsAntecedentsAndConsequent(labels, antecedents, consequent);

      fileContext.addAxiom(axiom);

      axiomVerified = true;
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
