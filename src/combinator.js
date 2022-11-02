"use strict";

import { nodeAsString } from "./utilities/string";

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

  asJSON() {
    const statementString = nodeAsString(this.statementNode),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}
