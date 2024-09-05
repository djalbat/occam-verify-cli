"use strict";

import LocalContext from "./context/local";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";

export default class Consequent {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, substitutions, fileContext, localContext) {
    let matchesStatementNode = false;

    if (this.statementNode !== null) {
      const fileContextA = fileContext, ///
            nonTerminalNodeA = this.statementNode,  ///
            nonTerminalNodeB = statementNode,  ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext,  ///
            nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      matchesStatementNode = nonTerminalNodeVerified; ///
    }

    return matchesStatementNode;
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
