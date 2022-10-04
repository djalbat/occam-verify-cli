"use strict";

const Rule = require("../../rule"),
      verifyLabels = require("../../verify/labels"),
      verifyUnqualifiedMetastatement = require("../../verify/metastatement/unqualified");

const { nodeQuery, nodesQuery } = require("../../utilities/query");

const labelNodesQuery = nodesQuery("/rule/label"),
      metastatementNodeQuery = nodeQuery("/*/metastatement"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/rule/unqualifiedMetastatement!");

function verifyUnqualifiedMetastatementRule(ruleNode, rules, context) {
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

        rules.push(rule);

        unqualifiedMetastatementRuleVerified = true;
      }
    }
  }

  return unqualifiedMetastatementRuleVerified;
}

module.exports = verifyUnqualifiedMetastatementRule;
