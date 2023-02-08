"use strict";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";
import { consequenceTermForVariableVerifier } from "./verifier/termForVariable/consequence";

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
          nonTerminalNodeVerified = consequenceTermForVariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          statementNodeMatches = nonTerminalNodeVerified; ///

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

  static fromJSON(json, context) {
    const { statement } = json,
          statementString = statement,  ///
          lexer = context.getLexer(),
          parser = context.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          consequence = new Consequence(statementNode);

    return consequence;
  }

  static fromStatementNode(statementNode) {
    const consequence = new Consequence(statementNode);

    return consequence;
  }
}
