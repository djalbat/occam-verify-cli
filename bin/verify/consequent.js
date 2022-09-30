"use strict";

const Consequent = require("../consequent"),
      verifyUnqualifiedStatement = require("../verify/statement/unqualified");

const { nodeQuery } = require("../utilities/query");

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!");

function verifyConsequent(consequentNode, consequents, context) {
  let consequentVerified = false;

  const inAntecedent = false;

  context.setInAntecedent(inAntecedent);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode);

  if (unqualifiedStatementNode !== null) {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            consequent = Consequent.fromStatementNode(statementNode);

      consequents.push(consequent);

      consequentVerified = true;
    }
  }

  return consequentVerified;
}

module.exports = verifyConsequent;
