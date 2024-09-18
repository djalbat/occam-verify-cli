"use strict";

import verifyStatementGivenMetaType from "../verify/statementGivenMetaType";

export default function unifyStatementWithMetaType(statementNode, metaTypeNode, assignments, stated, localContext) {
  let statementUnifiedWithMetaType;

  const metaType = localContext.findMetaTypeByMetaTypeNode(metaTypeNode),
        statementVerifiedGivenMetaType = verifyStatementGivenMetaType(statementNode, metaType, assignments, stated, localContext);

  statementUnifiedWithMetaType = statementVerifiedGivenMetaType;  ///

  return statementUnifiedWithMetaType;
}
