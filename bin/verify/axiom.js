"use strict";

const { loggingUtilities } = require("necessary");

const ProofContext = require("../context/proof"),
      verifyUnqualifiedStatementAxiom = require("../verify/unqualifiedStatementAxiom"),
      verifyIndicativeConditionalAxiom = require("../verify/indicativeConditionalAxiom");

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

  return axiomVerified;
}

module.exports = verifyAxiom;
