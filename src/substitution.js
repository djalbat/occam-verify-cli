"use strict";

import { matcher } from "./matcher";
import { STATEMENT_RULE_NAME } from "./ruleNames";
import { bracketedNonTerminalChildNodeFromChildNodes } from "./utilities/substitution";

export default class Substitution {
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
            ruleName = STATEMENT_RULE_NAME;

      statementNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

      if (statementNode !== null) {
        const nodeA = this.statementNode,  ///
              nodeB = statementNode,
              nodeMatches = matchNode(nodeA, nodeB);

        matchesStatementNode = nodeMatches;  ///
      }
    }

    return matchesStatementNode;
  }

  static fromMetavariableNameAndStatementNode(metavariableName, statementNode) {
    let substitution = new Substitution(metavariableName, statementNode);

    const nonTerminalNode = statementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          ruleName = STATEMENT_RULE_NAME;

    statementNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

    if (statementNode !== null) {
      substitution = new Substitution(metavariableName, statementNode);
    }

    return substitution;
  }
}
