"use strict";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";
import { consequenceTermForVariableMatcher } from "./matcher/termForVariable/consequence";

export default class Consequence {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNodeA = this.statementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          nonTerminalNodeMatches = consequenceTermForVariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          statementNodeMatches = nonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementNode, tokens),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, lexer, parser) {
    const { statement } = json,
          statementString = statement,  ///
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          consequence = new Consequence(statementNode);

    return consequence;
  }

  static fromStatementNode(statementNode) {
    const consequence = new Consequence(statementNode);

    return consequence;
  }
}
