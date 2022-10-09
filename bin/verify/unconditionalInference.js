"use strict";

const Conclusion = require("../../conclusion"),
      verifyUnqualifiedMetastatement = require("../../verify/metastatement/unqualified");

const { nodeQuery } = require("../../utilities/query");

const metastatementNodeQuery = nodeQuery("/*/metastatement"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/rule/unqualifiedMetastatement!");

function verifyUnqualifiedMetastatementRule(ruleNode, premises, conclusions, context) {
  let unqualifiedMetastatementRuleVerified = false;

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(ruleNode);

  if (unqualifiedMetastatementNode !== null) {
    const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            conclusion = Conclusion.fromMetastatementNode(metastatementNode);

      conclusions.push(conclusion);

      unqualifiedMetastatementRuleVerified = true;
    }
  }

  return unqualifiedMetastatementRuleVerified;
}

module.exports = verifyUnqualifiedMetastatementRule;
