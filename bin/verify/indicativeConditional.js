"use strict";

const { loggingUtilities } = require("necessary");

const TemporaryContext = require("../context/temporary"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeAsString } = require("../utilities/node");
const { nodeQuery, nodesQuery } = require("../utilities/query");

const qualifiedStatementNodeQuery = nodeQuery("/indicativeConditional/qualifiedStatement!"),
      unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

const { log } = loggingUtilities;

function verifyIndicativeConditional(indicativeConditionalNode, fileContext) {
  let indicativeConditionalVerified;

  const temporaryContext = TemporaryContext.fromFileContext(fileContext),
        supposition = true,
        context = temporaryContext; ///

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode),
        unqualifiedStatementsVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
          const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, supposition, context);

          if (unqualifiedStatementVerified) {
            return true;
          }
        });

  const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode),
        qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, context);

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
