"use strict";

import ProofContext from "../context/proof";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";
import verifyIndicativeConditional from "../verify/indicativeConditional";

import { first, second } from "../utilities/array";
import { nodesAsString } from "../utilities/string";
import { nodeQuery, nodesQuery } from "../utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      statementNodeQuery = nodeQuery("/*/statement"),
      unqualifiedStatementNodeQuery = nodeQuery("/axiom/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!");

export default function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  fileContext.begin(axiomNode);

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromFileContext(fileContext),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
        indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

  fileContext.debug(`Verifying the '${labelsString}' axiom...`);

  if (unqualifiedStatementNode !== null) {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            labels = labelsString,  ///
            axiom = Axiom.fromStatementNodeAndLabels(statementNode, labels);

      fileContext.addAxiom(axiom);

      axiomVerified = true;
    }
  }

  if (indicativeConditionalNode !== null) {
    const statementNodes = [],
          indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, statementNodes, proofContext);

    if (indicativeConditionalVerified !== null) {
      const labels = labelsString,  ///
            firstStatementNode = first(statementNodes),
            secondStatementNode = second(statementNodes),
            suppositionStatementNode = firstStatementNode,  ///
            consequentStatementNode = secondStatementNode,  ///
            axiom = Axiom.fromSuppositionStatementNodeConsequentStatementNodeAndLabels(suppositionStatementNode, consequentStatementNode, labels);

      fileContext.addAxiom(axiom);

      axiomVerified = true;
    }
  }

  axiomVerified ?
    fileContext.complete(axiomNode) :
      fileContext.halt(axiomNode);

  return axiomVerified;
}
