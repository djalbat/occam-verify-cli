"use strict";

const Assertion = require("../assertion"),
      verifyUnqualifiedStatement = require("../verify/statement/unqualified");

const { nodeQuery } = require("../utilities/query");

const unqualifiedStatementNodeQuery = nodeQuery("/antecedent/unqualifiedStatement!");

function verifyAntecedent(antecedentNode, antecedents, context) {
  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(antecedentNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context),
        antecedentVerified = unqualifiedStatementVerified;

  if (antecedentVerified) {
    const antecedent = Assertion.fromUnqualifiedStatementNode(unqualifiedStatementNode);

    antecedents.push(antecedent);
  }

  return antecedentVerified;
}

module.exports = verifyAntecedent;
