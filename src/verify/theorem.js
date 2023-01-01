"use strict";

import Theorem from "../theorem";
import verifyProof from "./proof";
import verifyLabels from "../verify/labels";
import ProofContext from "../context/proof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyIndicativeConditional from "../verify/indicativeConditional";

import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const proofNodeQuery = nodeQuery("/theorem/proof"),
      labelNodesQuery = nodesQuery("/theorem/label"),
      unqualifiedStatementNodeQuery = nodeQuery("/theorem/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/theorem/indicativeConditional!");

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
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(theoremNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(theoremNode);

    let unqualifiedStatementVerified = false,
        indicativeConditionalVerified = false;

    if (unqualifiedStatementNode !== null) {
      unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);
    }

    if (indicativeConditionalNode !== null) {
      indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, proofContext);
    }

    if (unqualifiedStatementVerified || indicativeConditionalVerified) {
      const proofNode = proofNodeQuery(theoremNode),
            statements =
            proofVerified = verifyProof(proofNode, fileContext);

      const theorem = Theorem.fromLabelsUnqualifiedStatementNodeAndIndicativeConditionalNode(labels, unqualifiedStatementNode, indicativeConditionalNode);

      fileContext.addTheorem(theorem);

      theoremVerified = true;
    }
  }

  if (theoremVerified) {
    fileContext.info(`Verified the '${labelsString}' theorem.`);
  }

  theoremVerified ?
    fileContext.complete(theoremNode) :
      fileContext.halt(theoremNode);

  return theoremVerified;
}
