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

  asString() {
    let string;

    const statementString = nodeAsString(this.statementNode);

    string = `${statementString}`;

    return string;
  }

  toJSON() {
    const statementString = nodeAsString(this.statementNode),
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
