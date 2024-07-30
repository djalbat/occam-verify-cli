"use strict";

import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";
import metaLevelToIntrinsicLevelNodesVerifier from "./verifier/nodes/metaLevelToIntrinsicLevel";

import { nodeAsString } from "./utilities/string";
import { metastatementNodeFromMetastatementString } from "./utilities/node";

export default class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          fileContextA = fileContext, ///
          localContextB = statementLocalContext,  ///
          nonTerminalNodeVerified = metaLevelToIntrinsicLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, () => {
            const verifyAhead = true;

            return verifyAhead;
          }),
          statementNodeMatches = nonTerminalNodeVerified; ///

    return statementNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalMetaContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          fileContextA = fileContext, ///
          localMetaContextB = metastatementLocalMetaContext,  ///
          nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          }),
          metastatementNodeMatches = nonTerminalNodeVerified; ///

    return metastatementNodeMatches;
  }

  toJSON(tokens) {
    const metastatementString = nodeAsString(this.metastatementNode, tokens),
          metastatement = metastatementString,  ///
          json = {
            metastatement
          };

    return json;
  }

  static fromMetastatementNode(metastatementNode) {
    const conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }
}
