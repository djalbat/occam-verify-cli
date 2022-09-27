"use strict";

const { loggingUtilities } = require("necessary");

const verifyConditionalAxiom = require("../verify/conditionalAxiom"),
      verifyUnconditionalAxiom = require("../verify/unconditionalAxiom");

const { nodesQuery } = require("../utilities/query"),
      { nodesAsString } = require("../utilities/string");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label");

function verifyAxiom(axiomNode, context) {
  let axiomVerified = false;

  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' axiom...`);

  const unconditionalAxiomVerified = verifyUnconditionalAxiom(axiomNode, context);

  if (unconditionalAxiomVerified) {
    axiomVerified = true;
  } else {
    const conditionalAxiomVerified = verifyConditionalAxiom(axiomNode, context);

    if (conditionalAxiomVerified) {
      axiomVerified = true;
    }
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
