"use strict";

import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";
import MetaLevelLocalContext from "./context/local/metaLevel";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString, metastatementNodeFromMetastatementString } from "./utilities/node";

export default class MetaConsequent {
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

  matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext) {
    let matchesMetastatementNode = false;

    if (this.metastatementNode !== null) {
      const metaLevelLocalContext = MetaLevelLocalContext.fromFileContext(fileContext),
            nonTerminalNodeA = this.metastatementNode,  ///
            nonTerminalNodeB = metastatementNode,  ///
            localContextA = metaLevelLocalContext,  ///
            localContextB = localContext, ///
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
          metaConsequent = new MetaConsequent(metastatementNode, statementNode);

    return metaConsequent;
  }

  static fromMetastatementNode(metastatementNode) {
    const statementNode = null,
          metaConsequent = new MetaConsequent(metastatementNode, statementNode);

    return metaConsequent;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement, statement } = json,
          metastatementString = metastatement,  ///
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          metaConsequent = new MetaConsequent(metastatementNode, statementNode);

    return metaConsequent;
  }
}
