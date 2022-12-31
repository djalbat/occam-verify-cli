"use strict";

import Axiom from "../axiom";
import verifyLabels from "../verify/labels";
import ProofContext from "../context/proof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyIndicativeConditional from "../verify/indicativeConditional";

import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      unqualifiedStatementNodeQuery = nodeQuery("/axiom/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!");

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
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

    let unqualifiedStatementVerified = false,
        indicativeConditionalVerified = false;

    if (unqualifiedStatementNode !== null) {
      unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);
    }

    if (indicativeConditionalNode !== null) {
      indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, proofContext);
    }

    if (unqualifiedStatementVerified || indicativeConditionalVerified) {
      const axiom = Axiom.fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode(labels, unqualifiedStatementNode, indicativeConditionalNode);

      fileContext.addAxiom(axiom);

      axiomVerified = true;
    }
  }

  if (axiomVerified) {
    fileContext.info(`Verified the '${labelsString}' axiom.`);
  }

  axiomVerified ?
    fileContext.complete(axiomNode) :
      fileContext.halt(axiomNode);

  return axiomVerified;
}
