"use strict";

import NodeAndTokens from "../../nodeAndTokens";

import { ruleFromBNF } from "../../nodeAndTokens";

const bnf = `

            _ ::= statementSubstitution... <END_OF_LINE> ;
            
      `,
      rule = ruleFromBNF(bnf);

export default class StatementSubstitutionNodeAndTokens extends NodeAndTokens {
  static rule = rule;

  static fromStatementSubstitutionString(statementSubstitutionString, context) {
    const string = statementSubstitutionString, ///
          statementSubstitutionNodeAndTokens = NodeAndTokens.fromString(StatementSubstitutionNodeAndTokens, string, context);

    return statementSubstitutionNodeAndTokens;
  }
}
