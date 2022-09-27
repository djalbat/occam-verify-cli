"use strict";

const { loggingUtilities } = require("necessary");

const Rule = require("../rule"),
      verifyLabels = require("../verify/labels"),
      verifyMetaproof = require("../verify/metaproof"),
      verifyUnqualifiedMetastatement = require("../verify/unqualifiedMetastatement");

const { nodeQuery, nodesQuery } = require("../utilities/query"),
      { labelsAsString, nodesAsString } = require("../utilities/string");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      metaproofNodeQuery = nodesQuery("/rule/metaproof!"),
      metastatementNodeQuery = nodeQuery("/*/metastatement"),
      premiseUnqualifiedMetastatementNodesQuery = nodesQuery("/rule/premise|premises/unqualifiedMetastatement"),
      conclusionUnqualifiedMetastatementNodeQuery = nodeQuery("/rule/conclusion/unqualifiedMetastatement!");

function verifyRule(ruleNode, context) {
  let ruleVerified = false;

  const labels = [],
        labelNodes = labelNodesQuery(ruleNode),
        labelsString = nodesAsString(labelNodes);

  log.debug(`Verifying the '${labelsString}' rule...`);

  const labelsVerified = verifyLabels(labelNodes, labels, context);

  if (labelsVerified) {
    let rule = null;

    const premiseUnqualifiedMetastatementNodes = premiseUnqualifiedMetastatementNodesQuery(ruleNode),
          conclusionUnqualifiedMetastatementNode = conclusionUnqualifiedMetastatementNodeQuery(ruleNode);

    const premiseUnqualifiedMetastatementsVerified = premiseUnqualifiedMetastatementNodes.every((premiseUnqualifiedMetastatementNode) => {
      const premiseUnqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(premiseUnqualifiedMetastatementNode, context);

      if (premiseUnqualifiedMetastatementVerified) {
        return true;
      }
    });

    if (premiseUnqualifiedMetastatementsVerified) {
      const conclusionUnqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(conclusionUnqualifiedMetastatementNode, context);

      if (conclusionUnqualifiedMetastatementVerified) {
        const premiseMetastatementNodes = premiseUnqualifiedMetastatementNodes.map((premiseUnqualifiedMetastatementNode) => {
              const premiseMetastatementNode = metastatementNodeQuery(premiseUnqualifiedMetastatementNode);

              return premiseMetastatementNode;
            }),
            conclusionMetastatementNode = metastatementNodeQuery(conclusionUnqualifiedMetastatementNode);

        const metaproofNode = metaproofNodeQuery(ruleNode);

        if (metaproofNode !== null) {
          const metaproofVerified = verifyMetaproof(metaproofNode, premiseMetastatementNodes, conclusionMetastatementNode, context);
        }
      }
    }

    if (rule !== null) {
      const labelsString = labelsAsString(labels);

      context.addRule(rule);

      ruleVerified = true;

      log.info(`Verified the '${labelsString}' rule.`);
    }
  }

  return ruleVerified;
}

module.exports = verifyRule;
