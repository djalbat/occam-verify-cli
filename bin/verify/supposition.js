"use strict";

const Assertion = require("../assertion"),
      verifyUnqualifiedStatement = require("../verify/statement/unqualified");

const { nodeQuery } = require("../utilities/query");

const unqualifiedStatementNodeQuery = nodeQuery("/supposition/unqualifiedStatement!");

function verifySupposition(suppositionNode, suppositions, context) {
  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(suppositionNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context),
        suppositionVerified = unqualifiedStatementVerified;

  if (suppositionVerified) {
    const supposition = Assertion.fromUnqualifiedStatementNode(unqualifiedStatementNode);

    suppositions.push(supposition);
  }

  return suppositionVerified;
}

module.exports = verifySupposition;
