"use strict";

const Conclusion = require("../conclusion"),
      verifyQualifiedMetastatement = require("../verify/metastatement/qualified"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/*/metastatement!"),
      qualifiedMetastatementNodeQuery = nodeQuery("/conclusion/qualifiedMetastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

function verifyConclusion(conclusionNode, conclusions, context) {
  let conclusionVerified = false;

  const inPremise = false;

  context.setInPremise(inPremise);

  const qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(conclusionNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(conclusionNode);

  if (qualifiedMetastatementNode !== null) {
    const qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, context);

    if (qualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
            conclusion = Conclusion.fromMetastatementNode(metastatementNode);

      conclusions.push(conclusion);

      conclusionVerified = true;
    }
  }

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
