"use strict";

const { loggingUtilities } = require("necessary");

const ProofContext = require("../context/proof"),
      verifyUnqualifiedStatementAxiom = require("../verify/axiom/unqualifiedStatement"),
      verifyIndicativeConditionalAxiom = require("../verify/axiom/indicativeConditional");

const { nodesQuery } = require("../utilities/query"),
      { nodesAsString } = require("../utilities/string");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/axiom/label");

function verifyAxiom(axiomNode, context) {
  const labelNodes = labelNodesQuery(axiomNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' axiom...`);

  const proofContext = ProofContext.fromContext(context);

  context = proofContext; ///

  const unqualifiedStatementAxiomVerified = verifyUnqualifiedStatementAxiom(axiomNode, context),
        indicativeConditionalAxiomVerified = verifyIndicativeConditionalAxiom(axiomNode, context),
        axiomVerified = (unqualifiedStatementAxiomVerified || indicativeConditionalAxiomVerified);

  if (axiomVerified) {
    log.info(`Verified the '${labelsString}' axiom.`);
  }

  return axiomVerified;
}

module.exports = verifyAxiom;
