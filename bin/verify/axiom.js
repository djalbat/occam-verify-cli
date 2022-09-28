"use strict";

const { loggingUtilities } = require("necessary");

const verifyUnqualifiedStatementAxiom = require("../verify/unqualifiedStatementAxiom"),
      verifyIndicativeConditionalAxiom = require("../verify/indicativeConditionalAxiom");

const { nodesQuery } = require("../utilities/query"),
      { nodesAsString } = require("../utilities/string");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label");

function verifyAxiom(axiomNode, context) {
  let axiomVerified = false;

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' axiom...`);

  const unconditionalAxiomVerified = verifyIndicativeConditionalAxiom(axiomNode, context);

  if (unconditionalAxiomVerified) {
    axiomVerified = true;
  } else {
    const conditionalAxiomVerified = verifyUnqualifiedStatementAxiom(axiomNode, context);

    if (conditionalAxiomVerified) {
      axiomVerified = true;
    }
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
