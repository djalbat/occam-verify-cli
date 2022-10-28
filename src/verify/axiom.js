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
  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes);

  context.debug(`Verifying the '${labelsString}' axiom...`, axiomNode);

  const proofContext = ProofContext.fromContext(context);

  context = proofContext; ///

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
        indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

  let axiomVerified = false;

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

  if (axiomVerified) {
    context.info(`Verified the '${labelsString}' axiom.`, axiomNode);
  }

  return axiomVerified;
}
