"use strict";

import verifyStatementGivenMetaType from "../verify/statementGivenMetaType";

export default function unifyStatementWithMetaType(statementNode, metaTypeNode, assignments, derived, localContext) {
  let statementUnifiedWithMetaType;

  const metaType = localContext.findMetaTypeByMetaTypeNode(metaTypeNode),
        statementVerifiedGivenMetaType = verifyStatementGivenMetaType(statementNode, metaType, assignments, derived, localContext);

  statementUnifiedWithMetaType = statementVerifiedGivenMetaType;  ///

  return statementUnifiedWithMetaType;
}
