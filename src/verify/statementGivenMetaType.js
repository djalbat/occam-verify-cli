"use strict";

import shim from "../shim";

import { FRAME_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

export default function verifyStatementGivenMetaType(statementNode, metaType, assignments, derived, localContext) {
  let statementVerifiedGivenMetaType;

  const metaTypeName = metaType.getName();

  switch (metaTypeName) {
    case FRAME_META_TYPE_NAME: {

      debugger

      break;
    }

    case STATEMENT_META_TYPE_NAME: {
      const { verifyStatement } = shim,
            statementVerified = verifyStatement(statementNode, assignments, derived, localContext)

      statementVerifiedGivenMetaType = statementVerified;

      break;
    }

    default: {

      debugger

    }
  }

  return statementVerifiedGivenMetaType;
}