"use strict";

const { loggingUtilities } = require("necessary");

const Axiom = require("../axiom"),
      verifyLabels = require("../verify/labels"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label"),
      statementNodeQuery = nodeQuery("/*/statement"),
      unqualifiedStatementNodeQuery = nodeQuery("/axiom/unqualifiedStatement!");

function verifyUnconditionalAxiom(axiomNode, context) {
  let unconditionalAxiomVerified = false;

  const labels = [],
        labelNodes = labelNodesQuery(axiomNode),
        labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode);

    if (unqualifiedStatementNode !== null) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode),
              consequentStatementNode = statementNode,  ///
              axiom = Axiom.fromConsequentStatementNodeAndLabels(consequentStatementNode, labels);

        const labelsString = labels.join(",")

        context.addAxiom(axiom);

        unconditionalAxiomVerified = true;

        log.info(`Verified the '${labelsString}' axiom.`);
      }
    }
  }

  return unconditionalAxiomVerified;
}

module.exports = verifyUnconditionalAxiom;
