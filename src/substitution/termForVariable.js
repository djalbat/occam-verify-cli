"use strict";

import { matcher } from "../matcher";
import { STATEMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalChildNodeFromChildNodes } from "../utilities/substitution";

export default class TermForVariableSubstitution {
  constructor(variableName, termNode) {
    this.variableName = variableName;
    this.termNode = termNode;
  }

  getVariableName() {
    return this.variableName;
  }

  getTermNode() {
    return this.termNode;
  }

  matchTermNode(termNode) {
    let matchesTermNode;

    const nodeA = this.termNode,  ///
          nodeB = termNode,
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    matchesTermNode = nodeMatches;  ///

    if (!matchesTermNode) {
      const nonTerminalNode = termNode,  ///
            childNodes = nonTerminalNode.getChildNodes(), ///
            ruleName = STATEMENT_RULE_NAME;

      termNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

      if (termNode !== null) {
        const nodeA = this.termNode,  ///
              nodeB = termNode,
              nodeMatches = matcher.matchNode(nodeA, nodeB);

        matchesTermNode = nodeMatches;  ///
      }
    }

    return matchesTermNode;
  }

  static fromVariableNameAndTermNode(variableName, termNode) {
    let termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);

    const nonTerminalNode = termNode,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          ruleName = STATEMENT_RULE_NAME;

    termNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

    if (termNode !== null) {
      termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);
    }

    return termForVariableSubstitution;
  }
}
