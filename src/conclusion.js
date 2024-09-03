"use strict";

import LocalContext from "./context/local";
import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";
import intrinsicLevelAgainstMetaLevelNodesVerifier from "./verifier/nodes/intrinsicLevelAgainstMetaLevel";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString, metastatementNodeFromMetastatementString } from "./utilities/node";

export default class Conclusion {
  constructor(metastatementNode, statementNode) {
    this.metastatementNode = metastatementNode;
    this.statementNode = statementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, substitutions, localContext, statementLocalContext) {
    let matchesStatementNose = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = statementNode,  ///
            localContextA = localContext, ///
            localContextB = statementLocalContext,  ///
            nonTerminalNodeVerified = intrinsicLevelAgainstMetaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      matchesStatementNose = nonTerminalNodeVerified; ///
    }

    return matchesStatementNose;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext) {
    let matchesMetastatementNode = false;

    if (this.metastatementNode !== null) {
      const fileContextA = fileContext, ///
            nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = metastatementNode,  ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext,  ///
            nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      matchesMetastatementNode = nonTerminalNodeVerified; ///
    }

    return matchesMetastatementNode;
  }

  toJSON(tokens) {
    const metastatementString = nodeAsString(this.metastatementNode, tokens),
          statementString = nodeAsString(this.statementNode, tokens),
          metastatement = metastatementString,  ///
          statement = statementString,  ///
          json = {
            metastatement,
            statement
          };

    return json;
  }

  static fromStatementNode(statementNode) {
    const metastatementNode = null,
          conclusion = new Conclusion(metastatementNode, statementNode);

    return conclusion;
  }

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          conclusion = new Conclusion(metastatementNode, statementNode);

    return conclusion;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement, statement } = json,
          metastatementString = metastatement,  ///
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          conclusion = new Conclusion(metastatementNode, statementNode);

    return conclusion;
  }
}
