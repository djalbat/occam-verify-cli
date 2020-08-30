"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const log = require("../log"),
      nodeUtilities = require("../utilities/node"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first } = arrayUtilities,
      { nodeAsString } = nodeUtilities;

const qualifiedStatementNodeQuery = Query.fromExpression("/indicativeConditional/qualifiedStatement"),
      unqualifiedStatementNodeQuery = Query.fromExpression("/indicativeConditional/unqualifiedStatement");

function verifyIndicativeConditional(indicativeConditionalNode, fileContext) {
  let indicativeConditionalVerified;

  const unqualifiedStatementNodes = unqualifiedStatementNodeQuery.execute(indicativeConditionalNode),
        qualifiedStatementNodes = qualifiedStatementNodeQuery.execute(indicativeConditionalNode),
        firstUnqualifiedStatementNode = first(unqualifiedStatementNodes),
        firstQualifiedStatementNode = first(qualifiedStatementNodes),
        unqualifiedStatementNode = firstUnqualifiedStatementNode,
        qualifiedStatementNode = firstQualifiedStatementNode; ///

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
