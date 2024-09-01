"use strict";

import bracketedStatementNode from "../node/statement/bracketed";
import bracketedMetastatementNode from "../node/metastatement/bracketed";

import { nodeQuery } from "../utilities/query";
import { BRACKETED_STATEMENT_DEPTH, BRACKETED_METASTATEMENT_DEPTH } from "../constants";

const bracketedStatementChildNodeQuery = nodeQuery("/statement/metaArgument!/statement!"),
      bracketedMetastatementChildNodeQuery = nodeQuery("/metastatement/metastatement!");

export function matchStatementModuloBrackets(statementNodeA, statementNodeB) {
  let statementMatchesModuloBrackets = false;

  if (!statementMatchesModuloBrackets) {
    const statementNodeAMatchesStatementNodeB = statementNodeA.match(statementNodeB);

    statementMatchesModuloBrackets = statementNodeAMatchesStatementNodeB;  ///
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementChildNodeA = bracketedStatementChildNodeFromStatementNode(statementNodeA);

    if (bracketedStatementChildNodeA !== null) {
      const bracketedStatementChildNodeAMatchStatementNodeB = bracketedStatementChildNodeA.match(statementNodeB);

      statementMatchesModuloBrackets = bracketedStatementChildNodeAMatchStatementNodeB; ///
    }
  }

  if (!statementMatchesModuloBrackets) {
    const bracketedStatementChildNodeB = bracketedStatementChildNodeFromStatementNode(statementNodeB);

    if (bracketedStatementChildNodeB !== null) {
      const statementNodeAMatchBracketedStatementChildNodeB = statementNodeA.match(bracketedStatementChildNodeB);

      statementMatchesModuloBrackets = statementNodeAMatchBracketedStatementChildNodeB; ///
    }
  }

  return statementMatchesModuloBrackets;
}

export function matchMetastatementModuloBrackets(metastatementNodeA, metastatementNodeB) {
  let metastatementMatches = false;

  if (!metastatementMatches) {
    const metastatementNodeMatches = metastatementNodeA.match(metastatementNodeB);

    metastatementMatches = metastatementNodeMatches;  ///
  }

  if (!metastatementMatches) {
    const bracketedMetastatementChildNodeA = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeA);

    if (bracketedMetastatementChildNodeA !== null) {
      const bracketedMetastatementChildNodeAMatchesMetastatementNodeB = bracketedMetastatementChildNodeA.match(metastatementNodeB);

      metastatementMatches = bracketedMetastatementChildNodeAMatchesMetastatementNodeB; ///
    }
  }

  if (!metastatementMatches) {
    const bracketedMetastatementChildNodeB = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNodeB);

    if (bracketedMetastatementChildNodeB !== null) {
      const metastatementNodeAMatchesBracketedMetastatementChildNodeB = metastatementNodeA.match(bracketedMetastatementChildNodeB);

      metastatementMatches = metastatementNodeAMatchesBracketedMetastatementChildNodeB; ///
    }
  }

  return metastatementMatches;
}

export function bracketedStatementChildNodeFromStatementNode(statementNode) {
  let bracketedStatementChildNode = null;

  const depth = BRACKETED_STATEMENT_DEPTH,
        statementNodeMatchBracketedStatementNode = statementNode.match(bracketedStatementNode, depth);

  if (statementNodeMatchBracketedStatementNode) {
    bracketedStatementChildNode = bracketedStatementChildNodeQuery(statementNode);
  }

  return bracketedStatementChildNode;
}

export function bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode) {
  let bracketedMetastatementChildNode = null;

  const depth = BRACKETED_METASTATEMENT_DEPTH,
        metastatementNodeMatchesBracketedMetastatementNode = metastatementNode.match(bracketedMetastatementNode, depth);

  if (metastatementNodeMatchesBracketedMetastatementNode) {
    bracketedMetastatementChildNode = bracketedMetastatementChildNodeQuery(metastatementNode);
  }

  return bracketedMetastatementChildNode;
}
