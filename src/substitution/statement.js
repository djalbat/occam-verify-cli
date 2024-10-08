"use strict";

import Substitution from "../substitution";

import { nodeQuery } from "../utilities/query";
import { substitutionNodeFromSubstitutionString } from "../utilities/node";

const substitutionNodeQuery = nodeQuery("/statement/substitution");

export default class StatementSubstitution extends Substitution {
  constructor(string, node) {
    super(string);

    this.node = node;
  }

  getNode() {
    return this.node;
  }

  static fromJSON(json, fileContext) {
    let statementSubstitution = null;

    if (json !== null) {
      const { string } = json,
            lexer = fileContext.getLexer(),
            parser = fileContext.getParser(),
            substitutionString = string,  ///
            substitutionNode = substitutionNodeFromSubstitutionString(substitutionString, lexer, parser),
            node = substitutionNode;

      statementSubstitution = new Substitution(string, node);
    }

    return statementSubstitution;
  }

  static fromStatementNode(statementNode, fileContext) {
    let statementSubstitution = null;

    const substitutionNode = substitutionNodeQuery(statementNode);

    if (substitutionNode) {
      const node = substitutionNode,
            string = fileContext.nodeAsString(substitutionNode);

      statementSubstitution = new Substitution(string, node);
    }

    return statementSubstitution;
  }
}
