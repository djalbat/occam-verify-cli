"use strict";

import { nodeAsString } from "./utilities/string";
import { consequenceMatcher } from "./matcher/consequence";
import { statementNodeFromStatementString } from "./utilities/string";

export default class Consequence {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, metaSubstitutions) {
    const nonTerminalNode = statementNode,  ///
          consequenceNonTerminalNode = this.statementNode,  ///
          nonTerminalNodeMatches = consequenceMatcher.matchNonTerminalNode(consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions),
          statementNodeMatches = nonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  toJSON() {
    const statementString = nodeAsString(this.statementNode),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { statement } = json,
          statementString = statement,  ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          consequence = new Consequence(statementNode);

    return consequence;
  }

  static fromStatementNode(statementNode) {
    const consequence = new Consequence(statementNode);

    return consequence;
  }
}
