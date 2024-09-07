"use strict";

import LocalContext from "./context/local";
import metaLevelUnifier from "./unifier/metaLevel";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";

export default class Consequent {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  unifyStatement(statementNode, substitutions, fileContext, localContext) {
    let statementUnified = false;

    if (this.statementNode !== null) {
      const nodeA = this.statementNode,  ///
            nodeB = statementNode,  ///
            fileContextA = fileContext, ///
            localContextA = LocalContext.fromFileContext(fileContextA),
            localContextB = localContext,  ///
            unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

      statementUnified = unified; ///
    }

    return statementUnified;
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
