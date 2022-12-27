"use strict";

import Axiom from "../axiom";
import verifyLabels from "../verify/labels";
import ProofContext from "../context/proof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyIndicativeConditional from "../verify/indicativeConditional";

import { first, second } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      statementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement/statement!"),
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

    if (unqualifiedStatementNode !== null) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode),
              axiom = Axiom.fromLabelsAndStatementNode(labels, statementNode);

        fileContext.addAxiom(axiom);

        axiomVerified = true;
      }
    }

    if (indicativeConditionalNode !== null) {
      const indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, proofContext);

      if (indicativeConditionalVerified !== null) {
        const statementNodes = statementNodesQuery(indicativeConditionalNode),
              firstStatementNode = first(statementNodes),
              secondStatementNode = second(statementNodes),
              consequentStatementNode = secondStatementNode,  ///
              suppositionStatementNode = firstStatementNode,  ///
              axiom = Axiom.fromLabelsSuppositionStatementNodeConsequentAndStatementNode(labels, suppositionStatementNode, consequentStatementNode);

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
      fileContext.halt(axiomNode);

  return axiomVerified;
}
