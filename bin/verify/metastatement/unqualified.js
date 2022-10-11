"use strict";

const { loggingUtilities } = require("necessary");

const MetaAssertion = require("../../metaAssertion");

const { nodeQuery } = require("../../utilities/query"),
      { nodeAsString } = require("../../utilities/string");

const { log } = loggingUtilities;

const metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!");

function verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, context) {
  let unqualifiedMetastatementVerified = false;

  const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

  if (metastatementNode !== null) {
    const derived = context.isDerived();

    if (derived) {
      const metaAssertion = MetaAssertion.fromMetastatementNode(metastatementNode),
            metaAssertionPresent = context.isMetaAssertionPresent(metaAssertion);

      unqualifiedMetastatementVerified = metaAssertionPresent;  ///
    } else {
      unqualifiedMetastatementVerified = true;
    }
  }

  if (unqualifiedMetastatementVerified) {
    const metastatementString = nodeAsString(metastatementNode);

    log.info(`Verified the '${metastatementString}' unqualified metastatement.`);
  }

  return unqualifiedMetastatementVerified;
}

module.exports = verifyUnqualifiedMetastatement;
