"use strict";

import consequentTermForVariableNodesVerifier from "./verifier/nodes/termForVariable/consequent";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";

export default class Consequent {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, substitutions, localContext) {
    const nonTerminalNodeA = this.statementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          localContextA = localContext, ///
          localContextB = null, ///
          nonTerminalNodeVerified = consequentTermForVariableNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          }),
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
