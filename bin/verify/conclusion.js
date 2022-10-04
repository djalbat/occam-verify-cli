"use strict";

const Conclusion = require("../conclusion"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/*/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

function verifyConclusion(conclusionNode, conclusions, context) {
  let conclusionVerified = false;

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(conclusionNode);

  if (unqualifiedMetastatementNode !== null) {
    const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

    if (unqualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            conclusion = Conclusion.fromMetastatementNode(metastatementNode);

      conclusions.push(conclusion);

      conclusionVerified = true;
    }
  }

  return conclusionVerified;
}

module.exports = verifyConclusion;
