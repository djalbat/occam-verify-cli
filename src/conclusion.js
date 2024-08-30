"use strict";

import LocalMetaContext from "./context/localMeta";
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
    let statementNodeMatches = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = statementNode,  ///
            localContextA = localContext, ///
            localContextB = statementLocalContext,  ///
            nonTerminalNodeVerified = intrinsicLevelAgainstMetaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
              const verifyAhead = true;

              return verifyAhead;
            });

      statementNodeMatches = nonTerminalNodeVerified; ///
    }

    return statementNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
    let metastatementNodeMatches = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = metastatementNode,  ///
            fileContextA = fileContext, ///
            localMetaContextA = LocalMetaContext.fromFileContext(fileContextA),
            localMetaContextB = localMetaContext,  ///
            nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      metastatementNodeMatches = nonTerminalNodeVerified; ///
    }

    return metastatementNodeMatches;
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

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          conclusion = new Conclusion(metastatementNode, statementNode);

    return conclusion;
  }

  static fromStatementNode(statementNode) {
    const metastatementNode = null,
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
