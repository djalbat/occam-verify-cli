"use strict";

import shim from "../shim";

import { nodeQuery } from "../utilities/query";
import { FRAME_META_TYPE_NAME, STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const metavariableNodeQuery = nodeQuery("/statement/metavariable"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type!");

export default function unifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext) {
  let statementUnifiedAgainstMetaType = false;

  const metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode),
        metaTypeTerminalNodeContent = metaTypeTerminalNode.getContent(),
        metaTypeName = metaTypeTerminalNodeContent; ///

  switch (metaTypeName) {
    case FRAME_META_TYPE_NAME: {
      const metavariableNode = metavariableNodeQuery(statementNode);

      if (metavariableNode !== null) {
        const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);

        if (metavariable !== null) {
          const metavariableMetaTypeName = metavariable.getMetaTypeName();

          if (metavariableMetaTypeName === metaTypeName) {
            statementUnifiedAgainstMetaType = true;
          }
        }
      }

      break;
    }

    case STATEMENT_META_TYPE_NAME: {
      const { verifyStatement } = shim,
            derived = false,
            assignments = [],
            statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

      statementUnifiedAgainstMetaType = statementVerified;

      break;
    }
  }

  return statementUnifiedAgainstMetaType;
}
