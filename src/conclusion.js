"use strict";

import { nodeAsString } from "./utilities/string";
import { metastatementNodeFromMetastatementString } from "./utilities/node";
import { conclusionStatementForMetavariableVerifier } from "./verifier/statementForMetavariable/conclusion";
import { conclusionMetastatementForMetavariableVerifier } from "./verifier/metastatementForMetavariable/conclusion";

export default class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchStatementNode(statementNode, substitutions, proofContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          nonTerminalNodeVerified = conclusionStatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext),
          statementNodeMatches = nonTerminalNodeVerified; ///

    return statementNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions, metaproofContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          nonTerminalNodeVerified = conclusionMetastatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, metaproofContext),
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

  static fromJSON(json, context) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          lexer = context.getLexer(),
          parser = context.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }

  static fromMetastatementNode(metastatementNode) {
    const conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }
}
