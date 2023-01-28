"use strict";

import { nodeAsString } from "./utilities/string";
import { metastatementNodeFromMetastatementString } from "./utilities/node";
import { conclusionStatementForMetavariableMatcher } from "./matcher/statementForMetavariable/conclusion";
import { conclusionMetastatementForMetavariableMatcher } from "./matcher/metastatementForMetavariable/conclusion";

export default class Conclusion {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = statementNode,  ///
          nonTerminalNodeMatches = conclusionStatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          statementNodeMatches = nonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  matchMetastatementNode(metastatementNode, substitutions) {
    const nonTerminalNodeA = this.metastatementNode,  ///
          nonTerminalNodeB = metastatementNode,  ///
          nonTerminalNodeMatches = conclusionMetastatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions),
          metastatementNodeMatches = nonTerminalNodeMatches; ///

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

  static fromJSON(json, lexer, parser) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }

  static fromMetastatementNode(metastatementNode) {
    const conclusion = new Conclusion(metastatementNode);

    return conclusion;
  }
}
