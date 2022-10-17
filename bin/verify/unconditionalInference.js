"use strict";

const Conclusion = require("../conclusion"),
      MetaproofContext = require("../context/metaproof"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const metastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!");

function verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context) {
  let unconditionalInferenceVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const metastatementNode = metastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

  if (unqualifiedMetastatementVerified) {
    const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);

    unconditionalInferenceVerified = true;
  }

  return unconditionalInferenceVerified;
}

module.exports = verifyUnconditionalInference;
