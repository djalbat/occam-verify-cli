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

export default function verifyAxiom(axiomNode, context) {
  let axiomVerified = false;

  context.begin(axiomNode);

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes),
        proofContext = ProofContext.fromContext(context),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
        indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

  context = proofContext; ///

  context.debug(`Verifying the '${labelsString}' axiom...`);

  if (unqualifiedStatementNode !== null) {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            labels = labelsString,  ///
            axiom = Axiom.fromStatementNodeAndLabels(statementNode, labels);

      context.addAxiom(axiom);

      axiomVerified = true;
    }
  }

  if (indicativeConditionalNode !== null) {
    const statementNodes = [],
          indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, statementNodes, context);

    if (indicativeConditionalVerified !== null) {
      const labels = labelsString,  ///
            firstStatementNode = first(statementNodes),
            secondStatementNode = second(statementNodes),
            suppositionStatementNode = firstStatementNode,  ///
            consequentStatementNode = secondStatementNode,  ///
            axiom = Axiom.fromSuppositionStatementNodeConsequentStatementNodeAndLabels(suppositionStatementNode, consequentStatementNode, labels);

      context.addAxiom(axiom);

      axiomVerified = true;
    }
  }

  axiomVerified ?
    context.complete(axiomNode) :
      context.halt(axiomNode);

  return axiomVerified;
}
