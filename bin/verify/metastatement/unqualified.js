"use strict";

const verifyMetastatement = require("../../verify/metastatement");

const { nodeQuery } = require("../../utilities/query");

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const metastatementVerified = verifyMetastatement(metastatementNode, context);

    if (metastatementVerified) {
      const derived = context.isDerived();

      if (derived) {
        const metastatementPresent = context.isMetastatementNodePresent(metastatementNode);

        if (metastatementPresent) {
          context.addMetastatementNode(metastatementNode);

          unqualifiedMetastatementVerified = true;
        }
      } else {
        context.addMetastatementNode(metastatementNode);

        unqualifiedMetastatementVerified = true;
      }
    }
  }

  return unqualifiedMetastatementVerified;
}

module.exports = verifyUnqualifiedMetastatement;
