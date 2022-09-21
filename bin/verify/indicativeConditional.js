"use strict";

const log = require("../log"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeAsString } = require("../utilities/node");
const { nodeQuery, nodesQuery } = require("../utilities/query");

const qualifiedStatementNodeQuery = nodeQuery("/indicativeConditional/qualifiedStatement!"),
      unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

function verifyIndicativeConditional(indicativeConditionalNode, fileContext) {
  let indicativeConditionalVerified;

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode),
        unqualifiedStatementsVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
          const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext);

          if (unqualifiedStatementVerified) {
            return true;
          }
        });

  const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode),
        qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, fileContext);

  if (!qualifiedStatementVerified || !unqualifiedStatementsVerified) {
    const indicativeConditionalString = nodeAsString(indicativeConditionalNode);

    log.error(`The indicative conditional '${indicativeConditionalString}' cannot be verified because its antecedents or consequents cannot be verified.`);

    indicativeConditionalVerified = false;
  } else {
    indicativeConditionalVerified = true;
  }

  return indicativeConditionalVerified;
}

module.exports = verifyIndicativeConditional;
