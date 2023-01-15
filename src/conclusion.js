"use strict";

import { nodeAsString } from "./utilities/string";
import { conclusionMatcher } from "./matcher/conclusion";
import { conclusionMetaMatcher } from "./metaMatcher/conclusion";
import { metastatementNodeFromMetastatementString } from "./utilities/string";

export default class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNode = statementNode,  ///
          conclusionNonTerminalNode = this.metastatementNode,  ///
          nonTerminalNodeMatches = conclusionMatcher.matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions),
          statementNodeMatches = nonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          nonTerminalNodeMatches = conclusionMetaMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions),
          metastatementNodeMatches = nonTerminalNodeMatches; ///

    return metastatementNodeMatches;
  }

  toJSON() {
    const metastatementString = nodeAsString(this.metastatementNode),
          metastatement = metastatementString,  ///
          json = {
            metastatement
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, releaseContext),
          conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }

  static fromMetastatementNode(metastatementNode) {
    const conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }
}
