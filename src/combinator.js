"use strict";

import { nodeAsString } from "./utilities/string";
import { COMBINATOR_KIND } from "./kinds";
import { STATEMENT_RULE_NAME } from "./ruleNames";

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

  static fromJSON(json, callback) {
    let combinator = null;

    const { statement } = json,
          content = statement,  ///
          ruleName = STATEMENT_RULE_NAME,
          node = callback(content, ruleName),
          statementNode = node; ///

    if (statementNode !== null) {
      combinator = new Combinator(statementNode);
    }

    return combinator;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}
