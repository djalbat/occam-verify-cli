"use strict";

const { loggingUtilities } = require("necessary");

const Rule = require("../rule"),
      verifyLabels = require("../verify/labels"),
      verifyUnqualifiedMetastatement = require("../verify/unqualifiedMetastatement");

const { labelsAsString } = require("../utilities/string"),
      { nodeQuery, nodesQuery } = require("../utilities/query");

const { log } = loggingUtilities;

const labelNodesQuery = nodesQuery("/rule/label"),
      metastatementNodeQuery = nodeQuery("/*/metastatement"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/rule/unqualifiedMetastatement!");

function verifyUnqualifiedMetastatementRule(ruleNode, context) {
  let unqualifiedMetastatementRuleVerified = false;

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(ruleNode);

  if (unqualifiedMetastatementNode !== null) {
    const labels = [],
          labelNodes = labelNodesQuery(ruleNode),
          labelsVerified = verifyLabels(labelNodes, labels, context);

    if (labelsVerified) {
      const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

      if (unqualifiedMetastatementVerified) {
        const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
              rule = Rule.fromMetastatementNodeAndLabels(metastatementNode, labels);

        const labelsString = labelsAsString(labels);

        context.addRule(rule);

        unqualifiedMetastatementRuleVerified = true;

        log.info(`Verified the '${labelsString}' rule.`);
      }
    }
  }

  return unqualifiedMetastatementRuleVerified;
}

module.exports = verifyUnqualifiedMetastatementRule;
