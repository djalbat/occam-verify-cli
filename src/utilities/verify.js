"use strict";

import { NOT } from "../constants";
import { nodeQuery } from "../utilities/query";

const secondOperatorTerminalNodeQuery = nodeQuery("/*/@operator[1]");

export function isStatementNegated(statementNode) {
  const node = statementNode, ///
        negated = isNegated(node),
        statementNegated = negated; ///

  return statementNegated;
}

export function isMetastatementNegated(metastatementNode) {
  const node = metastatementNode, ///
        negated = isNegated(node),
        statementNegated = negated; ///

  return statementNegated;
}

function isNegated(node) {
  const secondOperatorTerminalNode = secondOperatorTerminalNodeQuery(node),
        content = secondOperatorTerminalNode.getContent(),
        negated = (content === NOT);

  return negated;
}
