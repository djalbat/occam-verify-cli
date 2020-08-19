"use strict";

const Error = require("../error"),
      queries = require("../miscellaneous/queries"),
      nodeUtilities = require("../utilities/node"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { nodeAsString } = nodeUtilities,
      { qualifiedStatementNodeQuery, unqualifiedStatementNodeQuery } = queries;

function verifyIndicativeConditional(indicativeConditionalNode, fileContext) {
  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(indicativeConditionalNode);

  if (unqualifiedStatementNode === undefined) {
    const node = indicativeConditionalNode,  ///
          indicativeConditionalString = nodeAsString(indicativeConditionalNode),
          message = `The indicative conditional '${indicativeConditionalString}' cannot be verified because its antecedent is not an unqualified statement.`;

    throw new Error(node, message);
  }

  verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext);

  const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode);

  if (qualifiedStatementNode === undefined) {
    const node = indicativeConditionalNode,  ///
          indicativeConditionalString = nodeAsString(indicativeConditionalNode),
          message = `The indicative conditional '${indicativeConditionalString}' cannot be verified because its consequent is not a qualified statement.`;

    throw new Error(node, message);
  }

  verifyQualifiedStatement(qualifiedStatementNode, fileContext);
}

module.exports = verifyIndicativeConditional;
