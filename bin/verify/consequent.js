"use strict";

const Consequent = require("../consequent"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeQuery } = require("../utilities/query");

const statementNodeQuery = nodeQuery("/*/statement!"),
      qualifiedStatementNodeQuery = nodeQuery("/consequent/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!");

function verifyConsequent(consequentNode, consequents, context) {
  let consequentVerified = false;

  const qualifiedStatementNode = qualifiedStatementNodeQuery(consequentNode),
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode);

  if (qualifiedStatementNode !== null) {
    const qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, context);

    if (qualifiedStatementVerified) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            consequent = Consequent.fromStatementNode(statementNode);

      consequents.push(consequent);

      consequentVerified = true;
    }
  }

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
