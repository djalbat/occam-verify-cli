"use strict";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";
import { consequentTermForVariableVerifier } from "./verifier/termForVariable/consequent";

export default class Consequent {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, substitutions, proofContext) {
    const nonTerminalNodeA = this.statementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          nonTerminalNodeVerified = consequentTermForVariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext),
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

  static fromStatementNode(statementNode) {
    const consequent = new Consequent(statementNode);

    return consequent;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { statement } = json,
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          consequent = new Consequent(statementNode);

    return consequent;
  }
}
