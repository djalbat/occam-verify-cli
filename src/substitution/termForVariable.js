"use strict";

import { matcher } from "../matcher";
import { STATEMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalNodeFromNonTerminalNode } from "../utilities/nonTerminalNode";

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
      const ruleName = STATEMENT_RULE_NAME,
            nonTerminalNode = termNode,  ///
            bracketedNonTerminalNode = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNode, ruleName);

      termNode = bracketedNonTerminalNode;  ///

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

    const ruleName = STATEMENT_RULE_NAME,
          nonTerminalNode = termNode,  ///
          bracketedNonTerminalNode = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNode, ruleName);

    termNode = bracketedNonTerminalNode;  ///

    if (termNode !== null) {
      termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);
    }

    return termForVariableSubstitution;
  }
}
