"use strict";

const Antecedent = require("../antecedent"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement"),
      unqualifiedStatementNodesQuery = nodesQuery("/antecedent/unqualifiedStatement");

function verifyAntecedent(antecedentNode, antecedents, context) {
  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(antecedentNode),
        antecedentVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
          const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

          if (unqualifiedStatementVerified) {
            return true;
          }
        });

  if (antecedentVerified) {
    const statementNodes = unqualifiedStatementNodes.map((unqualifiedStatementNode) => {
            const statementNode = statementNodeQuery(unqualifiedStatementNode);

            return statementNode;
          }),
          antecedent = Antecedent.fromStatementNodes(statementNodes);

    antecedents.push(antecedent);
  }

  const inAntecedent = false;

  context.setInAntecedent(inAntecedent);

  return antecedentVerified;
}

module.exports = verifyAntecedent;
