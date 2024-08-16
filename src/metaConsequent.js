"use strict";

import metaLevelNodesVerifier from "./verifier/nodes/metaLevel";

import { nodeAsString } from "./utilities/string";
import { metastatementNodeFromMetastatementString } from "./utilities/node";

export default class MetaConsequent {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetastatementNode(metastatementNode, substitutions, localContext, metastatementLocalContext) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          localContextA = localContext, ///
          localContextB = metastatementLocalContext, ///
          nonTerminalNodeVerified = metaLevelNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, () => {
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
    const metaConsequent = new MetaConsequent(metastatementNode);

    return metaConsequent;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          metaConsequent = new MetaConsequent(metastatementNode);

    return metaConsequent;
  }
}
