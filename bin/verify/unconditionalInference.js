"use strict";

const Conclusion = require("../conclusion"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!");

function verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context) {
  let unconditionalInferenceVerified = false;

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(unconditionalInferenceNode);

  const unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

  if (unqualifiedMetastatementVerified) {
    const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    unconditionalInferenceVerified = true;
  }

  return unconditionalInferenceVerified;
}

module.exports = verifyUnconditionalInference;
