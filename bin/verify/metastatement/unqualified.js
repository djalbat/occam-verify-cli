"use strict";

const { loggingUtilities } = require("necessary");

const { nodeQuery } = require("../../utilities/query"),
      { nodeAsString } = require("../../utilities/string");

const { log } = loggingUtilities;

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const derived = context.isDerived();

    let metastatementPresent = true;  ///

    if (derived) {
      metastatementPresent = context.isMetastatementNodePresent(metastatementNode);
    }

    if (metastatementPresent) {
      context.addMetastatementNode(metastatementNode);
    }

    const metastatementString = nodeAsString(metastatementNode);

    log.info(`Verified the '${metastatementString}' unqualified metastatement.`);

    unqualifiedMetastatementVerified = true;
  }

  return unqualifiedMetastatementVerified;
}

module.exports = verifyUnqualifiedMetastatement;
