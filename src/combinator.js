"use strict";

import { nodeAsString } from "./utilities/string";
import { COMBINATOR_KIND } from "./kinds";

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
          kind = COMBINATOR_KIND,
          statement = statementString,  ///
          json = [{
            kind,
            statement
          }];

    return json;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}
