"use strict";

import conclusionStatementForMetavariableNodesVerifier from "./verifier/nodes/statementForMetavariable/conclusion";
import conclusionMetastatementForMetavariableNodesVerifier from "./verifier/nodes/metastatementForMetavariable/conclusion";

import { nodeAsString } from "./utilities/string";
import { metastatementNodeFromMetastatementString } from "./utilities/node";

export default class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchStatementNode(statementNode, substitutions, fileContext, statementProofContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          fileContextA = fileContext, ///
          proofContextB = statementProofContext,  ///
          nonTerminalNodeVerified = conclusionStatementForMetavariableNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, proofContextB, () => {
            const verifyAhead = true;

            return verifyAhead;
          }),
          statementNodeMatches = nonTerminalNodeVerified; ///

    return statementNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetaproofContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          fileContextA = fileContext, ///
          metaproofContextB = metastatementMetaproofContext,  ///
          nonTerminalNodeVerified = conclusionMetastatementForMetavariableNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB, () => {
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
