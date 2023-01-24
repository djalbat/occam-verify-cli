"use strict";

import { matcher } from "../matcher";
import { nodeQuery } from "../utilities/query";
import { META_ARGUMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalChildNodeFromChildNodes } from "../utilities/substitution";

const statementNodeQuery = nodeQuery('/metaArgument/statement!');

export default class StatementForMetavariableSubstitution {
  constructor(metavariableName, statementNode) {
    this.metavariableName = metavariableName;
    this.statementNode = statementNode;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode) {
    let matchesStatementNode;

    const nodeA = this.statementNode,  ///
          nodeB = statementNode,
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    matchesStatementNode = nodeMatches;  ///

    if (!matchesStatementNode) {
      const nonTerminalNode = statementNode,  ///
            childNodes = nonTerminalNode.getChildNodes(), ///
            ruleName = META_ARGUMENT_RULE_NAME,
            metaArgumentNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

      if (metaArgumentNode !== null) {
        const statementNode = statementNodeQuery(metaArgumentNode);

        if (statementNode !== null) {
          const nodeA = this.statementNode,  ///
                nodeB = statementNode,
                nodeMatches = matcher.matchNode(nodeA, nodeB);

          matchesStatementNode = nodeMatches;  ///
        }
      }
    }

    return matchesStatementNode;
  }

  static fromMetavariableNameAndStatementNode(metavariableName, statementNode) {
    let statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);

    const nonTerminalNode = statementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          ruleName = META_ARGUMENT_RULE_NAME,
          metaArgumentNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

    statementNode = statementNodeQuery(metaArgumentNode);

    if (statementNode !== null) {
      statementForMetavariableSubstitution = new StatementForMetavariableSubstitution(metavariableName, statementNode);
    }

    return statementForMetavariableSubstitution;
  }
}
