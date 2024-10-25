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

  static fromStatementString(statementString, context) {
    const string = statementString,  ///
          statementNodeAndTokens = NodeAndTokens.fromString(StatementNodeAndTokens, string, context);

    return statementNodeAndTokens;
  }
}

export function statementNodeFromStatementString(statementString, context) {
  const statementNodeAndTokens = StatementNodeAndTokens.fromStatementString(statementString, context),
        statementNode = statementNodeAndTokens.getStatementNode();

  return statementNode;
}
