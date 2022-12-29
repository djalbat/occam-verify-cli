"use strict";

import { nodeAsString } from "./utilities/string";
import { COMBINATOR_KIND } from "./kinds";
import { statementNodeFromStatementJSON } from "./utilities/node";

export default class Combinator {
  constructor(statementNode) {
    this.statementNode = statementNode;
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
          statementJSON = statement,  ///
          statementNode = statementNodeFromStatementJSON(statementJSON, releaseContext),
          combinator = new Combinator(statementNode);

    return combinator;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}
