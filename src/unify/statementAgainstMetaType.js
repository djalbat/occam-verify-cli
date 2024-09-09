"use strict";

import shim from "../shim";

import { nodeQuery } from "../utilities/query";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type!");

export default function unifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext, unifyAhead) {
  let statementVerifiedAgainstMetaType = false;

  const metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode),
        content = metaTypeTerminalNode.getContent();

  if (content === STATEMENT_META_TYPE_NAME) {
    let unifiedAhead = false;

    const { verifyStatement } = shim,
          derived = false,
          assignments = [],
          statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

    if (statementVerified) {
      unifiedAhead = unifyAhead();
    }

    statementVerifiedAgainstMetaType = unifiedAhead; ///
  }

  return statementVerifiedAgainstMetaType;
}
