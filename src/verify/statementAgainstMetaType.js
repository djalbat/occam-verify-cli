"use strict";

import { nodeQuery } from "../utilities/query";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type!");

export default function verifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext, verifyAhead, verifyStatement) {
  let statementVerifiedAgainstMetaType = false;

  const metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode),
        content = metaTypeTerminalNode.getContent();

  if (content === STATEMENT_META_TYPE_NAME) {
    let verifiedAhead = false;

    const derived = false,
          assignments = [],
          statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

    if (statementVerified) {
      verifiedAhead = verifyAhead();
    }

    statementVerifiedAgainstMetaType = verifiedAhead; ///
  }

  return statementVerifiedAgainstMetaType;
}
