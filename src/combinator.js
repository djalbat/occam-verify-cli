"use strict";

import { nodeAsString } from "./utilities/string";
import { COMBINATOR_KIND } from "./kinds";
import { statementNodeFromStatementString } from "./utilities/string";

export default class Combinator {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  asString(tokens) {
    let string;

    const statementString = nodeAsString(this.statementNode, tokens);

    string = `${statementString}`;

    return string;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementNode, tokens),
          kind = COMBINATOR_KIND,
          statement = statementString,  ///
          json = {
            kind,
            statement
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { statement } = json,
          statementString = statement,  ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          combinator = new Combinator(statementNode);

    return combinator;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}
