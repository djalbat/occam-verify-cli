"use strict";

import NodeAndTokens from "../nodeAndTokens";

import { ruleFromBNF } from "../nodeAndTokens";

const bnf = `

        _ ::= statement... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class StatementNodeAndTokens extends NodeAndTokens {
  getStatementNode() {
    const statementNode = this.node; ///

    return statementNode;
  }

  getStatementTokens() {
    const statementTokens = this.tokens; ///

    return statementTokens;
  }

  static rule = rule;

  static fromStatement(statement, context) {
    const string = statement.getString(),
          statementNodeAndTokens = NodeAndTokens.fromString(StatementNodeAndTokens, string, context);

    return statementNodeAndTokens;
  }

  static fromString(string, context) { return NodeAndTokens.fromString(StatementNodeAndTokens, string, context); }
}
