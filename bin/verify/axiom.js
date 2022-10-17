"use strict";

const { loggingUtilities } = require("necessary");

const ProofContext = require("../context/proof"),
      verifyUnqualifiedStatement = require("../verify/statement/unqualified"),
      verifyIndicativeConditional = require("../verify/indicativeConditional");

const { first, second } = require("../utilities/array"),
      { nodesAsString } = require("../utilities/string"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label"),
      statementNodeQuery = nodeQuery("/*/statement"),
      unqualifiedStatementNodeQuery = nodeQuery("/axiom/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!");

function verifyAxiom(axiomNode, context) {
  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' axiom...`);

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
    log.info(`Verified the '${labelsString}' axiom.`);
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
