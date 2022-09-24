"use strict";

const { loggingUtilities } = require("necessary");

const Axiom = require("../axiom"),
      verifyLabels = require("../verify/labels"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement"),
      verifyIndicativeConditional = require("../verify/indicativeConditional");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label"),
      unqualifiedStatementNodeQuery = nodeQuery("/axiom/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!");

function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labels = [],
        labelNodes = labelNodesQuery(axiomNode),
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    let axiom = null;

    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

    if (unqualifiedStatementNode !== null) {
      const supposition = false,
            context = fileContext,  ///
            unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, supposition, context);

      if (unqualifiedStatementVerified) {
        axiom = Axiom.fromUnqualifiedStatementNodeAndLabels(unqualifiedStatementNode, labels);
      }
    }

    if (indicativeConditionalNode !== null) {
      const indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, fileContext);

      if (indicativeConditionalVerified) {
        axiom = Axiom.fromIndicativeConditionalNodeAndLabels(indicativeConditionalNode, labels);
      }
    }

    if (axiom !== null) {
      const labelsString = labels.join(",")

      fileContext.addAxiom(axiom);

      axiomVerified = true;

      log.info(`Verified the '${labelsString}' axiom.`);
    }
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
