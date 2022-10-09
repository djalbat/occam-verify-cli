"use strict";

const Conclusion = require("../conclusion"),
      verifyMetaproof = require("../verify/metaproof"),
      MetaproofContext = require("../context/metaproof"),
      verifyUnqualifiedMetastatement = require("../verify/metastatement/unqualified");

const { nodeQuery } = require("../utilities/query");

const metaproofNodeQuery = nodeQuery("/unconditionalInference/metaproof!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/unconditionalInference/unqualifiedMetastatement!");

function verifyUnconditionalInference(unconditionalInferenceNode, premises, conclusions, context) {
  let unconditionalInferenceVerified = false;

  const metaproofContext = MetaproofContext.fromContext(context);

  context = metaproofContext; ///

  const unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(unconditionalInferenceNode),
        unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context);

  if (unqualifiedMetastatementVerified) {
    let metaproofVerified = true;

    const metaproofNode = metaproofNodeQuery(unconditionalInferenceNode);

    if (metaproofNode !== null) {
      metaproofVerified = verifyMetaproof(metaproofNode, context);
    }

    if (metaproofVerified) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
            conclusion = Conclusion.fromMetastatementNode(metastatementNode);

      conclusions.push(conclusion);

      unconditionalInferenceVerified = true;
    }
  }

  return unconditionalInferenceVerified;
}

module.exports = verifyUnconditionalInference;
