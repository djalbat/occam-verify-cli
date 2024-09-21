"use strict";

import shim from "../shim";

import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/name";
import { DECLARATION_META_TYPE_NAME, REFERENCE_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const metavariableNodeQuery = nodeQuery("/statement/metavariable!");

export default function verifyStatementGivenMetaType(statementNode, metaType, assignments, stated, localContext) {
  let statementVerifiedGivenMetaType;

  const metaTypeName = metaType.getName();

  switch (metaTypeName) {
    case STATEMENT_META_TYPE_NAME: {
      const { verifyStatement } = shim,
            statementVerified = verifyStatement(statementNode, assignments, stated, localContext)

      statementVerifiedGivenMetaType = statementVerified; ///

      break;
    }

    case REFERENCE_META_TYPE_NAME:
    case DECLARATION_META_TYPE_NAME: {
      statementVerifiedGivenMetaType = false;

      const metavariableNode = metavariableNodeQuery(statementNode);

      if (metavariableNode !== null) {
        const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
              metavariable = localContext.findMetavariableByMetavariableName(metavariableName);

        if (metavariable !== null) {
          const metavariableMetaType = metavariable.getMetaType();

          if (metavariableMetaType === metaType) {
            statementVerifiedGivenMetaType = true;
          }
        }
      }

      break;
    }
  }

  return statementVerifiedGivenMetaType;
}