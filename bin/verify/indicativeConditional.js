"use strict";

const log = require("../log"),
      nodeUtilities = require("../utilities/node"),
      queryUtilities = require("../utilities/query"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeQuery } = queryUtilities,
      { nodeAsString } = nodeUtilities;

const qualifiedStatementNodeQuery = nodeQuery("/*/qualifiedStatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/*/unqualifiedStatement!");

function verifyIndicativeConditional(indicativeConditionalNode, fileContext) {
  let indicativeConditionalVerified;

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(indicativeConditionalNode),
        qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode);

  if (false) {
    ///
  } else if (unqualifiedStatementNode === undefined) {
    const indicativeConditionalString = nodeAsString(indicativeConditionalNode);

    log.error(`The indicative conditional '${indicativeConditionalString}' cannot be verified because its antecedent is not a statement.`);
  } else if (qualifiedStatementNode === undefined) {
    const indicativeConditionalString = nodeAsString(indicativeConditionalNode);

    log.error(`The indicative conditional '${indicativeConditionalString}' cannot be verified because its consequent is not a statement.`);
  } else {
    const qualifiedStatementVerified = verifyQualifiedStatement(qualifiedStatementNode, fileContext),
          unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext);

    if (qualifiedStatementVerified && unqualifiedStatementVerified) {
      indicativeConditionalVerified = true;
    }
  }

  return indicativeConditionalVerified;
}

module.exports = verifyIndicativeConditional;
