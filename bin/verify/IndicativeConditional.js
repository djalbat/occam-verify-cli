"use strict";

const verifyUnqualifiedStatement = require("../verify/metastatement/unqualified");

const { nodesQuery } = require("../utilities/query");

const unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

function verifyIndicativeConditional(indicativeConditionalNode, statementNodes, context) {
  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode),
        indicativeConditionalVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
          const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

          if (unqualifiedStatementVerified) {
            return true;
          }
        });

  return indicativeConditionalVerified;
}

module.exports = verifyIndicativeConditional;
