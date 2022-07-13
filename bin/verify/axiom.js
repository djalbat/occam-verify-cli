"use strict";

const log = require("../log"),
      Axiom = require("../axiom"),
      verifyLabels = require("../verify/labels"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement"),
      verifyIndicativeConditional = require("../verify/indicativeConditional");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const labelNodesQuery = nodesQuery("/axiom/label"),
      unqualifiedStatementNodeQuery = nodeQuery("/axiom/unqualifiedStatement!"),
      indicativeConditionalNodeQuery = nodeQuery("/axiom/indicativeConditional!");

function verifyAxiom(axiomNode, fileContext) {
  let axiomVerified = false;

  const labels = [],
        labelNodes = labelNodesQuery(axiomNode),
        labelsVerified = verifyLabels(labelNodes, labels, fileContext);

  if (labelsVerified) {
    let axiom = undefined;

    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(axiomNode),
          indicativeConditionalNode = indicativeConditionalNodeQuery(axiomNode);

    if (false) {
      ///
    } else if (unqualifiedStatementNode !== undefined) {
      const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext);

      if (unqualifiedStatementVerified) {
        axiom = Axiom.fromUnqualifiedStatementNodeAndLabels(unqualifiedStatementNode, labels);
      }
    } else if (indicativeConditionalNode !== undefined) {
      const indicativeConditionalVerified = verifyIndicativeConditional(indicativeConditionalNode, fileContext);

      if (indicativeConditionalVerified) {
        axiom = Axiom.fromIndicativeConditionalNodeAndLabels(indicativeConditionalNode, labels);
      }
    }

    if (axiom !== undefined) {
      const labelsString = labels.join(",")

      fileContext.addAxiom(axiom);

      axiomVerified = true;

      log.info(`Verified the '${labelsString}' axiom.`);
    }
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
