"use strict";

const { loggingUtilities } = require("necessary");

const AntecedentContext = require("../context/antecedent"),
      ConsequentContext = require("../context/consequent"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeAsString } = require("../utilities/node");
const { nodeQuery, nodesQuery } = require("../utilities/query");

const qualifiedStatementNodeQuery = nodeQuery("/indicativeConditional/qualifiedStatement!"),
      unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

const { log } = loggingUtilities;

function verifyIndicativeConditional(indicativeConditionalNode, context) {
  let indicativeConditionalVerified = false;

  const antecedentContext = AntecedentContext.fromContext(context);

  context = antecedentContext; ///

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode),
        unqualifiedStatementsVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
          const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

          if (unqualifiedStatementVerified) {
            return true;
          }
        });

  if (!unqualifiedStatementsVerified) {
    log.error(`The indicative conditional '${indicativeConditionalString}' cannot be verified because one of its antecedent statments cannot be verified.`);
  } else {
    const consequentContext = ConsequentContext.fromContext(context);

    context = consequentContext;  ///

    const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode),
          qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, context);

    if (!qualifiedStatementVerified) {
      const indicativeConditionalString = nodeAsString(indicativeConditionalNode);

      log.error(`The indicative conditional '${indicativeConditionalString}' cannot be verified because the consequent statement cannot be verified.`);
    } else {
      indicativeConditionalVerified = true;
    }
  }

  return indicativeConditionalVerified;
}

module.exports = verifyIndicativeConditional;
