"use strict";

const { loggingUtilities } = require("necessary");

const Rule = require("../rule"),
      verifyLabels = require("../verify/labels"),
      verifyUnqualifiedMetastatement = require("../verify/unqualifiedMetastatement");

const { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      premiseUnqualifiedMetastatementNodesQuery = nodesQuery("/rule/premise|premises/unqualifiedMetastatement"),
      conclusionUnqualifiedMetastatementNodeQuery = nodeQuery("/rule/conclusion/unqualifiedMetastatement!");

function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labels = [],
        labelNodes = labelNodesQuery(ruleNode),
        labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
    let rule = null;

    const premiseUnqualifiedMetastatementNodes = premiseUnqualifiedMetastatementNodesQuery(ruleNode),
          conclusionUnqualifiedMetastatementNode = conclusionUnqualifiedMetastatementNodeQuery(ruleNode);

    const premiseUnqualifiedMetastatementsVerified = premiseUnqualifiedMetastatementNodes.every((premiseUnqualifiedMetastatementNode) => {
            const premiseUnqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(premiseUnqualifiedMetastatementNode, context);

            if (premiseUnqualifiedMetastatementVerified) {
              return true;
            }
          }),
          conclusionUnqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(conclusionUnqualifiedMetastatementNode, context);

    debugger

    if (rule !== null) {
      const labelsString = labels.join(",")

      context.addRule(rule);

      ruleVerified = true;

      log.info(`Verified the '${labelsString}' rule.`);
    }
  }

  return ruleVerified;
}

module.exports = verifyRule;
