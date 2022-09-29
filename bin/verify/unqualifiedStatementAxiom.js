"use strict";

const { loggingUtilities } = require("necessary");

const Axiom = require("../axiom"),
      verifyLabels = require("../verify/labels"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { labelsAsString } = require("../utilities/string"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label"),
      statementNodeQuery = nodeQuery("/*/statement"),
      unqualifiedStatementNodeQuery = nodeQuery("/axiom/unqualifiedStatement!");

function verifyUnqualifiedStatementAxiom(axiomNode, context) {
  let unqualifiedStatementAxiomVerified = false;

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode);

  if (unqualifiedStatementNode !== null) {
    const labels = [],
          labelNodes = labelNodesQuery(axiomNode),
          labelsVerified = verifyLabels(labelNodes, labels, context);

    if (labelsVerified) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

      if (unqualifiedStatementVerified) {
        const statementNode = statementNodeQuery(unqualifiedStatementNode),
              axiom = Axiom.fromStatementNodeAndLabels(statementNode, labels);

        const labelsString = labelsAsString(labels);

        context.addAxiom(axiom);

        unqualifiedStatementAxiomVerified = true;

        log.info(`Verified the '${labelsString}' axiom.`);
      }
    }
  }

  return unqualifiedStatementAxiomVerified;
}

module.exports = verifyUnqualifiedStatementAxiom;
