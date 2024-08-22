"use strict";

import { nodeQuery } from "../utilities/query";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type!");

export default function verifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext, verifyAhead) {
  let statementVerifiedAgainstMetaType = false;

  const metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode),
        content = metaTypeTerminalNode.getContent();

  if (content === STATEMENT_META_TYPE_NAME) {
    const verifiedAhead = verifyAhead();

    statementVerifiedAgainstMetaType = verifiedAhead; ///
  }

  return statementVerifiedAgainstMetaType;
}
