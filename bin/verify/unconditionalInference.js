"use strict";

const Conclusion = require("../conclusion"),
      verifyMetaproof = require("../verify/metaproof"),
      MetaproofContext = require("../context/metaproof"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const metaproofNodeQuery = nodeQuery("/unconditionalInference/metaproof!"),
      metastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!");

function verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context) {
  let unconditionalInferenceVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const metastatementNode = metastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

  if (unqualifiedMetastatementVerified) {
    unconditionalInferenceVerified = true;

    const metaproofNode = metaproofNodeQuery(unconditionalInferenceNode);

    if (metaproofNode !== null) {
      const metaproofVerified = verifyMetaproof(metaproofNode, metastatementNode, context);

      unconditionalInferenceVerified = metaproofVerified; ///
    }
  }

  if (unconditionalInferenceVerified) {
    const conclusion = Conclusion.fromMetastatementNode(metastatementNode);

    conclusions.push(conclusion);
  }

  return unconditionalInferenceVerified;
}

module.exports = verifyUnconditionalInference;
