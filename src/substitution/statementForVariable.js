"use strict";

import { matcher } from "../matcher";
import { STATEMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalChildNodeFromChildNodes } from "../utilities/substitution";

export default class StatementForVariableSubstitution {
  constructor(variableName, statementNode) {
    this.variableName = variableName;
    this.statementNode = statementNode;
  }

  getVariableName() {
    return this.variableName;
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
              nodeMatches = matcher.matchNode(nodeA, nodeB);

        matchesStatementNode = nodeMatches;  ///
      }
    }

    return matchesStatementNode;
  }

  static fromVariableNameAndStatementNode(variableName, statementNode) {
    let statementForVariableSubstitution = new StatementForVariableSubstitution(variableName, statementNode);

    const nonTerminalNode = statementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          ruleName = STATEMENT_RULE_NAME;

    statementNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

    if (statementNode !== null) {
      statementForVariableSubstitution = new StatementForVariableSubstitution(variableName, statementNode);
    }

    return statementForVariableSubstitution;
  }
}
