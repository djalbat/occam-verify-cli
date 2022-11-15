"use strict";

import { nodeQuery } from "./utilities/query";
import { nodeAsString } from "./utilities/string";
import { COMBINATOR_KIND } from "./kinds";
import { COMBINATOR_DECLARATION_RULE_NAME } from "./ruleNames";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

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
    const { statement } = json,
          ruleName = COMBINATOR_DECLARATION_RULE_NAME,
          content = `Combinator ${statement}
`,
          combinatorDeclarationNode = callback(content, ruleName),
          statementNode = statementNodeQuery(combinatorDeclarationNode),
          combinator = new Combinator(statementNode);

    return combinator;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}
